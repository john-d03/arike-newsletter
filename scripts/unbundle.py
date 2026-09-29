#!/usr/bin/env python3
"""Unpack a Claude Design "bundled page" HTML export into a plain HTML file plus an assets/ folder.

Usage: python3 scripts/unbundle.py "<bundle.html>" public/newsletters/YYYY/MM/YYYY-MM-arikecare-newsletter.html
"""
import base64, gzip, json, re, sys
from pathlib import Path

EXT = {"font/woff2": "woff2", "image/jpeg": "jpg", "image/png": "png", "image/svg+xml": "svg",
       "image/webp": "webp", "text/javascript": "js", "application/javascript": "js", "text/css": "css"}


def block(src, kind):
    m = re.search(r'<script type="__bundler/%s">(.*?)</script>' % kind, src, re.S)
    return json.loads(m.group(1)) if m else None


def main(bundle, out):
    src = Path(bundle).read_text(encoding="utf-8")
    manifest, template = block(src, "manifest"), block(src, "template")
    if not manifest or not template:
        sys.exit("not a bundled page: missing manifest/template")
    out = Path(out)
    assets = out.parent / "assets"
    assets.mkdir(parents=True, exist_ok=True)

    paths = {}
    for uuid, e in manifest.items():
        data = base64.b64decode(e["data"])
        if e.get("compressed"):
            data = gzip.decompress(data)
        name = f"{uuid[:8]}.{EXT.get(e['mime'], 'bin')}"
        (assets / name).write_bytes(data)
        paths[uuid] = f"assets/{name}"
        template = template.replace(uuid, paths[uuid])

    template = re.sub(r'\s+(integrity|crossorigin)="[^"]*"', "", template)
    # The runtime resolves CDN URLs (React etc.) through window.__resources.
    resources = {r["id"]: paths[r["uuid"]] for r in (block(src, "ext_resources") or []) if r["uuid"] in paths}
    head = re.search(r"<head[^>]*>", template, re.I)
    inject = "<script>window.__resources = %s;</script>" % json.dumps(resources).replace("</", "<\\/")
    template = template[: head.end()] + inject + template[head.end():]

    out.write_text(template, encoding="utf-8")
    print(f"{out}  ({len(manifest)} assets)")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    main(sys.argv[1], sys.argv[2])
