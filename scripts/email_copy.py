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
    html = re.sub(r'(src|href)="(assets/[^"]+)"', lambda m: f'{m.group(1)}="{folder}{m.group(2)}"', html)
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
