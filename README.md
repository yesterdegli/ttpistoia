# TT Pistoia asd — pacchetto di consegna allo sviluppo

Leggere nell'ordine:

1. **`STYLEGUIDE.md`** — sistema visivo completo e definitivo: colori con hex, i tre gradienti,
   scala tipografica, spaziature, specifiche dei componenti, breakpoint, menu mobile, tabelle.
   È l'unico riferimento visivo: non re-inventare nulla che sia già qui.
2. **`HANDOFF.md`** — mappatura su Tailwind, struttura pagina per pagina (ordine delle sezioni,
   componente usato per ciascuna, regole di contenuto), inventario dei componenti,
   comportamenti responsive non deducibili dagli screenshot, elenco delle cose ancora aperte.
3. **`DIARIO.md`** — avanzamento implementazione, decisioni prese, pendenti e note di sessione.
3. **File prototipo `*.dc.html`** — verità di riferimento per valori e markup esatti,
   se qualcosa nei due documenti risultasse ambiguo. Sono HTML statico: si aprono nel browser.
4. **`mobile-nav.js`** — il drawer di navigazione sotto 900px, autonomo e riusabile.
5. **`assets/`** — logo header (PNG, in attesa di SVG) e filigrana dell'hero (SVG).

Stack di destinazione: Next.js + TypeScript + Tailwind. Lingua del sito: italiano.

Pagine: `/` · `/giocatori` · `/storia` · `/news` · `/news/[slug]` · `/campionati` · `/regole` · `/contatti`.
Nessuna pagina Galleria: le foto vivono nell'archivio stagioni di `/storia`.
