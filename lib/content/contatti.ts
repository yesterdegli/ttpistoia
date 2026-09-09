import { SITE } from "@/lib/site";

export const contactHours = [
  { day: "Martedì", hours: "21:00 – 23:30" },
  { day: "Giovedì", hours: "21:00 – 23:30" },
  { day: "Altri giorni", hours: "Chiuso" },
] as const;

export const mapEmbedUrl =
  "https://www.google.com/maps?q=Palestra+Einaudi,+Viale+Pacinotti,+Pistoia&ll=43.929095,10.9104798&z=17&output=embed";

export const contactIntro = {
  address: `${SITE.address.line1}\n${SITE.address.line2}\n${SITE.address.line3} — Italia`,
  referent: "Pancani Luca",
};
