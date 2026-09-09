"use client";

import type { SeasonPhoto } from "@/lib/season-types";
import { useRef, useState } from "react";
import { IconButton } from "@/components/ui/IconButton";
import { StoriaLightbox } from "@/components/storia/StoriaLightbox";
import { StoriaPhoto } from "@/components/storia/StoriaPhoto";
import { usePhotoSliderDrag } from "@/components/storia/usePhotoSliderDrag";

type Props = {
  photos: SeasonPhoto[];
  heading?: string;
};

export function PhotoSlider({
  photos,
  heading = "Fotografie della stagione",
}: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { ref: dragRootRef, wasDraggedRef } = usePhotoSliderDrag<HTMLDivElement>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (photos.length === 0) return null;

  const scroll = (dir: -1 | 1) => {
    const el = sliderRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(320, el.clientWidth * 0.8), behavior: "smooth" });
  };

  const openLightbox = (index: number) => {
    if (wasDraggedRef.current) {
      wasDraggedRef.current = false;
      return;
    }
    setLightboxIndex(index);
  };

  return (
    <>
      <div ref={dragRootRef} className="mb-10" data-slider-wrap>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
          <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-blue">
            {heading}
          </div>
          <div className="flex items-center gap-2.5">
            <span className="hidden text-[11px] text-blue md:inline">
              Trascina o usa le frecce
            </span>
            <IconButton ariaLabel="Foto precedenti" size="slider" onClick={() => scroll(-1)}>
              ‹
            </IconButton>
            <IconButton ariaLabel="Foto successive" size="slider" onClick={() => scroll(1)}>
              ›
            </IconButton>
          </div>
        </div>
        <div
          ref={sliderRef}
          className="st-slider flex cursor-grab snap-x snap-mandatory gap-4 overflow-x-auto pb-2 active:cursor-grabbing [-webkit-overflow-scrolling:touch] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded [&::-webkit-scrollbar-thumb]:bg-[rgb(1_1_123/0.22)] [&::-webkit-scrollbar-track]:rounded [&::-webkit-scrollbar-track]:bg-[#f1f2f5]"
        >
          {photos.map((photo, i) => {
            const wide = i % 5 === 0 || i % 5 === 3;
            const tileWidth = wide
              ? "w-[380px] max-lg:w-[300px]"
              : "w-[280px] max-lg:w-[260px]";
            const tileHeight = wide ? "h-[280px] max-lg:h-[240px]" : "h-[220px]";

            return (
              <figure
                key={photo.src}
                className={`m-0 shrink-0 snap-start ${tileWidth}`}
              >
                <button
                  type="button"
                  onClick={() => openLightbox(i)}
                  className="group/img relative block w-full cursor-zoom-in overflow-hidden rounded-[14px] border-0 bg-transparent p-0 text-left"
                  aria-label={`Apri foto: ${photo.alt}`}
                >
                  <div
                    className={`relative ${tileHeight} w-full transition-transform duration-500 ease-out group-hover/img:scale-[1.06] group-focus-visible/img:scale-[1.06]`}
                  >
                    <StoriaPhoto src={photo.src} alt={photo.alt} />
                  </div>
                </button>
                <figcaption className="mt-2 text-xs leading-normal text-ink-dim">
                  {photo.caption}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      {lightboxIndex !== null && (
        <StoriaLightbox
          photos={photos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
        />
      )}
    </>
  );
}
