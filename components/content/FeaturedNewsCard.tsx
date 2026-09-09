import Link from "next/link";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { Article } from "@/lib/content/news";

export function FeaturedNewsCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/news/${article.slug}`}
      className="glow-2t glow-2t-hover block overflow-hidden rounded-[22px] bg-surface transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:opacity-100"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr]">
        <div className="group/img relative min-h-[240px] overflow-hidden md:min-h-[280px] lg:min-h-[340px]">
          <div className="absolute inset-0 transition-transform duration-500 group-hover/img:scale-[1.06]">
            <ImagePlaceholder
              src={article.imageSrc}
              alt={article.imageAlt ?? article.title}
              label={article.imageAlt ?? "Foto principale"}
              fill
            />
          </div>
        </div>
        <div className="flex flex-col justify-center px-6 py-8 md:px-8 lg:px-10 lg:py-9">
          <div className="mb-3.5 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-red px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.06em] text-white">
              In evidenza
            </span>
            <span className="text-xs font-medium text-ink-dim">
              {article.date} · {article.category}
            </span>
          </div>
          <h2 className="mb-3.5 font-display text-[22px] font-bold leading-tight tracking-[-0.02em] grad-text md:text-[26px] lg:text-[30px]">
            {article.title}
          </h2>
          <p className="mb-5 text-base leading-[1.7] text-ink-mid">{article.dek}</p>
          <span className="text-[13px] font-bold grad-text">Leggi l&apos;articolo →</span>
        </div>
      </div>
    </Link>
  );
}
