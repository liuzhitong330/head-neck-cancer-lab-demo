#!/usr/bin/env python3
"""Read-only independent audit of Bouhaddou 2021 source tables.

Does not import implementation code, alter inputs, fit a predictor, or write files.
Requires Python >=3.10 and openpyxl. Run after scripts/analyze.py has fetched
sources. Prints a compact JSON report; no implementation code is imported.
"""
from __future__ import annotations

import argparse
from collections import Counter, defaultdict
import csv
import hashlib
import json
import math
from pathlib import Path
import re
from statistics import mean

import openpyxl

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / ".cache" / "sources"
MARKERS = {
    "CAV1": "Caveolin1RV", "SOX2": "Sox2RV", "AXL": "AxlRV",
    "TMEM173": "STINGRV", "BRD4": "BRD4RV", "CLDN7": "Claudin7RV",
    "GJA1": "Connexin43RC", "FN1": "FibronectinRV",
}
EXPECTED_SOURCE_HASHES = {
    2: "262735c0348e89b5efbf0de9b99687583ce6f93d0aa8634f65d0391b09e58ce5",
    3: "83065e9c35e3d67a4c6ee207ae8ecf578490db8a79498b91817ac9ca0322d154",
    4: "4672a2e5f0665e103bd22a65028ef47abb539423cc79b275d3dd153b1546a2ec",
    5: "ed1652d15dcc9b394920802f78d12b909becc7912e34f2692f1bebd7b481fe9f",
}


def finite(value):
    return isinstance(value, (int, float)) and not isinstance(value, bool) and math.isfinite(value)


def source_book(table):
    path = SOURCE / f"jci.insight.151982.sdt{table}.xlsx"
    assert hashlib.sha256(path.read_bytes()).hexdigest() == EXPECTED_SOURCE_HASHES[table], f"Changed source table {table}"
    return openpyxl.load_workbook(
        path,
        data_only=True, read_only=True,
    )


def model_key(value):
    match = re.fullmatch(r"JG(?:HL)?(\d+)", value)
    assert match, f"Unexpected model identifier {value!r}"
    return "JG" + match.group(1)


def percentile(value, cohort):
    """Average rank via direct counts, independently of sorting/scipy."""
    if value is None:
        return None
    valid = [v for v in cohort if finite(v)]
    assert len(valid) > 1
    lower = sum(v < value for v in valid)
    equal = sum(v == value for v in valid)
    assert equal
    return 100.0 * (lower + (equal - 1) / 2) / (len(valid) - 1)


