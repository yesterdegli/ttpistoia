"use client";

/** Label per accordion e pillole: "Stagione 2023-2024" o "Stagione 1992" */
export function seasonLabel(id: string): string {
  return `Stagione ${id.replace("/", "-")}`;
}

/** Pill label abbreviato per la barra sticky */
export function seasonPillLabel(id: string): string {
  if (id === "1992") return "1992";
  const [start, end] = id.split("-");
  if (!end) return id;
  const endShort = end.length === 4 ? end.slice(2) : end;
  return `${start}/${endShort}`;
}

/** Anchor id per hash URL */
export function seasonAnchorId(id: string): string {
  return `stagione-${id.replace("/", "-")}`;
}

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

/** Stagioni ordinate dalla più recente */
export function getSeasonsNewestFirst<T extends { id: string; yearStart: number }>(
  seasons: T[],
): T[] {
  return [...seasons].sort((a, b) => b.yearStart - a.yearStart);
}

/** Primo periodo del testo narrativo (prima frase per intro) */
export function getFirstSentence(text: string): string {
  const match = text.match(/^[^.!?]+[.!?]/);
  return match ? match[0].trim() : text.slice(0, 120);
}

/** Paragrafi dal testo narrativo */
export function splitParagraphs(text: string): string[] {
  return text
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
}
