# Diario di progetto — TT Pistoia asd

Documento di lavoro per tenere traccia di avanzamento, decisioni e pendenti.
Aggiornato: **7 settembre 2026**.

---

## 1. Progetto

| Campo | Valore |
|---|---|
| **Cliente** | Tennistavolo Pistoia asd |
| **Obiettivo** | Sito istituzionale in italiano (tono sobrio, associazione sportiva) |
| **Stack** | Next.js 15 (App Router) · TypeScript · Tailwind CSS 3 |
| **Font** | Archivo (display) · Manrope (body) |
| **Breakpoint** | `md: 641px` · `lg: 901px` (mobile-first) |
| **Documenti di riferimento** | `STYLEGUIDE.md` (visivo) · `HANDOFF.md` (struttura) · prototipi `*.dc.html` |

---

## 2. Stato attuale

### Pagine implementate

| Route | Stato | Note |
|---|---|---|
| `/` | ✅ | Hero animato, stats animate, news, **banda video**, campionati, chi siamo, milestone, CTA; pattern dot grid su sezioni |
| `/giocatori` | ✅ | Roster reali C2, D1/A–D2/B; D3 ancora demo; griglia 2+3 centrata |
| `/storia` | ✅ | Dati da `real-data/storia.ts`; accordion, pill, slider, lightbox |
| `/news` | ✅ | Lista + articoli SSG |
| `/news/[slug]` | ✅ | 7 articoli placeholder |
| `/campionati` | ✅ | Tabella/classifica/fixture (dati demo); anchor `#campionato-*` |
| `/regole` | ✅ | Regolamento FITeT |
| `/contatti` | ✅ | Dati reali; mappa Google dietro consenso cookie |
| `/privacy` | ✅ | Privacy policy |
| `/cookie` | ✅ | Cookie policy |

**Build:** `npm run build` OK (20 route statiche/SSG).

### Componenti condivisi

Layout: `SiteHeader`, `SiteFooter`, `MobileDrawer`, `HomeHero`, `HeroBear`, `PageHero`, `SectionContainer`, `SectionHeading`.

Contenuti home: `HomeVideoBand`, `HomeVideoBackground`, `HomeStatsGrid`, `StatCard`.

UI: `ButtonPrimary`, `TextLink`, card varie (`NewsCard`, `ChampionshipCard`, `MilestoneCard`, …).

Layout globale: `body` flex column + `main` flex-1 → footer appoggiato al fondo su tutte le pagine.

Cookie: banner + `CookieConsentRoot`; mappa condizionata (`ConsentMapEmbed`).

---

## 3. Cronologia

### Setup iniziale
- Progetto Next.js 15 + Tailwind con token da `HANDOFF.md` / `STYLEGUIDE.md`.
- Componenti UI condivisi e layout globale (header sticky, footer, drawer mobile).

### Pagine core
- Implementate tutte le route del handoff (+ privacy/cookie oltre al minimo design).
- `/storia` collegata a `real-data/storia.ts` (unica fonte dati stagioni; ignorare `storia-data.js` legacy).

### Home e contenuti
- Sezione **Campionati** con 6 `ChampionshipCard` (C2, D1/A, D1/B, D2/A, D2/B, D3), badge posizione da `getClubStandingPosition()`, link a `/giocatori#squadra-*` e `/campionati#campionato-*`.
- **Trentadue stagioni** con dati reali da `storia.ts` e link `#stagione-*`.
- Eyebrow hero: **«Fondato nel 1991»**.
- Shadow bicolore `glow-2t` su card su sfondo chiaro.

### Legal e cookie
- Pagine `/privacy` e `/cookie`.
- Banner consenso + gestione preferenze.
- Embed Google Maps su Contatti solo dopo consenso.

### Responsive
- Sostituito `sm:` con `md:` dove richiesto dal design (breakpoint club a 641px).
- `SectionHeading` impilato su mobile; padding sezioni rivisti.
- Anchor con `scroll-margin-top` ridotto sotto 900px.
- ID anchor su `/campionati` e `/giocatori` per deep link dalla home.

### Dev environment
- Script `scripts/dev.mjs`: termina processi stale sulla porta 3000, avvia un solo dev server.
- `npm run dev:clean`: pulisce `.next` e riavvia.
- **Nota:** tenere un solo `npm run dev:clean` attivo; più istanze su 3000/3001 causavano CSS 404.

