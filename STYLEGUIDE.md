# TT Pistoia asd — Style Guide

Documento di riferimento per lo sviluppo del sito **TT Pistoia asd** (tennistavolo, Pistoia).
Versione 1.0 — settembre 2026. Tutti i valori qui riportati sono quelli effettivamente usati nel prototipo HTML.

Regola generale: **non introdurre colori, font, raggi o ombre non elencati in questo documento.**

---

## 1. Colori

### 1.1 Colori sociali

| Nome | HEX | Uso |
|---|---|---|
| Blu sociale | `#01017b` | Footer, testo enfatico, titoli su fondo chiaro, testate tabella |
| Blu chiaro | `#0a0a8f` | **solo** come stop intermedio del gradiente |
| Bordeaux | `#8c0a19` | **solo** come stop intermedio del gradiente |
| Rosso sociale | `#e50d22` | Accento: filetti, badge, bordi social, sottolineature titolo |

### 1.2 Neutri

| Nome | HEX | Uso |
|---|---|---|
| Fondo base | `#ffffff` | Sezione standard |
| Fondo grigio | `#f4f5f7` | Sezione alternata, card dato, pannelli |
| Fondo grigio tenue | `#f7f8fa` / `#fafbfc` | Righe alternate tabella, box nota |
| Bordo / filetto | `#e6e8ec` | Divisori di contenuto |
| Bordo controlli | `#dfe2e8` | Chip inattivi, box con bordo |
| Filetto tabella | `#eceef1` | Righe tabella |
| Bordo griglia tabella FITeT | `#b8bfc8` / `#cfd4da` | Celle e contenitore delle classifiche |
| Testo forte | `#22252a` | Titoli card, valori |
| Testo lungo | `#26282d` / `#33363b` | Corpo editoriale, commi regolamento |
| Testo corrente | `#4a4d53` / `#5a5e65` | Paragrafi di sezione |
| Testo secondario | `#6b7078` / `#8a8f98` | Voci menu, metadati, didascalie |
| Testo tenue | `#a6abb3` | Numerazione, note |

### 1.3 Stati classifica (colori FITeT, usati **solo** nelle tabelle di classifica)

| Stato | Fondo riga | Uso |
|---|---|---|
| Playoff | `#a6e3a1` | Prima classificata |
| Retrocessa | `#f6a5a5` | Ultima classificata |
| Riga neutra | `#ffffff` / `#f4f5f7` | Alternanza per tutte le altre posizioni |
| Fondo legenda | `#eceef1` | Ultima riga della tabella |
| Quadratino legenda | bordo `#98a2ad` | 12×12px |

---

## 2. Gradienti

Il gradiente blu→rosso è l'elemento identitario del sito. Tre varianti, **da non modificare**.

### 2.1 Gradiente fondo (115°)
Hero, sezioni piene, pulsanti primari, badge numerati, testate tabella.
```css
background: linear-gradient(115deg, #01017b 0%, #0a0a8f 45%, #8c0a19 82%, #e50d22 100%);
```
Negli hero l'angolo di partenza è `42%` invece di `45%` e l'`80%` invece di `82%`.

### 2.2 Gradiente testo (100°)
**Tutti** i titoli su fondo bianco o grigio, e **ogni** elemento cliccabile (link di testo, frecce, titoli accordion, titoli card).
```css
background: linear-gradient(100deg, #01017b 0%, #0a0a8f 45%, #c00c1e 88%, #e50d22 100%);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
color: transparent;
```

### 2.3 Alone bicolore
Card con fotografia poste su fondo grigio: ombra blu a sinistra, rossa a destra.
```css
box-shadow:
  -10px 12px 26px -8px rgba(1,1,123,.42),
   10px 12px 26px -8px rgba(229,13,34,.34),
   0 2px 8px rgba(0,0,0,.06);
/* hover */
box-shadow:
  -14px 18px 34px -8px rgba(1,1,123,.50),
   14px 18px 34px -8px rgba(229,13,34,.42),
   0 3px 10px rgba(0,0,0,.07);
```

### 2.4 Velo luce (dentro le sezioni a gradiente)
```css
background: radial-gradient(circle at 22% 40%, rgba(255,255,255,.10) 0%, transparent 60%);
```

