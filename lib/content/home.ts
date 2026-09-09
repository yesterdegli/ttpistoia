import { getHomeNews } from "@/lib/content/news";

export const homeStats = [
  { value: "1991", label: "Anno di fondazione" },
  { value: "35", label: "Tesserati" },
  { value: "6", label: "Squadre nei campionati" },
  { value: "2", label: "Palestre di allenamento" },
] as const;

export const homeIntro = {
  paragraphs: [
    "Dal 1992, il Tennistavolo Pistoia è la casa di chi ama il ping pong in città. Affiliati alla FITeT, ogni stagione le nostre squadre competono nei campionati regionali e nazionali, dalla serie D alla C2, portando in giro il nome di Pistoia con impegno e passione.",
    "Ma non c'è bisogno di essere agonisti per trovare posto tra noi: le nostre porte sono aperte a chiunque voglia semplicemente divertirsi con una racchetta in mano, a qualsiasi età e livello. Perché in fondo, davanti al tavolo, quello che conta davvero è esserci.",
  ],
} as const;

export const homeNews = getHomeNews();

export const homeMilestones = [
  {
    year: "1992",
    description:
      "Su iniziativa di Luca Balleri, palestra ex-combattenti in via Antonini e affiliazione FITeT nello stesso anno.",
    href: "/storia#stagione-1992",
  },
  {
    year: "1997/98",
    description:
      "Secondo posto in C2 agli spareggi di Siena; a Volterra la società conquista la classifica per società in Toscana.",
    href: "/storia#stagione-1997-1998",
  },
  {
    year: "2014/15",
    description:
      "Prima squadra femminile in serie C con Cusato e Vanni; Seraglini perde una sola partita in tutta la stagione D1.",
    href: "/storia#stagione-2014-2015",
  },
  {
    year: "2023/24",
    description:
      "Ritorno in C1 nazionale; Ruggiero vince il torneo assoluto di Cascina, Pancani quello open over 1500 a Sesto Fiorentino.",
    href: "/storia#stagione-2023-2024",
  },
] as const;

export const homeAbout = {
  text: "Fondato nel 1992, il TT Pistoia asd è cresciuto da un unico tavolo in un salone parrocchiale fino a diventare uno dei club amatoriali più attivi della regione — allenando i giovani, organizzando campionati competitivi e accogliendo chiunque voglia semplicemente giocare per divertimento.",
};

export const homeVideo = {
  eyebrow: "TT Pistoia asd",
  title: "Qui si gioca sul serio",
  subtitle: "Sei squadre, una sola maglia",
  posterSrc: "/assets/video/poster.svg",
  videoSrc: "/assets/video/palestra.mp4",
  link: { href: "#campionati", label: "I nostri campionati" },
} as const;