### Hero mobile (2 set 2026)
Iterazioni sulla home hero sotto `max-md` (`components/layout/HomeHero.tsx`):

1. **Opzione 1 (due zone):** testo in alto, orso separato sotto, CTA sotto l’orso — devia dall’handoff (filigrana centrata dietro testo @30%).
2. Tentativi con `100dvh`, flex/grid, `fill` su `next/image` — problemi di spazi vuoti (flex che allunga contenitori senza scalare l’SVG).
3. **Soluzione attuale (approvata «per adesso»):**
   - Hero altezza `calc(100dvh - 4rem)` (sotto header mobile 64px).
   - Blocco compatto **centrato verticalmente**: titolo → orso → CTA.
   - Orso dimensione fissa `~17.5rem` max, allineato a sinistra con il testo.
   - Spacing interno: `mt-3` titolo→orso, `mt-10` orso→CTA.
   - Desktop/tablet: invariati (filigrana assoluta a destra, CTA sotto titolo).

**Da rivedere in futuro (non bloccante):** dimensione orso, eventuale allineamento più fedele al §4.4 HANDOFF, fine-tuning spacing titolo/CTA.

### Giocatori — roster e layout (3 set 2026)

**Nomi inseriti** in `lib/content/giocatori.ts` (5 giocatori per squadra):

| Squadra | Stato |
|---|---|
| C2 | ✅ Completa |
| D1/A | ⚠️ 4 nomi reali + **Luca Ferretti** (fittizio, quinto giocatore da confermare) |
| D1/B | ✅ Completa |
| D2/A | ✅ Completa |
| D2/B | ✅ Completa |
| D3 | ⚠️ Ancora placeholder (da aggiornare) |

**Layout card** (`app/giocatori/page.tsx`) — deviazione dal HANDOFF §2.2 (2 card larghe span-3 + 3 strette span-2):

- Ritmo **2 sopra + 3 sotto**, righe **centrate**.
- Tutte le card **stessa dimensione** (foto 200px, `col-span-2` in griglia 6 col).
- Tablet/desktop: prima card con `col-start-2` per centrare la fila da 2.
- Mobile: due righe flex centrate (2 + 3; sotto ~480px la fila inferiore può andare 2+1).

### Hero — gradiente animato e orso (4 set 2026)

**Gradiente di sfondo** (`app/globals.css`, `HomeHero.tsx`):
- Variante **B** (pan/zoom): pan simmetrico ±11%/±7%, scale 1.23, loop 6.5s linear.
- Stop bilanciati rosso/blu; rosso più vivido (`#e50d22`, `#c00c1e`), blu da ~58%.
- `prefers-reduced-motion`: gradiente statico, nessuna animazione.

**Entrance orso** (`components/layout/HeroBear.tsx`):
- Blur reveal a 1.45s (desktop e mobile, timing leggermente diversi).
- Si ripete al ritorno in home tramite provider client.
- `prefers-reduced-motion`: opacità statica, nessun blur/anim.

### Home — banda video (4 set 2026)

Inserita **dopo News, prima Campionati** (corridoi bianchi, lontano dalle sezioni gradiente):

| Elemento | Dettaglio |
|---|---|
| Componenti | `HomeVideoBand`, `HomeVideoBackground` |
| Contenuto | `lib/content/home.ts` → `homeVideo` |
| Copy | Eyebrow «TT Pistoia asd» · titolo «Qui si gioca sul serio» · sottotitolo «Sei squadre, una sola maglia» |
| CTA | «I nostri campionati» → `#campionati` |
| Media | `public/assets/video/palestra.mp4` (~1.2 MB), poster `poster.svg` |
| Altezza | `clamp(500px, 68vh, 800px)` |
| Overlay | Gradiente brand ~50% + scrim scuro + vignette |
| Video | Autoplay muted loop; `object-position: center 42%` |

**Ordine scroll home:** Hero → Stats → News → **Video** → Campionati → Chi siamo → Milestones → CTA.

**Da rifinire (non bloccante):** intensità overlay, poster JPG reale al posto dell’SVG, crop/altezza se il footage non convince.

### Footer sticky — tutte le pagine (4 set 2026)

Problema segnalato su `/contatti`: spazio bianco sotto il footer con poco contenuto.

**Fix globale** in `app/layout.tsx`:
- `body`: `flex min-h-screen flex-col`
- `main`: `flex-1`

Il footer resta appoggiato al fondo del viewport quando il contenuto è corto; con pagine lunghe scorre normalmente dopo il contenuto.

