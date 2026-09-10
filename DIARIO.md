# Diario di progetto — TT Pistoia asd

Documento di lavoro per tenere traccia di avanzamento, decisioni e pendenti.
Aggiornato: **9 settembre 2026**.

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
| `/documenti-storici` | ✅ | Rassegna stampa / archivio; accordion + pill come Storia |

**Build:** `npm run build` OK (~26 route statiche/SSG).

**Deploy:** sito su **Netlify** collegato a GitHub (`yesterdegli/ttpistoia`); runtime Next.js; `netlify.toml` con `publish = ".next"` e plugin `@netlify/plugin-nextjs`.

### Componenti condivisi

Layout: `SiteHeader`, `SiteFooter`, `MobileDrawer` (canvas full-screen mobile/tablet), `HomeHero`, `HeroBear`, `PageHero`, `GradientHeaderShell`, `SectionContainer`, `SectionHeading`, `ScrollReveal`.

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

### Documenti storici, menu e contenuti (9 set 2026)

- Nuova route **`/documenti-storici`**: dati `real-data/documenti-storici.ts` (22 sezioni, immagini in `public/images/documenti-storici/`); client `DocumentiStoriciPageClient` con pill + accordion condivisi con Storia.
- **Ordine menu finale:** Home → Storia → Giocatori → Campionati → News → Le regole → Documenti storici → Contatti (`lib/site.ts`).
- **Home:** testo intro dopo stats; stat aggiornate (1991, 35 tesserati, 6 squadre, 2 palestre); griglia stats 2 colonne su mobile.
- **News:** tutti gli articoli placeholder («Titolo in arrivo», …) fino a contenuti reali.
- **Footer:** solo link Facebook (icona brand); rimossi IG/YT. `FACEBOOK_URL = "#"` finché non c’è URL reale.
- **Campionati:** un solo pulsante «Ranking individuale»; sezioni continue senza gap `border-t`.

### SEO e metadata (9 set 2026)

Preparato per staging/produzione (`lib/site-seo.ts`):

| Elemento | Dettaglio |
|---|---|
| Meta / OG / Twitter | `buildSiteMetadata()`, immagini dinamiche `opengraph-image`, `twitter-image`, `apple-icon` |
| JSON-LD | `OrganizationJsonLd` in layout |
| `robots.txt` / sitemap | Gated da `NEXT_PUBLIC_ALLOW_INDEX` |
| Env | `.env.example`: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_ALLOW_INDEX=false` (staging) → `true` in produzione |

### Scroll reveal (9 set 2026)

Fade-in allo scroll (`ScrollReveal` + `SectionContainer`):

- **Default `reveal={false}`** — attivo solo dove esplicito (evita sezioni «vuote»).
- **Disattivato** su pagine di contenuto: Regole, Privacy, Cookie, Contatti, articoli news, Campionati (embed), intro Storia/Documenti/Giocatori/News.
- **Fix tecnici:** check viewport al mount (`useLayoutEffect`); contenuto visibile al load, nascosto solo se sotto piega; `prefers-reduced-motion` rispettato.
- Home: nessun fade sulle sezioni principali (stats hanno animazione slide-in dedicata).

### Performance navigazione (9 set 2026)

- `scroll-behavior: auto` (prima `smooth` rallentava il cambio pagina).
- `app/loading.tsx`: barra sottile in cima durante la navigazione.
- `prefetch` esplicito su menu e card news.

### Deploy Netlify (9 set 2026)

| Impostazione | Valore |
|---|---|
| Build | `npm run build` |
| Publish | `.next` (in `netlify.toml`; **non** root repo) |
| Runtime | Next.js |
| Node | 20 |
| Env staging | `NEXT_PUBLIC_SITE_URL` = URL `.netlify.app` · `NEXT_PUBLIC_ALLOW_INDEX=false` |
| Env produzione | URL dominio definitivo · `ALLOW_INDEX=true` |

**Problemi risolti in deploy:**
1. Repo GitHub vuota → push completo codice via GitHub Desktop.
2. `publish: /opt/build/repo` → errore plugin Next.js; fix con `publish = ".next"`.
3. `NEXT_PUBLIC_SITE_URL` senza `https://` → build `Invalid URL`; normalizzazione in `getSiteUrl()`.

