export type NormePongistaPage = {
  page: number;
  src: string;
  alt: string;
  title?: string;
};

export const normePongistaIntro = {
  lead:
    "Opuscolo ironico della società: regole «serie» del bravo pongista, raccontate a vignette con foto di club e battute in dialetto.",
  body:
    "Realizzato da Roberto Morassi per il Tennistavolo Pistoia, è un pezzo d’archivio che unisce sport, autoironia e vita di palestra — lontano dal regolamento tecnico FITeT, ma vicinissimo allo spirito del club.",
  author: "Roberto Morassi",
  copyright:
    "© Roberto Morassi — vignette e impaginazione. Riproduzione sul sito TT Pistoia asd con autorizzazione.",
  pdfHref: "/docs/norme-pongista.pdf",
} as const;

/** File esportati in ordine (copertina + vignette; pagina bianca PDF omessa). */
const SLIDES: Omit<NormePongistaPage, "page" | "src">[] = [
  {
    title: "Copertina",
    alt: "Copertina dell’opuscolo «Norme di comportamento del bravo pongista», Tennistavolo Pistoia, con foto di racchette e palline sul tavolo.",
  },
  {
    title: "1 — Onora la maglia sociale",
    alt: "Vignetta 1: Onora la maglia sociale. Un giocatore in posa da gara ammette ironicamente di indossare una maglietta comprata «dai cinesi» invece della divisa.",
  },
  {
    title: "2 — Rispetta l’avversario",
    alt: "Vignetta 2: Rispetta l’avversario. Un giocatore sorridente minaccia un taglione e urla «Puppa! Brodo!» all’avversario.",
  },
  {
    title: "3 — Gioca concentrato",
    alt: "Vignetta 3: Gioca concentrato. Un giocatore in posa di gioco pensa a dove ha parcheggiato l’auto invece che alla partita.",
  },
  {
    title: "4 — Nascondi le tue emozioni",
    alt: "Vignetta 4: Nascondi le tue emozioni. Un giocatore in sofferenza durante lo scambio; il fumetto rivela un mal di pancia improvviso.",
  },
  {
    title: "5 — Colpisci a modino",
    alt: "Vignetta 5: Colpisci a modino. Un giocatore difende ironicamente un colpo fatto con il bordo della racchetta.",
  },
  {
    title: "6 — Non ti lamentare",
    alt: "Vignetta 6: Non ti lamentare. Due giocatori di altezze molto diverse reggono un trofeo; il più basso si lamenta della foto.",
  },
  {
    title: "7 — Tieni conto delle condizioni di gioco",
    alt: "Vignetta 7: Tieni conto delle condizioni di gioco. Fumetti con scuse sul tavolo, pavimento, umidità e prurito all’ombelico.",
  },
  {
    title: "8 — Palleggia con stile",
    alt: "Vignetta 8: Palleggia con stile. Un giocatore in bianco posa per la foto dicendo che gli interessa solo lo scatto per Vanity Fair.",
  },
  {
    title: "9 — Cura la forma fisica",
    alt: "Vignetta 9: Cura la forma fisica. Un giocatore seduto risponde allo scherzo «ciccione» incolpando la prospettiva della foto.",
  },
  {
    title: "10 — Imponi il tuo gioco",
    alt: "Vignetta 10: Imponi il tuo gioco. Un giocatore dietro al tavolo dice di ipnotizzare gli avversari perché è «diabolico».",
  },
  {
    title: "11 — Mantieni il tuo equilibrio",
    alt: "Vignetta 11: Mantieni il tuo equilibrio. Un giocatore in maglia TT Pistoia si regge alla coscia dopo un colpo ad effetto.",
  },
  {
    title: "12 — Condividi la tua esperienza",
    alt: "Vignetta 12: Condividi la tua esperienza. In palestra un veterano consiglia scherzosamente in dialetto di giocare a rubamazzo.",
  },
  {
    title: "13 — Incoraggia i giovani",
    alt: "Vignetta 13: Incoraggia i giovani. Un giocatore severo circondato da fumetti con «incoraggiamenti» aggressivi in dialetto.",
  },
  {
    title: "14 — Sii fiero dei tuoi risultati",
    alt: "Vignetta 14: Sii fiero dei tuoi risultati. Due soci scherzano su trofeo e tuta definendoli «troiaio» in dialetto.",
  },
  {
    title: "15 — Lasciati incoraggiare",
    alt: "Vignetta 15: Lasciati incoraggiare. Johnny riceve «Dai che la vinci facile!» e pensa di essersi beccato una gufata.",
  },
  {
    title: "16 — Ascolta i consigli degli esperti",
    alt: "Vignetta 16: Ascolta i consigli degli esperti. A tavola qualcuno annuncia la lettura del «libro del Balleri» prima delle squadre.",
  },
  {
    title: "17 — Chiedi scusa quando è dovuto",
    alt: "Vignetta 17: Chiedi scusa quando è dovuto. Un giocatore si scusa ironicamente perché il dito medio «è ritto per caso».",
  },
  {
    title: "18 — Intimorire l'avversario",
    alt: "Vignetta 18: Intimorire l'avversario. Un giocatore in maglia TT Pistoia provoca l'avversario: «E allora? Prova a battere, se hai il coraggio! Ti spappolo, citrullo!!!»",
  },
  {
    title: "19 — Accogli con gentilezza gli ospiti",
    alt: "Vignetta 19: Accogli con gentilezza gli ospiti. I pistoiesi mostrano i trofei mentre un ospite del CIATT Firenze pensa ai «cornuti pistoiesi che vengono a fregarci i premi».",
  },
  {
    title: "20 — Ogni tanto, gioca per la platea",
    alt: "Vignetta 20: Ogni tanto, gioca per la platea. Un giocatore tenta il colpo dietro la schiena pensando: «Lo so che farò una figura a piro, ma DEVO provare…»",
  },
  {
    title: "21 — Il decoro innanzitutto!",
    alt: "Vignetta 21: Il decoro innanzitutto! Mirko gioca in mutande e maglietta; l'avversario commenta: «Sì, vabbè'… I pantaloncini li compro per la D2!»",
  },
  {
    title: "22 — Rispettate gli arbitri!",
    alt: "Vignetta 22: Rispettate gli arbitri! Un giocatore chiede perché all'arbitro non abbiano dato un tavolino; lui risponde: «Perché son dei sudici, ecco perché…»",
  },
];

export const normePongistaPages: NormePongistaPage[] = SLIDES.map((slide, i) => ({
  ...slide,
  page: i + 1,
  src: `/images/norme-pongista/pagina-${String(i + 1).padStart(2, "0")}.webp`,
}));
