/** `default` | `alt` — controllato da NEXT_PUBLIC_HERO_BEAR in .env / Netlify */
export type HeroBearId = "default" | "alt";

export const HERO_BEAR_ASSETS = {
  default: "/assets/logo-hero.svg",
  alt: "/assets/logo-hero-alt.svg",
} as const;

export function resolveHeroBear(): HeroBearId {
  const raw = process.env.NEXT_PUBLIC_HERO_BEAR?.trim().toLowerCase();
  return raw === "alt" ? "alt" : "default";
}

export function heroBearSrc(): string {
  return HERO_BEAR_ASSETS[resolveHeroBear()];
}
