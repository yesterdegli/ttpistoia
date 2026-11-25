/**
 * Attenua il “alone bianco” sui bordi (capelli, spalle) dopo lo scontorno.
 * Uso:
 *   node scripts/defringe-giocatori.mjs          → anteprima in public/images/giocatori/_defringe-preview
 *   node scripts/defringe-giocatori.mjs --apply   → sovrascrive i WebP (backup in .backup-defringe)
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const DIR = path.join(process.cwd(), "public", "images", "giocatori");
const PREVIEW = path.join(DIR, "_defringe-preview");
const BACKUP = path.join(DIR, ".backup-defringe");
const skip = new Set(["LEGGIMI.txt", "_defringe-preview", ".backup-defringe"]);
const apply = process.argv.includes("--apply");
const fromBackup = process.argv.includes("--from-backup");
const strong = process.argv.includes("--strong") || apply;
/** Basename senza estensione, es. Gabriele_Roselli */
const onlyBases = process.argv
  .filter((a) => !a.startsWith("-") && !a.endsWith(".mjs"))
  .map((a) => a.replace(/\.(webp|png)$/i, ""));

function hasTransparentNeighbor(data, width, height, x, y, radius) {
  for (let dy = -radius; dy <= radius; dy++) {
    for (let dx = -radius; dx <= radius; dx++) {
      if (dx === 0 && dy === 0) continue;
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
      const j = (ny * width + nx) * 4;
      if (data[j + 3] < 20) return true;
    }
  }
  return false;
}

function darkestInnerColor(data, width, height, x, y, radius) {
  let best = null;
  let bestAvg = 999;
  for (let dy = -radius; dy <= radius; dy++) {
    for (let dx = -radius; dx <= radius; dx++) {
      if (dx === 0 && dy === 0) continue;
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
      const j = (ny * width + nx) * 4;
      if (data[j + 3] < 140) continue;
      const avg = (data[j] + data[j + 1] + data[j + 2]) / 3;
      if (avg > 195) continue;
      if (avg < bestAvg) {
        bestAvg = avg;
        best = [data[j], data[j + 1], data[j + 2]];
      }
    }
  }
  return best;
}

function defringeRgba(data, width, height) {
  const out = new Uint8ClampedArray(data);
  const edgeRadius = strong ? 6 : 3;
  const lightAvg = strong ? 125 : 135;

  // Passo 1 — alone bianco/opaco sui bordi (anche alpha=255)
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const a = out[i + 3];
      if (a < 8) continue;

      const r = out[i];
      const g = out[i + 1];
      const b = out[i + 2];
      const avg = (r + g + b) / 3;
      const chroma = Math.max(r, g, b) - Math.min(r, g, b);

      const edgeTight = hasTransparentNeighbor(out, width, height, x, y, 2);
      const edge = hasTransparentNeighbor(out, width, height, x, y, edgeRadius);
      if (!edge) continue;

      const looksLikeSpill =
        avg > lightAvg ||
        (a < 250 && avg > 110) ||
        (edgeTight && avg > 105 && chroma < 55);

      if (!looksLikeSpill) continue;

      let strength = Math.min(1, (avg - lightAvg) / 70);
      if (a < 252) strength = Math.max(strength, (255 - a) / 200);
      if (edgeTight && avg > 160) strength = Math.max(strength, 0.55);
      if (strong) strength = Math.min(1, strength * 1.35 + 0.15);

      const inner = darkestInnerColor(out, width, height, x, y, strong ? 10 : 7);
      const t = Math.min(0.95, strength * (strong ? 0.92 : 0.78));

      if (inner) {
        out[i] = Math.round(r * (1 - t) + inner[0] * t);
        out[i + 1] = Math.round(g * (1 - t) + inner[1] * t);
        out[i + 2] = Math.round(b * (1 - t) + inner[2] * t);
      } else if (avg > 120) {
        const k = 1 - t * 0.55;
        out[i] = Math.round(r * k);
        out[i + 1] = Math.round(g * k);
        out[i + 2] = Math.round(b * k);
      }

      if (edgeTight && avg > (strong ? 150 : 175)) {
        const cut = strong ? 0.55 : 0.35;
        out[i + 3] = Math.max(0, Math.round(a * (1 - cut * strength)));
      }
    }
  }

  // Passo 2 — erosione leggera dell’alpha sul bordo (solo pixel ancora chiari)
  if (strong) {
    const alpha = new Uint8ClampedArray(out.length);
    alpha.set(out);
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const i = (y * width + x) * 4;
        if (out[i + 3] === 0) continue;
        if (!hasTransparentNeighbor(out, width, height, x, y, 1)) continue;
        const avg = (out[i] + out[i + 1] + out[i + 2]) / 3;
        if (avg < 130) continue;

        let minA = out[i + 3];
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const j = ((y + dy) * width + (x + dx)) * 4;
            minA = Math.min(minA, alpha[j + 3]);
          }
        }
        out[i + 3] = Math.max(0, Math.round(minA * 0.82));
      }
    }
  }

  return out;
}

