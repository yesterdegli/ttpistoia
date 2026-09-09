import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArticleHero,
  FactAside,
  ShareRow,
} from "@/components/content/ArticleParts";
import { NewsCard } from "@/components/content/NewsCard";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { articles, getArticle } from "@/lib/content/news";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  return { title: article?.title ?? "Articolo" };
}

export default async function ArticoloPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articles
    .filter((a) => a.slug !== slug && !a.featured)
    .slice(0, 3);

  return (
    <>
      <ArticleHero article={article} />

      <SectionContainer className="pb-20 pt-9" reveal={false}>
        <div className="art-body grid items-start gap-14 max-lg:gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
          <article>
            {article.body.map((para) => (
              <p
                key={para.slice(0, 40)}
                className="mb-[22px] text-lg leading-[1.85] text-[#26282d] [text-wrap:pretty]"
              >
                {para}
              </p>
            ))}

            {article.quote && (
              <blockquote className="my-[34px] rounded-r-[18px] border-l-4 border-red bg-surface-tint py-6 pl-7 pr-7">
                <p className="m-0 font-display text-xl font-semibold leading-normal tracking-[-0.01em] text-blue">
                  &ldquo;{article.quote.text}&rdquo;
                </p>
                <div className="mt-3 text-[13px] font-medium text-ink-muted">
                  {article.quote.author}
                </div>
              </blockquote>
            )}

            <ShareRow />
          </article>

          {article.facts && <FactAside facts={article.facts} />}
        </div>
      </SectionContainer>

      <SectionContainer bg="grey" className="pb-20">
        <SectionHeading>Continua a leggere</SectionHeading>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {related.map((a) => (
            <NewsCard key={a.slug} article={a} />
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
