/** `default` | `alt` — controllato da NEXT_PUBLIC_BRAND_PALETTE in .env / Netlify */
export type BrandPaletteId = "default" | "alt";

export const BRAND_PALETTES = {
  default: {
    label: "Ufficiale",
    blue: "#01017b",
    blueLight: "#0a0a8f",
    redDeep: "#8c0a19",
    red: "#e50d22",
    redText: "#c00c1e",
  },
  alt: {
    label: "Alternativa",
    blue: "#2f3347",
    red: "#552929",
  },
} as const;

export function resolveBrandPalette(): BrandPaletteId {
  const raw = process.env.NEXT_PUBLIC_BRAND_PALETTE?.trim().toLowerCase();
  return raw === "alt" ? "alt" : "default";
}