async function processFile(filePath, outPath) {
  const { data, info } = await sharp(filePath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const fixed = defringeRgba(data, info.width, info.height);
  const buf = await sharp(fixed, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .webp({ quality: 98, alphaQuality: 100 })
    .toBuffer();

  try {
    fs.writeFileSync(outPath, buf);
    return "ok";
  } catch (err) {
    const staging = path.join(DIR, ".defringe-staging");
    fs.mkdirSync(staging, { recursive: true });
    const staged = path.join(staging, path.basename(outPath));
    fs.writeFileSync(staged, buf);
    console.warn(
      `⚠ ${path.basename(outPath)} bloccato (${err.code}) → .defringe-staging/${path.basename(outPath)}`,
    );
    return "staged";
  }
}

async function main() {
  if (!fs.existsSync(DIR)) {
    console.error("Cartella assente:", DIR);
    process.exit(1);
  }

  let files = fs
    .readdirSync(DIR)
    .filter((n) => /\.(webp|png)$/i.test(n) && !skip.has(n));

  if (onlyBases.length > 0) {
    const wanted = new Set(
      onlyBases.flatMap((b) => [`${b}.webp`, `${b}.png`, `${b}.PNG`]),
    );
    files = files.filter((n) => {
      const base = path.parse(n).name;
      return onlyBases.some(
        (b) => b.toLowerCase() === base.toLowerCase() || wanted.has(n),
      );
    });
    if (files.length === 0) {
      console.error("Nessun file trovato per:", onlyBases.join(", "));
      process.exit(1);
    }
  }

  if (files.length === 0) {
    console.log("Nessuna foto da elaborare.");
    return;
  }

  if (apply) {
    fs.mkdirSync(BACKUP, { recursive: true });
  } else {
    fs.mkdirSync(PREVIEW, { recursive: true });
    console.log(`Anteprima in: ${PREVIEW}`);
    console.log("Se va bene: npm run defringe-giocatori -- --apply\n");
  }

  for (const name of files) {
    const base = path.parse(name).name;
    const backupCandidate = path.join(BACKUP, `${base}.webp`);
    const backupPng = path.join(BACKUP, `${base}.png`);
    const src =
      fromBackup && fs.existsSync(backupCandidate)
        ? backupCandidate
        : fromBackup && fs.existsSync(backupPng)
          ? backupPng
          : path.join(DIR, name);
    const outName = `${base}.webp`;
    const dest = apply
      ? path.join(DIR, outName)
      : path.join(PREVIEW, outName);

    if (apply) {
      const backupPath = path.join(BACKUP, name);
      if (!fs.existsSync(backupPath)) {
        fs.copyFileSync(src, backupPath);
      }
    }

    const result = await processFile(src, dest);
    if (apply) {
      console.log(result === "staged" ? `◇ ${outName} (staging)` : `✓ ${outName}`);
    } else {
      console.log(`→ ${outName}`);
    }
  }

  if (apply) {
    console.log(`\nBackup originali in ${BACKUP}`);
    const staging = path.join(DIR, ".defringe-staging");
    if (fs.existsSync(staging) && fs.readdirSync(staging).length > 0) {
      console.log(
        "File in staging: chiudi anteprima/IDE sulle foto e copia da .defringe-staging/ oppure rilancia lo script.",
      );
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});