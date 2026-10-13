import type { Metadata } from "next";
import {
  homeAbout,
  homeIntro,
  homeMilestones,
  homeNews,
  homeStats,
  homeVideo,
} from "@/lib/content/home";
import { NEWS_SECTION_ENABLED } from "@/lib/site";
import { categories } from "@/lib/content/campionati";
import { getClubStandingPosition } from "@/lib/campionati-utils";
import { ChampionshipCard } from "@/components/content/ChampionshipCard";
import { CtaPanel } from "@/components/content/CtaPanel";
import { HomeVideoBand } from "@/components/content/HomeVideoBand";
import { MediaSplit } from "@/components/content/MediaSplit";
import { MilestoneCard } from "@/components/content/MilestoneCard";
import { NewsCard } from "@/components/content/NewsCard";
import { HomeStatsGrid } from "@/components/content/HomeStatsGrid";
import { HomeHero } from "@/components/layout/HomeHero";
import { GradientHeaderShell } from "@/components/layout/GradientHeaderShell";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Tennistavolo Pistoia — ping pong e campionati FITeT",
  description:
    "ASD Tennistavolo Pistoia: ping pong a Pistoia (Palestra Einaudi) e Quarrata. Dal 1992, campionati FITeT, allenamenti per tutti. Prova gratuita martedì e giovedì.",
  path: "",
  keywords: ["prova gratuita ping pong", "scuola tennistavolo Pistoia"],
});

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <SectionContainer
        className="pb-14 pt-16 max-md:pb-12 max-md:pt-14 md:pb-[4.5rem] md:pt-20"
        reveal={false}
      >
        <HomeStatsGrid stats={homeStats} />
        <div className="mt-12 md:mt-14">
          <p className="m-0 font-display text-[21px] font-semibold leading-[1.55] tracking-[-0.012em] text-ink-strong [text-wrap:pretty] md:text-[26px] md:leading-[1.48]">
            {homeIntro.lead}
          </p>
          <p className="mb-0 mt-6 text-[18px] font-medium leading-[1.82] text-ink-body [text-wrap:pretty] md:mt-7 md:text-[20px] md:leading-[1.78]">
            {homeIntro.body}
          </p>
          <p className="mb-0 mt-5 font-display text-[19px] font-bold leading-[1.45] tracking-[-0.01em] grad-text [text-wrap:pretty] md:mt-6 md:text-[22px]">
            {homeIntro.closing}
          </p>
        </div>
      </SectionContainer>

      {NEWS_SECTION_ENABLED ? (
        <SectionContainer>
          <SectionHeading link={{ href: "/news", label: "Tutte le news" }}>
            Ultime notizie
          </SectionHeading>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {homeNews.map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
        </SectionContainer>
      ) : null}

      <HomeVideoBand {...homeVideo} />

      <SectionContainer id="campionati" className="py-20 md:py-24" reveal={false}>
        <SectionHeading link={{ href: "/campionati", label: "Tutti i campionati" }}>
          Campionati FITeT
        </SectionHeading>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7 xl:grid-cols-3">
          {categories.map((cat) => (
            <ChampionshipCard
              key={cat.code}
              code={cat.code}
              position={getClubStandingPosition(cat.standings)}
            />
          ))}
        </div>
      </SectionContainer>

      <GradientHeaderShell className="relative z-[2] -my-4 py-[132px] [clip-path:polygon(0_0,100%_5.5%,100%_100%,0_94.5%)] max-md:py-28 md:-my-6">
        <div className="mx-auto max-w-[1280px] px-10 max-md:px-5">
          <MediaSplit {...homeAbout} />
        </div>
      </GradientHeaderShell>

      <SectionContainer reveal={false}>
        <SectionHeading link={{ href: "/storia", label: "Leggi la storia" }}>
          Trentadue stagioni
        </SectionHeading>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homeMilestones.map((m) => (
            <MilestoneCard key={m.year} {...m} />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="pb-20 md:pb-24">
        <CtaPanel
          title="Vieni a provare"
          text="Il martedì e il giovedì a Pistoia, lunedì e mercoledì a Quarrata: racchette e tavoli li mettiamo noi. Prima prova gratuita, nessun impegno."
          primaryCta={{ href: "/contatti", label: "Prenota una prova" }}
          secondaryCta={{ href: "/regole", label: "Come si gioca" }}
          infoRows={[
            { label: "Pistoia", value: "Mar e gio 21:00 – 23:30 · Einaudi" },
            { label: "Quarrata", value: "Lun e mer 21:00 – 23:00 · Manzi" },
            { label: "Contatti", value: "335.7388152 · ttpt@ttpistoia.it" },
          ]}
          footerLink={{ href: "/contatti", label: "Contatti e mappe" }}
        />
      </SectionContainer>
    </>
  );
}
