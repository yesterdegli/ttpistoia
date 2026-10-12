"use client";

import { seasonAnchorId } from "@/lib/storia-utils";

/** Offset scroll: header + barra pillole sticky (allineato a scroll-mt dell'accordion) */
export function storiaScrollOffset(): number {
  return window.innerWidth >= 901 ? 180 : 160;
}

/** Porta la testata stagione sotto header e pillole, dopo expand del pannello */
export function scrollSeasonIntoView(
  id: string,
  behavior: ScrollBehavior = "smooth",
) {
  const el = document.getElementById(seasonAnchorId(id));
  if (!el) return;

  const top =
    el.getBoundingClientRect().top + window.scrollY - storiaScrollOffset();
  window.scrollTo({ top: Math.max(0, top), behavior });
}

/** Doppio passaggio: il secondo compensa l'altezza aggiunta dal contenuto aperto */
export function scrollSeasonIntoViewAfterExpand(id: string) {
  scrollSeasonIntoView(id);
  window.setTimeout(() => scrollSeasonIntoView(id), 80);
}