---

## 3. Tipografia

Due font Google, nessun altro.

```html
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
```

- **Archivo** — titoli e voci di menu. Pesi 600 / 700 / 800. Interlettera da `-.005em` a `-.02em`.
- **Manrope** — testo corrente, etichette, dati. Pesi 400 / 500 / 600 / 700. È il `font-family` di `body`.

### Scala tipografica

| Elemento | Specifica | Note |
|---|---|---|
| H1 di pagina | `font: 700 52px 'Archivo'; letter-spacing: -.015em` — 34px sotto 640px | Sempre il titolo **più grande** della pagina. Bianco su hero a gradiente. Home: 60px |
| H2 di sezione | `font: 700 26–32px 'Archivo'; letter-spacing: -.015em` — 22px sotto 640px | Gradiente testo + filetto rosso `56×4px` in `position:absolute; left:0; bottom:0` |
| H3 / titolo card | `font: 600 17–19px 'Manrope'` — 17px sotto 640px | Gradiente testo se cliccabile, `#22252a` altrimenti |
| Occhiello tabella | `font: 700 14px 'Manrope'; text-transform: uppercase; letter-spacing: .05em; color: #888` | Sopra calendari e classifiche |
| Testo editoriale | `font: 400 18px/1.85 'Manrope'; color: #26282d; text-wrap: pretty` | Articoli, racconto stagioni |
| Testo corrente | `font: 400 16px/1.75 'Manrope'; color: #4a4d53` | Introduzioni, paragrafi di sezione |
| Testo commi regolamento | `font: 400 16px/1.75 'Manrope'; color: #33363b` — sotto-commi 15px `#4a4d53` | |
| Etichetta / occhiello | `font: 700 11–12px 'Manrope'; text-transform: uppercase; letter-spacing: .06–.08em; color: #01017b` | |
| Voce di menu | `font: 600 18px 'Archivo'; letter-spacing: -.005em; text-transform: capitalize; color: #6b7078` | Pagina attiva e hover: gradiente testo. 20px nel drawer mobile |
| Didascalia / metadato | `font: 400–500 12–13px 'Manrope'; color: #8a8f98` | |
| Numero statistica | `font: 700 38px 'Archivo'; letter-spacing: -.02em` + gradiente testo | Card dato |
| Citazione | `font: 600 20px/1.6 'Archivo'; letter-spacing: -.01em; color: #01017b` | Con `border-left: 4px solid #e50d22` |

Su ogni blocco di testo lungo: `text-wrap: pretty`.

---

## 4. Pulsanti, link, controlli

Tutto ciò che è cliccabile porta il gradiente. **Unica eccezione:** dentro una sezione a fondo gradiente i pulsanti diventano bianchi pieni.

### 4.1 Primario
```css
background: linear-gradient(115deg,#01017b 0%,#0a0a8f 45%,#8c0a19 82%,#e50d22 100%);
color: #fff;
font: 700 14px 'Manrope';
letter-spacing: .03em;
text-transform: uppercase;
padding: 15px 30px;
border-radius: 999px;
box-shadow: 0 8px 22px rgba(1,1,123,.25);
```

### 4.2 Secondario
```css
border: 1.5px solid #01017b;
color: #01017b;
font: 700 14px 'Manrope';
letter-spacing: .03em;
text-transform: uppercase;
padding: 14px 28px;
border-radius: 999px;
```

### 4.3 Su fondo gradiente
- primario: `background:#fff; color:#01017b`
- secondario: `border:1.5px solid rgba(255,255,255,.7); color:#fff`

### 4.4 Link di testo
```css
font: 700 13px 'Manrope';
text-transform: uppercase;
letter-spacing: .04em;
/* + gradiente testo §2.2 */
```
Chiuso sempre da `→` (`&rarr;`).

### 4.5 Freccia circolare
`40px × 40px`, `border-radius:50%`, gradiente fondo, glifo bianco 15px.

