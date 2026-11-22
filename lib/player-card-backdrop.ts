/**
 * Sfondo area foto giocatori (PNG scontornati).
 * Default: Striscia (diagonal). Override: NEXT_PUBLIC_PLAYER_CARD_BACKDROP in .env.
 */
export type PlayerCardBackdropId = "soft" | "diagonal" | "arena" | "mist";

export const PLAYER_CARD_BACKDROPS: Record<
  PlayerCardBackdropId,
  { label: string; className: string }
> = {
  soft: {
    label: "Angoli — alone blu e rosso agli angoli opposti",
    className: "player-photo-backdrop-soft",
  },
  diagonal: {
    label: "Striscia — gradiente hero della home (blu → rosso)",
    className: "player-photo-backdrop-diagonal",
  },
  arena: {
    label: "Club — fondo blu, pallini e filetto rosso",
    className: "player-photo-backdrop-arena",
  },
  mist: {
    label: "Aurora — blu in alto e rosso in basso",
    className: "player-photo-backdrop-mist",
  },
};

export function resolvePlayerCardBackdrop(): PlayerCardBackdropId {
  const raw = process.env.NEXT_PUBLIC_PLAYER_CARD_BACKDROP?.trim().toLowerCase();
  if (raw && raw in PLAYER_CARD_BACKDROPS) {
    return raw as PlayerCardBackdropId;
  }
  return "diagonal";
}