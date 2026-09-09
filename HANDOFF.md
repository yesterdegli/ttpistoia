# TT Pistoia asd — Handoff to development

Package for rebuilding the site in **Next.js + TypeScript + Tailwind**.
Hand this file together with `STYLEGUIDE.md`, the page screenshots and the data files.

- **`STYLEGUIDE.md`** = the single visual reference (colours, type scale, spacing, component specs, breakpoints). It is final: do not re-derive visual decisions.
- **This file** = page-by-page structure, component inventory, responsive behaviour, open issues.
- **Prototype files** (`*.dc.html`) are the source of truth for exact markup/values if anything here is ambiguous. Read them; do not screenshot-guess.

Language: **Italian**, everywhere. Tone: sober sports association.

---

## 0. Tailwind mapping (do this first)

Add to `tailwind.config.ts` so the guide's tokens exist as utilities. Names used throughout this document:

```ts
theme: {
  extend: {
    colors: {
      blue:   { DEFAULT: '#01017b', light: '#0a0a8f' },   // club blue
      red:    { DEFAULT: '#e50d22', deep: '#8c0a19', text: '#c00c1e' },
      ink:    { strong: '#22252a', body: '#33363b', mid: '#4a4d53',
                soft: '#5a5e65', muted: '#6b7078', dim: '#8a8f98', faint: '#a6abb3' },
      surface:{ DEFAULT: '#ffffff', grey: '#f4f5f7', tint: '#f7f8fa', alt: '#fafbfc' },
      line:   { DEFAULT: '#e6e8ec', control: '#dfe2e8', table: '#eceef1',
                grid: '#b8bfc8', frame: '#cfd4da' },
      state:  { playoff: '#a6e3a1', relegated: '#f6a5a5', legend: '#eceef1' },
    },
    fontFamily: { display: ['Archivo', 'sans-serif'], sans: ['Manrope', 'sans-serif'] },
    backgroundImage: {
      'grad-bg':   'linear-gradient(115deg,#01017b 0%,#0a0a8f 45%,#8c0a19 82%,#e50d22 100%)',
      'grad-hero': 'linear-gradient(115deg,#01017b 0%,#0a0a8f 42%,#8c0a19 80%,#e50d22 100%)',
      'grad-text': 'linear-gradient(100deg,#01017b 0%,#0a0a8f 45%,#c00c1e 88%,#e50d22 100%)',
    },
    screens: { md: '641px', lg: '901px' },   // the design has exactly two breakpoints
  }
}
```

Two utility classes worth defining once in `globals.css` (they repeat on every page):

```css
.grad-text { @apply bg-grad-text bg-clip-text text-transparent; }
.glow-2t   { box-shadow:-10px 12px 26px -8px rgb(1 1 123/.42),
                         10px 12px 26px -8px rgb(229 13 34/.34),
                         0 2px 8px rgb(0 0 0/.06); }
```

**Breakpoint note.** The prototype is written desktop-first with `max-width` queries at **900px** and **640px**. In a mobile-first Tailwind build the equivalents are: base = mobile (≤640), `md:` = 641–900 (tablet), `lg:` = ≥901 (desktop). Every "≤900px" rule in the guide is therefore "everything below `lg`".

---

## 1. Routes and files

| Route | Prototype file | Title (H1) |
|---|---|---|
| `/` | `Home.dc.html` | *(hero headline)* Anni di storia, un'unica passione che si tramanda. |
| `/giocatori` | `Giocatori.dc.html` | I nostri giocatori |
| `/storia` | `Storia.dc.html` | La nostra storia |
| `/news` | `News.dc.html` | News |
| `/news/[slug]` | `Articolo.dc.html` | *(article title)* |
| `/campionati` | `Campionati.dc.html` | Campionati |
| `/regole` | `Le Regole.dc.html` | Le regole del gioco |
| `/contatti` | `Contatti.dc.html` | Contatti |

