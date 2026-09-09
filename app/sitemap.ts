import type { MetadataRoute } from "next";
import { articles } from "@/lib/content/news";
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
    "/news",
    "/regole",
    "/documenti-storici",
    "/contatti",
    "/privacy",
    "/cookie",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: now,
      changeFrequency: path === "" || path === "/news" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.7,
    })),
    ...articles.map((article) => ({
      url: `${siteUrl}/news/${article.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
