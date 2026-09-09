import {
  homeAbout,
  homeIntro,
  homeMilestones,
  homeNews,
  homeStats,
  homeVideo,
} from "@/lib/content/home";
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
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <SectionContainer compact className="pb-2 pt-11" reveal={false}>
        <HomeStatsGrid stats={homeStats} />
        <div className="mt-10">
          {homeIntro.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="mb-4 text-[17px] leading-[1.8] text-ink-body [text-wrap:pretty] last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </SectionContainer>

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
        <ScrollReveal className="relative z-[2] mx-auto max-w-[1280px] px-10 max-md:px-5">
          <MediaSplit
            title="Chi siamo"
            text={homeAbout.text}
            link={{ href: "/storia", label: "Scopri la nostra storia" }}
          />
        </ScrollReveal>
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
