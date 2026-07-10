#!/bin/zsh
# Bild-Pipeline für ROBERT. — dünner Wrapper um optimize-images.py.
# Legt beim ersten Lauf eine lokale venv mit Pillow an (nur Werkzeug,
# die Website selbst hat keine Abhängigkeiten).
#
# Aufruf:  ./tools/optimize-images.sh

set -e
cd "$(dirname "$0")"

if [[ ! -x .venv/bin/python ]]; then
  echo "Richte einmalig die Bild-Werkzeuge ein (venv + Pillow) …"
  python3 -m venv .venv
  .venv/bin/pip install --quiet Pillow
fi

exec .venv/bin/python optimize-images.py
