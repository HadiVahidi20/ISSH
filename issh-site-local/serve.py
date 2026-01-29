#!/usr/bin/env python3
"""Simple local server that can serve files saved with query strings in names."""
from __future__ import annotations

import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import unquote, urlsplit

SITE_ROOT = os.path.join(os.path.dirname(__file__), "www.issh.ch")


class QueryFileHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path: str) -> str:
        parts = urlsplit(path)
        rel_path = unquote(parts.path.lstrip("/"))
        query = parts.query

        candidates: list[str] = []
        if query != "":
            candidates.append(rel_path + "?" + query)
            candidates.append(rel_path + "?" + query + ".html")
        else:
            # If the URL had a trailing '?', try the exact filename with '?'
            candidates.append(rel_path + "?")

        # Normal fallbacks
        candidates.append(rel_path)
        candidates.append(rel_path + ".html")
        candidates.append(os.path.join(rel_path, "index.html"))

        for rel in candidates:
            if not rel:
                continue
            full = os.path.join(SITE_ROOT, rel)
            if os.path.isfile(full):
                return full

        return os.path.join(SITE_ROOT, rel_path)


def main() -> None:
    if not os.path.isdir(SITE_ROOT):
        raise SystemExit(f"Site root not found: {SITE_ROOT}")

    os.chdir(SITE_ROOT)
    server = ThreadingHTTPServer(("", 8000), QueryFileHandler)
    print("Serving ISSH clone at http://localhost:8000")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
