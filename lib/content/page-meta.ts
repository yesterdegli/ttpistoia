/** Titoli e description per pagina — tono istituzionale, fatti verificabili. */

export type PageMetaEntry = {
  title: string;
  description: string;
  path: `/${string}` | "";
};

/** Allineato a home e a Open Graph di default (`lib/site-seo.ts`). */
export const homeMeta: PageMetaEntry = {
  title: "TT Pistoia asd — tennistavolo a Pistoia e Quarrata",
  description:
    "Dal 1992, società affiliata FITeT con sei squadre nei campionati toscani. Allenamenti a Pistoia e Quarrata; contatti e orari in pagina.",
  path: "",
};

export const storiaMeta: PageMetaEntry = {
  title: "La nostra storia",
  description:
    "Dal 1992 a oggi: fondazione, stagioni nei campionati FITeT e le tappe che hanno segnato il Tennistavolo Pistoia.",
  path: "/storia",
};

export const giocatoriMeta: PageMetaEntry = {
  title: "Giocatori e squadre",
  description:
    "Le rose del TT Pistoia asd, divise per campionato: atleti delle squadre che militano nei gironi regionali FITeT.",
  path: "/giocatori",
};

export const campionatiMeta: PageMetaEntry = {
  title: "Campionati",
  description:
    "Calendario e classifica delle nostre squadre sui gironi FITeT Toscana. I dati sono aggiornati dal portale federale.",
  path: "/campionati",
};

export const contattiMeta: PageMetaEntry = {
  title: "Contatti",
  description:
    "Telefono, email e orari. Sede di Pistoia (Palestra Einaudi) e sede di Quarrata (Via Torino 61), con mappe.",
  path: "/contatti",
};

export const regoleMeta: PageMetaEntry = {
  title: "Le regole del gioco",
  description:
    "Sintesi del regolamento FITeT: tavolo, servizio, punteggio e capitoli principali, per orientarsi nelle regole del tennistavolo.",
  path: "/regole",
};

export const documentiStoriciMeta: PageMetaEntry = {
  title: "Documenti storici",
  description:
    "Archivio del club: rassegna stampa, materiali conservati e sezioni dell’archivio fotografico e documentale.",
  path: "/documenti-storici",
};

export const normePongistaMeta: PageMetaEntry = {
  title: "Norme del bravo pongista",
  description:
    "Opuscolo ironico di Roberto Morassi, «Norme di comportamento del bravo pongista»: sfogliabile online e in PDF.",
  path: "/documenti-storici/norme-del-pongista",
};

export const privacyMeta: PageMetaEntry = {
  title: "Privacy policy",
  description:
    "Come il TT Pistoia asd tratta i dati personali in relazione a questo sito, ai sensi del Regolamento UE 2016/679.",
  path: "/privacy",
};

export const cookieMetaPage: PageMetaEntry = {
  title: "Cookie policy",
  description:
    "Cookie e tecnologie sul sito TT Pistoia asd: cosa usiamo, come gestire le preferenze (anche mappe Google).",
  path: "/cookie",
};

export const newsMeta: PageMetaEntry = {
  title: "News",
  description:
    "Notizie dal club: risultati, tornei e vita della società. Aggiornamenti dal TT Pistoia asd.",
  path: "/news",
};