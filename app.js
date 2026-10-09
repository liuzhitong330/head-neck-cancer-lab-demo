(function () {
  "use strict";
  const data = window.DEMO_DATA;
  const byId = (id) => document.getElementById(id);
  if (!data || !Array.isArray(data.models) || !Array.isArray(data.markers)) {
    byId("readout").textContent = "The data could not be loaded. Please reload; no results are shown without source measurements.";
    return;
  }
  const finite = (value) => typeof value === "number" && Number.isFinite(value);
  const fmt = (value, digits = 2) => finite(value) ? value.toFixed(digits) : "missing";
  const numberId = (model) => Number(model.id.replace(/\D/g, ""));
  const models = [...data.models].sort((a, b) => numberId(a) - numberId(b));
  const tested = models.filter((model) => ["S", "R"].includes(model.experimentalResponse));
  const state = { marker: data.meta.defaultMarker || "CAV1", hpv: "all", tested: "all", gap: 30, model: "JG11", endpoint: "final", cutoff: 0.5, responseModel: "JG30" };
  const controls = { marker: byId("marker-select"), hpv: byId("hpv-select"), tested: byId("tested-select"), gap: byId("gap-select"), model: byId("model-select"), endpoint: byId("endpoint-select"), cutoff: byId("cutoff-select"), responseModel: byId("response-model-select") };
  const svgNS = "http://www.w3.org/2000/svg";

  function option(value, label) {
    const item = document.createElement("option");
    item.value = value;
    item.textContent = label;
    return item;
  }
  data.markers.forEach((marker) => controls.marker.append(option(marker.gene, `${marker.gene} · ${marker.label || marker.probe}`)));
  tested.forEach((model) => controls.responseModel.append(option(model.id, `${model.id} · ${model.pdxNumber} · published ${model.experimentalResponse}`)));
  Object.entries(controls).forEach(([key, control]) => { control.value = String(state[key]); });

  function svgElement(tag, attrs = {}, text) {
    const el = document.createElementNS(svgNS, tag);
    Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, String(value)));
    if (text !== undefined) el.textContent = text;
    return el;
  }
  function svgText(svg, x, y, text, attrs = {}) { svg.append(svgElement("text", { x, y, class: "chart-text", ...attrs }, text)); }
  function line(svg, x1, y1, x2, y2, attrs = {}) { svg.append(svgElement("line", { x1, y1, x2, y2, stroke: "#ddd", ...attrs })); }
  function interactivePoint(svg, x, y, label, selected, flagged, onSelect, tooltipId) {
    const group = svgElement("g", { role: "button", tabindex: "0", "aria-label": label, "aria-pressed": String(selected), class: "plot-point" });
    group.append(svgElement("title", {}, label));
    group.append(svgElement("circle", { cx: x, cy: y, r: 12, fill: "transparent", class: "point-hit" }));
    group.append(svgElement("circle", { cx: x, cy: y, r: selected ? 6 : 4.5, fill: flagged ? "#1f7a8c" : "#aaa", stroke: selected ? "#1a1a1a" : "#fff", "stroke-width": selected ? 2 : 1, class: "point-mark" }));
    const describe = () => { byId(tooltipId).textContent = label; };
    group.addEventListener("mouseenter", describe);
    group.addEventListener("focus", describe);
    group.addEventListener("click", onSelect);
    group.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); onSelect(); }
    });
    svg.append(group);
  }
  function paragraph(parent, text) { const p = document.createElement("p"); p.textContent = text; parent.append(p); }
  function filteredModels() {
    return models.filter((model) => (state.hpv === "all" || model.hpv === state.hpv) && (state.tested === "all" || (state.tested === "tested" ? model.experimentalResponse !== "not evaluated" : model.experimentalResponse === "not evaluated")));
  }
  function responseLabel(model) {
    return model.experimentalResponse === "not evaluated" ? "Experimental response: not evaluated" : `Published experimental response: ${model.experimentalResponse} (${model.experimentalResponse === "S" ? "sensitive" : "resistant"})`;
  }

  function drawScatter(paired) {
    const svg = byId("hero-viz");
    svg.replaceChildren();
    const width = Math.max(270, Math.min(600, svg.clientWidth || 600)), height = 390;
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    const left = 47, right = 16, top = 30, bottom = 52;
    const x = (value) => left + (width - left - right) * value / 100;
    const y = (value) => height - bottom - (height - top - bottom) * value / 100;
    [0, 25, 50, 75, 100].forEach((tick) => {
      line(svg, x(tick), y(0), x(tick), y(100), { stroke: "#ececec" });
      line(svg, x(0), y(tick), x(100), y(tick), { stroke: "#ececec" });
      svgText(svg, x(tick), y(0) + 22, tick, { "text-anchor": "middle" });
      svgText(svg, left - 9, y(tick) + 4, tick, { "text-anchor": "end" });
    });
    line(svg, x(0), y(0), x(100), y(100), { stroke: "#777", "stroke-width": 1.2 });
    line(svg, x(0), y(state.gap), x(100 - state.gap), y(100), { stroke: "#a1b7bb", "stroke-dasharray": "4 4" });
    line(svg, x(state.gap), y(0), x(100), y(100 - state.gap), { stroke: "#a1b7bb", "stroke-dasharray": "4 4" });
    svgText(svg, (left + width - right) / 2, height - 8, "RNA percentile rank", { "text-anchor": "middle" });
    svgText(svg, 13, (top + height - bottom) / 2, "Protein percentile rank", { "text-anchor": "middle", transform: `rotate(-90 13 ${(top + height - bottom) / 2})` });
    [...paired].sort((a, b) => Number(a.id === state.model) - Number(b.id === state.model)).forEach((model) => {
      const assay = model.assays[state.marker];
      const label = `${model.id}, ${state.marker}: RNA rank ${fmt(assay.rnaPercentile, 1)}; protein rank ${fmt(assay.proteinPercentile, 1)}; gap ${fmt(assay.rankGap, 1)} percentile points. ${responseLabel(model)}.`;
      interactivePoint(svg, x(assay.rnaPercentile), y(assay.proteinPercentile), label, model.id === state.model, assay.rankGap >= state.gap, () => { state.model = model.id; renderAssays(); }, "scatter-tooltip");
      if (model.id === state.model) {
        const anchor = assay.rnaPercentile > 80 ? "end" : "start";
        svgText(svg, x(assay.rnaPercentile) + (anchor === "end" ? -10 : 10), y(assay.proteinPercentile) - 10, model.id, { "text-anchor": anchor, class: "chart-text selected-label" });
      }
    });
    if (!paired.length) svgText(svg, width / 2, height / 2, "No finite assay pairs in this filter", { "text-anchor": "middle" });
  }

  function renderAssays() {
    const filtered = filteredModels();
    const marker = data.markers.find((item) => item.gene === state.marker);
    const paired = filtered.filter((model) => finite(model.assays[state.marker].rankGap));
    if (!filtered.some((model) => model.id === state.model)) state.model = filtered[0]?.id || "";
    controls.model.replaceChildren(...filtered.map((model) => option(model.id, `${model.id} · ${model.pdxNumber}${finite(model.assays[state.marker].rna) ? "" : " · RNA missing"}`)));
    controls.model.disabled = filtered.length === 0;
    controls.model.value = state.model;
    const queue = paired.filter((model) => model.assays[state.marker].rankGap >= state.gap).sort((a, b) => b.assays[state.marker].rankGap - a.assays[state.marker].rankGap || numberId(a) - numberId(b));
    byId("metric-one").textContent = paired.length;
    byId("metric-two").textContent = queue.length;
    const selected = filtered.find((model) => model.id === state.model);
    const readout = byId("readout");
    readout.replaceChildren();
    if (selected) {
      const assay = selected.assays[state.marker];
      const heading = document.createElement("strong");
      heading.textContent = `${selected.id} · ${selected.pdxNumber} · ${state.marker}`;
      readout.append(heading);
      paragraph(readout, `RNA: ${fmt(assay.rna, 4)} (${marker.rnaUnit}). Protein: ${fmt(assay.protein, 4)} (${marker.proteinUnit}; antibody ${marker.probe}).`);
      paragraph(readout, finite(assay.rankGap) ? `RNA percentile ${fmt(assay.rnaPercentile, 1)}; protein percentile ${fmt(assay.proteinPercentile, 1)}. Absolute gap ${fmt(assay.rankGap, 1)} points — ${assay.rankGap >= state.gap ? "meets" : "does not meet"} the ${state.gap}-point review rule.` : `RNA source status: ${assay.rnaStatus}; source value ${assay.rnaSourceValue ?? "missing"}. No RNA percentile or rank gap is calculated; this model remains selectable for data-quality review.`);
      paragraph(readout, `Clinical HPV: ${selected.hpv}. ${responseLabel(selected)}. Shared model identity does not establish matched aliquots.`);
      byId("metric-three").textContent = finite(assay.rankGap) ? fmt(assay.rankGap, 1) : "—";
      byId("metric-three-label").textContent = `${selected.id} rank gap (points)`;
      byId("next-assay-title").textContent = `${selected.id} / ${state.marker}: ${finite(assay.rankGap) ? (assay.rankGap >= state.gap ? "confirm the discrepancy" : "a possible agreement comparator") : "resolve the source error first"}`;
      const opening = !finite(assay.rankGap) ? `First recover the missing ${state.marker} RNA measurement for ${selected.id}; do not interpret the spreadsheet error as low expression. ` : assay.rankGap >= state.gap ? `${selected.id} meets the current review rule: protein ranks ${assay.proteinPercentile > assay.rnaPercentile ? "higher" : "lower"} than RNA. ` : `${selected.id} does not meet the current review rule. If material is available, it may be considered as an agreement comparator alongside a flagged model, not assumed to be a validated control. `;
      byId("next-assay").textContent = opening + `Check model identity, passage, and available material, then measure ${state.marker} RNA and protein from matched material with biological replicates, assay-specific positive/negative controls, and appropriate RNA and protein normalization controls. If the discrepancy persists, examine cell composition and protein processing or stability; if it disappears, revisit sampling and batch effects. Neither outcome alone establishes causality or cetuximab sensitivity.`;
      byId("scatter-tooltip").textContent = `Selected ${selected.id}. ${finite(assay.rankGap) ? `Gap ${fmt(assay.rankGap, 1)} percentile points.` : "RNA missing; no point plotted."} Select a dot or use the model selector.`;
    } else {
      paragraph(readout, "No models match these filters. Relax a filter to inspect source measurements.");
      byId("metric-three").textContent = "—";
      byId("next-assay").textContent = "No model is selected; no assay recommendation is made.";
      byId("next-assay-title").textContent = "No models in the current filter";
    }
    byId("coverage-note").textContent = `${paired.length} paired measurements among ${filtered.length} models in view. Full-reference finite counts: RNA ${marker.rnaN}, protein ${marker.proteinN}; filters do not rerank. ${filtered.length - paired.length} model(s) lack a finite pair.`;
    byId("queue-summary").textContent = queue.length ? `${queue.length} models meet the ≥ ${state.gap}-point rule; showing the largest ${Math.min(8, queue.length)} gaps. The CSV includes every filtered model, including unflagged and missing rows, plus these settings.` : `No model meets the ≥ ${state.gap}-point rule in this filter. This does not validate RNA as a protein substitute.`;
    const queueList = byId("confirmation-queue");
    queueList.replaceChildren();
    queue.slice(0, 8).forEach((model) => {
      const item = document.createElement("li"), button = document.createElement("button");
      button.type = "button";
      button.setAttribute("aria-pressed", String(model.id === state.model));
      button.textContent = `${model.id} · gap ${fmt(model.assays[state.marker].rankGap, 1)} · HPV ${model.hpv.toLowerCase()} · ${model.experimentalResponse === "not evaluated" ? "response not evaluated" : `published ${model.experimentalResponse}`}`;
      button.addEventListener("click", () => { state.model = model.id; renderAssays(); });
      item.append(button);
      queueList.append(item);
    });
    drawScatter(paired);
  }

  function endpoint(model, choice = state.endpoint) { return model.growth?.endpoints?.[choice] || null; }
  function relation(record) { return !record || !finite(record.ratio) ? "missing" : record.ratio <= state.cutoff ? "at or below cutoff" : "above cutoff"; }
  function drawResponses() {
    const svg = byId("response-viz");
    svg.replaceChildren();
    const width = Math.max(270, Math.min(600, svg.clientWidth || 600));
    const height = 550, left = 44, right = width < 400 ? 86 : 96, top = 35, bottom = 52;
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    const maximum = Math.max(1, ...tested.map((model) => endpoint(model)?.ratio).filter(finite));
    const axisMax = Math.ceil(maximum * 2) / 2;
    const x = (value) => left + value / axisMax * (width - left - right);
    const y = (i) => top + i * (height - top - bottom) / Math.max(1, tested.length - 1);
    const tickStep = axisMax > 2 ? 1 : 0.5;
    for (let tick = 0; tick <= axisMax + 0.001; tick += tickStep) {
      line(svg, x(tick), top - 15, x(tick), height - bottom + 12, { stroke: "#eee" });
      svgText(svg, x(tick), height - bottom + 31, fmt(tick, 1), { "text-anchor": "middle" });
    }
    line(svg, x(state.cutoff), top - 15, x(state.cutoff), height - bottom + 12, { stroke: "#1f7a8c", "stroke-dasharray": "4 4" });
    svgText(svg, x(state.cutoff), 12, `cutoff ${state.cutoff}`, { "text-anchor": "middle", fill: "#1f7a8c" });
    tested.forEach((model, i) => {
      const record = endpoint(model);
      svgText(svg, left - 8, y(i) + 4, model.id, { "text-anchor": "end", class: `chart-text${model.id === state.responseModel ? " selected-label" : ""}` });
      line(svg, x(0), y(i), x(axisMax), y(i), { stroke: "#f0f0f0" });
      svgText(svg, width - right + 10, y(i) + 4, record ? `d${record.day} · ${model.experimentalResponse}` : `missing · ${model.experimentalResponse}`);
      if (!record || !finite(record.ratio)) return;
      const label = `${model.id}, observed day ${record.day}: T/C ${fmt(record.ratio, 3)}, ${relation(record)} ${state.cutoff}; published response ${model.experimentalResponse}.`;
      interactivePoint(svg, x(record.ratio), y(i), label, model.id === state.responseModel, record.ratio <= state.cutoff, () => { state.responseModel = model.id; renderResponses(); }, "response-tooltip");
    });
    svgText(svg, (left + width - right) / 2, height - 1, "Mean normalized growth, T/C", { "text-anchor": "middle" });
  }
  function renderResponses() {
    controls.responseModel.value = state.responseModel;
    const model = tested.find((item) => item.id === state.responseModel) || tested[0];
    const record = model ? endpoint(model) : null;
    const out = byId("response-readout");
    out.replaceChildren();
    if (model) {
      const title = document.createElement("strong");
      title.textContent = `${model.id} · ${model.pdxNumber} · ${responseLabel(model)}`;
      out.append(title);
    }
    if (record && finite(record.ratio)) {
      paragraph(out, `Observed day ${record.day}: mean normalized cetuximab growth ${fmt(record.cetuximabMean, 3)} (n = ${record.cetuximabN} source rows); vehicle ${fmt(record.vehicleMean, 3)} (n = ${record.vehicleN} source rows). T/C = ${fmt(record.ratio, 3)}.`);
      paragraph(out, `Current descriptive comparison: ${relation(record)} ${state.cutoff}. This comparison does not replace the published label and is not a prediction. ${state.endpoint === "day14" ? "The selected day is the last observed day shared by both arms at or before day 14, without interpolation." : "The selected day is designated final in the source workbook."}`);
      paragraph(out, `Source-row spread (SD; not animal-level uncertainty): cetuximab ${fmt(record.cetuximabSD, 3)}, vehicle ${fmt(record.vehicleSD, 3)}. Missing rows at this day: cetuximab ${record.cetuximabMissingN || 0}, vehicle ${record.vehicleMissingN || 0}.`);
      byId("response-tooltip").textContent = `Selected ${model.id}: observed day ${record.day}; T/C ${fmt(record.ratio, 3)}; published ${model.experimentalResponse}.`;
    } else paragraph(out, "No finite shared endpoint is available for this model and selection. The export retains a missing endpoint rather than inventing a value.");
    const available = tested.filter((item) => finite(endpoint(item)?.ratio));
    const below = available.filter((item) => endpoint(item).ratio <= state.cutoff);
    const changed = tested.filter((item) => finite(endpoint(item, "final")?.ratio) && finite(endpoint(item, "day14")?.ratio) && (endpoint(item, "final").ratio <= state.cutoff) !== (endpoint(item, "day14").ratio <= state.cutoff));
    byId("endpoint-summary").textContent = `${available.length}/${tested.length} evaluated models have a finite selected endpoint; ${below.length} are at or below ${state.cutoff}. ${changed.length} model(s) change sides of this cutoff between the source-final and ≤14-day comparisons${changed.length ? `: ${changed.map((item) => item.id).join(", ")}` : ""}. This is an endpoint sensitivity check, not classification accuracy.`;
    drawResponses();
  }

  function csvCell(value) {
    if (value === null || value === undefined) return "";
    const text = String(value);
    return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
  }
  function downloadCSV(name, rows) {
    if (!rows.length) return;
    const headers = Object.keys(rows[0]);
    const csv = [headers, ...rows.map((row) => headers.map((key) => row[key]))].map((row) => row.map(csvCell).join(",")).join("\r\n") + "\r\n";
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = name;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  byId("download-assays").addEventListener("click", () => {
    const marker = data.markers.find((item) => item.gene === state.marker);
    const rows = filteredModels().map((model) => {
      const assay = model.assays[state.marker];
      return { model: model.id, source_model: model.sourceModelId, pdx_number: model.pdxNumber, marker: state.marker, antibody: marker.probe, clinical_hpv: model.hpv, published_experimental_response: model.experimentalResponse, rna: assay.rna, rna_unit: marker.rnaUnit, rna_status: assay.rnaStatus, rna_source_value: assay.rnaSourceValue, protein: assay.protein, protein_unit: marker.proteinUnit, rna_percentile: assay.rnaPercentile, protein_percentile: assay.proteinPercentile, absolute_rank_gap: assay.rankGap, review_flag: finite(assay.rankGap) ? assay.rankGap >= state.gap : null, threshold_points: state.gap, hpv_filter: state.hpv, response_data_filter: state.tested, rank_reference: data.meta.rankReference, source_doi: data.meta.doi };
    });
    downloadCSV(`head-neck-${state.marker}-assay-review.csv`, rows);
  });
  byId("download-endpoints").addEventListener("click", () => {
    const rows = tested.map((model) => {
      const e = endpoint(model);
      return { model: model.id, pdx_number: model.pdxNumber, published_experimental_response: model.experimentalResponse, endpoint_selection: state.endpoint, observed_day: e?.day ?? null, vehicle_mean_normalized_growth: e?.vehicleMean ?? null, vehicle_source_rows: e?.vehicleN ?? null, vehicle_missing_rows: e?.vehicleMissingN ?? null, vehicle_source_row_sd: e?.vehicleSD ?? null, cetuximab_mean_normalized_growth: e?.cetuximabMean ?? null, cetuximab_source_rows: e?.cetuximabN ?? null, cetuximab_missing_rows: e?.cetuximabMissingN ?? null, cetuximab_source_row_sd: e?.cetuximabSD ?? null, treatment_control_ratio: e?.ratio ?? null, cutoff: state.cutoff, descriptive_comparison: relation(e), source_doi: data.meta.doi, limitation: "n counts source rows; no animal IDs; not a prediction" };
    });
    downloadCSV(`head-neck-${state.endpoint}-endpoint-review.csv`, rows);
  });
  ["marker", "hpv", "tested", "gap", "model"].forEach((key) => controls[key].addEventListener("change", () => {
    state[key] = key === "gap" ? Number(controls[key].value) : controls[key].value;
    renderAssays();
  }));
  ["endpoint", "cutoff", "responseModel"].forEach((key) => controls[key].addEventListener("change", () => {
    state[key] = key === "cutoff" ? Number(controls[key].value) : controls[key].value;
    renderResponses();
  }));
  byId("sensitivity-example").addEventListener("click", () => {
    state.responseModel = "JG30";
    state.endpoint = "final";
    state.cutoff = 0.6;
    controls.endpoint.value = "final";
    controls.cutoff.value = "0.6";
    renderResponses();
  });
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { renderAssays(); renderResponses(); }, 120);
  });
  renderAssays();
  renderResponses();
}());
