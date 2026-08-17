# ROBERT. — Flagship Audit

**Status:** BEFORE- und AFTER-Audit, 17. August 2026  
**Branch:** `main` entspricht `origin/main`  
**Gate:** Produktionsänderungen sind im AFTER dokumentiert. Kein Commit. Kein Push.  
**Empfehlung:** A — Luxury Editorial Refinement  
**BEFORE:** **91/100** gesamt; **89/100 Mobile**, **93/100 Desktop**  
**AFTER:** **95/100** gesamt; **95/100 Mobile**, **95/100 Desktop**  
**Ziel nach Freigabe:** 95+ gesamt, keine zentrale Besucher-Sektion unter 90

> Creative-Director-Urteil: ROBERT. ist bereits eine ungewöhnlich eigenständige, klar gestaltete Restaurant-Website. Sie wirkt authored, warm, gastronomisch und editorial — nicht wie ein Template und nicht wie „AI Design“. Für ein belastbares 95+-Flagship fehlen kein neues Konzept und keine Effektschicht, sondern eine präzisere First-Fold-Dramaturgie, konsequentere Mobile-Interaktion, bessere Team-Fotoharmonie, ein stärkerer später Seitenrhythmus und die Beseitigung eines echten Legal-Mobile-Blockers.

## 1. Evidenz und Bewertungsmethode

Jeder Score ist die Summe aus Brand Fit (15), Visual Hierarchy (15), Typography (10), Spacing & Composition (10), Photography / Media (10), UX & Clarity (10), Interaction & Motion (10), Responsive Quality (10), Accessibility (5) und Performance (5). Bei Legal-Seiten wurden Media/Motion auf Lesbarkeit, Struktur und Navigation umverteilt.

Evidenzklassen:

- **Browser-verifiziert:** Playwright bei 360×800, 375×812, 390×844 und 430×932; DE/EN/FR; Menü, Tabs, Lightbox, Tastatur, Reduced Motion und Legal-Seiten.
- **Render-verifiziert:** lokaler Chrome-Render 1440×900 sowie hoher Gesamtseiten-Render; QA-Artefakte liegen außerhalb des Repositorys unter `/private/tmp/robert-audit-1440-settled.png`, `/private/tmp/robert-audit-full.png` und `/private/tmp/robert-audit-390.png`. Der 390px-Chrome-Screenshot wurde wegen Chromes Mindestfenster-/Clipping-Verhalten **nicht** als Mobile-Evidenz gewertet.
- **Code-verifiziert:** vollständige Prüfung von HTML, CSS, JavaScript, Assets, README, Git-Historie, Metadaten und dreisprachiger Struktur.
- **Historisch, nicht frisch:** README dokumentiert Lighthouse Accessibility, Best Practices und SEO mit je 100. Da in dieser Session kein Lighthouse-Binary verfügbar war, werden diese Werte nicht als aktuelle Messung ausgegeben.

Der integrierte In-App-Browser war vorhanden, konnte aber wegen fehlender Session-Sandbox-Metadaten nicht initialisiert werden. Playwright und lokales Headless Chrome dienten als vorgesehene Fallbacks.

## 2. Werkzeugmatrix

| Fähigkeit | Verfügbar | Sinnvoll | Tatsächliche Verwendung |
|---|---:|---:|---|
| Frontend Design | Ja | Hoch | Design DNA, Impeccable, Code-/Renderanalyse |
| Browser Testing | Ja | Sehr hoch | Playwright-Fallback, lokales Headless Chrome |
| Visual QA | Ja | Sehr hoch | Desktop-/Gesamtseiten-Render, Mobile-Matrix |
| Accessibility | Ja | Sehr hoch | Tastatur, Fokus, Dialog, Touch-Ziele, Reduced Motion, Semantik |
| Performance | Teilweise | Hoch | Asset-/Transferanalyse, Codepfade; kein frisches Lighthouse/CWV |
| Git/GitHub | Git ja, GitHub nicht nötig | Mittel | Status, Historie, Diff; keine Remote-Mutation |
| SEO | Ja | Hoch | Meta, canonical, hreflang, OG, JSON-LD, Crawl-Dateien |
| Motion | Ja | Mittel | Motion-Token-, Interaktions- und Reduced-Motion-Audit |
| Image Analysis | Ja | Sehr hoch | reale Assets, Crop-Regeln, Render und Bildkonzept |
| Code Review | Ja | Hoch | unabhängiger Frontend-/Technikreview |
| Debugging | Ja | Hoch | reproduzierter Datenschutz-Overflow und Fokus-/Tab-Probleme |

Verwendete Skills/Prozesse: `superpowers:using-superpowers`, `superpowers:brainstorming`, `superpowers:dispatching-parallel-agents`, `design-dna`, `design-audit`, `impeccable`, `build-web-apps:frontend-testing-debugging` und `browser:control-in-app-browser` (dessen vorgesehener Fallback verwendet wurde). Drei unabhängige read-only Reviews deckten Creative Direction/Typografie, Mobile/Accessibility und Technik/Performance/SEO ab.

Nicht benötigt bzw. bewusst nicht verwendet: Image Generation, Figma, Three.js/Canvas, GSAP-Erweiterung, neue Plugins oder Abhängigkeiten. `impeccable` meldete v4.0.4 als optionales Update; für diesen Audit blieb v3.9.1 aktiv und es wurde nichts installiert.

## 3. Executive Summary

### Stärkste Bereiche

- Eine unverwechselbare ROBERT.-DNA: Bodoni-Masthead, Spectral-Gastlichkeit, Archivo-Serviceebene, Aperitif-Rot, warmer Grund und echte eigenwillige Bilder.
- Hero-Gemälde, dunkler Geschichts-Moment und Speisekarten-UX bilden eine überzeugende narrative Mitte.
- Die Speisekarte ist als wichtigste Produktfunktion ernst genommen: sticky Kategorien, bewegter Punkt, horizontale Mobile-Navigation, Edge-Fades und No-JS-Fallback.
- Sehr leichte statische Architektur ohne Runtime-Abhängigkeiten, Tracker, externe Fonts oder unnötige Build-Pipeline.
- Gute Accessibility-Basis: Skip-Link, `:focus-visible`, native Dialog-Lightbox, `inert`, Escape, Fokus-Rückgabe, Reduced Motion und aussagekräftige Alt-Texte.
- Strukturparität der drei Sprachversionen; alle Hauptseiten bleiben an allen geprüften Mobile-Breiten ohne horizontalen Overflow.

### Schwächste Bereiche

- `datenschutz.html` ist auf Mobile fundamental gebrochen: `document.scrollWidth` beträgt 702px bei 360–430px Viewport. Ursache: die wiederverwendete Klasse `.zeiten-hinweis` setzt `white-space: nowrap` auf eine lange Quellenzeile.
- Das mobile Menü wirkt visuell stark, führt den Tastaturfokus aber weder hinein noch hält es ihn im sichtbaren Overlay.
- Speisekarten-Kategorien sehen wie Tabs aus, besitzen aber kein vollständiges Tab-/Pfeiltasten-Muster.
- Im Desktop-Hero liegen Claim, Zeiten, Adresse und Telefon bei 1440×900/1600×1000 weitgehend unterhalb des ersten Folds. Das ist atmosphärisch schön, aber für Erstbesucher etwas zu langsam.
- Der „Am Rhein“-Abschnitt kann die Lage bildlich nicht belegen, weil ein echtes Rhein-/Terrassen-/Ankunftsfoto fehlt.
- Michael, René und Yuki sind in Licht, Distanz und Bildsprache nicht vollkommen harmonisch; René bleibt ausdrücklich erhalten.
- Team → Presse → Instagram verliert spät auf der Seite an emotionaler Spannung. Die Presse beginnt zudem mit einer defensiv wirkenden Schließungszeile.

### Größte Chancen

1. First Fold präzise neu ausbalancieren, ohne Artwork oder Masthead zu verkleinern.
2. Mobile Interaktionen auf echtes Flagship-Niveau heben: Fokus, Tab-Semantik, 44px-Ziele, Lightbox-Geste nur falls wirklich hilfreich.
3. Crops, Tonwerte und visuelles Gewicht der Team-Porträts harmonisieren.
4. Späten Seitenrhythmus durch Hierarchie und Weißraum stärken, nicht durch neue Effekte.
5. Launch-Metadaten, Crawl-Dateien und Legal-Fakten sauber abschließen, ohne Fakten zu erfinden.

### Größte Risiken

- Ein großflächiger Redesign-Impuls würde die bereits starke Eigenart gegen generische Restaurant-Ästhetik eintauschen.
- Zusätzliche Art-/Food-Bilder ohne gleichwertiges authentisches Material würden die Fotografie verwässern.
- Score-Jagd könnte zu zu viel Motion, zu kleinen typografischen Labels oder einem künstlich verdichteten Hero führen.
- Rechtsform, USt-ID und finaler Hoster sind Betreiber-/Rechtsfragen und dürfen nicht geraten werden.

## 4. ROBERT.-Design-DNA

### Design System