### 4.6 Chip filtro
- attivo: gradiente fondo, `color:#fff`, `font:600 13px 'Manrope'`, `padding:9px 16px`, `border-radius:999px`
- inattivo: `background:#fff`, `border:1px solid #dfe2e8`, `color:#4a4d53`, `font:500 13px`

### 4.7 Badge
- rosso: `background:#e50d22; color:#fff; font:700 11px 'Manrope'; text-transform:uppercase; letter-spacing:.06em; padding:5px 10px; border-radius:999px`
- chiaro (su gradiente): `background:#fff; color:#01017b`

### 4.8 Link generici
```css
a { color: inherit; text-decoration: none; transition: opacity .15s ease, color .15s ease }
a:hover { opacity: .72 }
```

---

## 5. Card e contenitori

| Tipo | Specifica |
|---|---|
| Card news su bianco | `border-radius:18px; overflow:hidden; background:#fff; box-shadow:0 4px 16px rgba(0,0,0,.08)` |
| Card in evidenza | `border-radius:22px; box-shadow:0 6px 24px rgba(0,0,0,.10)` |
| Card foto su grigio | raggio 18px + **alone bicolore** §2.3 |
| Card dato | `padding:24px; border-radius:18px; background:#f4f5f7`, nessuna ombra |
| Pannello CTA | `padding:40–44px; border-radius:24px; background:#f4f5f7` |
| Box nota | `padding:20px 22px; border-radius:14px; background:#f7f8fa; border-left:4px solid #e50d22` |
| Immagine grande | `border-radius:22px; box-shadow:0 12px 38px rgba(0,0,0,.18)` |

**Raggi:** `999px` pillole · `14px` elementi piccoli · `16px` contenitore tabelle · `18px` card · `22px` immagini grandi e card in evidenza · `24px` pannelli.

**Transizioni**

```css
.card  { transition: transform .2s ease, box-shadow .2s ease }
.card:hover  { transform: translateY(-4px) }
.button { transition: transform .18s ease, box-shadow .18s ease, background .18s ease }
.button:hover { transform: translateY(-2px) }
.imgwrap { overflow: hidden }
.imgwrap img { transition: transform .5s ease }
.imgwrap:hover img { transform: scale(1.06) }
```

---

## 6. Tipi di sezione

Tre tipi, da alternare per dare ritmo. **Mai due sezioni a gradiente consecutive.**

1. **Bianca** `#fff` — sezione base: news, testi, tabelle. Titolo in gradiente testo.
2. **Grigia** `#f4f5f7` — separa due sezioni bianche; **obbligatoria** dove le card foto usano l'alone bicolore (§2.3), altrimenti l'alone si perde nel bianco.
3. **Gradiente** §2.1 — momenti forti: hero, "Chi siamo", richiami all'azione. Testo e titoli bianchi, pulsanti bianchi pieni.

### 6.1 Hero
- Larghezza **piena** (mai contenuta), contenuto interno max 1280px.
- Taglio diagonale inferiore: `clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%)` — `94%` negli hero articolo.
- Hero interni: altezza 230px (190px sotto 640px). Hero home: più alto, con il logo a filigrana al **70% di opacità**.
- Sopra il gradiente: velo luce §2.4.
- Breadcrumb: `font:600 12px 'Manrope'; color:rgba(255,255,255,.6)`.
- Sottotitolo: `font:400 14px 'Manrope'; color:rgba(255,255,255,.75)`.

---

## 7. Griglia, spaziature, breakpoint

### Contenitori
- Header e footer: `max-width: 1280px`
- Contenuto delle sezioni: `max-width: 1200px`
- Padding laterale: `40px` desktop, `20px` sotto 640px
- Sezioni hero: larghezza piena, contenuto interno allineato al 1280px dell'header