Nav order (7 items, no CTA button in the nav): **Home · Giocatori · Storia · News · Campionati · Le regole · Contatti**.

There is **no Galleria page** — it was removed. Photos live inside the season accordion on `/storia`. Do not re-add a gallery route.

---

## 2. Page-by-page breakdown

Legend: **[C]** = reusable component (§3) · **[P]** = page-specific block.

### 2.1 `/` Home

The only page with a full-height hero; it is deliberately the most designed page of the site.

| # | Section | Bg | Component |
|---|---|---|---|
| 1 | Header | white | **[C] SiteHeader** |
| 2 | Hero — eyebrow, H1, primary CTA, bear watermark | gradient *(red→blue, 115°, reversed stops)* | **[P] HomeHero** |
| 3 | Fact strip — 4 stats (1992 / 122 / 8 / 2) | white | **[C] StatCard** ×4 in a 4-col grid |
| 4 | *Ultime notizie* — 3 cards + "Tutte le news →" | white | **[C] SectionHeading** + **[C] NewsCard** ×3 |
| 5 | *Prossime partite* — match list + mini standings | white | **[P]** 1.4fr/1fr split: **[C] MatchList** + **[C] MiniStandings** |
| 6 | *Chi siamo* — text + photo | **gradient** | **[C] SectionHeading** (white variant) + **[C] MediaSplit** |
| 7 | *Trentadue stagioni* — 4 year cards → `/storia` | grey | **[C] SectionHeading** + **[C] MilestoneCard** ×4 |
| 8 | *Vieni a provare* — CTA panel, hours, address | white *(panel grey)* | **[C] CtaPanel** |
| 9 | Footer | blue | **[C] SiteFooter** |

