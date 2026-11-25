import type { Metadata } from "next";
import { storiaMeta } from "@/lib/content/page-meta";
import { buildPageMetadata } from "@/lib/page-metadata";
import { StoriaPageClient } from "@/components/storia/StoriaPageClient";
import { PageHero } from "@/components/layout/PageHero";
import { storia } from "@/real-data/storia";

export const metadata: Metadata = buildPageMetadata(storiaMeta);

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