def summarize():
    metadata_rows = list(source_book(2).active.values)
    metadata = {}
    for row in metadata_rows[1:]:
        key = model_key(row[0])
        assert key not in metadata
        metadata[key] = {
            "id": key, "pdxNumber": row[1], "predictedResponse": row[2],
            "experimentalResponse": row[3], "hpv": row[8],
        }
    assert len(metadata) == 65
    assert len({m["pdxNumber"] for m in metadata.values()}) == 65

    protein_book = source_book(3)
    protein_rows = list(protein_book["RPPA Data (Median Centered)"].values)
    protein_header = protein_rows[0]
    assert len(protein_header) == len(set(protein_header)) == 248
    protein = {}
    for row in protein_rows[1:]:
        key = model_key(row[0])
        assert key not in protein
        assert all(finite(x) for x in row[1:]), key
        protein[key] = dict(zip(protein_header[1:], row[1:]))
    assert set(protein) == set(metadata)
    source_mapping = defaultdict(list)
    for name in ("Biomarker Group #1", "Biomarker Group #2"):
        for row in list(protein_book[name].values)[1:]:
            if row[1] in MARKERS:
                source_mapping[row[1]].append(row[0])
    assert dict(source_mapping) == {gene: [probe] for gene, probe in MARKERS.items()}

    rna_sheet = source_book(5)["RNAseq (Median centered)"]
    rna_iter = iter(rna_sheet.values)
    rna_header = next(rna_iter)
    rna_ids = list(map(model_key, rna_header[1:]))
    assert len(rna_ids) == len(set(rna_ids)) == 65
    assert set(rna_ids) == set(metadata)
    rna, rna_rows, missing_markers, selected_missing = {}, 0, Counter(), []
    for excel_row, row in enumerate(rna_iter, 2):
        rna_rows += 1
        for value in row[1:]:
            if not finite(value):
                missing_markers[str(value)] += 1
        if row[0] not in MARKERS:
            continue
        assert row[0] not in rna, f"Duplicate selected RNA gene {row[0]}"
        values = {}
        for column, (key, value) in enumerate(zip(rna_ids, row[1:]), 2):
            values[key] = value if finite(value) else None
            if not finite(value):
                selected_missing.append({"gene": row[0], "model": key, "sourceValue": value,
                                         "cell": f"{openpyxl.utils.get_column_letter(column)}{excel_row}"})
        rna[row[0]] = values
    assert len(rna) == 8 and rna_rows == 19154

    assays = defaultdict(dict)
    marker_summary = {}
    for gene, probe in MARKERS.items():
        rna_values = list(rna[gene].values())
        protein_values = [p[probe] for p in protein.values()]
        for key in metadata:
            rp = percentile(rna[gene][key], rna_values)
            pp = percentile(protein[key][probe], protein_values)
            assays[key][gene] = {
                "rna": rna[gene][key], "protein": protein[key][probe],
                "rnaPercentile": rp, "proteinPercentile": pp,
                "rankGap": None if rp is None else abs(rp - pp),
            }
        queue = sorted(
            [dict(metadata[k], **a[gene]) for k, a in assays.items()
             if a[gene]["rankGap"] is not None and a[gene]["rankGap"] >= 30],
            key=lambda x: (-x["rankGap"], int(x["id"][2:])),
        )
        marker_summary[gene] = {
            "probe": probe, "finiteRNA": sum(finite(v) for v in rna_values),
            "finiteProtein": len(protein_values), "queueAt30ppCount": len(queue),
            "queueAt30pp": queue,
            "queueTestedCount": sum(q["experimentalResponse"] in ("S", "R") for q in queue),
        }

    growth_rows = list(source_book(4).active.values)
    assert growth_rows[0] == ("PDX Number", "Day", "flag_max_time", "Growth_Relative_Day1", "Treatment")
    by_pdx_day = defaultdict(lambda: defaultdict(list))
    missing_by_day = Counter()
    missing_growth, flag_days, source_days = [], defaultdict(set), defaultdict(set)
    for excel_row, row in enumerate(growth_rows[1:], 2):
        pdx, day, flag, value, treatment = row
        assert treatment in ("Vehicle", "Cetuximab") and finite(day)
        source_days[pdx].add(day)
        if flag == 1:
            flag_days[pdx].add(day)
        if finite(value):
            assert value >= 0
            by_pdx_day[pdx][day, treatment].append(value)
        else:
            missing_by_day[pdx, day, treatment] += 1
            missing_growth.append({"excelRow": excel_row, "pdx": pdx, "day": day,
                                   "treatment": treatment, "sourceValue": value})

    by_pdx = {m["pdxNumber"]: m for m in metadata.values()}
    assert set(source_days) <= set(by_pdx)
    tested = {m["pdxNumber"] for m in metadata.values() if m["experimentalResponse"] in ("S", "R")}
    assert set(source_days) == tested and len(tested) == 17
    endpoints = []
    daily = {}
    for pdx in sorted(source_days, key=lambda p: int(by_pdx[p]["id"][2:])):
        entries = []
        for day in sorted(source_days[pdx]):
            vehicle = by_pdx_day[pdx][day, "Vehicle"]
            cetuximab = by_pdx_day[pdx][day, "Cetuximab"]
            vm, cm = mean(vehicle) if vehicle else None, mean(cetuximab) if cetuximab else None
            ratio = cm / vm if cm is not None and vm is not None and vm > 0 else None
            entry = {"day": day, "ratio": ratio}
            for label, treatment, values, avg in (("vehicle", "Vehicle", vehicle, vm),
                                                    ("cetuximab", "Cetuximab", cetuximab, cm)):
                entry[label + "Mean"] = avg
                entry[label + "N"] = len(values)
                entry[label + "MissingN"] = missing_by_day[pdx, day, treatment]
                entry[label + "SD"] = math.sqrt(sum((v - avg) ** 2 for v in values) / (len(values) - 1)) if len(values) > 1 else None
                entry[label + "Min"] = min(values) if values else None
                entry[label + "Max"] = max(values) if values else None
            entries.append(entry)
        complete = [e for e in entries if e["ratio"] is not None]
        final = max(complete, key=lambda e: e["day"])
        early = max((e for e in complete if e["day"] <= 14), key=lambda e: e["day"], default=None)
        m = by_pdx[pdx]
        calculated = "S" if final["ratio"] <= 0.5 else "R"
        endpoints.append({**m, "final": final, "day14": early,
                          "calculatedThresholdLabel": calculated,
                          "labelMatches": calculated == m["experimentalResponse"],
                          "sourceFlagDays": sorted(flag_days[pdx])})
        daily[m["id"]] = entries

    report = {
        "sourceHashes": {f"jci.insight.151982.sdt{n}.xlsx": digest for n, digest in EXPECTED_SOURCE_HASHES.items()},
        "counts": {"models": len(metadata), "rppaFeatures": 247, "rnaGenes": rna_rows,
                   "growthRows": len(growth_rows)-1, "finiteGrowthRows": len(growth_rows)-1-len(missing_growth),
                   "testedModels": len(tested), "experimentalLabels": dict(Counter(m["experimentalResponse"] for m in metadata.values())),
                   "predictedLabels": dict(Counter(m["predictedResponse"] for m in metadata.values())),
                   "clinicalHPV": dict(Counter(m["hpv"] for m in metadata.values()))},
        "rnaNonNumericCells": dict(missing_markers), "selectedMissingRNA": selected_missing,
        "missingGrowth": missing_growth, "markerSummary": marker_summary,
        "endpoints": endpoints, "allEndpointLabelsAgree": all(e["labelMatches"] for e in endpoints),
    }
    return report, metadata, assays, daily