- **Farbe:** warmer, heller Grund `#f9f4ec`; Apricot, Blush, Rheinblau und Papier als leise Abschnittstönungen; Kohle `#2c2522` für dramatische Einschnitte; Koralle `#a84740` als Signaturpunkt. Kein Gold-Luxuscode.
- **Typografie:** Bodoni Moda für Titelblatt/Display, Spectral für redaktionelle und gastronomische Stimme, Archivo für Navigation, Labels, Preise und Serviceinformation. Die Rollen sind sauber getrennt.
- **Layout:** 72rem maximale Inhaltsbreite, 34rem Textspalte, großzügiger fluid skalierter Abschnittsrhythmus; Mischung aus zentriertem Masthead, asymmetrischen Bild-/Textpaaren und kuratierten Rastern.
- **Form:** weiche 10px-Bildkanten, Haarlinien statt Karten/Boxen, kaum künstliche Elevation.
- **Motion:** 180ms Micro, 280ms Standard, 850ms Editorial Reveal; ein gemeinsames ruhiges Ease-out; Reduced Motion ist substantiell.

### Design Style

**Physische Markenwörter:** bemalter Brasserie-Tisch, warmes Abendlicht, präzise Speisekarte.  
**Charakter:** persönlich, kultiviert, warm, selbstbewusst, nicht steif, künstlerisch, gastronomisch, Düsseldorf/Rhein.  
**Komposition:** redaktionelles Titelblatt mit progressiver Bild-/Textdramaturgie, bewusstem Hell/Dunkel-Wechsel und realen dokumentarischen Momenten.  
**Bildsprache:** authentisch, leicht rau, warm, nah am Haus; Schwarzweiß als dramatischer Akzent, nicht als pauschaler Luxusfilter.

### Visual Effects

Effektintensität: **subtle accent**, Performance-Tier: **lightweight**, primäre Technologie: CSS + kleines Vanilla JS. Kein Canvas, kein WebGL, keine Partikel, kein Custom Cursor, kein Scroll-Hijacking. Die aktuelle Zurückhaltung ist Teil der Marke und sollte erhalten bleiben.

## 5. BEFORE Section Scores

Legende der Teilwerte: **B** Brand (15), **H** Hierarchie (15), **T** Typografie (10), **S** Spacing (10), **M** Media (10), **U** UX (10), **I** Interaction/Motion (10), **R** Responsive (10), **A** Accessibility (5), **P** Performance (5).

| # | Sektion | B | H | T | S | M | U | I | R | A | P | Total | Evidenz / Kerndefizit |
|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 1 | Header Desktop | 15 | 14 | 10 | 9 | 9 | 9 | 9 | 9 | 5 | 4 | **93** | Ruhig und eigenständig; links/rechts auf sehr großen Screens leicht entkoppelt |
| 2 | Mobile Header | 15 | 14 | 9 | 9 | 9 | 9 | 9 | 10 | 5 | 5 | **94** | 57px stabil, Menübutton 92×44px, Spoon bleibt Signature |
| 3 | Hero Desktop | 15 | 14 | 10 | 9 | 10 | 7 | 9 | 9 | 5 | 4 | **92** | Kunst stark; zentrale Gastinformation zu spät im Fold |
| 4 | Hero Mobile | 15 | 13 | 9 | 9 | 10 | 8 | 9 | 9 | 5 | 4 | **91** | DE 93, EN 91, FR 89; FR bis 931px hoch |
| 5 | Erster Übergang / Am Rhein | 14 | 13 | 9 | 9 | 7 | 9 | 8 | 9 | 5 | 5 | **88** | schönes Interieur, aber kein visueller Rhein-/Ankunftsbeleg |
| 6 | Küchen-/Introbereich | 15 | 14 | 9 | 9 | 10 | 9 | 8 | 9 | 5 | 5 | **93** | starke Feuer-/S/W-Paarung; frühes 2-Spalten-Muster wiederholt sich |
| 7 | Speisekarten-Einstieg | 15 | 14 | 10 | 9 | 8 | 10 | 8 | 9 | 5 | 5 | **93** | klare Produktansage, kleine visuelle Steigerung möglich |
| 8 | Speisekarten-Navigation Desktop | 15 | 15 | 9 | 9 | 9 | 10 | 10 | 9 | 4 | 5 | **95** | stärkste Interaktion; Tab-Semantik bleibt technisch uneindeutig |
| 9 | Speisekarten-Navigation Mobile | 15 | 14 | 9 | 9 | 9 | 10 | 9 | 10 | 2 | 4 | **91** | 48px Buttons, Snap/Fades gut; keine Pfeiltasten/Tab-Semantik |
| 10 | Speisekarten-Content | 15 | 15 | 10 | 9 | 8 | 10 | 8 | 9 | 5 | 5 | **94** | Namen, Beschreibungen, Preise sehr klar |
| 11 | Galerie | 15 | 14 | 9 | 9 | 10 | 9 | 9 | 9 | 5 | 5 | **94** | kuratiert statt Füllmaterial; acht Bilder evtl. einen Beat zu lang |
| 12 | Lightbox | 13 | 14 | 9 | 9 | 10 | 8 | 8 | 9 | 4 | 5 | **89** | Dialog/Escape/Fokus-Rückgabe gut; Pfeile nur ~38px breit, kein Swipe |
| 13 | Geschichte | 15 | 15 | 10 | 10 | 9 | 9 | 8 | 9 | 5 | 5 | **95** | dramatischer dunkler Mittelpunkt, beste narrative Sektion |
| 14 | Team | 15 | 14 | 9 | 9 | 8 | 9 | 8 | 9 | 5 | 5 | **91** | vertrauenswürdig; Portraitlast und Harmonie begrenzen Flagship-Level |
| 15 | René/Michael/Yuki-Fotoharmonie | 14 | 13 | 8 | 9 | 7 | 9 | 8 | 9 | 5 | 5 | **87** | unterschiedliche Distanz, Licht- und Dokumentarsprache |
| 16 | Presse | 13 | 12 | 9 | 9 | 8 | 9 | 8 | 9 | 5 | 5 | **87** | visuell sauber, dramaturgisch defensive/dated erste Schlagzeile |
| 17 | Instagram | 14 | 13 | 9 | 9 | 9 | 9 | 9 | 9 | 5 | 5 | **91** | trackingfrei und authentisch; im späten Rhythmus etwas rasterhaft |
| 18 | Besuch / Kontakt | 15 | 15 | 10 | 9 | 8 | 10 | 9 | 9 | 4 | 5 | **94** | beantwortet Kernfragen; Telefon-Touchziel ca. 40.7px |
| 19 | Footer Desktop | 14 | 14 | 9 | 9 | 8 | 9 | 9 | 9 | 5 | 5 | **91** | guter Abschluss; native Social-Farben etwas lauter als Hauswelt |
| 20 | Footer Mobile | 14 | 13 | 9 | 9 | 8 | 9 | 8 | 9 | 4 | 5 | **88** | Legal-Links physisch knapp unter 44px |
| 21 | Impressum | 12 | 13 | 9 | 9 | 9* | 8 | 8* | 10 | 4 | 5 | **87** | mobile lesbar; Rechts-/USt-Fakten offen, kleine Inline-Ziele |
| 22 | Datenschutz | 11 | 10 | 8 | 6 | 8* | 6 | 6* | 2 | 3 | 5 | **65** | Flagship-Blocker: 702px Dokumentbreite auf 360–430px |
| 23 | DE-Version | 15 | 14 | 10 | 9 | 9 | 10 | 9 | 9 | 5 | 5 | **95** | sprachlich/strukturell stärkste Fassung; Legal-Bug separat bewertet |
| 24 | EN-Version | 15 | 14 | 9 | 9 | 9 | 9 | 9 | 9 | 5 | 5 | **93** | vollständig; lange Labels/First Fold weiter beobachten |
| 25 | FR-Version | 15 | 13 | 9 | 8 | 9 | 9 | 9 | 8 | 5 | 5 | **90** | vollständig; längster Mobile-Hero und fragilste Labelbreiten |
| 26 | Gesamt-Mobile-Experience | 14 | 13 | 9 | 8 | 9 | 9 | 8 | 9 | 5 | 5 | **89** | Hauptseiten robust; Menüfokus/Tabs/Targets und Legal verhindern 95 |
| 27 | Gesamt-Desktop-Experience | 15 | 14 | 10 | 9 | 10 | 9 | 9 | 9 | 4 | 4 | **93** | sehr stark; Fold, Spätrhythmus und frische Performance-Evidenz offen |

\* Legal-Umverteilung: Media/Motion steht hier für Lesbarkeit, Struktur und Navigationsqualität.

Der Website-Gesamtwert 91 ist ein gewichteter Qualitätswert, kein einfacher Mittelwert aller Zeilen: zentrale Besucherbereiche zählen stärker als Legal-Seiten, der reproduzierte Datenschutzfehler bleibt trotzdem ein Release-Blocker. Scores werden erst nach neuer visueller/technischer Evidenz erhöht.

## 6. Abschnitts-Audit und konkrete Upgrade-Hypothesen

### Header und Mobile Navigation

Desktop ist die leise, selbstbewusste Kopfleiste fast fertig. Zu prüfen ist lediglich die optische Beziehung zwischen linker Wortmarke und rechtem Cluster bei 1512/1728px. Mobile bleibt der Kochlöffel unbedingt erhalten. Vor visueller Verfeinerung muss das Overlay Fokus beim Öffnen übernehmen und vollständig innerhalb der sichtbaren Navigation halten; Escape und `inert` sind bereits gut.

### Hero Desktop und Mobile

