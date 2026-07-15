# ROBERT. – Website-Redesign

Neue Website für das Restaurant ROBERT., französische Brasserie am Rathausufer
in Düsseldorf. Statisch (HTML/CSS/JS), keine Frameworks, keine externen
Abhängigkeiten – gebaut für GitHub Pages.

## Anleitung

### Lokal öffnen

Im Projektordner:

```bash
python3 -m http.server 8000
```

Dann im Browser: <http://localhost:8000>

(Auch ein Doppelklick auf `index.html` funktioniert – der Server ist nur
näher am echten Hosting.)

### GitHub Pages aktivieren (einmalig)

1. Repository auf GitHub anlegen (z. B. `restaurant-robert-redesign`).
2. Projekt pushen:
   ```bash
   git remote add origin git@github.com:DEIN-NAME/restaurant-robert-redesign.git
   git push -u origin main
   ```
3. Auf GitHub: **Settings → Pages → Source: „Deploy from a branch“ →
   Branch `main`, Ordner `/ (root)`** → Save.
4. Nach ~1 Minute ist die Seite unter
   `https://DEIN-NAME.github.io/restaurant-robert-redesign/` erreichbar.
   Alle Pfade sind relativ – die Seite funktioniert dort ohne Anpassung,
   später genauso unter einer eigenen Domain.

### Änderungen veröffentlichen

```bash
git add -A
git commit -m "Kurze Beschreibung der Änderung"
git push
```

GitHub Pages veröffentlicht automatisch nach jedem Push (kein Build-Schritt).

## Struktur

```
index.html            Onepage-Website, DEUTSCH (Hero → Rhein → Küche → Karte →
                      Galerie → Geschichte → Team → Presse → Besuch → Footer)
en.html               Englische Version (gleiche Struktur, lokalisierte Texte)
fr.html               Französische Version (gleiche Struktur, lokalisierte Texte)
404.html              Fehlerseite (nutzt GitHub Pages automatisch)
impressum.html        Inhalt von der alten Website übernommen (§ 5 DDG);
                      offene Rechts-TODOs als HTML-Kommentare markiert
datenschutz.html      An den Funktionsumfang der neuen Website angepasst
                      (keine Cookies/Tracker/Formulare); Hoster-TODO im Quelltext
css/styles.css        Design-Tokens + alle Stile
js/main.js            Navigation, Karten-Tabs, Aktionsleiste, Lightbox
assets/fonts/         Bodoni Moda (Headlines) + Spectral (Text) + Archivo
                      (Labels/Nav) – alle lokal als woff2, kein Google-CDN,
                      alle unter SIL Open Font License
assets/logo/          leer – finales Logo-SVG hier ablegen
assets/photos/
  original/           Original-Fotos – NUR LOKAL, nicht im Repo
                      (siehe .gitignore; separat sichern!)
  optimized/          generiert: WebP + JPEG-Fallback in 480/960 px
                      (Hero zusätzlich 1600/2200) – nicht von Hand anfassen
tools/optimize-images.sh   Bild-Pipeline (legt einmalig venv mit Pillow an)
docs/                 Bildkonzept, Foto-Wunschliste
```

## Neue Fotos einbauen

1. Foto in `assets/photos/original/` legen.
2. In `tools/optimize-images.py` in der `MAP` eine Zeile ergänzen:
   `"sprechender-name": "DATEINAME.jpg"`.
3. Skript laufen lassen: `./tools/optimize-images.sh`
4. Das Bild in `index.html` referenzieren (Muster von bestehenden
   `<picture>`-Blöcken übernehmen: WebP-`<source>` + JPEG-`<img>`).

Originale werden nie verändert – auch Anpassungen wie Aufhellen passieren
nur in den optimierten Kopien. Welches Bild wo eingesetzt ist (und warum),
steht in `docs/bildkonzept.md`.

## Texte ändern

