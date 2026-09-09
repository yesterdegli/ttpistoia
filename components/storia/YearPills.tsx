"use client";

import type { SeasonContent } from "@/lib/season-types";
import { seasonPillLabel } from "@/lib/storia-utils";

type Props = {
  seasons: SeasonContent[];
  activeId: string;
  onSelect: (id: string) => void;
  heading?: string;
};

export function YearPills({
  seasons,
  activeId,
  onSelect,
  heading = "Salta alla stagione",
}: Props) {
  return (
    <div className="pointer-events-none sticky top-[76px] z-[15] w-full self-start border-b border-line bg-white/96 backdrop-blur-sm max-lg:top-16">
      <div className="pointer-events-auto mx-auto max-w-[1280px] px-10 py-3 max-md:px-5">
        <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-dim">
          {heading}
        </div>
        <div className="st-pillbar flex gap-2 overflow-x-auto pb-1.5 [-webkit-overflow-scrolling:touch] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded [&::-webkit-scrollbar-thumb]:bg-[rgb(1_1_123/0.25)] [&::-webkit-scrollbar]:h-1.5">
          {seasons.map((season) => {
            const active = season.id === activeId;
            return (
              <button
                key={season.id}
                type="button"
                onClick={() => onSelect(season.id)}
                className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-2 text-xs tracking-[0.02em] ${
                  active
                    ? "border-0 bg-grad-bg font-bold text-white"
                    : "border border-line-control bg-surface font-medium text-ink-mid"
                }`}
              >
                {seasonPillLabel(season.id)}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
