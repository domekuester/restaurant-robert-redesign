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
4. Das Bild in **allen drei Sprachdateien** (`index.html`, `en.html`,
   `fr.html`) referenzieren – Muster von bestehenden `<picture>`-Blöcken
   übernehmen: WebP-`<source>` + JPEG-`<img>`. `width`/`height` auf das
   Seitenverhältnis der erzeugten Datei setzen (verhindert Layout-Sprünge),
   `alt` pro Sprache formulieren.

Ein Foto **austauschen** geht genauso: neue Datei in `original/` legen und
in der `MAP` denselben sprechenden Namen darauf zeigen lassen – die
optimierten Dateien werden überschrieben, die HTML-Referenzen bleiben.

Originale werden nie verändert – auch Anpassungen wie Aufhellen, Zuschnitt
oder Weissabgleich passieren nur in den optimierten Kopien (`CROPS` und
`ANPASSUNGEN` in `tools/optimize-images.py`). Welches Bild wo eingesetzt ist (und warum),
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

Die Website ist technisch und gestalterisch fertig (siehe „Bereits
erledigt" unten). Was noch offen ist, kann nur der Betreiber
beantworten – nichts davon darf geraten oder erfunden werden.

### 1. Zwingend: Recht und Domain

- [ ] **USt-IdNr. bzw. korrekte Betreiberangaben klären.** Auf der alten
      Website stand nur der Platzhalter „Musterustid.". Echte Nummer
      erfragen und im Impressum als eigenen Abschnitt ergänzen
      („Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: …").
      Falls keine existiert: Abschnitt weglassen.
- [ ] **Rechtsform klären.** Die alte Datenschutzerklärung nannte
      „Robert GbR", das alte Impressum nur „ROBERT." – korrekte
      Firmierung festlegen. Bei einer GbR alle Gesellschafter nennen.
- [ ] **Finalen Hosting-Anbieter in die Datenschutzerklärung eintragen.**
      Aktuell läuft die Seite über GitHub Pages (GitHub, Inc., USA) –
      also mit Drittlandbezug, der konkret benannt gehört (Anbieter,
      Rechtsgrundlage der Übermittlung, z. B. EU-US Data Privacy
      Framework). Liegt die finale Domain bei einem anderen Hoster,
      stattdessen diesen eintragen.
- [ ] **Beim Umzug auf die finale Domain:** `og:url` und `og:image` in
      **allen drei** Sprachdateien umstellen. Sie zeigen bewusst noch auf
      die GitHub-Pages-URL, damit geteilte Links schon jetzt eine
      Bildvorschau haben. `canonical` und `hreflang` zeigen bereits auf
      restaurantrobert.de. Danach die Social-Vorschau testen
      (z. B. opengraph.xyz).

Die ersten drei Punkte stehen zusätzlich als TODO-Kommentare direkt an
der betreffenden Stelle in `impressum.html` und `datenschutz.html`.
Beide Dokumente gehören vor dem Livegang einmal juristisch geprüft.

**Betreiberzeile:** In `impressum.html` und `datenschutz.html` lautet die
Rollenangabe ausschließlich „Inhaber: Michael Geißner". „Geschäftsführer",
„Geschäftsführung" oder entsprechende Übersetzungen sind falsch und dürfen
nicht wieder eingesetzt werden.

### 2. Inhaltlich gegenlesen

- [ ] Speisekarte und Preise gegen die echte Karte prüfen (Stand: Juli
      2026, übernommen von restaurantrobert.de) – in allen drei Sprachdateien
- [ ] EN/FR-Übersetzungen vom Betreiber gegenlesen lassen
- [ ] Presse-Formulierungen gegenlesen (Abschnitt „Stadtgespräch" –
      bewusst vorsichtig gehalten: „laut Medienberichten")

### 3. Material, das noch fehlt

- [ ] Logo-SVG in `assets/logo/` ablegen und den typografischen
      Schriftzug ersetzen
- [ ] Foto mit Rheinblick/Terrasse nachliefern (siehe
      `docs/foto-wunschliste.md`)

### Bereits erledigt (Stand August 2026)

- [x] Alle drei Sprachseiten auf Desktop (1440) und Mobile (768/390/360)
      geprüft: kein horizontaler Overflow, keine Konsolenfehler, keine
      404, alle externen Links erreichbar
- [x] Lighthouse über das echte Hosting: Accessibility, Best Practices
      und SEO je 100
- [x] Tastaturbedienung, Fokuszustände, Touch-Ziele (min. 44 px) und
      `prefers-reduced-motion` geprüft
- [x] Team-Porträts vollständig, einheitlich beschnitten und beschriftet
- [x] Keine Laufzeit-Abhängigkeiten, kein Build-Schritt, keine Tracker,
      keine externen Requests – die Seite lädt ausschließlich eigene
      Dateien
- [x] Rechtliche Texte bleiben deutsch; EN/FR verlinken sie mit
      `hreflang="de"`. Falls fremdsprachige Fassungen von Impressum/
      Datenschutz gewünscht sind: juristisch erstellen bzw. prüfen
      lassen, nicht frei übersetzen
