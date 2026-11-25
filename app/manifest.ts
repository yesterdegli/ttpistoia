import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SITE_DESCRIPTION } from "@/lib/site-seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — Tennistavolo Pistoia`,
    short_name: "TT Pistoia",
    description: SITE_DESCRIPTION,
    lang: "it",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f5f7",
    theme_color: "#04046c",
    categories: ["sports", "lifestyle"],
  };
}