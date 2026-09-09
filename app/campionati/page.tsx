import type { Metadata } from "next";
import { CampionatiRankingTrigger } from "@/components/content/CampionatiRankingTrigger";
import { FitetEmbed } from "@/components/content/FitetEmbed";
import { PageHero } from "@/components/layout/PageHero";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categoryAnchor } from "@/lib/campionati-utils";
import { categories } from "@/lib/content/campionati";

export const metadata: Metadata = {
  title: "Campionati",
};

export default function CampionatiPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Campionati" }]}
        title="Campionati"
      />

      <SectionContainer className="pb-20">
        <div className="mb-10 flex justify-end">
          <CampionatiRankingTrigger />
        </div>

        {categories.map((cat, i) => (
          <div
            key={cat.code}
            id={categoryAnchor(cat.code)}
            className={`scroll-mt-[140px] ${i > 0 ? "mt-14" : ""}`}
          >
            <SectionHeading as="h2">{cat.code}</SectionHeading>
            <FitetEmbed camId={cat.camId} category={cat.code} />
          </div>
        ))}
      </SectionContainer>
    </>
  );
}
