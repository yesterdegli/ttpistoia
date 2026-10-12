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