### Ritmo verticale
- Sezione standard: `56px` sopra e sotto
- Sezione compatta: `44px`
- Ultima sezione prima del footer: `72–80px`
- Gap griglie: `20–26px`
- Gap colonna testo / sidebar: `56px`
- `scroll-margin-top: 120px` su ogni ancora (compensa l'header sticky)

### Breakpoint
| Breakpoint | Comportamento |
|---|---|
| `≤ 900px` (tablet) | Griglie a 3–4 colonne → 2 colonne; split e sidebar impilati (`sidebar` perde `position:sticky` e passa in cima con `order:-1`); **menu a drawer** (§7.1); logo header 52px; filigrana hero contenuta nel bordo destro |
| `≤ 640px` (mobile) | Colonna singola; H1 34px (hero home 30px), H2 22px, H3 17px; header 64px con logo 46px; padding sezione 20px; filigrana hero centrata dietro il testo |

### File a corredo
| File | Ruolo |
|---|---|
| `mobile-nav.js` | Drawer di navigazione sotto 900px (§7.1). Va incluso in `<head>` di **ogni** pagina |
| `assets/logo-header.png` | Logo dell'header |
| `assets/logo-hero.svg` | Logo/orso usato come filigrana nell'hero della home |

### Header
```
bianco, position:sticky, top:0, z-index:20
barra interna: max-width 1280px; display:flex; justify-content:space-between; padding:0 40px
altezza 76px desktop · 64px sotto 900px
box-shadow: 0 1px 6px rgba(0,0,0,.10)
logo: 64px desktop · 52px sotto 900px · 46px sotto 640px — object-fit:contain
```
Nota: sotto 900px il padding va azzerato su `.rtc-header` e riportato sulla barra interna
(`.rtc-header > div { height:64px; padding:0 20px }`), altrimenti il logo sborda dall'header.

### 7.1 Menu mobile (drawer) — `mobile-nav.js`

Sotto **900px** (tablet e telefono) la navigazione orizzontale diventa un pannello laterale.
Lo script è autonomo: si carica in `<head>`, individua `header .rtc-nav`, inietta il proprio
foglio di stile (`#mnav-css`), il pulsante hamburger e il velo, e resta in ascolto sulle
re-render della pagina tramite `MutationObserver`. Nessuna modifica al markup dell'header.

**Stato aperto:** classe `mnav-open` su `<html>`.

**Pulsante hamburger**
```css
.mnav-btn{display:none}                       /* nascosto sopra 900px */
@media (max-width:900px){
  .mnav-btn{display:flex;flex-direction:column;gap:5px;width:44px;height:44px;
            align-items:center;justify-content:center;background:none;border:0;
            padding:0;cursor:pointer;position:relative;z-index:70}
  .mnav-btn span{display:block;width:24px;height:2.5px;border-radius:2px;
                 background:linear-gradient(100deg,#01017b 0%,#c00c1e 100%);
                 transition:transform .25s ease,opacity .18s ease}
  /* aperto → diventa una × */
  html.mnav-open .mnav-btn span:nth-child(1){transform:translateY(7.5px) rotate(45deg)}
  html.mnav-open .mnav-btn span:nth-child(2){opacity:0}
  html.mnav-open .mnav-btn span:nth-child(3){transform:translateY(-7.5px) rotate(-45deg)}
}
```
Area di tocco 44×44px — **mai** inferiore.

**Pannello**
```css
@media (max-width:900px){
  header .rtc-nav{position:fixed;top:0;right:0;height:100vh;
                  width:min(80vw,320px);box-sizing:border-box;background:#fff;
                  display:flex;flex-direction:column;align-items:stretch;
                  justify-content:flex-start;gap:0;padding:92px 26px 28px;
                  box-shadow:-10px 0 44px rgba(0,0,0,.20);
                  transform:translateX(102%);
                  transition:transform .3s cubic-bezier(.4,0,.2,1);
                  z-index:60;overflow-y:auto}
  html.mnav-open header .rtc-nav{transform:translateX(0)}
  header .rtc-nav a{font-size:20px;line-height:1.3;width:100%;padding:15px 0;
                    border-bottom:1px solid #eceef1;white-space:normal}
}
```
Le voci restano in **Archivo 600, capitalize, `#6b7078`**; la pagina attiva e l'hover
mantengono il gradiente testo (§2.2). Il padding superiore di 92px lascia scoperto
l'hamburger sopra il pannello.

**Velo di sfondo**
```css
@media (max-width:900px){
  .mnav-back{position:fixed;inset:0;background:rgba(1,1,40,.45);opacity:0;
             pointer-events:none;transition:opacity .3s ease;z-index:50}
  html.mnav-open .mnav-back{opacity:1;pointer-events:auto}
  html.mnav-open,html.mnav-open body{overflow:hidden}
}
```

**Chiusura:** tocco sul velo · tocco su una voce · tasto `Esc` · ridimensionamento oltre 900px.

**Ordine dei livelli:** velo `50` → pannello `60` → hamburger `70`. L'header deve avere
`z-index:20` su **tutte** le pagine, altrimenti il contesto di impilamento cambia da pagina a pagina.

### 7.2 Hero della home su dispositivi piccoli

Il blocco di testo dell'hero è centrato con `left:50%; transform:translateX(-50%)`: sotto 640px
va **azzerata anche la trasformazione**, non solo riposizionato il blocco.
```css
@media (max-width:640px){
  .rtc-home-hero{height:430px!important}
  .rtc-home-hero-text{left:0!important;right:auto!important;transform:none!important;
                      width:100%!important;max-width:none!important;padding:0 20px!important}
  .rtc-home-hero-text h1{font-size:30px!important;line-height:1.12!important;
                         margin-bottom:20px!important;
                         text-shadow:0 3px 18px rgba(0,0,0,.55)!important}
  /* occhiello: è figlio del wrapper, non di .rtc-home-hero-text */
  .rtc-home-hero-text>div>div:first-child{font:700 11px 'Manrope'!important;
                         letter-spacing:.06em!important;margin-bottom:10px!important;
                         text-shadow:0 2px 10px rgba(0,0,10,.6)}
}
```

**Filigrana (logo orso)** — deve risultare sempre **intera**, mai tagliata dal bordo:

| Viewport | Regola |
|---|---|
| desktop | `right:-20px; top:50%; translateY(-50%); 520×520px; opacity:.7` |
| ≤ 900px | `right:0; width:min(62vw,420px); height:auto; max-height:88%; opacity:.45` |
| ≤ 640px | centrata: `left:50%; top:50%; translate(-50%,-50%); width:min(96vw,420px); height:auto; max-height:76%; opacity:.3` |

Sotto 640px, con la filigrana dietro il testo, il velo diagonale va rinforzato:
```css
.rtc-home-hero-veil{background:linear-gradient(100deg,rgba(0,0,10,.42) 0%,
                    rgba(0,0,10,.30) 55%,rgba(0,0,10,.18) 100%)!important}
```

### Footer
```
background: #01017b; color: #fff
filetto superiore 4px: linear-gradient(90deg,#e50d22 0 30%,rgba(255,255,255,.25) 30% 32%,transparent 32%)
griglia 1.3fr 1fr 1fr, gap 32px, padding 48px 40px → colonna singola sotto 900px
testo rgba(255,255,255,.75); riga copyright rgba(255,255,255,.55) con border-top rgba(255,255,255,.15)
social: cerchi 34px, background #e50d22
```

---

## 8. Tabelle

### 8.1 Calendario partite
```
wrapper: border-radius:16px; overflow-x:auto; box-shadow:0 4px 16px rgba(0,0,0,.06)
table:   border-collapse:collapse; width:100%; min-width:520px
testata: background:#01017b; th font:700 12px 'Manrope'; color:#fff; uppercase; letter-spacing:.04em; padding:10px 12px
righe:   alternate #fff / #f7f8fa; border-bottom:1px solid #eee
celle:   padding:10px 12px; font:500 13px 'Manrope'; color:#333 (secondarie 400 13px #666)
```

### 8.2 Classifica (formato FITeT)
```
wrapper: border-radius:16px; overflow-x:auto; border:1px solid #cfd4da; box-shadow:0 4px 16px rgba(0,0,0,.06)
table:   border-collapse:collapse; width:100%; min-width:720px
caption: <th colspan=14> background:#01017b; color:#fff; font:700 13px 'Manrope'; letter-spacing:.06em; centrato
testata: background:#dfe3ea; th font:700 11px 'Manrope'; color:#222; border:1px solid #b8bfc8; padding:6px 8px
celle:   border:1px solid #b8bfc8; padding:5px 8px; font:500 12px 'Manrope'; centrate (nome squadra a sinistra, 700)
colonne: Soc. · SQUADRA · Punti · ID · IV · IPa · IP · PaV · PaP · SV · SP · PV · PP · Pe
stati:   prima riga #a6e3a1 (playoff) · ultima riga #f6a5a5 (retrocessa) · altre alternate #fff / #f4f5f7
legenda: ultima riga, colspan=14, background:#eceef1, font:500 11px 'Manrope'; quadratini 12×12px con border 1px solid #98a2ad;
         nota a destra in corsivo #777 "@ Salvo omologazione della commissione gare"
```
Le tabelle **non** vanno riprogettate: replicano il formato ufficiale federale, per questo mantengono bordi e colori propri anziché lo stile card del resto del sito.

---

## 9. Componenti ricorrenti

### 9.1 Accordion (pagina Storia)
- Titolo sempre nella forma **"Stagione 1992/93"**, in Archivo con gradiente testo
- Una sola voce aperta di default (la più recente); le altre chiuse mostrano solo l'etichetta
- Selettore "pillole anni" sticky in alto, scorribile in orizzontale, salta e apre la stagione
- Testo a colonna unica a piena larghezza, nessuna altezza fissa né troncamento forzato
- Galleria: masonry scorribile con frecce, didascalie visibili sotto ogni foto, assente se la stagione non ha foto
- Etichette galleria ("Fotografie della stagione", "Trascina o usa le frecce") in blu `#01017b`

### 9.2 Indice laterale (Regole, Style guide)
`position:sticky; top:110px; padding:24px; border-radius:18px; background:#f4f5f7`; voci `font:500 13.5px 'Manrope'; color:#5a5e65`, gradiente testo su hover; numerazione `font:700 12px; color:#a6abb3`. Sotto 900px diventa statico con `order:-1`.

### 9.3 Placeholder immagini
Nel prototipo ogni immagine è un `<image-slot>` con `id` univoco e `placeholder` descrittivo. In produzione va sostituito con `<img loading="lazy">` mantenendo raggio, `object-fit:cover` e il wrapper con lo zoom hover §5.

---

## 10. Struttura del sito

| Pagina | File prototipo | Contenuto |
|---|---|---|
| Home | `Home.dc.html` | Hero con logo a filigrana, striscia dati, ultime news, prossime partite + classifica, "Chi siamo" su gradiente, tappe della storia, CTA prova |
| Giocatori | `Giocatori.dc.html` | Sei squadre (C2, D1/A, D1/B, D2/A, D2/B, D3), 5 atleti ciascuna: 2 card grandi + 3 card, su fondo grigio con alone bicolore |
| Storia | `Storia.dc.html` | Testo di apertura, 32 stagioni in accordion con pillole anni e gallerie |
| News | `News.dc.html` | Chip categorie (Tutte, Campionati, Tornei, Vita del TT Pistoia), articolo in evidenza, griglia 6 card, paginazione |
| Articolo | `Articolo.dc.html` | Hero 40/60 con immagine di copertina a destra, corpo + sidebar sticky, correlati |
| Campionati | `Campionati.dc.html` | Per ogni categoria: calendario partite + classifica FITeT |
| Le regole | `Le Regole.dc.html` | Regolamento tecnico FITeT 2021 — 15 capitoli, 101 commi, indice laterale |
| Contatti | `Contatti.dc.html` | Mappa Palestra Einaudi, orari, telefono ed email cliccabili |

### Dati reali del club
```
TT Pistoia asd
Palestra Einaudi — Viale Pacinotti, 51100 Pistoia PT
Telefono: 335.7388152 (Pancani Luca)
Email: ttpt@ttpistoia.it
Apertura: martedì e giovedì, 21:00 – 23:30
Fondazione: 1992
```

---

## 11. Regole di scrittura

- Lingua **italiana**, tono di associazione sportiva: sobrio, concreto, mai promozionale.
- Titoli in maiuscolo/minuscolo normale (non tutto maiuscolo).
- Nessuna emoji.
- Etichette di categoria e occhielli in maiuscolo, tutto il resto in caso naturale.
- Le date in forma "12 luglio 2026"; le stagioni in forma "1992/93".