def compare_public(path, metadata, assays, daily):
    public = json.loads(path.read_text())
    models = public["models"]
    if isinstance(models, dict):
        models = list(models.values())
    assert len(models) == 65
    checked, differences = 0, []
    for model in models:
        key = model["id"]
        assert key in metadata
        for gene in MARKERS:
            for field, expected in assays[key][gene].items():
                observed = model["assays"][gene][field]
                checked += 1
                if expected is None:
                    equal = observed is None
                else:
                    equal = finite(observed) and math.isclose(observed, expected, rel_tol=1e-9, abs_tol=1e-6)
                if not equal:
                    differences.append([key, gene, field, expected, observed])
        for field in ("pdxNumber", "hpv", "experimentalResponse"):
            assert model[field] == metadata[key][field], (key, field)
        assert model["sourceModelId"] == "JGHL" + key[2:]
        if key in daily:
            observed_days = {d["day"]: d for d in model["growth"]["days"]}
            assert set(observed_days) == {d["day"] for d in daily[key]}
            for day in daily[key]:
                for field, expected in day.items():
                    observed = observed_days[day["day"]][field]
                    checked += 1
                    equal = observed is None if expected is None else finite(observed) and math.isclose(observed, expected, rel_tol=1e-9, abs_tol=1e-6)
                    if not equal:
                        differences.append([key, day["day"], field, expected, observed])
            complete = [d for d in daily[key] if d["ratio"] is not None]
            expected_endpoints = {
                "final": max(complete, key=lambda d: d["day"]),
                "day14": max((d for d in complete if d["day"] <= 14), key=lambda d: d["day"], default=None),
            }
            for endpoint, expected_entry in expected_endpoints.items():
                observed_entry = model["growth"]["endpoints"][endpoint]
                if expected_entry is None:
                    assert observed_entry is None
                    continue
                for field, expected in expected_entry.items():
                    observed = observed_entry[field]
                    checked += 1
                    equal = observed is None if expected is None else finite(observed) and math.isclose(observed, expected, rel_tol=1e-9, abs_tol=1e-6)
                    if not equal:
                        differences.append([key, endpoint, field, expected, observed])
        else:
            assert model["growth"]["days"] == []
            assert model["growth"]["endpoints"] == {"final": None, "day14": None}
    return {"checkedFields": checked, "differences": differences, "passed": not differences}


