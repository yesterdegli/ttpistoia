"use client";

import type { NormePongistaPage } from "@/real-data/norme-pongista";
import { useCallback, useEffect, useRef, useState } from "react";
import { IconButton } from "@/components/ui/IconButton";

const AUTO_MS = 5000;
const PAUSE_AFTER_MANUAL_MS = 12000;

type Props = {
  pages: NormePongistaPage[];
};

export function NormePongistaPageClient({ pages }: Props) {
  const [index, setIndex] = useState(0);
  const pauseUntilRef = useRef(0);
  const item = pages[index];

  const go = useCallback(
    (delta: -1 | 1) => {
      pauseUntilRef.current = Date.now() + PAUSE_AFTER_MANUAL_MS;
      setIndex((i) => (i + delta + pages.length) % pages.length);
    },
    [pages.length],
  );

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || pages.length <= 1) return;

    const tick = () => {
      if (Date.now() < pauseUntilRef.current) return;
      setIndex((i) => (i + 1) % pages.length);
    };

    const id = window.setInterval(tick, AUTO_MS);
    return () => window.clearInterval(id);
  }, [pages.length]);

  if (!item) return null;

  return (
    <div className="mx-auto max-w-[min(920px,100%)]">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="m-0 text-sm font-medium text-ink-mid">
            {index + 1} / {pages.length}
            {item.title ? ` · ${item.title}` : ""}
          </p>
          <p className="mb-0 mt-1 text-xs text-ink-dim">
            Avanzamento automatico ogni 5 secondi · frecce per navigare
          </p>
        </div>
        <div className="flex gap-2">
          <IconButton ariaLabel="Vignetta precedente" size="slider" onClick={() => go(-1)}>
            ‹
          </IconButton>
          <IconButton ariaLabel="Vignetta successiva" size="slider" onClick={() => go(1)}>
            ›
          </IconButton>
        </div>
      </div>

      <figure className="m-0">
        <div
          key={item.src}
          className="flex min-h-[200px] items-center justify-center overflow-hidden rounded-[14px] border border-line bg-surface-grey shadow-[0_8px_28px_rgb(1_1_40/0.08)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- aspecto variabile per pagina */}
          <img
            src={item.src}
            alt={item.alt}
            decoding="async"
            className="mx-auto block h-auto max-h-[min(78vh,920px)] w-auto max-w-full"
          />
        </div>
        {item.title && (
          <figcaption className="mt-3 text-center text-sm font-semibold text-ink-strong">
            {item.title}
          </figcaption>
        )}
      </figure>

      <div className="mt-5 flex flex-wrap justify-center gap-1.5">
        {pages.map((p, i) => (
          <button
            key={p.src}
            type="button"
            aria-label={`Vai a ${p.title ?? `pagina ${i + 1}`}`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => {
              pauseUntilRef.current = Date.now() + PAUSE_AFTER_MANUAL_MS;
              setIndex(i);
            }}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-blue" : "w-2 bg-[rgb(1_1_123/0.22)] hover:bg-[rgb(1_1_123/0.4)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
