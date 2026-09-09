import Link from "next/link";
import { GradientHeaderShell } from "@/components/layout/GradientHeaderShell";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { Article } from "@/lib/content/news";

export function ArticleHero({ article }: { article: Article }) {
  return (
    <GradientHeaderShell className="[clip-path:polygon(0_0,100%_0,100%_94%,0_100%)]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 px-10 py-[52px] pb-[76px] max-md:gap-8 max-md:px-5 max-md:py-10 max-md:pb-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <div className="max-lg:order-2">
          <div className="mb-4 text-xs font-semibold text-white/60">
            <Link href="/" className="text-white/60 hover:opacity-100">
              Home
            </Link>
            {" / "}
            <Link href="/news" className="text-white/60 hover:opacity-100">
              News
            </Link>
            {" / Articolo"}
          </div>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.06em] text-blue">
              {article.category}
            </span>
            <span className="text-[13px] font-medium text-white/80">
              {article.date} · {article.readingTime}
            </span>
          </div>
          <h1 className="m-0 max-w-[900px] font-display text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-white [text-wrap:pretty] md:text-[40px] lg:text-[52px]">
            {article.title}
          </h1>
          <p className="mt-5 max-w-[760px] text-base leading-normal text-white/90 [text-wrap:pretty] md:text-[19px]">
            {article.standfirst}
          </p>
        </div>
        <div className="max-lg:order-1">
          <div className="overflow-hidden rounded-[22px] shadow-[0_14px_40px_rgba(0,0,0,0.28)]">
            <div className="relative h-[240px] w-full md:h-[300px] lg:h-[360px]">
              <ImagePlaceholder
                src={article.imageSrc}
                alt={article.imageAlt ?? article.title}
                label="Immagine di copertina"
                fill
              />
            </div>
          </div>
          {article.imageCaption && (
            <p className="mt-2.5 text-xs leading-normal text-white/70">
              {article.imageCaption}
            </p>
          )}
        </div>
      </div>
    </GradientHeaderShell>
  );
}

export function FactAside({
  facts,
}: {
  facts: { label: string; value: string }[];
}) {
  return (
    <aside className="art-aside sticky top-[110px] rounded-[18px] bg-surface-grey p-6 max-lg:static">
      <div className="mb-3 text-xs font-bold uppercase tracking-[0.06em] text-blue">
        In breve
      </div>
      {facts.map((f, i) => (
        <div
          key={f.label}
          className={`flex justify-between gap-4 py-3 ${
            i < facts.length - 1 ? "border-b border-line" : ""
          }`}
        >
          <span className="text-sm font-medium text-ink-soft">{f.label}</span>
          <span className="text-sm font-semibold text-ink-strong">{f.value}</span>
        </div>
      ))}
    </aside>
  );
}

export function ShareRow() {
  const links = ["FB", "IG", "WA"];
  return (
    <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-line pt-6">
      <span className="text-xs font-semibold uppercase tracking-[0.06em] text-ink-dim">
        Condividi
      </span>
      {links.map((l) => (
        <a
          key={l}
          href="#"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-grad-bg text-xs font-bold text-white transition-transform duration-[180ms] hover:-translate-y-0.5 hover:opacity-100"
        >
          {l}
        </a>
      ))}
    </div>
  );
}