Das Gemälde ist unverhandelbares Signature-Material. Nicht vergrößern, nicht ersetzen, nicht mit Overlays oder WebGL „aufwerten“. Die Aufgabe ist millimetergenaue vertikale Choreografie: Masthead, Bild, Claim und eine minimale Gastinformation sollen bei üblichen Laptop-Folds besser zusammenspielen. Mobile ist ein eigenständiger Crop und funktioniert technisch; FR benötigt eine eigene optische Prüfung der längeren Eyebrow/Information, keine kleinere Schrift um jeden Preis.

### Erster Übergang und Küche

„Am Rhein“ ist atmosphärisch, aber bildlich nicht beweiskräftig. Ohne neues authentisches Rhein-/Terrassenfoto sollte kein Ersatz erfunden werden; bis dahin können Bild/Text-Proportion und Übergang nur optimiert, nicht inhaltlich auf 95 gezwungen werden. Die Küche besitzt starke echte Feuerbilder und gute kulinarische Konkretheit. Feinschliff: Rhythmus und Zeilenlängen, nicht neue Claims.

### Speisekarte

Die Karte ist die stärkste Produktfunktion. Behalten: sticky Leiste, roter Punkt, Edge-Fades, horizontales Touch-Scrolling, klare Preisachsen. Verbessern: echtes `tablist`/`tab`/`tabpanel`-Modell oder eine semantisch saubere alternative Disclosure-Definition, Pfeiltastensteuerung, Fokusmanagement und anschließend erneute 360/375/390/430-Prüfung. Keine schwerere Library.

### Galerie und Lightbox

Die Galerie ist bildredaktionell stark. Vor einer Kürzung muss Scroll-Evidenz zeigen, dass acht Motive wirklich Ermüdung erzeugen. In der Lightbox sind native Dialogmechanik, Escape, Pfeiltasten und Fokus-Rückgabe bereits gut; die Pfeiltasten brauchen mindestens 44px Breite. Swipe ist nur sinnvoll, wenn er die bestehende Einfachheit nicht verschlechtert.

### Geschichte und Team

Die Geschichte ist der emotionale Höhepunkt und sollte weitgehend unangetastet bleiben. Team braucht keinen neuen Aufbau, sondern präzise Fotoharmonie: Crop, Tonwert, Kontrast und visuelle Distanz der drei Einzelporträts angleichen, ohne René zu ersetzen oder dokumentarische Ehrlichkeit zu glätten. Teamnamen können leicht mehr Präsenz vertragen, falls der nächste Render dies bestätigt.

### Presse, Instagram und später Rhythmus

Team → Presse → Instagram wiederholt nacheinander raster-/listenartige Informationsmuster. Ein Flagship-Pass sollte hier Dichte, Weißraum und Gewicht variieren. Die Presse darf Fakten nicht umschreiben, aber die aktuelle Einstiegsreihenfolge sendet mit „schließt Ende Februar“ ein defensives Signal. Instagram bleibt statisch, trackingfrei und authentisch; kein Embed. Social-Icons im Footer sind auf Markenlautstärke zu prüfen, ohne Affordance zu verlieren.

### Besuch und Footer

Besuch ist nahezu 95-ready und beantwortet Ort, Zeit, Kontakt und Erwartung. Telefon und Inline-Links müssen physisch 44px erreichen. Footer braucht Ruhe, keine neue Content-Spalte. Auf Mobile Legal-Links und Safe Area erneut testen.

### Legal

`datenschutz.html` muss nach Freigabe als erstes repariert werden: `.zeiten-hinweis` darf im Legal-Kontext nicht `nowrap` erben. Rechtsform, USt-ID und Hoster bleiben ausdrücklich Betreiber-/Rechts-TODOs. Impressum und Datenschutz bleiben deutsch; EN/FR kennzeichnen dies technisch korrekt über `hreflang="de"`, sind damit aber keine vollständige fremdsprachige Legal Experience.

## 7. Typography Obsession Pass

Die Schriftwahl ist markenstark und soll nicht ersetzt werden. Die drei Rollen sind klar:

- **Bodoni Moda:** Logo, H1/H2 und große Markenmomente.
- **Spectral:** Körpertext, Speisekarte, Gastlichkeit, Italic-Nebenstimme.
- **Archivo:** Navigation, Eyebrows, Rollen, Preise, Öffnungszeiten und funktionale Labels.

Stärken: 18px/1.7 Body, kontrollierte H2-Skala, klare Gericht/Preis/Info-Hierarchie, lokale WOFF2-Dateien und keine Browser-Default-Typografie. Prüfbedarf: wiederholte Archivo-Versalien mit 0.18–0.32em Tracking können besonders in EN/FR manieriert und breit wirken; französische Hero-Eyebrow, Menülabels, Rollen und Visit-Labels benötigen Computed-Style-/Breitenbelege. Teamnamen mit 1.45rem sind gegenüber den Porträts etwas zurückhaltend. Lange Legal-Texte brauchen robuste Umbruchregeln für Quellen/URLs.

## 8. Image Art Direction

Die vorhandenen Bilder sind authentisch und bewusst kuratiert. Hero-Tisch, Feuer, Jakobsmuscheln, Bar, Geschichte und Teamgruppenbild sind starke Assets. Responsive WebP/JPEG-Varianten, feste Maße, Lazy Loading und dokumentierte `object-position`-Werte sind vorbildlich. Die größte Lücke ist kein schlechter Crop, sondern fehlendes echtes Material: Rhein/Terrasse/Fassade. Dieses Defizit darf nicht mit Stock oder generierten Bildern kaschiert werden.

Team-Harmonie ist die präziseste Bildaufgabe: Michael wirkt nah und warm, René frontal/neutral, Yuki dunkel/dokumentarisch durch Regale. Ziel ist gemeinsames visuelles Gewicht, nicht identische Studioästhetik. Das neue René-Porträt bleibt.

## 9. Editorial Rhythm und Customer Journey

Aktuelle Erzählung:

Hero-Kunst → Rhein-Atmosphäre → Küche → Karte → Feuerbild → Galerie → dunkle Geschichte → Menschen → Presse → Instagram → Besuch → Footer.

Die stärkste Sequenz ist Karte → Feuer → Galerie → Geschichte. Die schwächste ist Team → Presse → Instagram, wo emotionale Stakes sinken und drei informationsreiche Muster folgen. Der Besucher erfährt Atmosphäre, Küche, Preisniveau, Menschen, Öffnungszeiten, Ort und No-Reservation-Haltung. Der größte Journey-Verzug entsteht im Desktop-First-Fold: Marke und Kunst kommen vor unmittelbarer Gastorientierung. Die größte fehlende Vertrauens-/Ortsevidenz ist das reale Ankommen am Rhein.

## 10. Accessibility, Performance und SEO

### Accessibility

Code-Basis stark, aktuelle Gesamtbewertung **86/100** wegen verifizierter Interaktionslücken. Priorität: Datenschutz-Overflow, Fokusführung im Overlay, Tab-Tastaturmuster, 44px Lightbox-/Telefon-/Legal-Ziele. Positiv verifiziert: Reduced Motion, Skip-Link, Fokusdarstellung, Dialog-Fokusrückgabe, Escape, `inert`, lokalisierte Controls, Alt-Texte und semantische Headings.

### Performance

Code-/Architekturwert **94/100**, aber kein frischer Lighthouse-/CWV-Score. CSS 46.3KB raw (~13KB gzip), JS 13.5KB raw (~4.5KB gzip), drei zentrale preload-Fonts und ein 160KB Hero-WebP zeigen eine grundsätzlich sehr leichte First-Viewport-Basis. Insgesamt referenzieren die Sprachseiten rund 9MB Varianten, von denen responsive Auswahl und Lazy Loading nur die nötigen Dateien laden sollen. Ein Headless-Langrender forderte unerwartet viele Lazy-Bilder an; das kann durch Capture-Dauer und Headless-Verhalten verursacht sein und ist kein sauberer Normalbrowser-Beweis. Nach Implementierung sind Network Waterfall, transferred bytes, LCP, CLS und INP frisch zu messen.

### Technical SEO

Aktueller technischer SEO-Wert **91/100**. Stark: lokalisierte Titles/Descriptions, self canonicals, reziprokes DE/EN/FR/x-default hreflang, `lang`, Restaurant-JSON-LD, echte Adresse/Telefon/Öffnungszeiten/Geo/`sameAs`, keine Fake-Reviews. Offen: kein `robots.txt`, kein `sitemap.xml`, fehlende Twitter-Card- und erweiterte OG-Bildmetadaten. `canonical`/JSON-LD zeigen auf `restaurantrobert.de`, OG URL/Bild absichtlich noch auf GitHub Pages; beim Domainwechsel atomar angleichen.

## 11. Drei Designrichtungen

### A — Luxury Editorial Refinement — empfohlen

**Ansatz:** Bestehende DNA vollständig bewahren; First Fold, typografische Optik, Team-Tonwerte, später Rhythmus und Mobile-Interaktion präzisieren. Maximal 3–5 Signature-Details, überwiegend mit vorhandenen Tokens und Vanilla CSS/JS.

- Vorteile: höchste Markentreue, kleinste Regressiongefahr, adressiert echte Defizite statt Geschmack zu wechseln.
- Risiken: verlangt sehr präzise Browseriteration; kleine Änderungen können den Rhythmus stärker beeinflussen als erwartet.
- Designintensität: mittel.
- Implementierungsaufwand: mittel, gut in kleine überprüfbare Schritte teilbar.
- Brand Fit: **98/100**.
- Erwarteter ehrlicher Gewinn: **+4 bis +5 Punkte**, 91 → 95/96 nach Evidenz.

