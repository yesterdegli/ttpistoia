import type { Metadata } from "next";
import { SITE } from "@/lib/site";

type PageMetaInput = {
  title: string;
  description: string;
  /** Percorso canonico, es. `/storia` o `` per home. */
  path: `/${string}` | "";
};

export function buildPageMetadata({
  title,
  description,
  path,
}: PageMetaInput): Metadata {
  const canonical = path || "/";
  const isHome = path === "";
  const socialTitle = isHome ? title : `${title} · ${SITE.name}`;

  return {
    title: isHome ? { absolute: title } : title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "it_IT",
      siteName: SITE.name,
      title: socialTitle,
      description,
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}
