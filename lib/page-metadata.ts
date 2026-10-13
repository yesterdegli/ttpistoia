import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { SITE_KEYWORDS } from "@/lib/site-seo";

type PageMetaInput = {
  title: string;
  description: string;
  /** Percorso canonico, es. `/storia` o `` per home. */
  path: `/${string}` | "";
  /** Keyword aggiuntive oltre al set globale del sito. */
  keywords?: string[];
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetaInput): Metadata {
  const canonical = path || "/";
  const keywordsMerged = keywords
    ? [...new Set([...SITE_KEYWORDS, ...keywords])]
    : [...SITE_KEYWORDS];

  return {
    title,
    description,
    keywords: keywordsMerged,
    alternates: { canonical },
    openGraph: {
      title: `${title} · ${SITE.name}`,
      description,
      url: canonical,
    },
    twitter: {
      title: `${title} · ${SITE.name}`,
      description,
    },
  };
}