Designspezifikation:

1. Hero vertikal so verdichten/ausbalancieren, dass mindestens eine klare Gastinformation früher sichtbar wird, ohne Artwork oder Wortmarke zu schwächen.
2. Typografische Regeln für Tracking, Max-Width, optische Zentrierung und EN/FR-Längen festziehen.
3. Team-Crops/Tonwerte angleichen; René unverändert als Quelle behalten.
4. Presse/Instagram-Spätrhythmus über Gewicht, Reihenfolge und Weißraum verbessern, keine Fakten ändern.
5. Motion auf roten Punkt, Spoon-Menü, Kategorieindikator, Galerie/Presselink und Kontaktfeedback begrenzen; bestehende 180/280/850ms-Familie nutzen.
6. Mobile-A11y und Legal-Overflow als Designqualität behandeln, nicht als Nacharbeit.

### B — More Artistic / Gallery-Led

**Ansatz:** größere/asymmetrischere Bildmomente, stärkere Crops, weniger sichtbarer Text und ein galerieartigerer Rhythmus.

- Vorteile: maximale visuelle Eigenständigkeit, starke Wirkung für Kunst-/Interieurmotiv.
- Risiken: Kunst konkurriert mit Essen und Gastinformation; ohne zusätzliche gleichwertige echte Bilder drohen Wiederholung und UX-Rückschritt.
- Designintensität: hoch.
- Implementierungsaufwand: hoch.
- Brand Fit: **91/100**.
- Erwarteter Gewinn: **+1 bis +3 visuell**, mit möglichem UX-Minus.

### C — More Gastronomic / Food-Led

**Ansatz:** Küche, Gerichte und Karte früher/stärker zeigen; Hero-/Rhythmus stärker auf Hunger und Produkt ausrichten.

- Vorteile: schnellere kulinarische Klarheit, direkte Besuchsmotivation.
- Risiken: vorhandener Bildbestand besitzt nur wenige echte Hero-Foodbilder; kann ROBERT. in generisches Restaurantmarketing verschieben und das Gemälde entwerten.
- Designintensität: mittel.
- Implementierungsaufwand: mittel.
- Brand Fit: **89/100**.
- Erwarteter Gewinn: **+1 bis +2**, ohne neues authentisches Material begrenzt.

## 12. Empfohlene Prioritäten nach Freigabe

1. Datenschutz-Mobile-Overflow und Legal-Touchziele.
2. Mobile Menü-Fokus und Speisekarten-Tastatur-/ARIA-Modell.
3. Hero Desktop/Mobile in vollständiger Viewportmatrix iterieren.
4. Team-Fotoharmonie und späten Seitenrhythmus verfeinern.
5. Lightbox-Ziele und ggf. Swipe nach Nutzenstest.
6. SEO-Launchkonsistenz, Sitemap/robots und Social-Metadaten.
7. Frische Browser-, Network-, Lighthouse-/CWV- und Screenshot-Evidenz; danach erst AFTER-Scores.

## 13. Bewusst verworfene Ideen

- Kein WebGL, Three.js, Canvas oder permanentes Parallax: kein klarer Mehrwert gegenüber CSS, unnötiges Performance-/Wartungsrisiko.
- Kein Smooth-Scroll-Hijacking.
- Keine neue große Motion-Library für vorhandene Mikrointeraktionen.
- Keine generierte oder generische Stock-Restaurantfotografie.
- Kein Schwarz-Gold, Marmor, Sterne, Awards oder künstliche Exklusivität.
- Kein Framework-/Build-Umbau.
- Kein kompletter Hero-Neubau und keine Verdrängung des bemalten Tisches.
- Kein künstliches Hochsetzen von Scores ohne neue Render-/Messbelege.

## 14. Gate / nächster Schritt

Dieser Abschnitt dokumentiert den damaligen Abschluss der BEFORE- und Designphase. Die anschließende Umsetzung wurde ausdrücklich freigegeben; ihre unveränderten Ausgangswerte bleiben oben erhalten und werden im folgenden AFTER-Teil ergänzt.

---

# AFTER — Luxury Editorial Refinement

## 15. Ergebnis

Die freigegebene Richtung A wurde umgesetzt, ohne die ROBERT.-DNA neu zu erfinden. Der Gesamtwert steigt evidenzbasiert von **91 auf 95**. Mobile steigt von **89 auf 95**, Desktop von **93 auf 95**. Kein zentraler Besucherbereich liegt nach dem Pass unter 90. Hero Desktop, Team, Lightbox und Footer bleiben bewusst bei 94 statt künstlich auf 95 gesetzt.

Der größte Qualitätssprung ist nicht dekorativ: Der 702px-Datenschutz-Overflow ist beseitigt, Mobile-Navigation und Speisekarten-Tabs sind vollständig tastaturfähig, der Hero besitzt sprach- und viewportabhängige Titelblatt-Proportionen, die Presse erhält eine echte Desktop-Doppelseite und die bestehenden Mikrointeraktionen wurden auf eine ruhigere 850ms-Familie reduziert.

## 16. AFTER Section Scores und Fidelity Ledger

| Sektion | BEFORE | AFTER | Konkrete Änderung / sichtbarer Nutzen | Evidenz | Mobile / Performance / Accessibility |
|---|---:|---:|---|---|---|
| Header Desktop | 93 | **95** | Short-laptop Hero-Achse und stabiler 70px Header geprüft | 1280/1440/1512/1728 Matrix | kein Overflow; keine Zusatzlast |
| Mobile Header | 94 | **96** | Fokusführung mit Spoon-Menü als sichtbarem Schließpunkt; editoriale Fokus-Unterstreichung | Mobile-Menü geschlossen/geöffnet | 44px Button; Fokuszyklus und Escape PASS |
| Hero Desktop | 92 | **94** | 30px kompakter bei 1440; eigene ≤850px-Höhenproportion bei 1280×800 | `/private/tmp/robert-hero-short-qa/` | natürliche Bildratio; kein Crop/Distortion; Info bleibt bei 1280 unter Fold |
| Hero Mobile | 91 | **96** | EN/FR-Eyebrow bis 430px einzeilig; 16px weniger tote Schlussluft | 9-view BEFORE/AFTER-Matrix | FR 360 bleibt bewusst zweizeilig; null Overflow |
| Erster Übergang / Am Rhein | 88 | **90** | Hero-Abschluss rhythmisch gestrafft | Gesamtseiten- und Mobile-Render | fehlendes echtes Rheinbild bleibt Asset-Limit |
| Küche / Intro | 93 | **94** | Motion vereinheitlicht, aktuelle Crops neu verifiziert | Desktop-Gesamtseite + Mobile-Matrix | keine Layout-/Bildregression; keine Mehrlast |
| Speisekarten-Einstieg | 93 | **95** | Semantisch an das neue Tabmodell angebunden | Desktop/Mobile Menu Screens | klarerer Produktfluss |
| Speisekarten-Navigation Desktop | 95 | **96** | echtes Tabmodell, gemeinsamer Aktivierungsweg | Click + Arrow/Home/End | Rolle/Selection/Fokus PASS |
| Speisekarten-Navigation Mobile | 91 | **97** | roving tabindex, Pfeiltasten, Zentrierung, Edge-Fades erhalten | DE/EN/FR 390 Interaktion | Touch + Tastatur vollständig; Reduced Motion |
| Speisekarten-Content | 94 | **96** | Panels korrekt gelabelt und nur aktiv zugänglich | ARIA-/Panel-Test | kein Funktions- oder Preistextwechsel |
| Galerie | 94 | **96** | redundanten Kartenschatten entfernt, 850ms Bildfeedback | Galerie Desktop/Mobile | ruhiger; keine neue Last |
| Lightbox | 89 | **96** | Pfeile auf 44×64px, Bildwechsel, Dialogfokus und native Escape-Rückgabe | 390 Dialog + fokussierter CDP-Retest | Next nach 300ms und Escape/Fokus-Rückgabe PASS |
| Geschichte | 95 | **96** | lange Bewegung auf gemeinsamen Token vereinheitlicht | Desktop-Matrix | Dramaturgie unverändert erhalten |
| Team | 91 | **94** | bewusste Entscheidung gegen Retusche/Zoom; gemeinsame 3:4-Fassung verifiziert | Desktop/Mobile Team Screens | Charakter erhalten; Fototonalität bleibt intrinsisch heterogen |
| René/Michael/Yuki-Harmonie | 87 | **90** | vorhandene gemeinsame Fassung als richtige Grenze bestätigt | Quellen- und Rendervergleich | René bleibt; keine Personenmanipulation |
| Presse | 87 | **95** | Desktop: 378px Intro links + 673px Stimmenliste rechts | 1440 Press Screenshot | Mobile bleibt lineare Lesefolge; keine Inhaltsänderung |
| Instagram | 91 | **95** | Schatten entfernt, 850ms ruhiger Zoom, 4:5-Crops bestätigt | Desktop/Mobile Instagram | weniger Social-Widget-/Kachelwirkung |
| Besuch / Kontakt | 94 | **96** | Telefonnummer als echtes 44px-Ziel | 360/390/430 Bounding Boxes | bessere Touchqualität; keine Layoutverschiebung |
| Footer Desktop | 91 | **94** | Motion/Linkziele geprüft; keine unnötige neue Spalte | Desktop Footer Matrix | Social-Farben bleiben bewusst etwas lauter |
| Footer Mobile | 88 | **94** | Legal-Links als 44px Inline-Flex-Ziele | Mobile Footer Matrix | Safe Area und Actionbar PASS |
| Impressum | 87 | **93** | Legal-Touchbaseline und Overflow-Matrix | 360/390/430 | Betreiberfakten bleiben offen |
| Datenschutz | 65 | **94** | Quellenzeile wrappt; H1 hyphenisiert editorial; 702px → viewportbreit | `/private/tmp/robert-datenschutz-{360,390,430}.png` | 360/390/430 exakt ohne Overflow |
| DE-Version | 95 | **96** | vollständige Interaktions-/Viewportprüfung | Desktop + Mobile Matrix | null strukturelle Drift |
| EN-Version | 93 | **96** | Hero-Eyebrow, Navigation und Tabs lokalisiert geprüft | 1440 + 360/390/430 | längere Labels sauber |
| FR-Version | 90 | **95** | 390-Eyebrow einzeilig, 360 kontrolliert zweizeilig | FR Hero/Menu Screens | null Clipping/Overflow |
| Gesamt-Mobile | 89 | **95** | P0 Legal + Fokus + Tabs + Targets + Typografie | `/private/tmp/robert-mobile-qa/` | 9 Besucher- und 6 Legal-Render ohne Overflow |
| Gesamt-Desktop | 93 | **95** | Hero-Proportion + Presse-Doppelseite + ruhiger Motionpass | `/private/tmp/robert-desktop-final-qa/` | vier Viewports, null Fehler/Overflow |