**Workflow:** GitHub Desktop (commit + push) → deploy automatico Netlify.

### Menu mobile/tablet — canvas (9 set 2026)

Sostituito drawer laterale con **menu a schermo intero**:

| Aspetto | Dettaglio |
|---|---|
| Layout | `100dvh`, `overflow-hidden`, niente scroll (spacing/font con `clamp` + `dvh`) |
| Sfondo | `section-pattern` + `bg-surface-grey` (come header desktop) |
| Contenuto | Logo centrato in alto → voci menu centrate |
| Voce attiva | `grad-text` + `font-bold` + `!opacity-100` (identico desktop) |
| Logo menu | `clamp(4rem, 11dvh, 5.5rem)` |
| Voci | `text-[clamp(1rem, 2.55dvh, 1.375rem)]`, padding verticale adattivo |
| Animazione | Fade in/out (non slide da destra) |
| Chiusura | Hamburger/X z-70, Escape, click voce, cambio route |

Breakpoint menu canvas: `< 901px` (`lg:hidden`).

### Home — altezza banda video mobile (9 set 2026)

Solo **mobile** (`max-md` / sotto `md`), desktop invariato:

| | Desktop | Mobile |
|---|---|---|
| Altezza | `clamp(560px, 72vh, 880px)` | `clamp(320px, 40vh, 480px)` |

Motivo: su telefono `object-cover` tagliava troppo ai lati con banda troppo alta.

---

## 4. Dati

| Area | Fonte | Stato |
|---|---|---|
| Stagioni / storia | `real-data/storia.ts` | ✅ Reale |
| Contatti | `lib/content/contatti.ts` | ✅ Reale |
| News | `lib/content/news.ts` | ⚠️ Placeholder |
| Giocatori / roster | `lib/content/giocatori.ts` | ⚠️ Parziale — C2, D1/A–D2/B reali (D1/A: 1 nome fittizio); D3 demo |
| Campionati (risultati/classifiche) | `lib/content/campionati.ts` | ⚠️ Placeholder (posizioni demo variate per home) |
| Home stats | `lib/content/home.ts` | ⚠️ 1991, 35 tesserati, 6 squadre, 2 palestre — da confermare con il club |
| Documenti storici | `real-data/documenti-storici.ts` | ✅ Reale (immagini in `public/images/documenti-storici/`) |

---

## 5. Pendenti (da HANDOFF + lavoro recente)

### Contenuti e asset
- [x] Logo header SVG (`public/assets/brand/logo-header.svg`).
- [ ] Fotografia reale: giocatori, news, chi siamo, gallerie stagioni.
- [ ] Roster **D3** + quinto giocatore **D1/A** (sostituire Luca Ferretti).
- [ ] Calendari e classifiche FITeT reali.
- [ ] Testi stagioni mancanti in `/storia`.
- [ ] Testi news reali (oggi placeholder).
- [ ] URL Facebook reale (`FACEBOOK_URL` in `lib/site.ts` ancora `#`).
- [ ] Confermare statistiche home con il club.

### Prodotto / tech
- [ ] Paginazione `/news` (visuale only) — collegare o rimuovere.
- [x] SEO meta, Open Graph, robots, sitemap (gated da env).
- [ ] Dominio custom `www.ttpistoia.it` + env produzione (`ALLOW_INDEX=true`).
- [ ] Analytics (non in scope design originale).
- [ ] Eventuale rifinitura hero mobile (vedi §3).
- [ ] Conferma menu canvas su device reali molto piccoli (SE, mini).
- [ ] Fine-tuning banda video: overlay, poster JPG reale.
- [ ] Eventuale enrichment pattern dot grid (bicolor, grain) — opzionale.
- [ ] Verificare `palestra.mp4` committato e pushato su GitHub (necessario per video su Netlify).

