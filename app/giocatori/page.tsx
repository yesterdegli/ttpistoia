import type { Metadata } from "next";
import { PlayerCard } from "@/components/content/PlayerCard";
import { PageHero } from "@/components/layout/PageHero";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { teamAnchor } from "@/lib/campionati-utils";
import { giocatoriIntro, teams } from "@/lib/content/giocatori";

export const metadata: Metadata = {
  title: "I nostri giocatori",
};

export default function GiocatoriPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Giocatori" }]}
        title="I nostri giocatori"
      />

      <SectionContainer bg="grey" compact className="pb-2 pt-11">
        <p className="m-0 max-w-[700px] text-base leading-[1.75] text-ink-mid [text-wrap:pretty]">
          {giocatoriIntro}
        </p>
      </SectionContainer>

      {teams.map((team, ti) => (
        <SectionContainer
          key={team.code}
          id={teamAnchor(team.code)}
          bg="grey"
          className={`scroll-mt-[140px] ${ti === 0 ? "pt-12" : "pt-11"} ${ti === teams.length - 1 ? "pb-20" : "pb-11"}`}
        >
          <SectionHeading as="h2" centered>
            {`Squadra ${team.code}`}
          </SectionHeading>

          {/* Mobile: 2 + 3, righe centrate */}
          <div className="flex flex-col items-center gap-[22px] md:hidden">
            <div className="grid w-full max-w-[22rem] grid-cols-2 gap-[22px]">
              {team.players.slice(0, 2).map((player, pi) => (
                <PlayerCard
                  key={`${team.code}-top-${pi}`}
                  name={player.name}
                  category={player.category}
                />
              ))}
            </div>
            <div className="grid w-full max-w-[33rem] grid-cols-2 gap-[22px] min-[480px]:grid-cols-3">
              {team.players.slice(2).map((player, pi) => (
                <PlayerCard
                  key={`${team.code}-bottom-${pi}`}
                  name={player.name}
                  category={player.category}
                />
              ))}
            </div>
          </div>

          {/* Tablet+ : griglia 6 col, 2 sopra centrate + 3 sotto */}
          <div className="rtc-team-grid hidden grid-cols-6 gap-[22px] md:grid">
            {team.players.map((player, pi) => (
              <div
                key={`${team.code}-${pi}`}
                className={`col-span-2${pi === 0 ? " col-start-2" : ""}`}
              >
                <PlayerCard name={player.name} category={player.category} />
              </div>
            ))}
          </div>
        </SectionContainer>
      ))}
    </>
  );
}
