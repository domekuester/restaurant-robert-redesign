# Bildkonzept ROBERT. – Sortierung & Einsatz

Stand: Juli 2026 (v2, Bordeaux-Ära) · 22 Fotos in `assets/photos/original/`,
alle Hochformat.
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

## Stadt / Rhein (seit v2 vorhanden!)

| Original | Name | Warum |
|---|---|---|
| P1310689 | `stadt-rheinturm` | Rheinturm im Abendlicht, gerahmt von Dachsilhouetten – DAS Ortsbild. Steht im Intro „Am Rhein" neben dem Text. |
| P1310729 | `stadt-promenade` | Promenade mit Schlossturm, Lambertus und Riesenrad durch die Platanen – breit beschnitten (3:2) unterhalb des Intro-Duos, mit Bildunterschrift. |

Ein Foto der eigenen Terrasse/Fassade fehlt weiterhin (Wunschliste).

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

## Galerie (kuratierte Strecke, 6 Bilder, seit v2 mit S/W-Rhythmus)

Wechsel Farbe/Schwarzweiß als Editorial-Rhythmus, nie zwei gleiche
Motivtypen nebeneinander:

1. `teller-jakobsmuscheln` (groß, 2×2) – Farbe, Food
2. `detail-weinflaschen` – Farbe, Detail
3. `gaeste-spiegel-sw` (P1360579) – S/W, Menschen/Stammgäste
4. `detail-beaujolais-poster` – Farbe, Wand
5. `gastraum-ecke-lampe` – Farbe, Raum (in v2 aus dem Intro hierher gezogen)
6. `detail-glaeser-sw` (P1360589) – S/W, abstraktes Detail

**In v2 aus der Galerie entfernt:** `detail-espresso` (Fremdmarke „COSTA“
prominent im Bild), `kueche-durchreiche` (Michael ist bereits 3× auf der
Seite), `detail-gemaelde` (bei Kachelgröße zu unruhig).

## Geschichte

| Original | Name | Warum |
|---|---|---|
| P1360767 | `kueche-schwarzweiss` | Das einzige S/W-Bild – zwei Köche am Feuer. Erinnerung braucht kein Farbfoto. Exklusiv für die Robert-Sektion. |

## Küche (v2)

Hauptbild bleibt `kueche-feuer` (Farbe). Das Zweitbild ist jetzt
`kueche-flambe-sw` (P1360623, S/W-Flambé) – der Farbe/S/W-Kontrast ersetzt
das unruhige Farbbild der beiden Köche.

## Bewusst nicht eingesetzt (Reserve)

| Original | Grund |
|---|---|
| P1360582 (Bokeh, gerahmtes Bild) | Zu abstrakt – erklärt nichts. |
| P1360609 (S/W Fleisch überm Feuer) | Stark, aber das vierte Feuermotiv wäre eins zu viel. Erste Wahl, falls je ein Bild in der Küche-Sektion getauscht wird. |
| P1360622-3 (Küche farbig, weit) | Unruhig (Zettel, Kisten); die S/W-Variante desselben Moments ist stärker. |
| kueche-koeche (P1310809-2) | In v2 gewichen – Ringelshirt-Motiv doppelt mit Flambé-Bild. |
| detail-espresso, kueche-durchreiche, detail-gemaelde | Siehe Galerie-Begründung. |

## Technik

- Pipeline: `tools/optimize-images.sh` → WebP + JPEG-Fallback, 480/960 px,
  eingebunden über `<picture>`. Zusätzliche 1600er-Stufe für den Hero
  (plus 2200) und die drei Großflächen (`GROSSE_FLAECHEN` im Skript:
  Galerie-Hauptkachel, Promenade, Team-Gruppenbild) – sonst werden
  Retina-Displays weich.
- `sizes` muss die ECHTE Darstellungsbreite nennen (Galerie-Hauptkachel
  = 63vw, breite Querformate = max 896px), sonst zieht der Browser zu
  kleine Dateien.
- Zuschnitte per `aspect-ratio` + `object-position`: Team-Gruppenbild
  4:3 bei 50% 58% (Gesichter zentriert), Promenade 3:2 bei 50% 42%.
- Galerie-Regel: nie zwei S/W-Kacheln benachbart (auch vertikal prüfen!).
- Originale werden nie verändert oder umbenannt; semantische Namen und
  Entwicklungs-Anpassungen existieren nur in `optimized/`.
