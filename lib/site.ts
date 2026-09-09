export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/storia", label: "Storia" },
  { href: "/giocatori", label: "Giocatori" },
  { href: "/campionati", label: "Campionati" },
  { href: "/news", label: "News" },
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
  hours: "Mar e Gio, 21:00–23:30",
  copyright: `© ${new Date().getFullYear()} TT Pistoia asd. Tutti i diritti riservati.`,
} as const;

export const FACEBOOK_URL = "#";
