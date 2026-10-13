import type { MetadataRoute } from "next";
import { articles } from "@/lib/content/news";
import { NEWS_SECTION_ENABLED } from "@/lib/site";
import { getSiteUrl, shouldAllowIndexing } from "@/lib/site-seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!shouldAllowIndexing()) return [];

  const siteUrl = getSiteUrl();
  const now = new Date();

  const staticRoutes = [
    "",
    "/storia",
    "/giocatori",
    "/campionati",
    ...(NEWS_SECTION_ENABLED ? ["/news"] : []),
    "/regole",
    "/documenti-storici",
    "/documenti-storici/norme-del-pongista",
    "/contatti",
    "/privacy",
    "/cookie",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: now,
      changeFrequency:
        path === "" || path === "/news" ? ("weekly" as const) : ("monthly" as const),
      priority:
        path === ""
          ? 1
          : path === "/storia" || path === "/contatti"
            ? 0.85
            : 0.7,
    })),
    ...(NEWS_SECTION_ENABLED
      ? articles.map((article) => ({
          url: `${siteUrl}/news/${article.slug}`,
          lastModified: now,
          changeFrequency: "monthly" as const,
          priority: 0.5,
        }))
      : []),
  ];
}
