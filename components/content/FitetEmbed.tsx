import { FitetIframe } from "@/components/content/FitetIframe";
import { FITET_SEASON_ANNO } from "@/lib/content/campionati";
import { fitetStandingsEmbedUrl } from "@/lib/fitet-embed";

type Props = {
  camId: number;
  category: string;
};

const FITET_BASE = "https://portale.fitet.org/risultati/campionati";

function fitetCalendarUrl(camId: number) {
  return `${FITET_BASE}/Calendario.asp?CAM=${camId}&ANNO=${FITET_SEASON_ANNO}`;
}


export function FitetEmbed({ camId, category }: Props) {
  if (camId <= 0) {
    return (
      <div className="rounded-[18px] bg-surface px-6 py-14 text-center shadow-[0_4px_16px_rgb(0_0_0/0.06)]">
        <p className="m-0 font-display text-lg font-bold grad-text">
          Girone non ancora disponibile
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-muted">
          Sarà pubblicato a breve dalla federazione
        </p>
      </div>
    );
  }

  return (
    <>
      <h3 className="mb-3 mt-0 scroll-mt-[140px] text-sm font-bold uppercase tracking-[0.05em] text-[#888]">
        Prossime partite
      </h3>
      <div className="mb-6 overflow-hidden rounded-2xl shadow-[0_4px_16px_rgb(0_0_0/0.06)]">
        <FitetIframe
          title={`Calendario FITeT — ${category}`}
          src={fitetCalendarUrl(camId)}
          variant="calendar"
        />
      </div>

      <h3 className="mb-3 mt-6 scroll-mt-[140px] text-sm font-bold uppercase tracking-[0.05em] text-[#888]">
        Classifica
      </h3>
      <div className="overflow-hidden rounded-2xl shadow-[0_4px_16px_rgb(0_0_0/0.06)] [&_.overflow-x-auto]:rounded-2xl">
        <FitetIframe
          title={`Classifica FITeT — ${category}`}
          src={fitetStandingsEmbedUrl(camId)}
          variant="standings"
        />
      </div>
    </>
  );
}
