import Link from "next/link";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export type NewsCardData = {
  slug: string;
  date: string;
  category: string;
  title: string;
  dek?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function NewsCard({ article }: { article: NewsCardData }) {
  return (
    <article className="glow-2t glow-2t-hover overflow-hidden rounded-[18px] bg-surface transition-[transform,box-shadow] duration-200 hover:-translate-y-1">
      <Link href={`/news/${article.slug}`} prefetch className="block hover:opacity-100">
        <div className="group/img overflow-hidden">
          <div className="relative h-[170px] w-full transition-transform duration-500 group-hover/img:scale-[1.06]">
            <ImagePlaceholder
              src={article.imageSrc}
              alt={article.imageAlt ?? article.title}
              label={article.imageAlt ?? "Foto articolo"}
              fill
            />
          </div>
        </div>
        <div className="p-5">
          <div className="mb-2 text-xs font-bold uppercase tracking-[0.05em] text-red">
            {article.date} · {article.category}
          </div>
          <h3 className="mb-2 text-lg font-semibold grad-text">{article.title}</h3>
          {article.dek && (
            <p className="mb-3 text-sm leading-normal text-ink-soft">{article.dek}</p>
          )}
          <span className="text-[13px] font-bold grad-text">Leggi di più →</span>
        </div>
      </Link>
    </article>
  );
}
