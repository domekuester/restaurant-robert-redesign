#!/usr/bin/env python3
"""Bild-Pipeline für ROBERT.

Erzeugt aus assets/photos/original/ responsive Bilder in
assets/photos/optimized/ – als WebP (modern, ~30 % kleiner) plus
JPEG-Fallback für alte Browser. Die Website bindet beides über
<picture> ein.

Aufruf über ./tools/optimize-images.sh (legt bei Bedarf die venv mit
Pillow an) oder direkt mit einem Python, das Pillow hat.

Neue Fotos: in original/ legen, unten in MAP eintragen, Skript laufen
lassen. Originale werden nie verändert – auch Entwicklungs-Anpassungen
(z. B. Aufhellen) passieren nur in den optimierten Kopien.
"""

import os
import sys

from PIL import Image, ImageEnhance, ImageOps

BASIS = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ORIG = os.path.join(BASIS, "assets", "photos", "original")
OUT = os.path.join(BASIS, "assets", "photos", "optimized")

# Breite -> Qualität (JPEG, WebP). Große Stufen vertragen mehr
# Kompression, weil sie auf dem Schirm herunterskaliert werden.
# 480/960 reicht für alle Inhaltsbilder (auch Retina-Handys);
# nur der Hero bekommt zusätzlich 1600 und 2200 für große Screens.
STUFEN = {480: (72, 70), 960: (68, 66)}
HERO_STUFEN = {1600: (62, 60), 2200: (60, 58)}

# Bilder, die große Flächen füllen (Galerie-Hauptkachel, breite
# Querformat-Zuschnitte), bekommen zusätzlich eine 1600er-Stufe,
# damit sie auf Retina-Displays scharf bleiben.
GROSSE_FLAECHEN = {"teller-jakobsmuscheln", "stadt-promenade", "team-an-der-bar",
                   "kueche-fleisch-sw"}
GROSS_STUFEN = {1600: (62, 60)}

# Semantischer Name -> Original-Datei
MAP = {
    "gastraum-stuck-kronleuchter": "P1310654-2.jpg",   # Hero
    "gastraum-ecke-lampe": "P1310870.jpg",
    "kueche-feuer": "P1310993.jpg",
    "kueche-schwarzweiss": "P1360767.jpg",
    "teller-jakobsmuscheln": "P1360599.jpg",
    "detail-weinflaschen": "P1310836.jpg",
    "detail-beaujolais-poster": "P1310660.jpg",
    # Aussortierte Motive (Espresso, Durchreiche, Gemälde, Köche farbig)
    # sind bewusst nicht gemappt – bei Bedarf Zeile wieder ergänzen,
    # Originale liegen unangetastet in original/. Siehe docs/bildkonzept.md.
    "team-michael-geisner": "P1320294.jpg",
    "team-an-der-bar": "P1320322.jpg",
    "team-yukihiro-takahashi": "yuki.jpg",
    "stadt-rheinturm": "P1310689.jpg",
    "stadt-promenade": "P1310729.jpg",
    "gaeste-spiegel-sw": "P1360579.jpg",
    "detail-glaeser-sw": "P1360589.jpg",
    "kueche-flambe-sw": "P1360623.jpg",
    "kueche-fleisch-sw": "P1360609.jpg",
}

HERO = "gastraum-stuck-kronleuchter"

# Sanfte "Entwicklung" einzelner Bilder (nur in den Kopien).
# Yukis Porträt ist im Original sehr dunkel – fürs Team-Raster
# heben wir es an, die Abendstimmung bleibt.
ANPASSUNGEN = {
    "team-yukihiro-takahashi": {"brightness": 1.35, "contrast": 1.05},
}


def entwickle(im, name):
    werte = ANPASSUNGEN.get(name)
    if not werte:
        return im
    if "brightness" in werte:
        im = ImageEnhance.Brightness(im).enhance(werte["brightness"])
    if "contrast" in werte:
        im = ImageEnhance.Contrast(im).enhance(werte["contrast"])
    return im


def erzeuge(im, breite, q_jpg, q_webp, basisname):
    hoehe = round(im.height * breite / im.width)
    kopie = im.resize((breite, hoehe), Image.LANCZOS)
    for endung, kwargs in (
        ("jpg", dict(format="JPEG", quality=q_jpg, optimize=True, progressive=True)),
        ("webp", dict(format="WEBP", quality=q_webp, method=6)),
    ):
        ziel = os.path.join(OUT, f"{basisname}-{breite}.{endung}")
        kopie.save(ziel, **kwargs)
        print(f"✓  {os.path.relpath(ziel, BASIS)}  ({os.path.getsize(ziel) // 1024} KB)")


def main():
    os.makedirs(OUT, exist_ok=True)
    fehlend = []
    for name, datei in MAP.items():
        quelle = os.path.join(ORIG, datei)
        if not os.path.isfile(quelle):
            fehlend.append(datei)
            continue
        stufen = dict(STUFEN)
        if name == HERO:
            stufen.update(HERO_STUFEN)
        elif name in GROSSE_FLAECHEN:
            stufen.update(GROSS_STUFEN)
        # nur neu erzeugen, wenn Original neuer ist als die erste Zielstufe
        erste = os.path.join(OUT, f"{name}-{min(stufen)}.jpg")
        if os.path.exists(erste) and os.path.getmtime(quelle) <= os.path.getmtime(erste):
            continue
        with Image.open(quelle) as im:
            im = ImageOps.exif_transpose(im).convert("RGB")
            im = entwickle(im, name)
            for breite, (q_jpg, q_webp) in stufen.items():
                erzeuge(im, breite, q_jpg, q_webp, name)
    for datei in fehlend:
        print(f"⚠︎  fehlt in original/: {datei}")
    anzahl = len([f for f in os.listdir(OUT) if f.endswith((".jpg", ".webp"))])
    print(f"Fertig. {anzahl} Dateien in assets/photos/optimized/")


if __name__ == "__main__":
    sys.exit(main())
