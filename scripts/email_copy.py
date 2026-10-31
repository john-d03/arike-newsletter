#!/usr/bin/env python3
"""Make a copy-paste ready email version of a web edition: image and asset paths become absolute URLs
on the published site, and the footer gets Zoho Campaigns unsubscribe / preference merge tags.

Usage: python3 scripts/email_copy.py https://your-domain 2026-09
Writes public/newsletters/YYYY/MM/YYYY-MM-arikecare-newsletter.email.html
"""
import re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent / "public" / "newsletters"


def main(base, iid):
    base = base.rstrip("/")
    year, month = iid.split("-")
    src = ROOT / year / month / f"{iid}-arikecare-newsletter.html"
    html = src.read_text(encoding="utf-8")
    folder = f"{base}/newsletters/{year}/{month}/"
    html = re.sub(r'(src|href|background)="(assets/[^"]+)"', lambda m: f'{m.group(1)}="{folder}{m.group(2)}"', html)
    html = re.sub(r"url\('(assets/[^']+)'\)", lambda m: f"url('{folder}{m.group(1)}')", html)
    # Mail tools reject external stylesheets and clients ignore web fonts; the inline Arial fallbacks take over.
    html = re.sub(r'<link rel="preconnect"[^>]*>\n?', "", html)
    html = re.sub(r'<link href="https://fonts\.googleapis\.com[^>]*>\n?', "", html)
    html = re.sub(r"<!--\[if !mso\]><!--><style>@import url\('https://fonts\.googleapis\.com[^<]*</style><!--<!\[endif\]-->\n?", "", html)
    # The email is light only: mail apps mix their own dark recolouring with the web edition's dark theme and the
    # result is hard to read. Drop the dark block and tell clients that honour color-scheme not to invert.
    html = re.sub(r"  /\* Dark mode.*?\n(?=  @media print)", "", html, flags=re.S)
    html = html.replace('<meta name="color-scheme" content="light dark">', '<meta name="color-scheme" content="light only">')
    html = html.replace('<meta name="supported-color-schemes" content="light dark">', '<meta name="supported-color-schemes" content="light only">')
    # Gmail discards the whole <style> block if any rule is unsupported (@page, :has(), attribute selectors), which
    # also loses the phone media queries. Print rules mean nothing in a mailbox, so the email keeps only those.
    html = re.sub(r"  @media print\{.*?\n  \}\n", "", html, flags=re.S)
    online = f"{base}/#issue/{iid}"
    # Zoho Campaigns expands these merge tags to full URLs at send time.
    html = html.replace(
        "Call us 24/7 - 365 days a year.",
        f'<a href="{online}" style="color:#FFFFFF;">Read online</a> · <a href="$[LI:UNSUBSCRIBE]$" style="color:#FFFFFF;">Unsubscribe</a> · <a href="$[LI:SUB_PREF]$" style="color:#FFFFFF;">Manage preferences</a><br>Call us 24/7 - 365 days a year.',
    )
    out = src.with_suffix(".email.html")
    out.write_text(html, encoding="utf-8")
    print(out)


if __name__ == "__main__":
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    main(sys.argv[1], sys.argv[2])