def compare_exports(path, metadata, assays):
    """Check distributed JS/CSV copies, including every original growth row."""
    public = json.loads(path.read_text())
    js_text = (path.parent.parent / "data.js").read_text().strip()
    assert js_text.startswith("window.DEMO_DATA = ")
    assert json.loads(js_text[len("window.DEMO_DATA = "):].rstrip(";")) == public
    with (path.parent / "paired-assays.csv").open(newline="") as stream:
        rows = list(csv.DictReader(stream))
    assert len(rows) == 520 and len({(r["id"], r["gene"]) for r in rows}) == 520
    for row in rows:
        key, gene = row["id"], row["gene"]
        assert row["probe"] == MARKERS[gene]
        for field in ("pdxNumber", "hpv", "experimentalResponse"):
            assert row[field] == metadata[key][field]
        for field, expected in assays[key][gene].items():
            assert row[field] == "" if expected is None else math.isclose(float(row[field]), expected, rel_tol=1e-9, abs_tol=1e-6)
    with (path.parent / "endpoint-audit.csv").open(newline="") as stream:
        endpoints = list(csv.DictReader(stream))
    assert len(endpoints) == 34
    lookup = {m["id"]: m for m in public["models"]}
    assert len({(r["id"], r["endpointChoice"]) for r in endpoints}) == 34
    for row in endpoints:
        source = lookup[row["id"]]["growth"]["endpoints"][row["endpointChoice"]]
        for field, expected in source.items():
            assert row[field] == "" if expected is None else math.isclose(float(row[field]), expected, rel_tol=1e-9, abs_tol=1e-6)
    with (path.parent / "growth-source-records.csv").open(newline="") as stream:
        exported_growth = list(csv.DictReader(stream))
    raw_growth = list(source_book(4).active.values)[1:]
    assert len(exported_growth) == len(raw_growth) == 748
    assert len({r["sourceRow"] for r in exported_growth}) == 748
    by_pdx = {m["pdxNumber"]: m["id"] for m in metadata.values()}
    for excel_row, (exported, raw) in enumerate(zip(exported_growth, raw_growth), 2):
        pdx, day, flag, value, treatment = raw
        assert int(exported["sourceRow"]) == excel_row
        assert exported["id"] == by_pdx[pdx]
        assert exported["pdxNumber"] == pdx and exported["treatment"] == treatment
        assert int(exported["day"]) == day and int(exported["sourceFinalFlag"]) == flag
        if finite(value):
            assert float(exported["growthRelativeDay1"]) == value
            assert float(exported["sourceValue"]) == value
        else:
            assert exported["growthRelativeDay1"] == "" and exported["sourceValue"] == value
    return {"dataJsMatchesJson": True, "assayCsvRows": 520, "endpointCsvRows": 34,
            "originalGrowthCsvRows": 748, "passed": True}


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source-dir", type=Path, default=SOURCE)
    parser.add_argument("--public-json", type=Path, default=ROOT / "data" / "analysis.json")
    args = parser.parse_args()
    SOURCE = args.source_dir
    report, metadata, assays, daily = summarize()
    comparison = compare_public(args.public_json, metadata, assays, daily)
    exports = compare_exports(args.public_json, metadata, assays)
    result = {
        "study": "Bouhaddou et al., JCI Insight 2021;6(20):e151982",
        "scope": "Independent source-to-output consistency, not predictive validation",
        "testedAnalysisSha256": hashlib.sha256(args.public_json.read_bytes()).hexdigest(),
        "sourceHashes": report["sourceHashes"],
        "counts": report["counts"],
        "selectedMissingRNA": report["selectedMissingRNA"],
        "allEndpointLabelsAgree": report["allEndpointLabelsAgree"],
        "markerQueueCountsAt30pp": {
            gene: summary["queueAt30ppCount"]
            for gene, summary in report["markerSummary"].items()
        },
        "publicComparison": comparison,
        "exportComparison": exports,
        "passed": comparison["passed"] and exports["passed"] and report["allEndpointLabelsAgree"],
    }
    print(json.dumps(result, indent=2, allow_nan=False))
    raise SystemExit(0 if result["passed"] else 1)