Content rules
- Hero gradient runs **red → blue** (opposite of every other page's hero, which runs blue → red). Intentional; keep it.
- Hero H1 is fixed copy: *"Anni di storia, un'unica passione che si tramanda."* Eyebrow: *"Fondato nel 1992 · Campioni del campionato regionale"*.
- Hero has **one** CTA only: *Prenota una prova gratuita* → `/contatti`.
- Exactly one gradient section in the page body (§6, *Chi siamo*). Never two gradient sections in a row.
- Home stats and the standings preview are **hard-coded editorial values**, not derived from the championship data — keep them in a single `home.ts` content file so they can be corrected in one place.

### 2.2 `/giocatori`

| # | Section | Bg | Component |
|---|---|---|---|
| 1 | Header | white | **[C] SiteHeader** |
| 2 | Page hero — breadcrumb, H1, subtitle | gradient | **[C] PageHero** |
| 3 | Intro paragraph | grey | **[P]** single `<p>`, max-width 700px |
| 4–9 | One section per team: **C2 · D1/A · D1/B · D2/A · D2/B · D3** | grey | **[C] SectionHeading** + **[C] PlayerCard** grid |
| 10 | Footer | blue | **[C] SiteFooter** |

Content rules
- Six teams, **5 players each**, in a 6-column grid: first row **2 cards spanning 3 columns** (photo 240px), second row **3 cards spanning 2 columns** (photo 200px). This 2+3 rhythm is a deliberate design decision — repeat it for every team.
- All player sections sit on **grey** (`surface.grey`) because the cards use the two-tone glow, which disappears on white.
- Vertical rhythm between team sections: 44px (first 48, last 80).
- Player names are placeholders. Category label under each name repeats the team code.

### 2.3 `/storia`

| # | Section | Bg | Component |
|---|---|---|---|
| 1 | Header | white | **[C] SiteHeader** |
| 2 | Page hero | gradient | **[C] PageHero** |
| 3 | Opening editorial text | white | **[P] StoriaIntro** |
| 4 | Sticky year-pill bar | white | **[C] YearPills** |
| 5 | Season accordion (32 items) | white | **[C] SeasonAccordion** + **[C] PhotoSlider** |
| 6 | Footer | blue | **[C] SiteFooter** |

Content rules
- **32 seasons, 1992/93 → 2023/2024**, newest first; 1992/93 is therefore the **last** accordion item.
- The 1992/93 narrative is **also** used as the opening page text (§3), before the accordion. Its first sentence — *"L'attività del gruppo sportivo Tennistavolo Pistoia…"* — is set in the display font with gradient text at 30px/1.3. The intro block shares the same 1200px content width as everything else.
- After the intro, a blue lead-in paragraph with 56px of space above and below: *"Da qui in avanti, stagione per stagione, il racconto completo…"*.
- Accordion titles are always **"Stagione " + label** (e.g. *Stagione 2023-2024*), in gradient text; toggle glyph `+` / `−`.
- **Single-open accordion**: exactly one season expanded at a time; **2023-2024 open by default**.
- Clicking a year pill scrolls to that season **and** opens it; the active pill takes the gradient fill.
- Expanded season = **single full-width text column**, no fixed height, no forced truncation (a "read more" affordance may collapse very long texts but full expansion must always be reachable).
- Photos below the text in a **horizontally sliding masonry** (§3 PhotoSlider): variable tile widths, 0 to 22+ photos, captions visible under each photo (never hover-only). A season with 0 photos renders text only — **no empty gallery placeholder**. 14 of 32 seasons have photos; 18 are text-only.
- Labels *"Fotografie della stagione"* and *"Trascina o usa le frecce"* are **blue** `#01017b`.

Known dead code: the logic class still carries `state.variant = 'A'` and an unused variant-B branch (`.st-photocol`, sticky 60/40 text+photo column). Layout A was chosen; **drop the variant switch and the B branch entirely** in the rebuild.

### 2.4 `/news`

| # | Section | Bg | Component |
|---|---|---|---|
| 1 | Header | white | **[C] SiteHeader** |
| 2 | Page hero — "News", *Risultati, tornei e vita del circolo* | gradient | **[C] PageHero** |
| 3 | Category chips | white | **[C] FilterChips** |
| 4 | Featured article — image + text, 1.15fr/1fr | white | **[C] FeaturedNewsCard** |
| 5 | 6-card grid, 3 columns | white | **[C] NewsCard** ×6 |
| 6 | Pagination | white | **[C] Pagination** |
| 7 | CTA panel — *Vieni a giocare con noi* | white *(panel grey)* | **[C] CtaPanel** |
| 8 | Footer | blue | **[C] SiteFooter** |

Content rules
- Categories are exactly four: **Tutte · Campionati · Tornei · Vita del TT Pistoia**. (*Settore giovanile* was removed; *Vita del circolo* was renamed.) Chips are not yet wired — they are visual only in the prototype.
- Featured card carries a red *In evidenza* badge plus `date · category`.
- Card meta line format: `12 luglio 2026 · Campionati`.

### 2.5 `/news/[slug]` Article

| # | Section | Bg | Component |
|---|---|---|---|
| 1 | Header | white | **[C] SiteHeader** |
| 2 | Article hero — **2 columns 40/60**: left breadcrumb + category badge + `date · reading time` + H1 + standfirst; right the cover image with caption | gradient | **[P] ArticleHero** |
| 3 | Body — `1fr / 280px`: prose + sticky *In breve* aside | white | **[C] ProseBody** + **[C] FactAside** |
| 4 | Share row | white | **[C] ShareRow** |
| 5 | *Continua a leggere* — 3 related cards | grey | **[C] SectionHeading** + **[C] NewsCard** ×3 |
| 6 | Footer | blue | **[C] SiteFooter** |

Content rules
- The cover image is **inside** the hero's right column (rounded 22px card, 360px tall, own caption) — **not** a background image and not a separate band. This was explicitly iterated: do not put the photo behind the text.
- Hero columns are `minmax(0,2fr) minmax(0,3fr)` (not `40% 60%`), so the 40px gap doesn't push the image past the container edge.
- Hero clip-path is `94%` (shallower than the 88% used on other page heroes).
- Prose: 18px/1.85. Body H2s in gradient text. One pull-quote with a red left rule. One in-body figure with caption.

### 2.6 `/campionati`

| # | Section | Bg | Component |
|---|---|---|---|
| 1 | Header | white | **[C] SiteHeader** |
| 2 | Page hero | gradient | **[C] PageHero** |
| 3–8 | One section per category: **C2 · D1/A · D1/B · D2/A · D2/B · D3** — each with *Prossime partite* table **and** *Classifica* table, category as H2 | white | **[C] MatchTable** + **[C] StandingsTable** |
| 9 | Footer | blue | **[C] SiteFooter** |

Content rules
- Six categories, same order as `/giocatori`. Category code is the section H2; the two sub-tables carry the uppercase eyebrow *Prossime partite* / *Classifica*.
- **TT Pistoia asd** must appear in every category's fixtures and at the top of every standings table.
- Standings replicate the **official FITeT layout** (14 columns: Soc. · SQUADRA · Punti · ID · IV · IPa · IP · PaV · PaP · SV · SP · PV · PP · Pe) with the federation's own bordered look — this is the one place that intentionally departs from the site's card styling. Do not restyle it.
- Row states: **first row green** (`state.playoff`) = playoff, **last row red** (`state.relegated`) = retrocessa, all others alternate white / grey. Legend is the table's last row (`colspan=14`, grey background, 12×12 swatches) with the italic note *"@ Salvo omologazione della commissione gare"*.
- All fixtures, standings and team names are **placeholder data** — replace from the real data files.

### 2.7 `/regole`

| # | Section | Bg | Component |
|---|---|---|---|
| 1 | Header | white | **[C] SiteHeader** |
| 2 | Page hero — *Le regole del gioco* | gradient | **[C] PageHero** |
| 3 | Intro + source credit | white | **[P]** two `<p>` |
| 4 | 15 chapters, 101 numbered clauses, with sticky index aside | white | **[C] SideIndex** + **[C] ClauseList** |
| 5 | Footer | blue | **[C] SiteFooter** |

Content rules
- Text is the **verbatim** FITeT *Regolamento Tecnico di Gioco*, version 2021 — 15 chapters, 101 clauses including sub-clauses (4.3.1, 6.6.1, 10.1.14.1…). **Never paraphrase or shorten it.** Store it as structured data (`chapter → clauses[]`), not as hand-written JSX.
- Sub-clauses are indented 26px per level and set 1px smaller in a lighter ink.
- Source is credited in the intro: *"Fonte: Federazione Italiana Tennistavolo — Regolamento Tecnico di Gioco, versione 2021."*
- Chapter numbers use the gradient badge; chapter titles use gradient text.

### 2.8 `/contatti`

| # | Section | Bg | Component |
|---|---|---|---|
| 1 | Header | white | **[C] SiteHeader** |
| 2 | Page hero | gradient | **[C] PageHero** |
| 3 | *Dove siamo* — contact block (address, phone, email, hours) + embedded map | white | **[C] ContactBlock** + **[C] MapEmbed** |
| 4 | Footer | blue | **[C] SiteFooter** |

Content rules (**real data — do not alter**)
```
TT Pistoia asd
Palestra Einaudi — Viale Pacinotti, 51100 Pistoia PT
Telefono: 335.7388152  (referente: Pancani Luca)
Email:    ttpt@ttpistoia.it
Apertura: martedì e giovedì, 21:00 – 23:30 (altri giorni chiuso)
```
- Phone and email are click-to-action: `tel:+393357388152`, `mailto:ttpt@ttpistoia.it`.
- Map is a Google Maps embed centred on Palestra Einaudi (`ll=43.929095,10.9104798&z=17`), `loading="lazy"`, min-height 360px, inside an 18px-radius card.
- There is **no contact form** in the design. Add one only if the client asks.

---

## 3. Component inventory

One implementation each. If two pages need a variant, add a prop — do not fork the component.

### Layout / chrome

| Component | Description · states |
|---|---|
| **SiteHeader** | White, `sticky top-0`, **z-index 20 on every page**, inner bar max-1280px, `justify-between`. Logo left (64px desktop / 52px tablet / 46px mobile), nav right. Below `lg` it renders the hamburger and turns the nav into **MobileDrawer**. Active route = gradient text; others `ink.muted`; hover = gradient text. |
| **MobileDrawer** | Right-side panel, `min(80vw,320px)`, full height, white, `-10px 0 44px rgb(0 0 0/.20)`, slides in with `translateX(0)` over `.3s cubic-bezier(.4,0,.2,1)`. Items 20px, divided by 1px `line.table`. Backdrop `rgb(1 1 40/.45)`. Layers: backdrop 50 → panel 60 → button 70. Closes on backdrop tap, item tap, `Esc`, or resize above 900px; locks body scroll while open. Hamburger is 44×44 with three 24×2.5 gradient bars that morph into an ×. |
| **SiteFooter** | Blue, 4px red top rule, 3-column grid `1.3fr 1fr 1fr` → single column below `lg`. Columns: club + address · contacts (email, phone + *Pancani Luca*, hours) · social circles (34px, red). Copyright row separated by a 15%-white rule. |
| **PageHero** | Inner-page hero: gradient (blue→red 115°), 230px tall (190 mobile), light veil, diagonal `clip-path` at 88%, content aligned to the 1280px header container. Slots: breadcrumb / H1 / subtitle. |
| **HomeHero** | Home only: 600px tall (430 mobile), **reversed** red→blue gradient, bear watermark, two dark veils, eyebrow + H1 + one CTA, clip-path 93%. |
| **ArticleHero** | Article only: 2fr/3fr columns, gradient, clip-path 94%, cover image card in the right column. |
| **SectionHeading** | H2 in gradient text + absolute 56×4px red rule at the bottom; optional right-aligned TextLink on the same baseline. White variant (plain white text, white rule) for use on gradient sections. |

### Content blocks

| Component | Description · states |
|---|---|
| **NewsCard** | Link card: image (zoom 1.06 on hover) + `date · category` + title (gradient text) + optional dek. Radius 18, shadow `0 4px 16px rgb(0 0 0/.08)`, hover `translateY(-4px)`. |
| **FeaturedNewsCard** | Wide variant: image / text side by side (1.15fr/1fr), radius 22, *In evidenza* badge, closing TextLink. Stacks below `lg`. |
| **PlayerCard** | Photo + name (blue) + category (red, uppercase). Radius 18, **two-tone glow** (§2.3 of the guide), hover lifts and intensifies the glow. Photo height 240 (wide) / 200 (narrow) via a `size` prop. Requires a grey background. |
| **StatCard** | Grey panel, gradient-text number in the display font (38px) + label. No shadow. |
| **MilestoneCard** | White panel on grey: gradient-text year + one-line description. Whole card is a link. |
| **MediaSplit** | Text column + image column, side by side, stacks below `lg`. Used for *Chi siamo*. |
| **CtaPanel** | Grey rounded panel (24px) with heading, paragraph, primary + secondary buttons, and an optional info list (hours / address). Two columns → stacked below `lg`. |
| **ProseBody** | Long-form article body: 18px/1.85, gradient H2s, pull-quote (`border-left 4px red`, display font 20px, blue), figures with captions. |
| **FactAside** | Sticky (`top:110px`) grey card, uppercase blue eyebrow, label/value rows separated by 1px rules. Static and moved above the prose below `lg`. |
| **SideIndex** | Sticky (`top:110px`) grey index card, numbered links, gradient text on hover. Static with `order:-1` below `lg`. |
| **ClauseList** | Numbered clause rows (`1.1`, `1.2`…) separated by 1px rules; sub-clauses indented 26px/level, 1px smaller, lighter ink. Gradient number badge + gradient chapter title above each group. |
| **ContactBlock** | Uppercase red field labels + blue values; `tel:` and `mailto:` links; hours as label/value rows. |
| **MapEmbed** | Lazy Google Maps iframe in an 18px-radius card, min-height 360px. |

### Tables and data

| Component | Description · states |
|---|---|
| **MatchTable** | Fixtures: solid blue header row, alternating white / `surface.tint` rows, `min-width 520px` inside a horizontally scrollable 16px-radius wrapper. Columns: Data · Incontro · Sede · Ora. |
| **StandingsTable** | Official FITeT layout: blue caption row (`colspan 14`), `#dfe3ea` header row, `1px solid line.grid` on every cell, `min-width 720px` with horizontal scroll. Row states: playoff green (first), relegated red (last), others alternating. Legend as the final row. |
| **MatchList** | Home-page compact fixtures card: gradient header strip (category + venue) then `date / match / time` rows. |
| **MiniStandings** | Home-page grey card: 4 label/value rows, own team bold blue with a red points figure, closing TextLink. |

### Controls

| Component | Description · states |
|---|---|
| **ButtonPrimary** | Gradient pill, white uppercase 14px, `0 8px 22px rgb(1 1 123/.25)`, hover `translateY(-2px)`. On gradient sections: solid white with blue label. |
| **ButtonSecondary** | 1.5px blue outline pill, blue uppercase label. On gradient sections: 70%-white outline, white label. |
| **TextLink** | Uppercase 13px gradient text, always closed by `→`. Hover: 72% opacity. |
| **IconButton** | 40px (38px in the slider) gradient circle with a white glyph. Used for slider arrows and share buttons. |
| **FilterChips** | Pill row; active = gradient fill + white text; inactive = white with `line.control` border. Wraps; single-select. |
| **YearPills** | Sticky horizontal strip of 32 season pills, scrollable with a thin blue-tinted scrollbar. Active pill = gradient fill. Click scrolls to the season **and** opens it. |
| **SeasonAccordion** | Single-open. Header: *"Stagione " + label* in gradient display type + `+` / `−` glyph, hover `surface.tint`. Body: full-width prose, then PhotoSlider when photos exist. Default open: most recent season. |
| **PhotoSlider** | Horizontally scrolling masonry: variable tile widths (wide tiles span 2), `scroll-snap`, drag-to-scroll, arrow IconButtons, thin scrollbar, captions visible under every photo. Renders nothing when a season has 0 photos. |
| **Pagination** | Numbered circles (active = gradient fill) + *Pagina successiva →* TextLink. |
| **ShareRow** | Uppercase *Condividi* label + three 36px gradient circles (FB / IG / WA). |
| **Badge** | Red pill (uppercase 11px white) or light pill (white bg, blue label) for use on gradient. |
| **ImagePlaceholder** | Every image in the prototype is a drop-target placeholder with a unique id and a descriptive label. In production: `<img loading="lazy">` with `object-fit:cover`, keeping the radius and the hover zoom wrapper. |

Not designed, not built: **form fields** (no form exists anywhere in the site), search, language switch, cookie banner.

---

## 4. Responsive notes (things a screenshot won't show)

1. **Navigation collapses below 900px**, not 640 — tablets get the drawer too. See MobileDrawer above for the full behaviour, layer order and close triggers.
2. **Header padding must move to the inner bar** below 900px (`.rtc-header{padding:0}` + inner `height:64px;padding:0 20px`), otherwise the logo overflows the header. Logo shrinks 64 → 52 → 46px.
3. **Home hero text is centred with `translateX(-50%)` on desktop; the transform must be zeroed** on mobile, not just repositioned — otherwise the block slides half off-screen (this actually happened).
4. **Bear watermark must always be whole**, never cropped: desktop right-aligned 520px @70% · tablet right edge `min(62vw,420px)` @45%, max-height 88% · mobile **centred behind the text** `min(96vw,420px)` @30%, max-height 76%, with a stronger dark veil and text-shadow so the headline stays readable.
5. **Sticky elements unstick below 900px**: FactAside and SideIndex lose `position:sticky`, become static and move **above** the content (`order:-1`). YearPills stay sticky on all sizes — it is the primary navigation of `/storia`.
6. **PhotoSlider is drag-first on touch**: horizontal scroll + snap, momentum scrolling enabled; the arrow buttons are the desktop affordance. Tile widths shrink below 900px (260px, 300px for wide tiles). The *"Trascina o usa le frecce"* hint is intentional and stays visible.
7. **Tables never reflow into cards** — they scroll horizontally inside their rounded wrapper (`min-width` 520px fixtures / 720px standings). This is deliberate: the standings replicate a federal document and must stay tabular.
8. **Accordion state is not URL-driven** in the prototype. In the rebuild, reflect the open season in the hash (`/storia#stagione-2019-2020`) so pills are shareable; keep single-open.
9. **`scroll-margin-top: 120px`** on every anchor target — the sticky header would otherwise cover the heading you just jumped to.
10. **Grid collapse pattern**: 4-col → 2-col at 900 → 1-col at 640; 3-col → 2-col at 900 → 1-col at 640; the players' 6-col grid → 2-col at 900 (all cards span 1) → 1-col at 640. Two-column splits stack at 900.
11. **Body scroll is locked** while the drawer is open (`overflow:hidden` on `html` and `body`); remember to restore it on route change.
12. **Hover-only affordances need touch equivalents**: card lift, image zoom (1.06) and glow intensification are decorative — no information may depend on them. Photo captions are therefore always-visible text, never tooltips.

---

## 5. Open issues / assets still needed

| # | Item | Status |
|---|---|---|
| 1 | **Header logo** is `assets/logo-header.png` (raster). SVG expected — swap it in and re-check the header at 46/52/64px. |
| 2 | **Hero watermark** `assets/logo-hero.svg` is a reworked one-colour version of the crest. If a new file arrives, re-check all three watermark configurations (§4.4) — earlier versions rendered as a black silhouette. |
| 3 | **All photography** is placeholders: player portraits (30), news images (10), *Chi siamo* photo, article cover + in-body figure, season galleries (14 seasons, 2–22 photos each, every photo needs its own caption). |
| 4 | **Player names, teams' rosters** are invented. Replace with the real roster; keep the 2+3 card rhythm per team. |
| 5 | **Fixtures, standings, all opposing club names** are invented. Replace from the real FITeT data; keep the 14-column format and the playoff/relegation row states. |
| 6 | **News articles** (7 items incl. the featured one) are invented, as are dates and reading times. Category chips are not wired to any filtering yet. |
| 7 | **Season narratives** — only a handful are written out; the remaining seasons need the real texts (some are 2–3 sentences, others 5+ paragraphs; the layout must absorb both without truncation). |
| 8 | **Social links** point to `#` — real Facebook / Instagram / YouTube URLs needed. Icons are text labels (FB/IG/YT) awaiting real glyphs. |
| 9 | **Storia variant switch** is dead code (`state.variant`, `.st-photocol`) — remove it in the rebuild. |
| 10 | **Home stats** (122 tesserati, 8 squadre, 2 palestre) need confirmation from the club; the site elsewhere lists **6** teams — reconcile before launch. |
| 11 | Pagination on `/news` is visual only; wire it or drop it depending on the article count. |
| 12 | No SEO/meta, no OG images, no favicon, no analytics, no cookie notice were part of the design phase. |