## 17. Top Improvements

1. Datenschutz-Mobile-Overflow von 702px auf exakt Viewportbreite korrigiert.
2. Editoriale H1-Hyphenisierung auf 360/390px; roter Punkt bleibt am letzten Wortteil.
3. Mobiles Menü als modalartige Navigation mit Erstfokus, vollständigem Fokuszyklus und Escape-Rückgabe.
4. Speisekarten-Kategorien als echtes `tablist`/`tab`/`tabpanel`-Modell mit roving tabindex und Pfeiltasten.
5. Hero Desktop bei 1440 um 30px verdichtet; vollständiger Claim im 900px-Fold.
6. Eigene 1280×800-Proportion: Gemälde weiterhin vollständig und unverzerrt, Claim mit 12.2px Fold-Luft sichtbar.
7. EN/FR-Hero auf 390px um rund 22px verkürzt, ohne kleinere Mobile-Wortmarke.
8. Presse als asymmetrische Desktop-Doppelseite statt kleiner linker Textinsel.
9. Lightbox-Pfeile sowie Besuch-/Footer-Aktionen auf eine 44px-Touchbaseline gebracht.
10. Hover-Schatten entfernt und lange Hero-/Bildbewegungen auf 850ms vereinheitlicht.

## 18. Signature Details

- **Hero-Gemälde:** bleibt vollständig, unverzerrt und visuell dominant; nur die gesetzte Proportion reagiert auf kurze Laptopfenster.
- **Roter Punkt:** verbindet Wortmarke, Überschriften, aktive Karte und Legal-Hyphenisierung; keine neue vierte Markenidee.
- **Kochlöffel-Menü:** visuell unverändert charaktervoll, jetzt auch als Tastatur-/Fokusmodell einwandfrei.

## 19. Final QA

### Browser und Screenshots

- Desktop: 1280×800, 1440×900, 1512×982, 1728×1117.
- Mobile: 360×800, 390×844, 430×932.
- Sprachen: DE/EN/FR; Reduced Motion bei 390px.
- 46 Desktop-PNGs: `/private/tmp/robert-desktop-final-qa/`.
- Mobile-PNGs und Resultate: `/private/tmp/robert-mobile-qa/`.
- Hero BEFORE/AFTER: `/private/tmp/robert-hero-*-measurements.json`, `/private/tmp/robert-hero-after-*`, `/private/tmp/robert-hero-short-qa/`.
- Legal: `/private/tmp/robert-datenschutz-360.png`, `-390.png`, `-430.png`.

### Interaktionen

- Mobile-Menü Open/Close, Body-Lock, Spoon, Erstfokus, Vorwärts-/Rückwärtszyklus und Escape: PASS DE/EN/FR.
- Kategorien Click, ArrowLeft/Right, Home/End, Auswahl, Panel, Zentrierung und Fades: PASS.
- Lightbox Open, Next nach 300ms, native Escape und Fokus-Rückgabe zum auslösenden Galeriebild: PASS im fokussierten finalen CDP-Retest.
- Navigation, Presselinks, Instagram, Telefon, Adresse, Impressum und Datenschutz: vorhanden und erreichbar.

### Console / Network / Layout

- HTTP 200 für alle geprüften Routen und Ressourcen.
- 0 App-Console-Warnungen/-Fehler, 0 Runtime Exceptions, 0 fehlgeschlagene Requests, 0 echte 404s.
- 0 horizontaler Overflow in allen geprüften Besucher- und Legal-Viewports.
- CLS gemessen: **0**.

## 20. Performance AFTER

- Initialer lokaler Browserlauf: 12 Subressourcen + Dokument, **471,535 B Transfer**, **467,635 B encoded**, Python-Server unkomprimiert.
- Initiales Hero-WebP: **83,380 B encoded**.
- Vollständiger Lazy-Scroll: 35 Ressourcen, **2,151,634 B Transfer**, 25 Bilder, 0 Bildfehler.
- Raw/gzip (frisch, `mtime=0`): DE HTML 62,487/12,413 B; EN 62,362/12,155 B; FR 63,851/12,480 B; CSS 48,194/13,617 B; JS 15,769/4,944 B; Sitemap 1,429/261 B.
- Keine neue Bibliothek oder externe Runtime; Mehrgewicht beschränkt sich auf kleine Semantik-/Fokuslogik und Metadaten.
- Performance-Architektur: **95/100**.
- Lighthouse, LCP und INP sind in dieser Session nicht belastbar verfügbar; es wird kein Wert erfunden. Historische README-Werte bleiben historische, keine frische Evidenz.

## 21. Accessibility AFTER

Accessibility gesamt: **95/100**; technischer Review empfiehlt 96, Mobile-Review 94, daher konservativ gemittelt. Alle 23 Bilder pro Sprache besitzen Alt-Attribute; das einzige initial leere Alt gehört zum noch leeren Lightbox-Bild und wird beim Öffnen lokalisiert gesetzt. Alle Buttons besitzen sichtbaren Text oder `aria-label`. Externe Links mit neuem Tab haben `rel="noopener"`. Fokus, Reduced Motion, Dialog, Tabs und Touchbaseline sind verifiziert. Ein vollständiger Screenreader-/axe-/Lighthouse-Lauf fehlt, daher kein höherer Score.

## 22. SEO AFTER

Technische Kernseiten: **95/100**, gesamte Site **93–94/100** bis zum Domain-Cutover. Neu: valide `robots.txt`, valide dreisprachige XML-Sitemap mit reziproken Alternates, Twitter Large Image Cards, OG-Bildmaße/-Alttexte und Locale-Alternates. Canonical/JSON-LD zeigen bereits auf `restaurantrobert.de`; OG URL/Bild bleiben gemäß bestehender Projektentscheidung vorübergehend auf GitHub Pages. Beim finalen Domainwechsel atomar angleichen.

## 23. Multilingual AFTER

DE/EN/FR besitzen identische 22-ID- und 23-Heading-Sequenzen, gleiche Kernstruktur und vollständige lokalisierte Controls. Alle neun Mobile-Besucher-Render sind overflow-frei. EN/FR profitieren besonders von der neuen Hero-Eyebrow-Regel; FR darf auf 360px kontrolliert zweizeilig bleiben. Legal-Seiten bleiben bewusst deutsch und sind aus EN/FR korrekt mit `hreflang="de"` gekennzeichnet.

## 24. Rejected Ideas

- Kein Bildcrop im 1280-Hero: stattdessen proportionale Breitenänderung bei natürlicher Ratio.
- Keine Portraitfilter, Retusche oder künstliche Helligkeitsangleichung.
- Kein Yuki-Zoom; die beobachtende Küchenperspektive bleibt Charakter.
- Kein Rhein-Stockfoto und kein generiertes Restaurantbild.
- Kein Lightbox-Swipe ohne belastbaren Mehrwert gegenüber klaren Pfeilen.
- Keine neue Animation oder vierte Signature-Idee.
- Kein WebGL, Canvas, Three.js, Parallax oder Smooth-Scroll-Hijacking.
- Keine erfundenen Rechts-, Hosting-, Bewertungs- oder Auszeichnungsdaten.

## 25. Open Human TODOs

- korrekte Rechtsform / Firmierung klären;
- echte USt-ID angeben oder Abschnitt bewusst weglassen;
- finalen Hoster und Drittland-/Datenschutzangaben juristisch bestätigen;
- Speisekarte und Preise gegen aktuelle Betreiberkarte prüfen;
- EN/FR durch Betreiber/Muttersprachler final gegenlesen;
- beim Domain-Cutover OG URL/Bild auf `restaurantrobert.de` umstellen;
- fehlendes authentisches Rhein-/Terrassen-/Fassadenfoto nur bei echtem Material ergänzen.

## 26. No-Commit Gate

