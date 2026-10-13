/** URL .htm del sito FrontPage → percorsi Next.js (301 al go-live). */
export const LEGACY_HTM_REDIRECTS: { from: string; to: string }[] = [
  { from: "/index.htm", to: "/" },
  { from: "/info.htm", to: "/contatti" },
  { from: "/giocatori.htm", to: "/giocatori" },
  { from: "/Storia.htm", to: "/storia" },
  { from: "/storia.htm", to: "/storia" },
  { from: "/Regole.htm", to: "/regole" },
  { from: "/regole.htm", to: "/regole" },
  { from: "/campionati.htm", to: "/campionati" },
  { from: "/Calenda.htm", to: "/campionati" },
  { from: "/calenda.htm", to: "/campionati" },
  { from: "/Foto.htm", to: "/" },
  { from: "/foto.htm", to: "/" },
  { from: "/Links.htm", to: "/" },
  { from: "/links.htm", to: "/" },
  { from: "/lore.htm", to: "/" },
];
