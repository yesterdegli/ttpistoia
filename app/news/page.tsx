import type { Metadata } from "next";
import { CtaPanel } from "@/components/content/CtaPanel";
import { FeaturedNewsCard } from "@/components/content/FeaturedNewsCard";
import { FilterChips } from "@/components/content/FilterChips";
import { NewsCard } from "@/components/content/NewsCard";
import { Pagination } from "@/components/content/Pagination";
import { PageHero } from "@/components/layout/PageHero";
import { SectionContainer } from "@/components/ui/SectionContainer";
import {
  getFeaturedArticle,
  getGridArticles,
} from "@/lib/content/news";

export const metadata: Metadata = {
  title: "News",
};

export default function NewsPage() {
  const featured = getFeaturedArticle();
  const grid = getGridArticles();

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "News" }]}
        title="News"
        subtitle="Risultati, tornei e vita del circolo"
      />

      <SectionContainer compact className="pb-2">
        <FilterChips />
      </SectionContainer>

      <SectionContainer compact className="pb-2 pt-8">
        <FeaturedNewsCard article={featured} />
      </SectionContainer>

      <SectionContainer>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {grid.map((article) => (
            <NewsCard key={article.slug} article={article} />
          ))}
        </div>
        <div className="mt-10">
          <Pagination />
        </div>
      </SectionContainer>

      <SectionContainer className="pb-20">
        <CtaPanel
          title="Vieni a giocare con noi"
          text="Il martedì e il giovedì sera la palestra è aperta a tutti. Prima prova gratuita."
          primaryCta={{ href: "/contatti", label: "Prenota una prova" }}
        />
      </SectionContainer>
    </>
  );
}
