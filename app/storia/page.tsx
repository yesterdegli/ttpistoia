import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import { StoriaPageClient } from "@/components/storia/StoriaPageClient";
import { PageHero } from "@/components/layout/PageHero";
import { storia } from "@/real-data/storia";

export const metadata: Metadata = buildPageMetadata({
  title: "La nostra storia",
  description:
    "Storia del Tennistavolo Pistoia dal 1992: fondazione, FITeT, campionati serie D–C2, trofei e tappe fino a oggi. Archivio stagioni del club di ping pong pistoiese.",
  path: "/storia",
  keywords: ["storia tennistavolo Pistoia", "Luca Balleri", "campionati TT Pistoia"],
});

export default function StoriaPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Storia" }]}
        title="La nostra storia"
        subtitle="Trentadue stagioni, dal 1992 a oggi"
      />
      <StoriaPageClient seasons={storia} />
    </>
  );
}
