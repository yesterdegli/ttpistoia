"use client";

import type { SeasonContent } from "@/lib/season-types";
import {
  seasonAnchorId,
  seasonLabel,
  splitParagraphs,
} from "@/lib/storia-utils";
import { PhotoSlider } from "@/components/storia/PhotoSlider";

type Props = {
  seasons: SeasonContent[];
  openId: string;
  onToggle: (id: string) => void;
  getSectionLabel?: (id: string) => string;
  photoSliderHeading?: string;
};

export function SeasonAccordion({
  seasons,
  openId,
  onToggle,
  getSectionLabel = seasonLabel,
  photoSliderHeading,
}: Props) {
  return (
    <div>
      {seasons.map((season) => {
        const isOpen = openId === season.id;
        const paragraphs = splitParagraphs(season.description);
        const hasPhotos = season.photos.length > 0;

        return (
          <div
            key={season.id}
            id={seasonAnchorId(season.id)}
            className="scroll-mt-[180px] border-t border-line"
          >
            <button
              type="button"
              onClick={() => onToggle(season.id)}
              className="st-acc-head relative z-[2] flex w-full cursor-pointer flex-wrap items-center gap-x-4 gap-y-2 px-3 py-5 text-left transition-colors hover:bg-surface-tint max-md:px-2 max-md:py-4"
            >
              <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-grad-bg text-[17px] font-semibold text-white">
                {isOpen ? "−" : "+"}
              </div>
              <div className="flex-1 min-w-[min(100%,200px)] font-display text-[22px] font-bold tracking-[-0.01em] grad-text max-md:text-[19px]">
                {getSectionLabel(season.id)}
              </div>
              {hasPhotos && (
                <div className="whitespace-nowrap rounded-full border border-red/35 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-red">
                  {season.photos.length} foto
                </div>
              )}
            </button>

            {isOpen && (
              <div className="px-3 pb-11">
                {hasPhotos && (
                  <PhotoSlider
                    photos={season.photos}
                    heading={photoSliderHeading}
                  />
                )}
                {paragraphs.map((para) => (
                  <p
                    key={para.slice(0, 40)}
                    className="mb-[18px] text-[17px] leading-[1.85] text-ink-body [text-wrap:pretty] last:mb-0"
                  >
                    {para}
                  </p>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
