"use client";

import type { SeasonPhoto } from "@/lib/season-types";
import Image from "next/image";
import { useCallback, useEffect } from "react";
import { IconButton } from "@/components/ui/IconButton";

type Props = {
  photos: SeasonPhoto[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function StoriaLightbox({ photos, index, onClose, onChange }: Props) {
  const photo = photos[index];
  const hasPrev = index > 0;
  const hasNext = index < photos.length - 1;

  const goPrev = useCallback(() => {
    if (hasPrev) onChange(index - 1);
  }, [hasPrev, index, onChange]);

  const goNext = useCallback(() => {
    if (hasNext) onChange(index + 1);
  }, [hasNext, index, onChange]);

  useEffect(() => {
    document.documentElement.classList.add("overflow-hidden");
    document.body.classList.add("overflow-hidden");
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, goPrev, goNext]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 max-md:p-3"
      role="dialog"
      aria-modal="true"
      aria-label="Anteprima fotografia"
    >
      <button
        type="button"
        aria-label="Chiudi"
        className="absolute inset-0 bg-[rgb(1_1_40/0.88)]"
        onClick={onClose}
      />

      <div className="relative z-[1] flex w-full max-w-[min(1200px,96vw)] flex-col">
        <div className="mb-3 flex items-center justify-between gap-4">
          <span className="text-sm font-medium text-white/75">
            {index + 1} / {photos.length}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Chiudi anteprima"
            className="flex h-10 w-10 items-center justify-center rounded-full border-0 bg-white/10 text-2xl leading-none text-white transition-colors hover:bg-white/20"
          >
            ×
          </button>
        </div>

        <div className="relative flex min-h-[200px] items-center justify-center">
          {hasPrev && (
            <div className="absolute left-0 top-1/2 z-[2] -translate-y-1/2 max-md:-left-1">
              <IconButton ariaLabel="Foto precedente" onClick={goPrev}>
                ‹
              </IconButton>
            </div>
          )}

          <div className="relative mx-auto aspect-[4/3] w-full max-h-[min(78vh,820px)] overflow-hidden rounded-[18px] bg-black/30 shadow-[0_20px_60px_rgb(0_0_0/0.45)] max-md:max-h-[62vh]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-contain"
              sizes="96vw"
              priority
            />
          </div>

          {hasNext && (
            <div className="absolute right-0 top-1/2 z-[2] -translate-y-1/2 max-md:-right-1">
              <IconButton ariaLabel="Foto successiva" onClick={goNext}>
                ›
              </IconButton>
            </div>
          )}
        </div>

        <p className="mx-auto mt-4 max-w-[900px] text-center text-sm leading-relaxed text-white/90 [text-wrap:pretty]">
          {photo.caption}
        </p>
      </div>
    </div>
  );
}