### Pattern sezioni e sfondo grigio (7 set 2026)

**Obiettivo:** texture leggera sulle sezioni body grigie e continuità visiva tra bande, senza “salti” tra sezioni.

**Implementazione** (`app/globals.css`, `SectionContainer`, header/layout):

| Tipo sezione | Classi | Pattern |
|---|---|---|
| Sezioni grigie (body) | `bg-surface-grey` + `section-pattern` | Dot grid blu (`rgb(1 1 123 / 0.1)`), passo 28px, `background-attachment: fixed` |
| Sezioni gradiente (hero, chi siamo, articoli) | `section-pattern-light` | Dot grid bianco (12% opacità), stesso passo e fixed |
| Header, body, drawer mobile | `bg-surface-grey` | Coerente con le sezioni grigie |

**Decisioni:**
- **Corner glow (variante C) scartato** — creava seam visibili tra sezioni adiacenti.
- Switcher dev per pattern grigi **rimossi** (`GreyPatternSwitcher`, `HomeGreyPatternTest`, `lib/grey-pattern.ts`).
- `CtaPanel` e **`StatCard`**: sfondo **bianco** + `glow-2t` per staccare dal grigio di sezione (prima le stat erano `bg-surface-grey` su grigio → invisibili).

**Da rifinire (non bloccante):** enrichment pattern (bicolor dots, grain leggero) — discusso ma non implementato.

### Home — stat cards animate (7 set 2026)

Quattro card sotto l’hero (`HomeStatsGrid` + `StatCard`):

| Aspetto | Dettaglio |
|---|---|
| Visibilità iniziale | **Nascoste** (`opacity: 0`) — non presenti all’arrivo in pagina |
| Ritardo | **1 s** (`animation-delay: 1s` / `1.12s` per scarto tra le due per lato) |
| Movimento | Card 1–2 da **sinistra**, 3–4 da **destra** (`translateX ±52px` → 0) |
| Durata | 0.75s, easing `cubic-bezier(0.22, 1, 0.36, 1)` |
| Replay | Al ritorno su `/` via `usePathname` + `key` su griglia (client component) |
| Accessibilità | `prefers-reduced-motion`: nessuna animazione, card subito visibili |

**Fix iterati nella sessione:**
1. StatCard grigie su sezione grigia → ripristinate bianche con glow.
2. `IntersectionObserver` + `opacity-0` bloccava le card su mobile (hero full viewport) → rimosso.
3. Tentativo “visibili subito + slide ritardato” → sostituito su richiesta: **assenti al load, entrata dopo 1 s**.

CSS: classi `stat-enter-left/right`, `stat-enter-delay-0/1` in `globals.css` + safelist Tailwind.

### Home — fix banda video (7 set 2026)

Problema segnalato: video background “saltato” / non visibile.

**Fix** in `HomeVideoBand.tsx` e `HomeVideoBackground.tsx`:
- `isolate z-[2] bg-black` sul contenitore banda.
- Video mostrato prima; `preload="auto"`; `src` diretto su `palestra.mp4`.
- File confermato in `public/assets/video/palestra.mp4`.

**Nota ricorrente dev:** CSS corrotto / 404 → `npm run dev:clean` + hard refresh (`Ctrl+Shift+R`).

---

## 4. Dati

| Area | Fonte | Stato |
|---|---|---|
| Stagioni / storia | `real-data/storia.ts` | ✅ Reale |
| Contatti | `lib/content/contatti.ts` | ✅ Reale |
| News | `lib/content/news.ts` | ⚠️ Placeholder |
| Giocatori / roster | `lib/content/giocatori.ts` | ⚠️ Parziale — C2, D1/A–D2/B reali (D1/A: 1 nome fittizio); D3 demo |
| Campionati (risultati/classifiche) | `lib/content/campionati.ts` | ⚠️ Placeholder (posizioni demo variate per home) |
| Home stats (1992, 8 squadre, …) | `lib/content/home.ts` | ⚠️ Da confermare con il club (altrove 6 squadre) |

---

## 5. Pendenti (da HANDOFF + lavoro recente)

### Contenuti e asset
- [ ] Logo header SVG (oggi PNG in `/assets/brand/`).
- [ ] Fotografia reale: giocatori, news, chi siamo, gallerie stagioni.
- [ ] Roster **D3** + quinto giocatore **D1/A** (sostituire Luca Ferretti).
- [ ] Calendari e classifiche FITeT reali.
- [ ] Testi stagioni mancanti in `/storia`.
- [ ] URL social reali (FB / IG / YT).
- [ ] Allineare statistiche home (tesserati, n. squadre, anno fondazione).

