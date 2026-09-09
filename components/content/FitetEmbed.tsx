type Props = {
  camId: number;
  category: string;
};

const FITET_BASE = "https://portale.fitet.org/risultati/campionati";

function fitetCalendarUrl(camId: number) {
  return `${FITET_BASE}/calendario.php?CAM=${camId}`;
}

function fitetStandingsUrl(camId: number) {
  return `${FITET_BASE}/classifica_squadre.php?CAM=${camId}`;
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
        <iframe
          title={`Calendario FITeT — ${category}`}
          src={fitetCalendarUrl(camId)}
          className="h-[min(520px,70vh)] w-full border-0 bg-white"
          loading="lazy"
        />
      </div>

      <h3 className="mb-3 mt-6 scroll-mt-[140px] text-sm font-bold uppercase tracking-[0.05em] text-[#888]">
        Classifica
      </h3>
      <div className="overflow-hidden rounded-2xl shadow-[0_4px_16px_rgb(0_0_0/0.06)]">
        <iframe
          title={`Classifica FITeT — ${category}`}
          src={fitetStandingsUrl(camId)}
          className="h-[min(640px,80vh)] w-full border-0 bg-white"
          loading="lazy"
        />
      </div>
    </>
  );
}
