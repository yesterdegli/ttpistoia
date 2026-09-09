import type { StandingsRow } from "@/lib/content/campionati";

export const CLUB_TEAM_NAME = "TT Pistoia asd";

export function categorySlug(code: string): string {
  return code.toLowerCase().replace("/", "-");
}

export function categoryAnchor(code: string): string {
  return `campionato-${categorySlug(code)}`;
}

export function teamAnchor(code: string): string {
  return `squadra-${categorySlug(code)}`;
}

export function campionatiSectionHref(code: string): string {
  return `/campionati#${categoryAnchor(code)}`;
}

export function giocatoriTeamHref(code: string): string {
  return `/giocatori#${teamAnchor(code)}`;
}

export function getClubStandingPosition(standings: StandingsRow[]): number | null {
  const row = standings.find((entry) => entry.team === CLUB_TEAM_NAME);
  return row?.position ?? null;
}

export function formatStandingPosition(position: number): string {
  if (position === 1) return "1° posto";
  return `${position}° posto`;
}
