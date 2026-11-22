import { SITE } from "@/lib/site";

export type ContactHoursRow = {
  day: string;
  hours: string;
};

export type ContactVenue = {
  id: string;
  title: string;
  lines: readonly string[];
  hours: readonly ContactHoursRow[];
  mapEmbedUrl: string;
  mapsOpenUrl: string;
};

export const contactVenues: readonly ContactVenue[] = [
  {
    id: "pistoia",
    title: "Pistoia",
    lines: [SITE.address.line1, SITE.address.line2, "51100 Pistoia (PT)"],
    hours: [
      { day: "Martedì", hours: "21:00 – 23:30" },
      { day: "Giovedì", hours: "21:00 – 23:30" },
      { day: "Venerdì", hours: "21:00 – 23:30" },
      { day: "Altri giorni", hours: "Chiuso" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps?q=Palestra+Einaudi,+Viale+Pacinotti,+Pistoia&ll=43.929095,10.9104798&z=17&output=embed",
    mapsOpenUrl:
      "https://www.google.com/maps?q=Palestra+Einaudi,+Viale+Pacinotti,+Pistoia",
  },
  {
    id: "quarrata",
    title: "Quarrata",
    lines: [
      "Palestra scuola primaria Alberto Manzi",
      "Via Torino, 61",
      "51039 Quarrata (PT)",
    ],
    hours: [
      { day: "Lunedì", hours: "21:00 – 23:00" },
      { day: "Mercoledì", hours: "21:00 – 23:00" },
      { day: "Altri giorni", hours: "Chiuso" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps?q=Via+Torino,+61,+51039+Quarrata+PT&z=17&output=embed",
    mapsOpenUrl:
      "https://www.google.com/maps?q=Via+Torino,+61,+51039+Quarrata+PT",
  },
];

export const contactIntro = {
  referent: "Pancani Luca",
  address: contactVenues
    .map((v) => `${v.title}\n${v.lines.join("\n")}`)
    .join("\n\n"),
} as const;

/** Prima sede — compatibilità con codice che importava solo Pistoia. */
export const mapEmbedUrl = contactVenues[0]!.mapEmbedUrl;
