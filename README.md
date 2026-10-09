# When RNA and protein disagree

A research demonstration for the joint UCSF Head and Neck Cancer Research Laboratory, co-directed by Jennifer Grandis, Patrick Ha and Daniel Johnson. Built for discussion around the mixed computational/experimental Junior Specialist role, JPF06257. This is an independent application project, not a laboratory-endorsed resource.

## Question and contribution

Which PDX/marker combinations warrant an orthogonal protein check before an RNA-defined state is used to choose an experiment?

The starting study is [Bouhaddou et al., JCI Insight 2021, e151982](https://insight.jci.org/articles/view/151982), *Caveolin-1 and Sox-2 are predictive biomarkers of cetuximab response in head and neck cancer*. It includes paired RNA and protein measurements and a smaller drug-tested subset. The authors discuss weaker two-marker performance at the RNA level and the need for further mechanistic investigation. A model-level assay-confirmation queue is our proposed follow-up use, not a claim about a current internal laboratory bottleneck.

The demo does not refit the study's classifier. It exposes where a marker's position in the RNA distribution differs from its position in the protein distribution, retains missingness, and connects selected models to the original growth records. A user can change the marker, descriptive gap threshold and cohort filters, inspect source-unit values, and export an assay-confirmation queue. An endpoint audit shows how observed treatment/control growth comparisons depend on the source day selected.

## Reproduce

Tested with Python 3.12 and openpyxl 3.1.5. No R, browser service, credentials, or API key is required.

```sh
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
.venv/bin/python scripts/analyze.py
python3 -m http.server 8000
```

Open `http://localhost:8000`. The analysis script downloads the four original workbooks into `.cache/sources` if absent, verifies fixed SHA-256 checksums, and regenerates `data.js` and `data/` outputs. To reuse already downloaded files, pass `--source-dir /path/to/source/workbooks`. It fails on altered hashes, ambiguous joins or unexpected missingness instead of silently accepting changed inputs.

The site is static and all calculations shown in its fixed source data can be reproduced offline after downloading the four sources. The analysis never sends applicant or browser data to external services.

## Source inventory and model joins

All four source files are linked by the article's Supplemental Material panel, are credited to its authors, and are available through the publisher's public download host. Exact URLs, sizes and hashes are recorded in [data/provenance.json](data/provenance.json).

| Table | Original content used | Analysis grain |
| --- | --- | --- |
| Supplemental Table 2 | 65 model identifiers, clinical HPV status, experimental response labels | One PDX model |
| Supplemental Table 3, `RPPA Data (Median Centered)` | 65 models × 247 antibody features | Model × antibody |
| Supplemental Table 4 | 748 normalized growth records across 17 tested models | One source row at one recorded model/day/treatment |
| Supplemental Table 5, `RNAseq (Median centered)` | 19,154 gene rows × 65 models | Gene × model |

Metadata uses `JGHL<number>` while the molecular tables use `JG<number>`. Only that explicit prefix conversion is made. The script confirms the 65 exact unique model IDs agree across tables. Growth records join through the exact `PDX Number` string from Table 2, including parenthetical identifiers. No fuzzy matching, row-order matching, or joining to the separate 2023 GSE207182 cohort is performed.

Only model-level identifiers, clinical HPV status and published experimental labels are republished. Patient age, sex, staging and unrelated clinical fields are not included. HPV refers to Table 2's **clinical** classification, not the separate sequencing-based HPV labels in another paper.

## Fixed marker mappings

| RNA symbol | RPPA feature | Protein name |
| --- | --- | --- |
| CAV1 | Caveolin1RV | Caveolin-1 |
| SOX2 | Sox2RV | Sox-2 |
| AXL | AxlRV | AXL |
| TMEM173 | STINGRV | STING |
| BRD4 | BRD4RV | Brd4 |
| CLDN7 | Claudin7RV | Claudin-7 |
| GJA1 | Connexin43RC | Connexin-43 |
| FN1 | FibronectinRV | Fibronectin |

These eight markers are fixed from the publication, not selected by this analysis. The source RNA table contains published median-centered log2 expression, and RPPA contains median-centered log2 antibody signal. We retain the original numbers; this is a reanalysis of **processed tables**, not raw sequencing alignment, raw image analysis, assay normalization, or a replication of the publication's SVM.

## Assay-confirmation queue

For each marker and each assay separately, rank its finite values across the full reference cohort using average ranks for ties:

`percentile = 100 × (average rank − 1) / (finite n − 1)`

`rank gap = abs(RNA percentile − protein percentile)`

The default flag is a gap of at least 30 percentile points. This is an adjustable descriptive screen, not a calibrated biological threshold. Cohort filters change the visible models and exported queue; they **do not** rerank the reference distributions. RNA and protein percentiles are each relative to their own assay distribution, not comparable concentrations. Large gaps flag disagreements worth checking, not measurement errors or demonstrated post-transcriptional regulation.

RNA source cells SOX2/JG2 and CLDN7/JG14 contain literal Excel `#NAME?` errors. Both remain missing, with their original error value retained in the export. They are excluded from that marker's RNA ranking and no gap is computed. Thus SOX2 and CLDN7 have 64 finite RNA measurements, the other six have 65, all eight have 65 protein measurements, and there are 518 complete pairs out of 520 possible model–marker pairs. No imputation, replacement with zero, or inference of an underlying expression value is used.

The RNA workbook also contains nonnumeric entries outside the eight-marker panel. This tool does not clean or analyze those other genes. Reuse for a new marker requires new missing-value checks; it is not a general validated transcriptome importer.

Any displayed Spearman correlation is a descriptive complete-pair statistic: rank both assays again on the same complete pair subset, then calculate Pearson correlation between those ranks. It is not an independent validation result. Model availability, current passage, assay batch and matching aliquots must be checked before interpreting discordance biologically.

## Observed response endpoint audit

The source contains 17 drug-tested models: 12 labeled `S`, five `R`. The other 48 models are `not evaluated`. The demo preserves **Experimental R/S** and never substitutes the source's predicted labels.

Within each model/day/treatment, average finite `Growth_Relative_Day1` values. The descriptive ratio is:

`T/C = mean(cetuximab normalized growth) / mean(vehicle normalized growth)`

- **Final observed common day:** the latest recorded day with finite values in both arms.
- **Last common day ≤14:** the latest such observed day no later than day 14. Actual days vary by model. There is no interpolation, extrapolation, or claim these observations occurred at the same day across models.
- An adjustable reduction threshold is converted to a T/C cutoff. At the default 50% reduction, `T/C ≤ 0.5` meets that descriptive threshold. The original source label remains unchanged when settings change.

The source has two explicit `NA` growth values: Table 4 rows 96 and 97, HN12-6744 vehicle on days 15 and 20. We exclude only those two entries from numerical means, preserve them in the raw-record export and report missing and finite record counts separately. There are 746 finite growth records.

The source flags HN12-6431/JG11's final day as **13**, although the article's general methods describe a final-day range of 15–26. The tool follows the source records and discloses this discrepancy. It does not relabel that measurement. All other endpoint dates likewise come from the table, not a hardcoded article range.

**No animal IDs are provided.** We do not invent mouse trajectories from adjacent rows, link measurements across days, count 748 rows as independent animals, fit repeated-measures models, or present animal-level confidence intervals. Any SD/min/max describes the spread of finite source records for one arm at one day. A future longitudinal analysis would need verified animal IDs and measurement metadata.

The final-day default threshold reproduces the 17 source categorical labels, which is an implementation consistency check, **not predictive accuracy**. The markers were developed in this study, the tested subset is small and selected, and neither these endpoint comparisons nor leaving individual models out creates independent validation. No new SVM, clinical treatment recommendation or causal inference is offered.

## What to do with a flagged model

Check the current model's identity, availability, passage, tissue composition, source aliquots and assay QC. On matched material, remeasure the target RNA and protein with appropriate controls and biological replication before choosing a downstream experiment. If discordance persists, investigate processing, stability or cell-state composition as alternative hypotheses. If the measures agree on repeat testing, reconsider sampling or batch effects. A causal claim would require a separately justified perturbation/rescue study and exposure/growth controls.

This is experimental prioritization support, not proof that Cathy has performed these assays. The role connection is biological dataset analysis, transparent records and assay-validation reasoning, alongside independently documented practical laboratory experience.

## Outputs and checks

- `data/analysis.json` and `data.js`: all 65 model records, original panel values, ranks, gaps, shared-day summaries and endpoint comparisons.
- `data/paired-assays.csv`: 520 panel slots with explicit missing status and source values.
- `data/growth-source-records.csv`: all 748 original growth rows with source row numbers; no fabricated animal identifiers.
- `data/endpoint-audit.csv`: two observed endpoint choices for each of the 17 tested models.
- `data/qa.json`: join/count assertions, missing records, default queue, endpoint checks and sensitivity summaries.
- `data/provenance.json`: source URLs/hashes, software version and transformations.

The script tests model/gene uniqueness, exact joins, expected source dimensions, nonfinite handling, ranking with ties and missingness, count reconciliation, bounded rank gaps and final-day label consistency. Additional independent source-to-output verification should be run when changing the pipeline.

## Attribution, licensing and repository search

Original article and associated supplemental data: Bouhaddou M, Lee RH, and colleagues, JCI Insight 2021;6(20):e151982, [doi:10.1172/jci.insight.151982](https://doi.org/10.1172/jci.insight.151982), **CC BY 4.0**. This demo transforms selected public data; retain the citation and [license link](https://creativecommons.org/licenses/by/4.0/) when reusing derived measurements. No endorsement by the authors is implied.

The article, official lab/PI sources and relevant GitHub searches were checked on 2026-10-09. No verified relevant implementation repository for this 2021 dataset was found. The Grandis-coauthored 2018 `Eckhardt-Zhang_HPV` repository concerns another mutation/network study and is **not used or represented as executed** here. Unrelated GitHub code is not included merely to claim repository use.

The demonstration's original code is provided under the MIT license in `LICENSE`; that license does not supersede CC BY attribution for the source-derived data.

## Independent source-to-output check

After running the reproduction command above, run:

```sh
.venv/bin/python scripts/check_source_outputs.py
```

The checker independently recalculates ranks and growth summaries from `.cache/sources`, compares 4,574 numeric/null fields with `data/analysis.json`, and reconciles the JavaScript and CSV copies. It does not import the analysis implementation, download data, change files, or validate clinical prediction. Use `--source-dir /path/to/source/workbooks` for an existing source folder, or `--public-json /path/to/analysis.json` for another output. The compact, hash-specific result from the published build is [qa_report.json](qa_report.json).
