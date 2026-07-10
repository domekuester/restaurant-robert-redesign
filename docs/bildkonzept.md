# Bildkonzept ROBERT. – Sortierung & Einsatz

Stand: Juli 2026 · 15 Fotos in `assets/photos/original/`, alle Hochformat.
Grundsatz: Lieber wenige Bilder groß und mit Absicht als alle irgendwo.
Die Website erzählt einen Abend im Restaurant – jedes Bild hat eine Rolle,
oder es bleibt (vorerst) draußen.

## Hero

| Original | Semantischer Name | Warum |
|---|---|---|
| P1310654-2 | `gastraum-stuck-kronleuchter` | Das eine Bild, das den Ort erklärt: Jugendstil-Stuck, Kronleuchter, gedeckte Tische, Lampenlicht. Hochformat zeigt die ganze Decke – deshalb der Split-Hero. |

## Küche (Sektion „Die Küche")

| Original | Name | Warum |
|---|---|---|
| P1310993 | `kueche-feuer` | Offenes Feuer, Bewegungsunschärfe, Dampf – das ehrlichste Bild des Handwerks. Hauptbild. |
| P1310809-2 | `kueche-koeche` | Zwei Köche mittendrin, Blick zur Kamera – als kleines, versetztes Zweitbild. |

## Speisen

| Original | Name | Warum |
|---|---|---|
| P1360599 | `teller-jakobsmuscheln` | Das stärkste Food-Bild (Coquilles St. Jacques in der Schale). Großes Feld in der Galerie statt Food-Tapete – ein Teller, der wirkt, schlägt zehn kleine. |

## Innenraum

| Original | Name | Warum |
|---|---|---|
| P1310870 | `gastraum-ecke-lampe` | Ecke mit Bildern, Kugellampe, bemalten Tischen – der intime Gegenschuss zum Hero, steht im Intro „Am Rhein". |

## Terrasse / Rhein

**Noch kein Material.** Die Lage ist das stärkste Argument des Hauses und
existiert bisher nur im Text. Siehe `foto-wunschliste.md`, Punkt 1.
Der Intro-Abschnitt ist so gebaut, dass ein Rheinblick-Bild dort später
das Ecken-Bild ergänzen oder ersetzen kann.

## Team

| Original | Name | Warum |
|---|---|---|
| P1320322 | `team-an-der-bar` | Das ganze Team hinter der geschwungenen Bar unterm Stuck – Gruppenbild der Sektion, beschnitten auf 4:3. |
| P1320294 | `team-michael-geisner` | Michael, entspannt an der Bar, Ringelshirt – Porträt-Slot 1. |
| yuki | `team-yukihiro-takahashi` | Yuki durch das Küchenregal, konzentriert. Im Original sehr dunkel; die Pipeline hellt die Kopie um +35 % auf (Original bleibt unangetastet). Porträt-Slot 3. |

Porträt-Slot 2 (René) wartet weiter auf ein Foto – Platzhalter aktiv.

## Details

| Original | Name | Warum |
|---|---|---|
| P1310836 | `detail-weinflaschen` | Pouilly-Fumé im Goldlicht – Wein ohne Weinkarten-Klischee. |
| P1310660 | `detail-beaujolais-poster` | „Le Beaujolais nouveau est arrivé!" hinter Gläsern – Frankreich an der Wand, nicht als Behauptung. |
| P1310861 | `detail-espresso` | Laufender Espresso – der Moment nach dem Essen. |
| P1360585 | `detail-gemaelde` | Gemälde + Schild „Für Garderobe keine Haftung" – der Humor des Hauses in einem Bild. |

## Galerie (kuratierte Strecke, 6 Bilder)

Reihenfolge: Teller → Wein → Poster → Mensch → Espresso → Gemälde.
Nie zwei gleiche Motivtypen nebeneinander.

1. `teller-jakobsmuscheln` (groß, 2×2)
2. `detail-weinflaschen`
3. `detail-beaujolais-poster`
4. `kueche-durchreiche` (P1310880-2 – Michael schaut durch den Pass)
5. `detail-espresso`
6. `detail-gemaelde`

## Geschichte

| Original | Name | Warum |
|---|---|---|
| P1360767 | `kueche-schwarzweiss` | Das einzige S/W-Bild – zwei Köche am Feuer. Erinnerung braucht kein Farbfoto. Exklusiv für die Robert-Sektion. |

## Bewusst nicht eingesetzt

| Original | Grund |
|---|---|
| P1360582 (Bokeh, gerahmtes Bild) | Zu abstrakt – schön als Einzelbild, erklärt aber nichts. Reserve für später (z. B. Datenschutz-/Impressum-Seiten oder Social). |

## Technik

- Pipeline: `tools/optimize-images.sh` → WebP + JPEG-Fallback, 480/960 px
  (Hero zusätzlich 1600/2200), eingebunden über `<picture>`.
- Originale werden nie verändert oder umbenannt; semantische Namen und
  Entwicklungs-Anpassungen existieren nur in `optimized/`.
