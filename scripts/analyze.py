#!/usr/bin/env python3
"""Rebuild the descriptive RNA/RPPA confirmation audit from published tables.

No classifier fitting, clinical prediction, animal-ID inference, or new experiments.
Requires Python >=3.10 and openpyxl==3.1.5. See README.md for assumptions.
"""
from __future__ import annotations

import argparse
import csv
import hashlib
import json
import math
from collections import Counter, defaultdict
from pathlib import Path
from statistics import mean, stdev
from urllib.request import urlopen

import openpyxl

ROOT = Path(__file__).resolve().parents[1]
BASE = "https://df6sxcketz7bb.cloudfront.net/manuscripts/151000/151982/"
SOURCES = {
    2: ("262735c0348e89b5efbf0de9b99687583ce6f93d0aa8634f65d0391b09e58ce5", "Model metadata and published experimental labels"),
    3: ("83065e9c35e3d67a4c6ee207ae8ecf578490db8a79498b91817ac9ca0322d154", "Median-centered RPPA and antibody mapping"),
    4: ("4672a2e5f0665e103bd22a65028ef47abb539423cc79b275d3dd153b1546a2ec", "Longitudinal normalized tumor-growth records"),
    5: ("ed1652d15dcc9b394920802f78d12b909becc7912e34f2692f1bebd7b481fe9f", "Median-centered RNA expression"),
}
MARKERS = [
    ("CAV1", "Caveolin1RV", "Caveolin-1"),
    ("SOX2", "Sox2RV", "Sox-2"),
    ("AXL", "AxlRV", "AXL"),
    ("TMEM173", "STINGRV", "STING"),
    ("BRD4", "BRD4RV", "Brd4"),
    ("CLDN7", "Claudin7RV", "Claudin-7"),
    ("GJA1", "Connexin43RC", "Connexin-43"),
    ("FN1", "FibronectinRV", "Fibronectin"),
]


def finite(value):
    return isinstance(value, (float, int)) and not isinstance(value, bool) and math.isfinite(value)


def ranks(values):
    """Average-tie percentiles across finite values; missing entries remain None."""
    ordered = sorted((value, key) for key, value in values.items() if finite(value))
    assert len(ordered) > 1
    out = {key: None for key in values}
    i = 0
    while i < len(ordered):
        j = i + 1
        while j < len(ordered) and ordered[j][0] == ordered[i][0]:
            j += 1
        # Mean of one-indexed ranks i+1 through j, converted to [0,100].
        percentile = 100 * ((i + 1 + j) / 2 - 1) / (len(ordered) - 1)
        for _, key in ordered[i:j]:
            out[key] = percentile
        i = j
    return out


def spearman(x, y):
    pairs = sorted(k for k in x if finite(x[k]) and finite(y[k]))
    a = ranks({k: x[k] for k in pairs})
    b = ranks({k: y[k] for k in pairs})
    ma, mb = mean(a.values()), mean(b.values())
    num = sum((a[k] - ma) * (b[k] - mb) for k in pairs)
    den = math.sqrt(sum((a[k] - ma) ** 2 for k in pairs) * sum((b[k] - mb) ** 2 for k in pairs))
    return num / den if den else None


