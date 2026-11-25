import type { MetadataRoute } from "next";
import { getSiteUrl, shouldAllowIndexing } from "@/lib/site-seo";

export default function robots(): MetadataRoute.Robots {
  if (!shouldAllowIndexing()) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}
