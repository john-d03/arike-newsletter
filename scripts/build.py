#!/usr/bin/env python3
"""Scan public/newsletters/YYYY/MM/ for .pdf/.html issues, render covers and write index.json.

Usage: python3 scripts/build.py [--force]
Requires PyMuPDF (pip install pymupdf). HTML covers use Google Chrome headless if present.
"""
import json, re, subprocess, sys
from html.parser import HTMLParser
from pathlib import Path

import fitz  # PyMuPDF

ROOT = Path(__file__).resolve().parent.parent / "public" / "newsletters"
THUMBS = ROOT / "thumbnails"
COVER_WIDTH = 640
FORCE = "--force" in sys.argv
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

MONTHS = ["January", "February", "March", "April", "May", "June", "July",
          "August", "September", "October", "November", "December"]


def month_title(year, month):
    return f"{MONTHS[int(month) - 1]} {year} Bulletin"


def pdf_meta(path):
    page = fitz.open(path)[0]
    flat = re.sub(r"\s+", "", page.get_text()).upper()
    m = re.search(r"ISSUE(\d{1,3})", flat)
    issue = int(m.group(1)) if m else None

    title = None
    for block in page.get_text("dict")["blocks"]:
        for line in block.get("lines", []):
            spans = [s for s in line["spans"] if s["text"].strip()]
            if not spans:
                continue
            s = spans[0]
            if "Bold" not in s["font"] or "Plex" in s["font"] or s["size"] < 10.5:
                continue
            if not 90 < s["bbox"][1] < 420:
                continue
            text = " ".join(x["text"].strip() for x in spans)
            if text == "24/7" or len(text) < 6:
                continue
            title = text.rstrip(",.;:")
            break
    return issue, title


def pdf_cover(path, out):
    page = fitz.open(path)[0]
    zoom = COVER_WIDTH / page.rect.width
    pix = page.get_pixmap(matrix=fitz.Matrix(zoom, zoom), alpha=False)
    pix.save(out, jpg_quality=86)


class HtmlMeta(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = None
        self.h2 = None
        self._tag = None
        self._buf = []
        self.text = ""

    def handle_starttag(self, tag, attrs):
        if tag in ("title", "h1", "h2"):
            self._tag = tag
            self._buf = []

    def handle_data(self, data):
        self.text += data
        if self._tag:
            self._buf.append(data)

    def handle_endtag(self, tag):
        if tag == self._tag:
            val = re.sub(r"\s+", " ", "".join(self._buf)).strip()
            if tag == "title":
                self.title = val
            elif tag in ("h1", "h2") and not self.h2:
                self.h2 = val
            self._tag = None


def html_meta(path):
    p = HtmlMeta()
    p.feed(path.read_text(encoding="utf-8"))
    flat = re.sub(r"\s+", "", p.text).upper()
    m = re.search(r"ISSUE(\d{1,3})", flat)
    return (int(m.group(1)) if m else None), p.h2


def html_cover(path, out):
    if not Path(CHROME).exists():
        return False
    tmp = out.with_suffix(".full.png")
    cmd = [CHROME, "--headless=new", "--hide-scrollbars", "--disable-gpu",
           f"--window-size=794,1123", f"--screenshot={tmp}", path.resolve().as_uri()]
    subprocess.run(cmd, check=True, capture_output=True, timeout=60)
    pix = fitz.Pixmap(str(tmp))
    zoom = COVER_WIDTH / pix.width
    doc = fitz.open()
    page = doc.new_page(width=pix.width, height=pix.height)
    page.insert_image(page.rect, pixmap=pix)
    page.get_pixmap(matrix=fitz.Matrix(zoom, zoom), alpha=False).save(out, jpg_quality=86)
    tmp.unlink()
    return True


def main():
    THUMBS.mkdir(exist_ok=True)
    issues = []
    files = sorted(list(ROOT.glob("[0-9][0-9][0-9][0-9]/[0-9][0-9]/*.pdf"))
                   + list(ROOT.glob("[0-9][0-9][0-9][0-9]/[0-9][0-9]/*.html")))
    for f in files:
        year, month = f.parent.parent.name, f.parent.name
        iid = f"{year}-{month}"
        fmt = "pdf" if f.suffix.lower() == ".pdf" else "html"
        cover = THUMBS / f"{iid}.jpg"

        if fmt == "pdf":
            issue_no, title = pdf_meta(f)
            if FORCE or not cover.exists():
                pdf_cover(f, cover)
        else:
            issue_no, title = html_meta(f)
            if FORCE or not cover.exists():
                if not html_cover(f, cover):
                    print(f"  ! no Chrome found, skipped cover for {f.name}")

        entry = {
            "id": iid,
            "date": f"{year}-{month}-01",
            "format": fmt,
            "file": f.relative_to(ROOT).as_posix(),
            "title": title or month_title(year, month),
        }
        if issue_no:
            entry["issue"] = issue_no
        if cover.exists():
            entry["thumbnail"] = cover.relative_to(ROOT).as_posix()
        issues.append(entry)
        print(f"  {iid}  {fmt:4}  #{issue_no or '--':<3} {entry['title']}")

    issues.sort(key=lambda e: e["date"], reverse=True)
    (ROOT / "index.json").write_text(
        json.dumps({"organisation": "Arike Care", "issues": issues}, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    print(f"\n{len(issues)} issues -> {ROOT / 'index.json'}")


if __name__ == "__main__":
    main()