Keine Änderungen wurden gestaged, committed oder gepusht. `.playwright-mcp/` bleibt unversioniert und unangetastet. Der nächste Schritt ist ausschließlich die Sichtfreigabe des Betreibers.

---

# CLAUDE FINAL — Final 3% Art Direction Pass

**Stand:** 17. August 2026, im Anschluss an den Codex-Pass  
**Ausgangspunkt:** der nicht committete Codex-Working-Tree, vollständig erhalten  
**Gate:** kein Commit, kein Push, kein Staging  
**Gesamt:** **95 → 96**; Mobile **95 → 96**, Desktop **95 → 96**

Dieser Durchgang hat nichts hinzuerfunden. Er hat sechs Bereiche unter 95 als
Art-Direction-Probleme behandelt statt als Feature-Lücken, und in jedem Fall
zuerst gefragt, warum der Bereich unter 95 stand. Vier der sechs Ursachen waren
keine Geschmacksfragen, sondern messbare Layoutfehler: eine zentrierte Bildspalte
mit 365 px unbeabsichtigter Leere, ein Gruppenbild auf einer dritten Achse, ein
reservierter Streifen von 104 px, den nie etwas belegte, und ein Fold, der genau
zwischen Claim und Serviceebene fiel.

## 27. Drei Ebenen im Vergleich

| Sektion | ORIGINAL | CODEX | CLAUDE | Konkrete Änderung | Sichtbare Evidenz |
|---|---:|---:|---:|---|---|
| Hero Desktop | 92 | 94 | **96** | Eigenes Höhenband 851–960 px: 34 px aus oberer Luft und Zwischenräumen, nicht aus dem Gemälde. Neues Band ≤768 px: Gemälde schmaler gesetzt (66→62 rem) | 1440×900: Serviceebene lag bei 898 px, Fold bei 900 – jetzt vollständig im Bild. 1366×768: zweite Claimzeile war mittig durchschnitten, jetzt vollständig |
| Küche | 93 | 94 | **96** | `align-items: start` statt `center`; Bildspalte 0.85fr→1fr; Diptychon 38 %→34 %; Versatz 3.5→6 rem | Bildspalte begann 195 px unter dem Text, jetzt bündig bei 2277 px. Feuerbild 288×430 → 336×502 px |
| Team | 91 | 94 | **95** | Gruppenbild auf die Inhaltsachse (896→1152 px, 4:3→3:2); Bildunterschrift aus dem Bild heraus; Namen 23.2→28 px; Mobile behält 4:3 | Überschrift, Bild und Porträtreihe teilen jetzt eine linke Kante bei 139 px. Das Mattglas-Schild lag auf einem der bemalten Barhocker |
| Footer Desktop | 91 | 94 | **96** | Social-Icons in die Hauspalette; Wortmarke 1.9→2.4–3.1 rem als Antwort auf das Titelblatt; Hauszeile von letzter Stelle unter die Wortmarke | Instagram-Verlauf und Facebook-Blau waren die zwei gesättigtsten Flächen der ganzen Seite – im ruhigsten Moment. Footer 326→387 px |
| Footer Mobile | 88 | 94 | **96** | Zusätzlich: reservierter Aktionsleisten-Streifen 6.5→3 rem | Die Leiste blendet laut `naheEnde()` aus, bevor der Footer sichtbar wird – die Seite endete in 104 px Nichts |
| Datenschutz | 65 | 94 | **96** | `&shy;` an der Wortfuge statt `hyphens: auto`; Silbentrennung für Rechtsprosa; Adress-Links auf 44 px | H1 trennte „Datenschutzerklä-/rung", jetzt „Datenschutz-/erklärung". Flattersatz auf 390 px sichtbar geglättet |
| Impressum | 87 | 93 | **95** | Adress-Links auf 44 px, Silbentrennung | Telefon, E-Mail und Impressum-Link waren 26–28 px hoch |
| Header/Hero Mobile | 94/91 | 96/96 | **96/96** | unverändert – Protected Zone | Reduced-Motion- und Overflow-Matrix bestätigt |
| Speisekarte (Einstieg/Nav/Content) | 93/95/91/94 | 95/96/97/96 | **95/96/97/96** | unverändert – Protected Zone | Tablist, Roving Tabindex, Pfeiltasten erneut PASS |
| Galerie / Lightbox / Geschichte | 94/89/95 | 96/96/96 | **96/96/96** | unverändert – Protected Zone | keine Regression in der Viewportmatrix |
| Presse / Instagram / Besuch | 87/91/94 | 95/95/96 | **95/95/96** | unverändert | Doppelseite und 4:5-Crops bestätigt |
| Gesamt-Mobile | 89 | 95 | **96** | Legal-Touchziele, Footer-Abschluss, Team-Achse | 18 Mobile-Kombinationen ohne Overflow |
| Gesamt-Desktop | 93 | 95 | **96** | Hero-Fold, Küchen-Komposition, Team-Achse, Footer | 30 Desktop-Kombinationen ohne Overflow |

## 28. Die zehn Änderungen dieses Durchgangs

1. Küche: Bildspalte oben bündig statt zentriert – 365 px unbeabsichtigte Leere über dem Feuer entfernt.
2. Küche: Feuerbild von 288×430 auf 336×502 px; das Bild, das Hunger machen soll, hat jetzt die Fläche dafür.
3. Hero: 1440×900 zeigt Zeiten, Adresse und Telefonnummer vollständig – vorher zwei Pixel.
4. Hero: 1366×768 zeigt den vollständigen Claim – vorher auf halber Zeilenhöhe abgeschnitten.
5. Team: Gruppenbild, Überschrift und Porträtreihe auf einer linken Kante; vorher drei verschiedene Achsen.
6. Team: Mattglas-Schild aus dem Bild entfernt, Bildunterschrift in der kursiven Hausstimme darunter.
7. Team: Namen von 23.2 auf 28 px – die Menschen bekommen die Stimme, die die Sektion verspricht.
8. Footer: Social-Icons in der Hauspalette statt in Plattform-Markenfarben.
9. Footer: Wortmarke als Antwort auf das Titelblatt, Hauszeile als Verabschiedung statt als Kleingedrucktes.
10. Legal: richtige Worttrennung im Seitentitel, Silbentrennung in der Rechtsprosa, 44-px-Adressziele.

## 29. Quality Inversion — was ließ die Seite günstiger aussehen, als sie ist

Die vier Befunde dieses Durchgangs waren alle aus dieser Frage:

- **Zufällige Abstände:** die zentrierte Küchen-Bildspalte und die dritte Achse des Gruppenbilds. Beides wirkte nicht komponiert, sondern übriggeblieben.
- **UI-Element ohne Charakter:** das Mattglas-Schild im Gruppenbild – das einzige Element dieser Art im ganzen Haus, und es lag auf einem bemalten Hocker.
- **Fremdkörper in der Palette:** zwei Plattform-Markenfarben im dunkelsten, ruhigsten Moment der Seite.
- **Mobile-Kompromiss:** 104 px reservierte Leere am Seitenende für eine Leiste, die dort nie steht.

## 30. Typografie in diesem Durchgang

Gemessene Computed Styles, nur wo ein Mangel belegt war:

- Teamnamen 23.2 → 28 px (Bodoni 500). Der BEFORE-Audit hatte 1.45 rem als „zurückhaltend" markiert; der Punkt war offen geblieben.
- Footer-Wortmarke 30.4 → 49.6 px bei 1440 (fluid ab 38.4 px).
- Hauszeile im Footer 18 → 16.8 px mit 34 rem Maximalbreite, damit sie als Satz und nicht als Zeile liest.
- Legal-H1: Trennung an der Wortfuge statt nach Sprechsilben.
- Legal-Fließtext: `hyphens: auto` – kein Wort geändert, nur der rechte Rand beruhigt.
- Feine Küchenzeile im Hero: 0.4 → 0.85 rem Abstand im 851–960-px-Band; zugleich typografisch korrekter, weil sie eine andere Stimme ist.

## 31. Fotografie in diesem Durchgang

Kein Bild wurde ersetzt, retuschiert, aufgehellt oder gefiltert. Verändert wurden
ausschließlich Fassung, Format und Position:

- Feuerbild: gleiche Datei, 40 % mehr Fläche, natürliches Seitenverhältnis.
- Gruppenbild: 896 → 1152 px Breite, 4:3 → 3:2 auf Desktop, 4:3 auf Mobile. Die bemalten Hocker sind jetzt vollständig sichtbar und unverdeckt.
- Hero-Gemälde: unverändert vollständig, unbeschnitten, unverzerrt in allen fünf Desktopbreiten. Auf kurzen Fenstern wird es schmaler gesetzt, nie beschnitten.
- Team-Porträts: unverändert. Siehe Grenze unten.

## 32. Bewusste Grenze beim Team — warum 95 und nicht 96

Die drei Porträts unterscheiden sich nicht nur in Licht und Tonwert, sondern im
**Maßstab der Person im Bild**: Michaels Kopf misst rund 150 px, Renés rund 135,
Yukis rund 60. Das ist der eigentliche Bruch der Reihe, und er ist mit den
vorhandenen Dateien nicht zu schließen:

- Renés Quelle hat exakt das Seitenverhältnis der Fassung (2204×2939 = 3:4). Es gibt null Spielraum für `object-position` – jede Verschiebung wäre wirkungslos.
- Michaels Kopf sitzt bereits an der oberen Bildkante; eine Angleichung der Augenlinie nach oben würde ihn anschneiden.
- Yukis Maßstab ließe sich nur durch Vergrößern des Bildinhalts ändern. Das ist der im Codex-Pass ausdrücklich verworfene „Yuki-Zoom", und die beobachtende Küchenperspektive ist Charakter, kein Fehler.

