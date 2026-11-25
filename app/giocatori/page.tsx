import type { Metadata } from "next";
import { giocatoriMeta } from "@/lib/content/page-meta";
import { buildPageMetadata } from "@/lib/page-metadata";
import { PlayerCard } from "@/components/content/PlayerCard";
import { PageHero } from "@/components/layout/PageHero";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { teamAnchor } from "@/lib/campionati-utils";
import { giocatoriIntro, teams } from "@/lib/content/giocatori";
import {
  getGiocatoriPhotoIndex,
  resolvePlayerPhotoFromIndex,
} from "@/lib/giocatori-photos";

export const metadata: Metadata = buildPageMetadata(giocatoriMeta);

export default function GiocatoriPage() {
  const photoIndex = getGiocatoriPhotoIndex();

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Giocatori" }]}
        title="I nostri giocatori"
      />

      <SectionContainer bg="grey" compact className="pb-2 pt-11" reveal={false}>
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

          {/* ≤640: 1 col · 641–900: 2 col · ≥901: griglia 6 col (2+3 centrata) */}
          <div className="rtc-team-grid grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-6">
            {team.players.map((player, pi) => {
              const count = team.players.length;
              const centerWideRow =
                (pi === 0 && (count === 5 || count === 4)) ||
                (pi === 2 && count === 4);

              return (
                <div
                  key={`${team.code}-${pi}`}
                  className={`w-full min-w-0 lg:col-span-2 ${
                    centerWideRow ? "lg:col-start-2" : ""
                  }`}
                >
                  <PlayerCard
                    name={player.name}
                    category={player.category}
                    imageSrc={resolvePlayerPhotoFromIndex(
                      photoIndex,
                      player.name,
                    )}
                  />
                </div>
              );
            })}
          </div>
        </SectionContainer>
      ))}
    </>
  );
}
