import type { Metadata } from "next";
import { FACEBOOK_URL, SITE } from "@/lib/site";

/** Meta description — sintesi del testo intro home (~155 caratteri) */
export const SITE_DESCRIPTION =
  "Dal 1992, il Tennistavolo Pistoia è la casa del ping pong in città. Affiliati FITeT: campionati regionali e nazionali dalla serie D alla C2. Porte aperte a tutti.";

export const SITE_KEYWORDS = [
  "tennistavolo",
  "ping pong",
  "Pistoia",
  "TT Pistoia",
  "FITeT",
  "palestra Einaudi",
  "campionati tennistavolo",
  "Toscana",
] as const;

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

export function buildSiteMetadata(): Metadata {
  const siteUrl = getSiteUrl();
  const allowIndex = shouldAllowIndexing();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: SITE.name,
      template: `%s · ${SITE.name}`,
    },
    description: SITE_DESCRIPTION,
    keywords: [...SITE_KEYWORDS],
    applicationName: SITE.name,
    alternates: {
      canonical: "/",
    },
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
      title: SITE.name,
      description: SITE_DESCRIPTION,
    },
    twitter: {
      card: "summary_large_image",
      title: SITE.name,
      description: SITE_DESCRIPTION,
    },
    category: "sport",
  };
}

export function buildOrganizationJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    name: SITE.name,
    alternateName: "Tennistavolo Pistoia",
    url: siteUrl,
    logo: `${siteUrl}/apple-icon`,
    image: `${siteUrl}/opengraph-image`,
    description: SITE_DESCRIPTION,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE.address.line1}, ${SITE.address.line2}`,
      addressLocality: "Pistoia",
      postalCode: "51100",
      addressRegion: "PT",
      addressCountry: "IT",
    },
    foundingDate: "1992",
    sport: "Table Tennis",
    sameAs: FACEBOOK_URL.startsWith("http") ? [FACEBOOK_URL] : [],
  };
}