### Completato rispetto al design originale
- [x] Cookie banner e policy (extra rispetto al handoff §3).
- [x] Pagina privacy.
- [x] Footer appoggiato al fondo su tutte le pagine (layout flex globale).
- [x] Hero home: gradiente animato + entrance orso.
- [x] Banda video full-width in home (extra rispetto al handoff).
- [x] Pattern dot grid su sezioni grigie e gradiente (`section-pattern` / `section-pattern-light`).
- [x] Stat cards home: entrance ritardata 1 s, slide da sinistra/destra, replay al ritorno in home.
- [x] Pagina Documenti storici.
- [x] Deploy Netlify + GitHub Desktop workflow.
- [x] Menu mobile canvas full-screen con pattern dots.
- [x] Scroll reveal (opt-in, non su pagine contenuto).

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
  layout.tsx              # Footer sticky; body bg-surface-grey; JSON-LD
  page.tsx                # Home — ordine sezioni incl. HomeVideoBand, HomeStatsGrid
  loading.tsx             # Barra navigazione
  robots.ts · sitemap.ts  # Gated da NEXT_PUBLIC_ALLOW_INDEX
  opengraph-image.tsx · twitter-image.tsx · apple-icon.tsx
  documenti-storici/      # Pagina archivio
  globals.css             # hero-grad-*, section-pattern*, stat-enter-*, scroll-reveal
components/
  layout/MobileDrawer.tsx # Canvas menu mobile/tablet (<901px)
  layout/GradientHeaderShell.tsx
  layout/HomeHero.tsx · HeroBear.tsx · SiteHeader.tsx
  ui/SectionContainer.tsx · ScrollReveal.tsx
  documenti-storici/DocumentiStoriciPageClient.tsx
  content/HomeVideoBand.tsx · HomeVideoBackground.tsx
  content/HomeStatsGrid.tsx · StatCard.tsx · CtaPanel.tsx
  cookies/                # Banner e consenso
  seo/OrganizationJsonLd.tsx
lib/
  site.ts                 # NAV_ITEMS, SITE, FACEBOOK_URL
  site-seo.ts             # Metadata, getSiteUrl, JSON-LD
  content/home.ts · news.ts · giocatori.ts · campionati.ts
real-data/
  storia.ts               # Fonte unica dati stagioni
  documenti-storici.ts    # Archivio stampa/documenti
public/assets/
  video/palestra.mp4      # Banda video home (~1.2 MB — committare per Netlify)
  brand/logo-header.svg
netlify.toml              # Node 20, publish .next, plugin Next.js
.env.example              # NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_ALLOW_INDEX
tailwind.config.ts
scripts/dev.mjs
HANDOFF.md · STYLEGUIDE.md · DIARIO.md
```

---

## 8. Note per la prossima sessione

1. **Go-live Netlify:** dominio `www.ttpistoia.it`, aggiornare env (`SITE_URL` + `ALLOW_INDEX=true`), verificare video e asset su deploy remoto.
2. **Facebook:** URL reale in `lib/site.ts`.
3. **Contenuti:** news reali, roster D3, quinto giocatore D1/A, testi stagioni mancanti.
4. **Giocatori:** foto quando disponibili.
5. **Home video:** poster JPG reale; eventuale fine-tuning overlay mobile.
6. **Menu canvas:** test su iPhone SE / device bassi — spacing `dvh` dovrebbe evitare scroll.
7. Dev locale: un solo `npm run dev:clean`; hard refresh se CSS/video «saltano».
8. Push su GitHub Desktop dopo ogni modifica → deploy automatico Netlify.

---

*Fine diario — aggiornare questo file a ogni sessione significativa.*
