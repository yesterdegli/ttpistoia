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
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {homeNews.map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
        </SectionContainer>
      ) : null}

      <HomeVideoBand {...homeVideo} />

      <SectionContainer compact className="pb-14" id="campionati">
        <SectionHeading link={{ href: "/campionati", label: "Tutti i campionati" }}>
          Campionati
        </SectionHeading>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <ChampionshipCard
              key={cat.code}
              code={cat.code}
              position={getClubStandingPosition(cat.standings)}
            />
          ))}
        </div>
      </SectionContainer>

      <section className="section-pattern-light relative z-[2] mt-11 -mb-10 overflow-hidden bg-grad-bg py-[132px] [clip-path:polygon(0_0,100%_5.5%,100%_100%,0_94.5%)] max-lg:py-24 max-md:mt-8 max-md:py-20">
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_78%_30%,rgba(255,255,255,0.10)_0%,transparent_55%)]" />
        <div className="relative z-[2] mx-auto max-w-[1280px] px-10 max-md:px-5">
          <MediaSplit
            title="Chi siamo"
            text={homeAbout.text}
            link={{ href: "/storia", label: "Scopri la nostra storia" }}
          />
        </div>
      </section>

      <SectionContainer bg="grey">
        <SectionHeading link={{ href: "/storia", label: "Leggi la storia" }}>
          Trentadue stagioni
        </SectionHeading>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {homeMilestones.map((m) => (
            <MilestoneCard
              key={m.year}
              year={m.year}
              description={m.description}
              href={m.href}
            />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="pb-[72px]">
        <CtaPanel
          title="Vieni a provare"
          text="Il martedì e il giovedì sera la palestra è aperta a chiunque voglia provare: racchette e tavoli li mettiamo noi. Prima prova gratuita, nessun impegno."
          primaryCta={{ href: "/contatti", label: "Prenota una prova" }}
          secondaryCta={{ href: "/regole", label: "Come si gioca" }}
          infoRows={[
            { label: "Martedì", value: "21:00 – 23:30" },
            { label: "Giovedì", value: "21:00 – 23:30" },
            { label: "Palestra Einaudi", value: "Viale Pacinotti, Pistoia" },
          ]}
          footerLink={{ href: "/contatti", label: "Contatti e mappa" }}
        />
      </SectionContainer>
    </>
  );
}