### Prodotto / tech
- [ ] Paginazione `/news` (visuale only) — collegare o rimuovere.
- [ ] SEO meta, Open Graph, analytics (non in scope design originale).
- [ ] Eventuale rifinitura hero mobile (vedi §3).
- [ ] Conferma comportamento `100dvh` vs barra browser su device reali (DevTools ≠ sempre fedele).
- [ ] Fine-tuning banda video home: overlay, altezza, poster reale.
- [ ] Eventuale enrichment pattern dot grid (bicolor, grain) — opzionale.

### Completato rispetto al design originale
- [x] Cookie banner e policy (extra rispetto al handoff §3).
- [x] Pagina privacy.
- [x] Footer appoggiato al fondo su tutte le pagine (layout flex globale).
- [x] Hero home: gradiente animato + entrance orso.
- [x] Banda video full-width in home (extra rispetto al handoff).
- [x] Pattern dot grid su sezioni grigie e gradiente (`section-pattern` / `section-pattern-light`).
- [x] Stat cards home: entrance ritardata 1 s, slide da sinistra/destra, replay al ritorno in home.

### Deviazioni deliberate dal HANDOFF
- [x] Hero mobile: layout a blocco compatto centrato (non filigrana @30% dietro testo).
- [x] Giocatori: card uniformi 2+3 centrate (non 2 larghe + 3 strette).

---

## 6. Comandi utili

```bash
npm run dev:clean    # dev server pulito (porta 3000)
npm run build        # build produzione
npm run lint         # ESLint
npm run sync-gallery # sync galleria storia (se usato)
```

**Anteprima mobile in DevTools:** `Ctrl+Shift+M` → device (es. iPhone 12 Pro 390×844, SE 375×667, 14 Pro Max 430×932) → zoom 100% → hard refresh se il CSS non aggiorna.

---

## 7. File chiave

```
app/
  layout.tsx            # Footer sticky; body bg-surface-grey
  page.tsx              # Home — ordine sezioni incl. HomeVideoBand, HomeStatsGrid
  giocatori/page.tsx    # Griglia 2+3 centrata per squadra
  globals.css           # hero-grad-*, hero-bear-enter-*, section-pattern*, stat-enter-*
components/
  layout/HomeHero.tsx   # Hero home (desktop + mobile); section-pattern-light
  layout/HeroBear.tsx   # Orso hero + anim entrance
  layout/SiteHeader.tsx # Header grigio + pattern
  ui/SectionContainer.tsx  # bg-surface-grey + section-pattern
  content/HomeVideoBand.tsx
  content/HomeVideoBackground.tsx
  content/HomeStatsGrid.tsx   # Client: anim stat + replay pathname
  content/StatCard.tsx        # Card bianca glow-2t
  content/CtaPanel.tsx        # Bianca su sezione grigia
  cookies/              # Banner e consenso
lib/content/
  home.ts               # homeVideo, homeStats, news, …
  giocatori.ts          # Roster (parziale)
real-data/storia.ts     # Fonte unica dati stagioni
public/assets/
  video/palestra.mp4    # Banda video home
  brand/                # logo, favicon
tailwind.config.ts      # Safelist pattern + stat-enter-*
scripts/dev.mjs         # Avvio dev stabilizzato
HANDOFF.md · STYLEGUIDE.md · DIARIO.md
```

---

## 8. Note per la prossima sessione

1. **Giocatori:** inserire quinto nome D1/A e roster D3; eventuali foto quando disponibili.
2. **Home video:** feedback su overlay, crop e altezza; sostituire poster SVG con JPG reale se disponibile.
3. **Pattern:** eventuale enrichment dot grid (bicolor, grain) se si vuole più profondità — corner glow resta escluso.
4. **Stat cards:** confermare timing 1 s e intensità slide; verificare replay navigando News → Home.
5. Hero mobile: stato accettato provvisorio — blocco centrato, CTA più distante dall’orso (`mt-10`).
6. Prima di go-live: passata sui dati placeholder e incongruenze (1991 vs 1992, 6 vs 8 squadre).
7. Un solo dev server in locale durante lo sviluppo UI (`npm run dev:clean`).

---

*Fine diario — aggiornare questo file a ogni sessione significativa.*
