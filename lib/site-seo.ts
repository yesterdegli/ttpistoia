import type { Metadata } from "next";
import { contactVenues } from "@/lib/content/contatti";
import { FACEBOOK_URL, SITE } from "@/lib/site";

/** Meta description home (~155 caratteri, località + FITeT). */
export const SITE_DESCRIPTION =
  "Tennistavolo e ping pong a Pistoia e Quarrata dal 1992. ASD affiliata FITeT: allenamenti, campionati dalla serie D alla C2, due palestre. Prova gratuita.";

export const SITE_KEYWORDS = [
  "tennistavolo",
  "tennis tavolo",
  "ping pong",
  "ping-pong",
  "Pistoia",
  "Quarrata",
  "TT Pistoia",
  "Tennistavolo Pistoia",
  "Tennis Tavolo Pistoia",
  "ttpistoia",
  "FITeT",
  "FITET Toscana",
  "palestra Einaudi",
  "Viale Pacinotti",
  "Alberto Manzi Quarrata",
  "campionati tennistavolo",
  "serie D tennistavolo",
  "associazione sportiva Pistoia",
  "Toscana",
  "Provincia di Pistoia",
] as const;

const DAY_TO_SCHEMA: Record<string, string> = {
  Lunedì: "Monday",
  Martedì: "Tuesday",
  Mercoledì: "Wednesday",
  Giovedì: "Thursday",
  Venerdì: "Friday",
  Sabato: "Saturday",
  Domenica: "Sunday",
};

function parseTimeRange(hours: string): { opens: string; closes: string } | null {
  const m = hours.match(/(\d{1,2}:\d{2})\s*[–-]\s*(\d{1,2}:\d{2})/);
  if (!m) return null;
  return { opens: m[1]!, closes: m[2]! };
}

function venueOpeningHours(venue: (typeof contactVenues)[number]) {
  const specs: {
    "@type": "OpeningHoursSpecification";
    dayOfWeek: string | string[];
    opens: string;
    closes: string;
  }[] = [];

  for (const row of venue.hours) {
    if (row.day === "Altri giorni") continue;
    const day = DAY_TO_SCHEMA[row.day];
    const times = parseTimeRange(row.hours);
    if (!day || !times) continue;
    specs.push({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: day,
      opens: times.opens,
      closes: times.closes,
    });
  }
  return specs;
}

export function getSiteUrl(): string {
  let url = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (url) {
    url = url.replace(/\/$/, "");
    if (!/^https?:\/\//i.test(url)) url = `https://${url}`;
    return url;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "http://localhost:3000";
}

/** true solo in produzione quando NEXT_PUBLIC_ALLOW_INDEX=true */
export function shouldAllowIndexing(): boolean {
  return process.env.NEXT_PUBLIC_ALLOW_INDEX === "true";
}

/** Pagine news mock — esclusi dall’indice finché NEWS_SECTION_ENABLED è false. */
export function newsDraftRobotsMetadata(): Metadata {
  return {
    robots: {
      index: false,
      follow: true,
      googleBot: { index: false, follow: true },
    },
  };
}

export function buildSiteMetadata(): Metadata {
  const siteUrl = getSiteUrl();
  const allowIndex = shouldAllowIndexing();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: "Tennistavolo Pistoia — ping pong e campionati FITeT",
      template: `%s · ${SITE.name}`,
    },
    description: SITE_DESCRIPTION,
    keywords: [...SITE_KEYWORDS],
    applicationName: SITE.name,
    robots: allowIndex
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        }
      : {
          index: false,
          follow: false,
          googleBot: { index: false, follow: false },
        },
    openGraph: {
      type: "website",
      locale: "it_IT",
      url: siteUrl,
      siteName: SITE.name,
      title: "Tennistavolo Pistoia — ping pong e campionati FITeT",
      description: SITE_DESCRIPTION,
    },
    twitter: {
      card: "summary_large_image",
      title: "Tennistavolo Pistoia — ping pong e campionati FITeT",
      description: SITE_DESCRIPTION,
    },
    category: "sport",
  };
}

export function buildOrganizationJsonLd() {
  const siteUrl = getSiteUrl();

  const locations = contactVenues.map((venue) => {
    const locality =
      venue.id === "quarrata"
        ? "Quarrata"
        : "Pistoia";
    const postalCode = venue.id === "quarrata" ? "51039" : "51100";

    return {
      "@type": "SportsActivityLocation",
      name: `${SITE.name} — ${venue.title}`,
      description: venue.lines.join(", "),
      address: {
        "@type": "PostalAddress",
        streetAddress: venue.lines.join(", "),
        addressLocality: locality,
        postalCode,
        addressRegion: "PT",
        addressCountry: "IT",
      },
      openingHoursSpecification: venueOpeningHours(venue),
    };
  });

  return {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    name: SITE.name,
    alternateName: [
      "Tennistavolo Pistoia",
      "Tennis Tavolo Pistoia",
      "ASD Tennistavolo Pistoia",
      "TT Pistoia asd",
    ],
    url: siteUrl,
    logo: `${siteUrl}/apple-icon`,
    image: `${siteUrl}/opengraph-image`,
    description: SITE_DESCRIPTION,
    email: SITE.email,
    telephone: SITE.phone,
    foundingDate: "1992",
    sport: "Table Tennis",
    areaServed: [
      { "@type": "City", name: "Pistoia" },
      { "@type": "City", name: "Quarrata" },
    ],
    location: locations,
    sameAs: FACEBOOK_URL.startsWith("http") ? [FACEBOOK_URL] : [],
  };
}

export function buildWebSiteJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    alternateName: "ttpistoia.it",
    url: siteUrl,
    description: SITE_DESCRIPTION,
    inLanguage: "it-IT",
    publisher: {
      "@type": "SportsOrganization",
      name: SITE.name,
      url: siteUrl,
    },
  };
}