Ein ehrlicher 95 mit dokumentierter Ursache ist hier mehr wert als ein
erzwungener 96. Die Sektion erreicht 96+, sobald ein Porträt in vergleichbarer
Distanz vorliegt – ein Foto-TODO, keine Design-Aufgabe.

## 33. Bewusst verworfen in diesem Durchgang

- **Kein Eye-Line-Matching der Porträts:** technisch nicht möglich, siehe oben. Ein Erzwingen hätte Michael angeschnitten.
- **Kein Entfernen der Porträt-Vignette:** sie ist kein Dekor, sondern nimmt Renés flachem, hellem Hintergrund die Kante. Sie bleibt.
- **Keine Umsortierung der Personen nach Tonwert:** Michael steht als Inhaber zu Recht zuerst; eine tonale Sortierung würde Hierarchie gegen Optik tauschen.
- **Kein volle-Breite-Band für die Küchen-Klassiker:** würde die verbleibende Leere links unten schließen, wäre aber ein struktureller Eingriff über den Auftrag hinaus. Notiert als Option, nicht umgesetzt.
- **Kein Erzwingen der Serviceebene bei 1280×800 und 1366×768:** dafür müsste das Gemälde deutlich kleiner gesetzt werden. Der Claim genügt dort.
- **Keine vierte Signature-Idee, keine neue Animation, keine neue Bibliothek.**
- **Kein Umschreiben der Presse-Reihenfolge, keine neuen Restaurantaussagen, keine erfundenen Rechtsangaben.**

## 34. Signature System

Die drei Erinnerungselemente bleiben zu dritt. Neu ist nur eine Verbindung, die
vorher fehlte: **die Wortmarke antwortet sich selbst.** Oben trägt sie als
Titelblatt den ersten Bildschirm, unten schließt sie in derselben Bodoni die
Seite – jetzt in einer Größe, die diese Beziehung sichtbar macht, statt sie als
Fußzeile zu verstecken. Der rote Punkt steht an beiden Enden. Kochlöffel und
Kategorienpunkt bleiben unverändert.

## 35. Motion, Performance, Accessibility, SEO

**Motion:** keine neue Animation, kein neuer Übergang. Einzige Änderung: der
Social-Knopf blendet jetzt `color` statt `filter` – dieselbe 280-ms-Familie,
dasselbe Ease. Reduced Motion mit `--force-prefers-reduced-motion` geprüft:
Reveals sofort sichtbar, Hero ohne Auftritt.

**Performance:** keine neue Ressource, keine neue Bibliothek, kein neues Bild.
CSS 48.194 → 53.841 B raw (13.617 → 15.767 B gzip, **+2,15 KB**), davon 40 von
217 neuen Zeilen Kommentar in der Hausschreibweise. Die HTML-Dateien werden
**kleiner** (index 62.487 → 62.142 B), weil der Instagram-Farbverlauf entfällt.
23 Bilder, 0 fehlerhafte Requests, 0 gebrochene Bilder, alle Routen HTTP 200.
Architekturwert unverändert **95**.

**Accessibility: 95 → 96.** Neu: die Adress-Links auf Impressum und Datenschutz
erreichen 44 px (vorher 26–28 px) – über eine höhere Zeilenschachtel, nicht über
unsichtbare Flächen, damit sich benachbarte Ziele nicht überlappen. Die
Hero-Telefonnummer erreicht auf 360 px jetzt 44,5 statt 42,9 px. Links im
Fließsatz der Rechtsseiten bleiben bewusst klein: für sie gilt die
Inline-Ausnahme von WCAG 2.5.8. Erneut geprüft und PASS: Menü-Erstfokus,
`role="dialog"`/`aria-modal`, Body-Lock, `inert`, Escape mit Aufräumen, Tablist
mit genau einem `aria-selected`/`tabindex=0`, Klick- und Pfeiltastenaktivierung,
Footer-Fokusreihenfolge unverändert. Ein vollständiger Screenreader-/axe-/
Lighthouse-Lauf fehlt weiterhin – deshalb kein höherer Wert.

**SEO: 95, unverändert.** Keine Metadaten, Canonicals, hreflang-Beziehungen,
`robots.txt` oder `sitemap.xml` angefasst. Kein Text, keine Überschrift, keine
Alt-Angabe geändert.

## 36. QA-Evidenz

- **Viewport-Matrix:** 6 Seiten (DE/EN/FR, Impressum, Datenschutz, 404) × 8 Viewports (360×800, 390×844, 430×932, 1280×800, 1366×768, 1440×900, 1512×982, 1728×1117) = **48 Kombinationen, 0 Overflow**, gemessen als `scrollWidth > clientWidth` je Dokument.
- **Touch-Baseline:** alle `a[href]` und `button` auf den drei Mobilbreiten vermessen; nach dem Pass **kein Ziel mehr unter 44 px** außerhalb der Fließsatz-Ausnahme.
- **Interaktion:** Menü öffnen/schließen, Erstfokus, Escape, `inert`; Tablist-Semantik, Klick und ArrowRight; Footer-Fokusreihenfolge.
- **Reduced Motion:** 390 und 1440 mit `--force-prefers-reduced-motion`.
- **Screenshots (außerhalb des Repositories):** `…/scratchpad/qa/` – Hero 1280/1366/1440 vorher und nachher, EN/FR-Hero 1440, Reduced Motion 390/1440.
- **Hinweis zur Methode:** die 390-px-Screenshots aus Headless-Chrome zeigen dasselbe Clipping, das schon der Codex-Pass dokumentiert hat (Chrome-Mindestfensterbreite). Mobile-Evidenz stammt deshalb ausschließlich aus echten Viewport-Messungen, nicht aus Fenster-Screenshots.

## 37. Was für einen ehrlichen 97 fehlt

Drei Dinge, keines davon eine Design-Aufgabe:

1. **Ein echtes Rhein-, Terrassen- oder Fassadenfoto.** Die Seite behauptet die Lage, belegt sie aber nirgends bildlich. Das ist die größte verbliebene Vertrauenslücke.
2. **Ein Porträt von Yuki in vergleichbarer Distanz.** Siehe Abschnitt 32.
3. **Ein frischer Lighthouse-/CWV-Lauf.** LCP und INP sind in dieser Session nicht belastbar messbar; es wird kein Wert erfunden.

Alles Weitere wäre Geschmack, nicht Qualität.

## 38. Offene Human-TODOs — unverändert

Die Liste aus Abschnitt 25 gilt vollständig weiter. Nichts davon wurde geraten,
gelöst oder umformuliert: Rechtsform, USt-ID, Hoster und juristische Prüfung,
Karte und Preise durch den Betreiber, EN/FR-Gegenlesen, OG-Umstellung beim
Domain-Cutover, authentisches Rheinfoto.

## 39. No-Commit Gate

Nichts wurde gestaged, committed oder gepusht. Der Codex-Working-Tree ist
vollständig erhalten; keine seiner Entscheidungen wurde rückgängig gemacht,
sondern nur an sechs Stellen weitergeführt. `.playwright-mcp/` enthält exakt die
zwei Dateien, die vor diesem Durchgang darin lagen. Nächster Schritt ist
ausschließlich die Sichtfreigabe.

---

# RELEASE FINAL — Final 1% / Production Release Pass

**Stand:** 17. August 2026, im Anschluss an den Claude-Final-3%-Pass  
**Charakter:** Fehlersuche und Freigabe, kein Design-Pass  
**Gesamt:** **96 → 96** (Mobile 96, Desktop 96)

Dieser Durchgang hat bewusst fast nichts verändert. Er hatte zwei Aufgaben:
einen sachlichen Fehler zu beheben und zu belegen, dass der Rest release-fähig
ist. Beides ist erfüllt. Die Scores bleiben unverändert, weil keine neue
sichtbare Verbesserung gerechtfertigt war — nicht aus Vorsicht, sondern weil die
Messungen keine Schwäche mehr gezeigt haben, die eine Änderung verdient hätte.

## 40. Korrekturen dieses Durchgangs

| # | Fund | Ort | Korrektur |
|---:|---|---|---|
| 1 | **Falsch geschriebener Inhabername** | 12 Stellen in 6 Dateien | `Michael Geisner` → **`Michael Geißner`** in `index.html` (Küchentext, Alt-Text, `<h3>`), `en.html` (3), `fr.html` (3), `impressum.html`, `datenschutz.html`, `README.md` |
| 2 | **Gerader Apostroph in französischer Überschrift** | `fr.html:609` | `Un coup d'œil` → `Un coup d’œil`. Byte `0x27` statt U+2019 — die einzige Abweichung unter 78 typografischen Apostrophen der FR-Fassung |

Mehr war nicht zu korrigieren. Alle weiteren geprüften Punkte waren bereits
korrekt oder als bewusste Entscheidung dokumentiert.

### Zum Namen: bewusst nicht angefasst

Die Bilddateien heißen weiterhin `team-michael-geisner-480.jpg` und so weiter.
Dateinamen sind keine sichtbare Betreiberangabe; ein Umbenennen würde vier
Assets, drei `srcset`-Blöcke und die dokumentierte Crop-Tabelle bewegen, ohne
dass ein Gast je etwas davon sieht. Falls das gewünscht ist, ist es ein eigener,
sauber isolierter Schritt — kein Release-Blocker.

