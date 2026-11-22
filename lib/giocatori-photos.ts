import fs from "node:fs";
import path from "node:path";

const GIOCATORI_PHOTO_DIR = path.join(
  process.cwd(),
  "public",
  "images",
  "giocatori",
);

const PHOTO_EXTS = new Set(["webp", "jpg", "jpeg", "png"]);

const EXT_PRIORITY: Record<string, number> = {
  webp: 0,
  png: 1,
  jpg: 2,
  jpeg: 2,
};

export type GiocatoriPhotoIndex = ReadonlyMap<string, string>;

/** Minuscole, senza accenti; spazi e apostrofi → `_` (es. Degl'innocenti → degl_innocenti). */
export function slugifyPlayerPart(part: string): string {
  return part
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/['’`]/g, "")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .replace(/_+/g, "_");
}

/**
 * Slug file attesi: nome_cognome (es. luca_pancani, chiara_dabizzi).
 * In scheda il nome può essere "Nome Cognome" o "Cognome Nome": si provano entrambi.
 */
export function playerPhotoSlugCandidates(displayName: string): string[] {
  const parts = displayName.trim().split(/\s+/).filter(Boolean);
  const slugs = parts.map(slugifyPlayerPart);
  const out = new Set<string>();

  if (slugs.length === 1) {
    out.add(slugs[0]!);
    return [...out];
  }

  if (slugs.length === 2) {
    out.add(`${slugs[0]}_${slugs[1]}`);
    out.add(`${slugs[1]}_${slugs[0]}`);
    return [...out];
  }

  const nome = slugs[slugs.length - 1]!;
  const cognome = slugs.slice(0, -1).join("_");
  out.add(`${nome}_${cognome}`);
  out.add(`${slugs[0]}_${slugs.slice(1).join("_")}`);

  return [...out];
}

function titleCaseSlug(slug: string): string {
  return slug
    .split("_")
    .filter(Boolean)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("_");
}

let cachedIndex: GiocatoriPhotoIndex | null = null;

/** Una sola scansione della cartella per richiesta/build (evita 29× readdir sulla pagina). */
export function getGiocatoriPhotoIndex(): GiocatoriPhotoIndex {
  if (process.env.NODE_ENV === "development") {
    cachedIndex = null;
  } else if (cachedIndex) {
    return cachedIndex;
  }

  const byBaseLower = new Map<string, string>();

  try {
    if (fs.existsSync(GIOCATORI_PHOTO_DIR)) {
      for (const name of fs.readdirSync(GIOCATORI_PHOTO_DIR)) {
        if (name.startsWith(".") || name === "LEGGIMI.txt") continue;
        const parsed = path.parse(name);
        const ext = parsed.ext.slice(1).toLowerCase();
        if (!PHOTO_EXTS.has(ext)) continue;
        const base = parsed.name.toLowerCase();
        const prev = byBaseLower.get(base);
        const prio = EXT_PRIORITY[ext] ?? 9;
        const prevPrio = prev
          ? (EXT_PRIORITY[path.parse(prev).ext.slice(1).toLowerCase()] ?? 9)
          : 99;
        if (!prev || prio < prevPrio) {
          byBaseLower.set(base, name);
        }
      }
    }
  } catch {
    /* cartella assente o non leggibile — nessuna foto */
  }

  cachedIndex = byBaseLower;
  return byBaseLower;
}

export function resolvePlayerPhotoFromIndex(
  index: GiocatoriPhotoIndex,
  displayName: string,
): string | undefined {
  const slugSet = new Set<string>();
  for (const slug of playerPhotoSlugCandidates(displayName)) {
    slugSet.add(slug);
    slugSet.add(titleCaseSlug(slug));
  }

  for (const slug of slugSet) {
    const hit = index.get(slug.toLowerCase());
    if (hit) return `/images/giocatori/${hit}`;
  }

  return undefined;
}

/** Path pubblico della foto se esiste in `public/images/giocatori/`, altrimenti undefined. */
export function resolvePlayerPhoto(displayName: string): string | undefined {
  return resolvePlayerPhotoFromIndex(getGiocatoriPhotoIndex(), displayName);
}