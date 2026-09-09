"use client";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

// ID_CLASS potrebbe cambiare quando la federazione aggiorna le classifiche — verificare periodicamente se l'URL resta valido o se va sostituito con un nuovo ID_CLASS
const FITET_RANKING_URL =
  "https://portale.fitet.org/risultati/new_rank/testaclassifica_auto.php?ID_CLASS=246&ID=1&PASS=20";

export function RankingModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ranking-modal-title"
    >
      <div className="flex max-h-[85vh] w-full max-w-[900px] flex-col overflow-hidden rounded-[18px] bg-white shadow-[0_16px_48px_rgb(0_0_0/0.2)]">
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-[#eee] px-5 py-4">
          <h2
            id="ranking-modal-title"
            className="m-0 font-display text-lg font-bold grad-text"
          >
            Classifiche nazionali individuali
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Chiudi"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-2xl leading-none text-ink-muted transition-colors hover:bg-surface-grey hover:text-ink-mid"
          >
            ×
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-auto p-4">
          <iframe
            title="Classifiche nazionali individuali FITeT"
            src={FITET_RANKING_URL}
            width={820}
            height={700}
            className="max-w-none border-0"
          />
        </div>
      </div>
    </div>
  );
}
