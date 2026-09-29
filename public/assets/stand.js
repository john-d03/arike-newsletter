(() => {
  "use strict";

  const BASE = "newsletters/";
  const HTML2PDF_SRC = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.2/html2pdf.bundle.min.js";
  const PDFJS_SRC = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.min.mjs";
  const PDFJS_WORKER = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs";

  const el = (id) => document.getElementById(id);
  const grid = el("grid");
  const empty = el("empty");
  const heroActions = el("hero-actions");
  const heroCover = el("hero-cover");
  const search = el("search");

  const viewer = el("viewer");
  const frame = el("viewer-frame");
  const pdfStage = el("pdf-stage");
  const vKicker = el("viewer-kicker");
  const vTitle = el("viewer-title");
  const vOpen = el("viewer-open");
  const vPrev = el("viewer-prev");
  const vNext = el("viewer-next");
  const vDownload = el("viewer-download");
  const vDownloadLabel = el("viewer-download-label");
  const vStatus = el("viewer-status");

  let issues = [];
  let query = "";
  let current = null;
  let lastFocus = null;
  let pdfRenderToken = 0;
  let pdfjsPromise = null;

  el("year").textContent = new Date().getFullYear();

  const fmtDate = (iso) =>
    new Date(iso + "T00:00:00").toLocaleDateString("en-IN", { month: "long", year: "numeric" });
  const fmtMonth = (iso) => new Date(iso + "T00:00:00").toLocaleDateString("en-IN", { month: "long" });

  const escapeHtml = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const fileUrl = (issue) => BASE + issue.file;
  const isHtml = (issue) => issue.format === "html";
  const issueLabel = (issue) => (issue.issue ? `Issue ${issue.issue} · ` : "") + fmtDate(issue.date);

  // Lucide icons, 2px stroke, inherit text colour.
  const svg = (size, paths) =>
    `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
  const icons = {
    download: svg(16, `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>`),
    arrow: svg(16, `<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>`),
    book: svg(16, `<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>`),
  };

  function thumbMarkup(issue) {
    if (issue.thumbnail) {
      return `<img src="${escapeHtml(BASE + issue.thumbnail)}" alt="" loading="lazy" />`;
    }
    return `
      <div class="thumb-placeholder" aria-hidden="true">
        <div>
          <img class="ph-logo" src="assets/arike-logo.png" alt="" />
          <div class="ph-rule"></div>
        </div>
        <div class="ph-issue">${issue.issue ? String(issue.issue).padStart(2, "0") : fmtDate(issue.date)}</div>
      </div>`;
  }

  function cardMarkup(issue) {
    return `
      <article class="card">
        <div class="card-body">
          ${issue.issue ? `<div class="card-tags"><span class="tag tag-accent">Issue ${issue.issue}</span></div>` : ""}
          <h3 class="card-month"><button data-open="${issue.id}">${fmtMonth(issue.date)}</button></h3>
          <span class="card-year">${issue.date.slice(0, 4)}</span>
          <p class="card-title">${escapeHtml(issue.title)}</p>
          <div class="card-actions">
            <button class="link-btn" data-open="${issue.id}">Read ${icons.arrow}</button>
            <button class="round-btn" data-download="${issue.id}" aria-label="${isHtml(issue) ? "Download as PDF" : "Download PDF"}" title="${isHtml(issue) ? "Download as PDF" : "Download PDF"}">${icons.download}</button>
          </div>
        </div>
      </article>`;
  }

  function visibleIssues() {
    const q = query.trim().toLowerCase();
    return issues.filter((i) => {
      if (!q) return true;
      const hay = [i.title, i.summary, fmtDate(i.date), i.issue ? `issue ${i.issue}` : "", i.id].join(" ").toLowerCase();
      return hay.includes(q);
    });
  }

  function render() {
    const list = visibleIssues();
    const byYear = new Map();
    list.forEach((i) => {
      const y = i.date.slice(0, 4);
      if (!byYear.has(y)) byYear.set(y, []);
      byYear.get(y).push(i);
    });
    grid.innerHTML = Array.from(byYear.entries())
      .map(([year, items], gi) => `
        <section class="year-group reveal" style="animation-delay:${gi * 60}ms">
          <h3 class="year-label">${year}</h3>
          <div class="grid">${items.map(cardMarkup).join("")}</div>
        </section>`)
      .join("");
    empty.hidden = list.length > 0;
  }

  function renderHero() {
    const latest = issues[0];
    if (!latest) return;

    heroActions.innerHTML = `
      <button class="btn btn-primary" data-open="${latest.id}">${icons.book} Read latest issue</button>`;

    heroCover.innerHTML = `
      <div class="cover-plate">
        <span class="float-chip new">New${latest.issue ? ` · Issue ${latest.issue}` : ""}</span>
        <button class="cover-main" data-open="${latest.id}" aria-label="Read the latest issue: ${escapeHtml(latest.title)}">
          ${thumbMarkup(latest)}
          <span class="play">${icons.book} Read now</span>
        </button>
        <span class="float-chip fmt">${fmtDate(latest.date)}</span>
      </div>`;
  }

  // Viewer

  function setStatus(text) {
    vStatus.textContent = text || "";
    vStatus.hidden = !text;
  }

  function loadPdfJs() {
    if (!pdfjsPromise) {
      pdfjsPromise = import(PDFJS_SRC).then((lib) => {
        lib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
        return lib;
      });
    }
    return pdfjsPromise;
  }

  // Rasterises every page into the stage; the browser's built-in PDF plugin is unreliable inside iframes.
  async function renderPdf(url) {
    const token = ++pdfRenderToken;
    pdfStage.innerHTML = `<div class="pdf-loading">Loading issue…</div>`;
    try {
      const pdfjs = await loadPdfJs();
      const doc = await pdfjs.getDocument({ url }).promise;
      if (token !== pdfRenderToken) return;
      pdfStage.innerHTML = "";
      const targetWidth = Math.min(pdfStage.clientWidth - 24, 900);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      for (let n = 1; n <= doc.numPages; n++) {
        if (token !== pdfRenderToken) return;
        const page = await doc.getPage(n);
        const base = page.getViewport({ scale: 1 });
        const scale = targetWidth / base.width;
        const viewport = page.getViewport({ scale: scale * dpr });
        const wrap = document.createElement("div");
        wrap.className = "pdf-page";
        const canvas = document.createElement("canvas");
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        canvas.style.aspectRatio = `${base.width} / ${base.height}`;
        wrap.appendChild(canvas);
        wrap.insertAdjacentHTML("beforeend", `<span class="pdf-num">${n} / ${doc.numPages}</span>`);
        pdfStage.appendChild(wrap);
        await page.render({ canvasContext: canvas.getContext("2d"), viewport }).promise;
      }
    } catch (err) {
      console.error(err);
      if (token !== pdfRenderToken) return;
      pdfStage.innerHTML = "";
      setStatus("Could not display this PDF here. Use “Open in new tab” or download it.");
    }
  }

  function openIssue(id, { pushHash = true } = {}) {
    const idx = issues.findIndex((i) => i.id === id);
    if (idx === -1) return;
    current = idx;
    const issue = issues[idx];

    vKicker.textContent = issueLabel(issue);
    vTitle.textContent = issue.title;
    vOpen.href = fileUrl(issue);
    vDownloadLabel.textContent = isHtml(issue) ? "Download as PDF" : "Download PDF";
    vPrev.disabled = idx === 0;
    vNext.disabled = idx === issues.length - 1;
    setStatus("");

    if (isHtml(issue)) {
      pdfRenderToken++;
      pdfStage.hidden = true;
      pdfStage.innerHTML = "";
      frame.hidden = false;
      frame.src = fileUrl(issue);
    } else {
      frame.hidden = true;
      frame.src = "about:blank";
      pdfStage.hidden = false;
      pdfStage.scrollTop = 0;
      renderPdf(fileUrl(issue));
    }

    if (viewer.hidden) {
      lastFocus = document.activeElement;
      viewer.hidden = false;
      document.body.classList.add("viewer-open");
    }
    el("viewer-back").focus();
    if (pushHash) history.pushState({ id }, "", `#issue/${id}`);
  }

  function closeViewer({ pushHash = true } = {}) {
    if (viewer.hidden) return;
    viewer.hidden = true;
    pdfRenderToken++;
    pdfStage.innerHTML = "";
    frame.src = "about:blank";
    document.body.classList.remove("viewer-open");
    current = null;
    if (pushHash) history.pushState({}, "", location.pathname);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function step(delta) {
    if (current === null) return;
    const next = issues[current + delta];
    if (next) openIssue(next.id);
  }

  // Downloads

  function loadHtml2Pdf() {
    if (window.html2pdf) return Promise.resolve(window.html2pdf);
    return new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = HTML2PDF_SRC;
      s.crossOrigin = "anonymous";
      s.referrerPolicy = "no-referrer";
      s.onload = () => resolve(window.html2pdf);
      s.onerror = () => reject(new Error("Could not load the PDF generator."));
      document.head.appendChild(s);
    });
  }

  function downloadFile(issue) {
    const a = document.createElement("a");
    a.href = fileUrl(issue);
    a.download = issue.file.split("/").pop();
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  // Renders the HTML issue in a hidden same-origin iframe so export works from any card.
  function loadIssueDocument(issue) {
    return new Promise((resolve, reject) => {
      const f = document.createElement("iframe");
      f.style.cssText = "position:fixed;left:-10000px;top:0;width:794px;height:1123px;visibility:hidden;";
      f.src = fileUrl(issue);
      f.onload = () => resolve(f);
      f.onerror = () => reject(new Error("Could not load the issue."));
      document.body.appendChild(f);
    });
  }

  async function downloadHtmlAsPdf(issue, trigger) {
    trigger.disabled = true;
    setStatus("Preparing your PDF…");
    let hidden = null;
    try {
      const [html2pdf, f] = await Promise.all([loadHtml2Pdf(), loadIssueDocument(issue)]);
      hidden = f;
      const doc = f.contentDocument;
      await Promise.all(Array.from(doc.images).filter((img) => !img.complete).map(
        (img) => new Promise((r) => { img.onload = img.onerror = r; })
      ));
      if (doc.fonts && doc.fonts.ready) await doc.fonts.ready;

      const target = doc.querySelector("[data-pdf-root]") || doc.body;
      await html2pdf()
        .set({
          margin: 0,
          filename: issue.file.split("/").pop().replace(/\.html?$/i, ".pdf"),
          image: { type: "jpeg", quality: 0.95 },
          html2canvas: { scale: 2, useCORS: true, windowWidth: 794 },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
          pagebreak: { mode: ["css", "legacy"] },
        })
        .from(target)
        .save();
      setStatus("");
    } catch (err) {
      console.error(err);
      setStatus("PDF export failed. Open the issue in a new tab and print to PDF instead.");
      setTimeout(() => setStatus(""), 6000);
    } finally {
      if (hidden) hidden.remove();
      trigger.disabled = false;
    }
  }

  function download(issue, trigger) {
    if (isHtml(issue)) downloadHtmlAsPdf(issue, trigger);
    else downloadFile(issue);
  }

  // Events

  document.addEventListener("click", (e) => {
    const openBtn = e.target.closest("[data-open]");
    if (openBtn) { openIssue(openBtn.dataset.open); return; }
    const dlBtn = e.target.closest("[data-download]");
    if (dlBtn) {
      const issue = issues.find((i) => i.id === dlBtn.dataset.download);
      if (issue) download(issue, dlBtn);
    }
  });

  el("viewer-back").addEventListener("click", () => closeViewer());
  vPrev.addEventListener("click", () => step(-1));
  vNext.addEventListener("click", () => step(1));
  vDownload.addEventListener("click", () => {
    if (current !== null) download(issues[current], vDownload);
  });

  document.addEventListener("keydown", (e) => {
    if (viewer.hidden) return;
    if (e.key === "Escape") closeViewer();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });

  search.addEventListener("input", () => { query = search.value; render(); });

  function syncFromHash() {
    const m = location.hash.match(/^#issue\/([\w-]+)$/);
    if (m) openIssue(m[1], { pushHash: false });
    else closeViewer({ pushHash: false });
  }
  window.addEventListener("popstate", syncFromHash);

  // Boot

  fetch(BASE + "index.json", { cache: "no-cache" })
    .then((r) => { if (!r.ok) throw new Error(r.statusText); return r.json(); })
    .then((data) => {
      issues = (data.issues || []).slice().sort((a, b) => b.date.localeCompare(a.date));
      renderHero();
      render();
      syncFromHash();
    })
    .catch((err) => {
      console.error(err);
      grid.innerHTML = "";
      empty.textContent = "Could not load the newsletter list. Please try again later.";
      empty.hidden = false;
    });
})();