def write_csv(path, rows, columns):
    with path.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=columns)
        writer.writeheader()
        writer.writerows(rows)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source-dir", type=Path, default=ROOT / ".cache" / "sources")
    args = parser.parse_args()
    args.source_dir.mkdir(parents=True, exist_ok=True)
    source_manifest = []
    books = {}
    for number, (expected_hash, description) in SOURCES.items():
        name = f"jci.insight.151982.sdt{number}.xlsx"
        path, url = args.source_dir / name, BASE + name
        if not path.exists():
            with urlopen(url, timeout=60) as response:
                content = response.read()
            assert hashlib.sha256(content).hexdigest() == expected_hash, f"Source changed: {url}"
            path.write_bytes(content)
        actual_hash = hashlib.sha256(path.read_bytes()).hexdigest()
        assert actual_hash == expected_hash, f"Hash mismatch: {path}"
        books[number] = openpyxl.load_workbook(path, read_only=True, data_only=True)
        source_manifest.append({"table": number, "file": name, "url": url, "sha256": actual_hash,
                                "bytes": path.stat().st_size, "description": description})

    metadata_rows = list(books[2].active.values)
    metadata = {}
    for values in metadata_rows[1:]:
        source = dict(zip(metadata_rows[0], values))
        original_id = source["Name PDX"]
        assert original_id.startswith("JGHL") and original_id[4:].isdigit()
        model_id = "JG" + original_id[4:]
        assert model_id not in metadata
        assert source["Experimental R/S"] in ("S", "R", "not evaluated")
        assert source["Clinical HPV Status"] in ("Positive", "Negative")
        metadata[model_id] = {"id": model_id, "sourceModelId": original_id,
                              "pdxNumber": source["PDX Number"],
                              "hpv": source["Clinical HPV Status"],
                              "experimentalResponse": source["Experimental R/S"]}
    assert len(metadata) == 65
    pdx_to_id = {m["pdxNumber"]: k for k, m in metadata.items()}
    assert len(pdx_to_id) == 65

    rppa_rows = list(books[3]["RPPA Data (Median Centered)"].values)
    assert len(rppa_rows[0]) == 248 and len(rppa_rows) == 66
    rppa = {}
    for row in rppa_rows[1:]:
        assert row[0] not in rppa
        rppa[row[0]] = dict(zip(rppa_rows[0][1:], row[1:]))
    iterator = books[5]["RNAseq (Median centered)"].values
    rna_ids = list(next(iterator))[1:]
    assert len(rna_ids) == len(set(rna_ids)) == 65
    assert set(rna_ids) == set(metadata) == set(rppa)
    rna, rna_row_count = {}, 0
    for row in iterator:
        rna_row_count += 1
        if row[0] in {g for g, _, _ in MARKERS}:
            assert row[0] not in rna, f"Duplicate gene: {row[0]}"
            rna[row[0]] = dict(zip(rna_ids, row[1:]))
    assert rna_row_count == 19154 and len(rna) == 8

    marker_metadata, marker_data, missing_rna = [], {}, []
    for gene, probe, label in MARKERS:
        protein = {k: rppa[k][probe] for k in metadata}
        assert all(finite(v) for v in protein.values())
        for model_id, value in rna[gene].items():
            if not finite(value):
                assert (gene, model_id, value) in {("SOX2", "JG2", "#NAME?"), ("CLDN7", "JG14", "#NAME?")}, "Unexpected missing RNA"
                missing_rna.append({"model": model_id, "gene": gene, "sourceValue": value})
        rr, pr = ranks(rna[gene]), ranks(protein)
        marker_metadata.append({"gene": gene, "probe": probe, "label": label,
                                "rnaUnit": "log2 median-centered RNA (published processed values)",
                                "proteinUnit": "log2 median-centered RPPA signal",
                                "rnaN": sum(finite(v) for v in rna[gene].values()), "proteinN": 65,
                                "pairedN": sum(finite(v) for v in rna[gene].values()),
                                "spearman": spearman(rna[gene], protein)})
        marker_data[gene] = {}
        for model_id in metadata:
            value = rna[gene][model_id]
            marker_data[gene][model_id] = {
                "rna": value if finite(value) else None, "protein": protein[model_id],
                "rnaSourceValue": value, "rnaStatus": "measured" if finite(value) else "source_error",
                "rnaPercentile": rr[model_id], "proteinPercentile": pr[model_id],
                "rankGap": abs(rr[model_id] - pr[model_id]) if rr[model_id] is not None else None,
            }

    growth_rows = list(books[4].active.values)
    assert growth_rows[0] == ("PDX Number", "Day", "flag_max_time", "Growth_Relative_Day1", "Treatment")
    raw, grouped, missing_growth = [], defaultdict(lambda: defaultdict(lambda: defaultdict(list))), []
    for source_row, row in enumerate(growth_rows[1:], 2):
        pdx, day, final_flag, value, arm = row
        assert pdx in pdx_to_id and arm in ("Vehicle", "Cetuximab")
        assert finite(day) and final_flag in (0, 1)
        if not finite(value):
            assert value == "NA" and source_row in (96, 97), "Unexpected missing growth"
            missing_growth.append({"sourceRow": source_row, "pdxNumber": pdx, "day": day, "treatment": arm})
        else:
            assert value >= 0, "Negative normalized growth requires source review"
        model_id = pdx_to_id[pdx]
        record = {"sourceRow": source_row, "id": model_id, "pdxNumber": pdx, "day": day,
                  "sourceFinalFlag": final_flag, "treatment": arm,
                  "growthRelativeDay1": value if finite(value) else None,
                  "sourceValue": value, "status": "measured" if finite(value) else "source_missing"}
        raw.append(record)
        grouped[model_id][day][arm].append(record)
    assert len(raw) == 748 and len(grouped) == 17
    assert set(grouped) == {k for k, m in metadata.items() if m["experimentalResponse"] != "not evaluated"}

    models, endpoint_rows, assay_rows = [], [], []
    for model_id in sorted(metadata, key=lambda x: int(x[2:])):
        model = dict(metadata[model_id])
        model["assays"] = {g: marker_data[g][model_id] for g, _, _ in MARKERS}
        days = []
        for day in sorted(grouped.get(model_id, {})):
            entry = {"day": day}
            for arm, prefix in (("Vehicle", "vehicle"), ("Cetuximab", "cetuximab")):
                records = grouped[model_id][day].get(arm, [])
                values = [r["growthRelativeDay1"] for r in records if r["status"] == "measured"]
                entry.update({prefix + "Mean": mean(values) if values else None,
                              prefix + "N": len(values), prefix + "MissingN": len(records) - len(values),
                              prefix + "SD": stdev(values) if len(values) > 1 else None,
                              prefix + "Min": min(values) if values else None,
                              prefix + "Max": max(values) if values else None})
            if entry["vehicleMean"] is not None:
                assert finite(entry["vehicleMean"]) and entry["vehicleMean"] > 0, "Vehicle denominator must be finite and positive"
            entry["ratio"] = (entry["cetuximabMean"] / entry["vehicleMean"]
                              if entry["cetuximabMean"] is not None and entry["vehicleMean"] is not None else None)
            days.append(entry)
        common = [d for d in days if d["ratio"] is not None]
        before14 = [d for d in common if d["day"] <= 14]
        flagged_days = sorted({r["day"] for r in raw if r["id"] == model_id and r["sourceFinalFlag"] == 1})
        assert (flagged_days == [common[-1]["day"]]) if common else not flagged_days
        model["growth"] = {"days": days, "endpoints": {"final": common[-1] if common else None,
                                                          "day14": before14[-1] if before14 else None},
                           "sourceFinalFlagDays": flagged_days}
        models.append(model)
        for gene, probe, _ in MARKERS:
            assay_rows.append({"id": model_id, "pdxNumber": model["pdxNumber"], "hpv": model["hpv"],
                               "experimentalResponse": model["experimentalResponse"], "gene": gene, "probe": probe,
                               **model["assays"][gene]})
        for choice, endpoint in model["growth"]["endpoints"].items():
            if endpoint:
                endpoint_rows.append({"id": model_id, "pdxNumber": model["pdxNumber"], "hpv": model["hpv"],
                                      "experimentalResponse": model["experimentalResponse"], "endpointChoice": choice, **endpoint})

    source_endpoint_days = sorted({r["day"] for r in raw if r["sourceFinalFlag"] == 1})
    final_reclassification = [{"id": m["id"], "published": m["experimentalResponse"],
                              "descriptive": "S" if m["growth"]["endpoints"]["final"]["ratio"] <= 0.5 else "R"}
                             for m in models if m["experimentalResponse"] != "not evaluated"]
    changed14 = [m["id"] for m in models if m["growth"]["endpoints"]["final"] and
                 (m["growth"]["endpoints"]["final"]["ratio"] <= 0.5) !=
                 (m["growth"]["endpoints"]["day14"]["ratio"] <= 0.5)]
    qa = {"joinedModelCount": len(models), "modelJoinExact": True, "rppaFeatures": 247,
          "rnaGeneRows": rna_row_count, "markerModelSlots": 520, "completeMarkerPairs": 518,
          "missingRna": missing_rna, "growthRows": len(raw), "finiteGrowthRows": 746,
          "growthModels": len(grouped), "growthMissing": missing_growth,
          "publishedExperimentalResponseCounts": dict(Counter(m["experimentalResponse"] for m in models)),
          "clinicalHpvCounts": dict(Counter(m["hpv"] for m in models)),
          "sourceFinalFlagDays": source_endpoint_days,
          "sourceFinalDayFlagAgreement": True,
          "finalLabelMismatchesAtHalfRatio": [r for r in final_reclassification if r["published"] != r["descriptive"]],
          "endpointThresholdCrossingModelsAtHalfRatio": changed14,
          "defaultCav1QueueAt30": [m["id"] for m in sorted(models, key=lambda m: -m["assays"]["CAV1"]["rankGap"])
                                  if m["assays"]["CAV1"]["rankGap"] >= 30],
          "note": "Counts refer to source records or model-level pairs, not independently identified animals."}
    assert len(missing_rna) == len(missing_growth) == 2
    assert not qa["finalLabelMismatchesAtHalfRatio"]
    # Simple independent analytic checks of the ranking convention, including ties and missingness.
    assert ranks({"a": 1, "b": 2, "c": 3}) == {"a": 0.0, "b": 50.0, "c": 100.0}
    assert ranks({"a": 1, "b": 1, "c": 3, "d": None}) == {"a": 25.0, "b": 25.0, "c": 100.0, "d": None}
    for m in models:
        for assay in m["assays"].values():
            assert assay["rankGap"] is None or 0 <= assay["rankGap"] <= 100

    data = {
        "meta": {"title": "When RNA and protein disagree", "study": "Bouhaddou et al., JCI Insight 2021;6(20):e151982",
                 "doi": "10.1172/jci.insight.151982", "paperUrl": "https://insight.jci.org/articles/view/151982",
                 "accessed": "2026-10-09", "modelCount": 65, "markerCount": 8, "completeMarkerPairs": 518,
                 "testedModelCount": 17, "growthRecordCount": 748, "defaultMarker": "CAV1", "defaultGap": 30,
                 "rankFormula": "100 × (average rank − 1) / (finite cohort count − 1)",
                 "rankReference": "Full 65-model cohort before filtering; RNA finite n=64 for SOX2/CLDN7, n=65 otherwise; RPPA n=65.",
                 "hpvDefinition": "Published clinical HPV status in Supplemental Table 2; not sequencing-derived HPV.",
                 "responseDefinition": "Source Experimental R/S labels are retained. Descriptive T/C≤0.5 uses the ratio of treatment and vehicle mean normalized growth at an observed common day.",
                 "responseWarning": "The 8 markers were selected using this study. This is not independent validation or a new prediction model.",
                 "animalWarning": "Growth table has no animal IDs. n counts finite records at a day; SD is record spread, not an animal-level confidence interval.",
                 "license": "CC BY 4.0; original source data by the article authors."},
        "sources": source_manifest, "markers": marker_metadata, "models": models, "qa": qa,
    }
    out = ROOT / "data"
    out.mkdir(exist_ok=True)
    serialized = json.dumps(data, ensure_ascii=False, indent=2, allow_nan=False) + "\n"
    (out / "analysis.json").write_text(serialized, encoding="utf-8")
    (ROOT / "data.js").write_text("window.DEMO_DATA = " + serialized.rstrip() + ";\n", encoding="utf-8")
    (out / "qa.json").write_text(json.dumps(qa, indent=2, allow_nan=False) + "\n", encoding="utf-8")
    write_csv(out / "paired-assays.csv", assay_rows, list(assay_rows[0]))
    write_csv(out / "growth-source-records.csv", raw, list(raw[0]))
    write_csv(out / "endpoint-audit.csv", endpoint_rows, list(endpoint_rows[0]))
    provenance = {"study": data["meta"]["study"], "doi": data["meta"]["doi"], "sources": source_manifest,
                  "codeVersion": "1.0.0", "runtime": "Python >=3.10; verified with Python 3.12 and openpyxl 3.1.5",
                  "license": "Article and associated supplemental data CC BY 4.0; attribution required.",
                  "processing": ["Exact model-ID join JGHL<number>→JG<number>, verified 65/65 unique models.",
                                 "Eight fixed paper marker mappings; no feature selection or fitting.",
                                 "Average-tie percentile ranks across all finite cohort values before UI filtering.",
                                 "Absolute RNA/RPPA percentile difference; null for the two source errors.",
                                 "Treatment-specific means per observed day; exclude only two explicit NA records.",
                                 "Final largest observed shared finite day; alternate largest shared day≤14, no interpolation.",
                                 "Retain source experimental labels; no animal-ID reconstruction or longitudinal individual analysis."],
                  "githubSearch": {"date": "2026-10-09", "finding": "No verified relevant source-code repository for the selected 2021 dataset found in article, official lab/PI sources, or GitHub repository searches.",
                                   "excluded": "Grandis-coauthored Eckhardt-Zhang_HPV (2018) mutation/network code is a different study and is not used or claimed as executed here."}}
    (out / "provenance.json").write_text(json.dumps(provenance, indent=2) + "\n", encoding="utf-8")
    for book in books.values():
        book.close()
    print(json.dumps(qa, indent=2))


if __name__ == "__main__":
    main()
