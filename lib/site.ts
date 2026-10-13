/** false = nasconde news in home/menu; pagine /news restano nel progetto ma noindex. */
export const NEWS_SECTION_ENABLED = false;

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/storia", label: "Storia" },
  { href: "/giocatori", label: "Giocatori" },
  { href: "/campionati", label: "Campionati" },
  ...(NEWS_SECTION_ENABLED ? [{ href: "/news", label: "News" as const }] : []),
  { href: "/regole", label: "Le regole" },
  { href: "/documenti-storici", label: "Documenti storici" },
  { href: "/contatti", label: "Contatti" },
] as const;

export const SITE = {
  name: "TT Pistoia asd",
  address: {
    line1: "Palestra Einaudi",
    line2: "Viale Pacinotti",
    line3: "51100 Pistoia PT",
  },
  email: "ttpt@ttpistoia.it",
  phone: "335.7388152",
  phoneHref: "tel:+393357388152",
  emailHref: "mailto:ttpt@ttpistoia.it",
  hours: "Pistoia mar/gio 21–23:30 · Quarrata lun/mer 21–23",
  copyright: `© ${new Date().getFullYear()} TT Pistoia asd. Tutti i diritti riservati.`,
} as const;

export const FACEBOOK_URL = "https://www.facebook.com/groups/57029708768/";