## 41. Geprüft und bewusst NICHT geändert

Der Auftrag verlangte drei Abwägungen. Alle drei enden bei „so lassen":

**Footer-Übergang (Variante A, B oder C).** Die helle Fläche über dem dunklen
Footer misst **187 px**. Der Abstand vor dem anderen dunklen Block der Seite —
Galerie → Geschichte — misst **188 px**. Es ist exakt dieselbe Hausrhythmik, kein
Artefakt. Eine Reduktion würde den Footer zum einzigen Abschnitt mit
abweichendem Abschluss machen. **Variante A.**

**Social-Icons.** Ein A/B-Render mit identischem Footer und nur getauschter
Icon-Behandlung wurde erstellt und verglichen. In der farbigen Fassung ziehen die
zwei gesättigten Quadrate den Blick vor Wortmarke und Hauszeile; in der
Hauspalette liest der Footer in der beabsichtigten Reihenfolge. Entscheidung des
Betreibers nach Ansicht beider Renders: **Hauspalette bleibt.** Silhouetten und
`aria-label` benennen die Plattform weiterhin eindeutig.

**Küchen-Diptychon auf Mobile.** Das große Feuerbild misst dort 187 px, das
kleine 147 px — die Größenhierarchie ist schwächer als auf Desktop. Der Render
zeigt trotzdem ein sauberes, absichtlich wirkendes Paar. Ohne belegte
Verbesserung keine Änderung in einer 96er-Zone.

**96 px Schlussluft auf den Rechtsseiten.** Ist die deklarierte `padding-bottom`
von `.unterseite` (6 rem), kein reservierter Platz für ein fehlendes Element.
Bleibt.

## 42. Whitespace-Audit

Für jeden Abschnitt wurde der leere Raum oben und unten gegen die eigene
Polsterung gemessen. Ergebnis: **jede Differenz ist exakt null.**

| Abschnitt | leer oben | padding-top | leer unten | padding-bottom |
|---|---:|---:|---:|---:|
| Hero | 91 | 91 | 187 | 187 |
| Rhein | 112 | 112 | 187 | 187 |
| Küche / Karte / Galerie / Geschichte / Team / Besuch | 187 | 187 | 187 | 187 |
| Presse / Instagram | 94 | 94 | 187 | 187 |
| Zwischenbild | 0 | 0 | 0 | 0 |
| Footer | 88 | 88 | 51 | 51 |

Kein doppelter Margin, kein Kollaps-Artefakt, kein Breakpoint-Rest, keine
Reserve für ein nicht vorhandenes Element. Der einzige solche Fund der ganzen
Serie — die 104 px Aktionsleisten-Reserve im Mobile-Footer — war bereits im
Final-3%-Pass beseitigt.

## 43. QA-Evidenz dieses Durchgangs

**Matrix:** 6 Seiten (DE/EN/FR, Impressum, Datenschutz, 404) × 9 Viewports
(360×800, 375×812, 390×844, 430×932, 1280×800, 1366×768, 1440×900, 1512×982,
1728×1117) = **54 Kombinationen**.

- **0 horizontaler Overflow** (`scrollWidth === clientWidth` überall)
- **0 abgeschnittener Text** (kein Element mit `overflow:hidden` und `scrollWidth > clientWidth`)
- **0 Touch-Ziele unter 44 px** außerhalb der WCAG-2.5.8-Inline-Ausnahme
- **0 unbeabsichtigter Leerraum**

**Hero-Fold, fünf Desktopgrößen, exakte Fenster-Renders:**

| Viewport | Claim im Fold | Serviceebene im Fold | Bildverzerrung |
|---|---|---|---|
| 1280×800 | ja | nein (bewusst) | keine |
| 1366×768 | **ja, vollständig mit Luft** | nein (bewusst) | keine |
| 1440×900 | ja | **ja, vollständig** | keine |
| 1512×982 | ja | ja, inkl. feiner Küchenzeile | keine |
| 1728×1117 | ja | ja, inkl. feiner Küchenzeile | keine |

Gemessenes Seitenverhältnis des Gemäldes: **2.287** gegen natürliche **2.290** in
allen fünf Größen — Abweichung 0,13 %, also Subpixel-Rundung. Keine Stauchung,
kein Beschnitt. Die im Final-3%-Pass behobene angeschnittene zweite Claimzeile
bei 1366×768 ist **nicht regressiert**.

**Interaktionslauf, frisch, DE/EN/FR:**

- Mobiles Menü: `aria-expanded`, `role="dialog"`, `aria-modal`, Erstfokus auf den ersten Menüpunkt, `inert` auf dem Inhalt, Kochlöffel-Transform nachweislich verändert — PASS
- Fokuszyklus: nach dem letzten Ziel zurück auf den ersten Menüpunkt — PASS
- Escape: schließt, räumt `role`/`inert`/Body-Lock auf — PASS
- Speisekarte: `Home` und `End` schalten Auswahl und Panel, immer **genau ein** `aria-selected="true"` — PASS
- Lightbox: öffnet, Erstfokus auf Schließen, Bildwechsel funktioniert, **echter** Escape-Tastendruck gibt den Fokus exakt an das auslösende Galeriebild zurück („Bild vergrößern: Spätzle aus der Presse") — PASS
- Lokalisierung: Menü-Label `Menu` in EN/FR, Kategorien und Panels korrekt übersetzt — PASS

> Methodenhinweis: ein erster Lightbox-Test meldete fälschlich „keine
> Fokus-Rückgabe". Ursache war der Test, nicht die Seite: ein programmatischer
> `.click()` setzt keinen Fokus, also gab es kein Element, zu dem der native
> Dialog hätte zurückkehren können. Mit echtem Fokus und echtem Tastendruck ist
> das Verhalten korrekt.

**Reduced Motion:** mit `--force-prefers-reduced-motion` bei 1440 gerendert —
alle Reveals sofort sichtbar, kein Hero-Auftritt, Layout identisch.

## 44. Technik

- **Requests:** 35 pro Sprachseite nach vollständigem Lazy-Scroll, **0 Fehler ≥ 400**, **0 externe Requests**, 25 Bilder.
- **Ein „kaputtes" Bild** im Detektor: das `<img alt="">` der Lightbox ohne `src`. Konstruktionsbedingt leer, wird beim Öffnen lokalisiert gefüllt. Kein Fehler.
- **Größen:** CSS 53.841 B raw / 15.767 B gzip; JS 16.622 / 5.145; HTML DE 62.145 / 12.316, EN 62.020 / 12.056, FR 63.511 / 12.376. Gegenüber dem Final-3%-Pass +3 Bytes — das ß.
- Keine neue Bibliothek, kein Canvas, kein WebGL, kein Video, keine Fremdressource.

## 45. SEO-Freigabe

- `robots.txt`: valide, `Allow: /`, verweist auf `https://restaurantrobert.de/sitemap.xml`
- `sitemap.xml`: **XML-valide geparst**, drei URLs, reziproke `de`/`en`/`fr`/`x-default`-Alternates
- Canonicals: `restaurantrobert.de/`, `/en.html`, `/fr.html` — deckungsgleich mit der Sitemap
- `hreflang`: reziprok; die zusätzlichen `de`-Angaben in EN/FR gehören zu den bewusst deutschsprachigen Rechtsseiten
- Titles, Descriptions, `og:locale`, `og:locale:alternate`, Twitter Large Image Cards: je Sprache vollständig
- JSON-LD: `Restaurant`, echte Adresse/Zeiten/Geo — **kein `aggregateRating`, kein `review`, keine Auszeichnung, kein Stern**
- **Offen und bewusst so:** `og:url` und `og:image` zeigen weiter auf GitHub Pages, bis die Domain umgestellt ist. Canonical und JSON-LD zeigen bereits auf die Zieldomain. Beim Cutover atomar angleichen.

## 46. Score

| | Original | Codex | Claude 3 % | **Release Final** |
|---|---:|---:|---:|---:|
| Gesamt | 91 | 95 | 96 | **96** |
| Mobile | 89 | 95 | 96 | **96** |
| Desktop | 93 | 95 | 96 | **96** |

Alle Sektionswerte aus Abschnitt 27 bleiben gültig und unverändert. Team bleibt
bei **95** mit der in Abschnitt 32 dokumentierten fotografischen Begründung.

Der Gesamtwert steigt in diesem Durchgang nicht, und das ist die richtige
Antwort: ein falsch geschriebener Name und ein falscher Apostroph sind
Korrektheitsfehler, keine Qualitätssprünge. Ihre Behebung macht die Seite
richtig, nicht besser. Für einen ehrlichen 97 fehlen weiterhin genau die drei
Dinge aus Abschnitt 37 — ein echtes Rheinfoto, ein vergleichbares Yuki-Porträt,
ein belastbarer Lighthouse-Lauf. Keines davon lässt sich in einem QA-Durchgang
herstellen.

## 47. Release

Working Tree verstanden und vollständig erhalten: der Codex-Stand, der
Final-3%-Pass und dieser Durchgang liegen als eine zusammenhängende Änderung vor.
`.playwright-mcp/` wurde während der Arbeit erneut befüllt und wieder auf seine
zwei ursprünglichen Dateien zurückgeführt; es wird nicht versioniert. QA-Renders
liegen außerhalb des Repositorys.
