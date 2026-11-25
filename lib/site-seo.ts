import type { Metadata } from "next";
import { contactVenues } from "@/lib/content/contatti";
import { FACEBOOK_URL, SITE } from "@/lib/site";

import { homeMeta } from "@/lib/content/page-meta";

/** Description predefinita sito (home + JSON-LD + Open Graph globali). */
export const SITE_DESCRIPTION = homeMeta.description;

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
      default: homeMeta.title,
      template: `%s · ${SITE.name}`,
    },
    description: SITE_DESCRIPTION,
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
      title: homeMeta.title,
      description: SITE_DESCRIPTION,
    },
    twitter: {
      card: "summary_large_image",
      title: homeMeta.title,
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
      geo: {
        "@type": "GeoCoordinates",
        latitude: venue.geo.latitude,
        longitude: venue.geo.longitude,
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