Alle Texte stehen als normales HTML in `index.html` – Abschnitt suchen
(die Kommentare `<!-- ===== ... ===== -->` markieren jede Sektion),
Text ändern, speichern. Kein Build nötig. Der Ton der Seite ist bewusst
warm und direkt („Ohne Reservierung, ohne Getue.") – bitte beim
Ergänzen keine Werbefloskeln einschleusen.

## Drei Sprachversionen pflegen (DE/EN/FR)

Die Website gibt es dreimal, als eigenständige statische Seiten mit
identischer Struktur:

- `index.html` – Deutsch (Hauptsprache)
- `en.html` – Englisch
- `fr.html` – Französisch

**Wichtig: Es gibt keinen automatischen Abgleich.** Wer einen Text, ein
Gericht, einen Preis oder ein Bild ändert, muss dieselbe Stelle in **allen
drei Dateien** ändern. Die Sektions-Kommentare (`<!-- ===== KÜCHE ===== -->`
usw.) und die CSS-Klassen sind in allen drei Dateien gleich – dieselbe
Stelle ist also leicht zu finden. Preise stehen in allen Sprachen im
gleichen Format (z. B. `27,50`).

Grundsätze für neue Übersetzungen:

- **Nicht wörtlich übersetzen.** Jede Sprache soll klingen, als hätte sie
  ein Gastgeber geschrieben: kurz, warm, direkt. Englisch nicht steif,
  Französisch nicht überkandidelt. Referenz ist der Claim:
  DE „Ohne Reservierung, ohne Getue." / EN "No reservations, no fuss." /
  FR « Sans réservation, sans chichi. »
- **Keine Werbefloskeln** („unforgettable experience", „culinary
  excellence" …) – in keiner Sprache.
- Die französischen Eyebrow-Etiketten (La Maison, La Cuisine, L'Histoire …)
  bleiben in **allen** Sprachversionen französisch – sie sind Teil der Marke.
- Presse-Schlagzeilen bleiben im deutschen Original (es sind Zitate);
  EN/FR weisen im Einleitungstext darauf hin.
- Auch `alt`-Texte, `aria-label` und die Meta-Tags (`title`, `description`,
  Open Graph) sind pro Sprache lokalisiert – bei Änderungen mitziehen.
- Der Sprachumschalter (DE · EN · FR) steckt zweimal pro Seite: im Kopf
  (Desktop) und im Menü-Overlay (Mobile). Die aktive Sprache trägt
  `aria-current="page"`.
- `hreflang`-Links im `<head>` aller drei Seiten zeigen auf die finale
  Domain (restaurantrobert.de) – beim Domain-Umzug prüfen.

**Rechtliches:** `impressum.html` und `datenschutz.html` existieren bewusst
nur auf Deutsch; EN/FR verlinken sie als "Legal notice" / "Privacy policy"
bzw. « Mentions légales » / « Politique de confidentialité ». Rechtliche
Texte nicht frei übersetzen – falls fremdsprachige Fassungen gewünscht sind,
juristisch erstellen bzw. prüfen lassen.

**Vor jedem Livegang alle drei Sprachseiten testen** (Desktop + Mobile:
Navigation, Sprachumschalter, Karte-Tabs, Galerie/Lightbox, Links).

## Speisekarte pflegen

Die Gerichte stehen als normales HTML in `index.html` im Abschnitt
`<!-- SPEISEKARTE -->`. Ein Gericht ist ein `<li class="gericht">`-Block –
Zeile kopieren, Text und Preis ändern, fertig. Kein Build nötig.
**Dieselbe Änderung auch in `en.html` und `fr.html` machen** (gleiche
Stelle, lokalisierter Text, identischer Preis).

## Presse-Links pflegen

Der Abschnitt „Stadtgespräch" (`<!-- PRESSE -->` in `index.html`) ist
eine einfache Linkliste: ein `<li>` pro Artikel mit Quelle, Titel und URL.
Neue Artikel nach demselben Muster ergänzen; Links öffnen extern.

## Instagram automatisch aktualisieren (spätere Option)

Der Abschnitt „Aktuell bei ROBERT." (`<!-- INSTAGRAM -->` in `index.html`)
ist bewusst statisch: eigene Fotos, die aufs Profil verlinken – kein Embed,
kein Tracking, keine Cookies, keine Drittanbieter-Skripte, keine Tokens im
Frontend. Kacheln tauschen geht wie überall: Bild über die Pipeline
optimieren, `<picture>`-Block anpassen.

Falls die Kacheln später echte aktuelle Posts zeigen sollen:

- Möglich über die **Instagram Graph API** – benötigt ein
  Instagram-**Business- oder Creator-Konto**, eine **Meta-App** und einen
  **Access Token**.
- Der Token darf **niemals im Frontend** (HTML/JS/Repo) liegen.
- Mit GitHub Pages: eine **GitHub Action** ruft z. B. täglich die API ab
  (Token als Repository-Secret) und schreibt eine lokale JSON/HTML-Datei
  ins Repo, die die Kacheln speist – die Seite bleibt statisch.
- Alternativ: Serverless-Funktion (Netlify/Vercel/Cloudflare), die die
  API-Antwort cached und ausliefert.
- Vorher **Datenschutzerklärung und Impressum prüfen** (API-Abrufe,
  ggf. geänderte Datenflüsse) – die aktuelle Datenschutzerklärung
  verspricht ausdrücklich „keine externen Dienste".

## Vor dem Livegang

- [ ] Speisekarte und Preise gegen die echte Karte prüfen (Stand: Juli 2026,
      übernommen von restaurantrobert.de) – in allen drei Sprachdateien
- [ ] Alle drei Sprachseiten (index/en/fr) auf Desktop und Mobile testen;
      EN/FR-Übersetzungen vom Betreiber gegenlesen lassen
- [ ] Rechtliche Texte bleiben deutsch; falls EN/FR-Fassungen von
      Impressum/Datenschutz gewünscht: juristisch erstellen/prüfen lassen,
      nicht frei übersetzen
- [ ] Impressum/Datenschutz juristisch final prüfen lassen. Offene Punkte
      (als TODO-Kommentare im Quelltext markiert): USt-IdNr. (auf der alten
      Website stand nur „Musterustid.“), Rechtsform („Robert GbR“ vs.
      „ROBERT.“ – bei GbR alle Gesellschafter nennen), Hosting-Abschnitt
      mit finalem Hoster + Drittlandübermittlung (aktuell GitHub Pages, USA)
- [ ] Logo-SVG in `assets/logo/` ablegen und den typografischen
      Schriftzug ersetzen
- [ ] Foto mit Rheinblick/Terrasse nachliefern (siehe
      `docs/foto-wunschliste.md`)
- [ ] Presse-Formulierungen gegenlesen (Abschnitt „Stadtgespräch" –
      bewusst vorsichtig gehalten: „laut Medienberichten")
- [ ] Beim Umzug auf die finale Domain: `og:url` und `og:image` in
      `index.html` umstellen (zeigen aktuell auf die GitHub-Pages-URL,
      damit geteilte Links eine Bildvorschau haben; `canonical` zeigt
      bereits auf restaurantrobert.de)
- [ ] Nach Livegang: Social-Vorschau testen (z. B. opengraph.xyz) und
      Lighthouse über das echte Hosting laufen lassen
