import {
  campionatiSectionHref,
  formatStandingPosition,
  giocatoriTeamHref,
} from "@/lib/campionati-utils";
import { TextLink } from "@/components/ui/TextLink";

type Props = {
  code: string;
  position: number | null;
};

export function ChampionshipCard({ code, position }: Props) {
  const badgeLabel =
    position != null ? formatStandingPosition(position) : "In aggiornamento";

  return (
    <article className="glow-2t glow-2t-hover flex h-full flex-col rounded-[18px] bg-surface p-6 transition-[transform,box-shadow] duration-200 hover:-translate-y-1">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3 max-md:flex-col max-md:items-start">
        <h3 className="m-0 font-display text-[22px] font-bold tracking-[-0.015em] grad-text md:text-[26px]">
          {code}
        </h3>
        <span className="shrink-0 rounded-full bg-grad-bg px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.06em] text-white">
          {badgeLabel}
        </span>
      </div>

      <div className="flex flex-col items-start gap-3 border-t border-line pt-5">
        <TextLink href={giocatoriTeamHref(code)} className="!text-[12px]">
          Scopri giocatori
        </TextLink>
        <TextLink href={campionatiSectionHref(code)} className="!text-[12px]">
          Calendario e classifiche
        </TextLink>
      </div>
    </article>
  );
}
