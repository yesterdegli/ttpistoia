/**
 * Converte PNG in public/images/giocatori → WebP (alpha, qualità alta).
 * Uso: npm run convert-giocatori-webp
 */
import fs from "node:fs";
import path from "node:path";
import { createCanvas, loadImage } from "@napi-rs/canvas";

const DIR = path.join(process.cwd(), "public", "images", "giocatori");
/** Qualità 98 — compressione forte, resa quasi identica al PNG */
const WEBP_QUALITY = 98;

const skip = new Set(["LEGGIMI.txt"]);

async function main() {
  if (!fs.existsSync(DIR)) {
    console.error("Cartella assente:", DIR);
    process.exit(1);
  }

  const pngs = fs
    .readdirSync(DIR)
    .filter((n) => n.toLowerCase().endsWith(".png") && !skip.has(n));

  if (pngs.length === 0) {
    console.log("Nessun PNG da convertire.");
    return;
  }

  let ok = 0;
  for (const name of pngs) {
    const pngPath = path.join(DIR, name);
    const base = path.parse(name).name;
    const webpPath = path.join(DIR, `${base}.webp`);
    const img = await loadImage(pngPath);
    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    const buf = canvas.toBuffer("image/webp", WEBP_QUALITY);
    fs.writeFileSync(webpPath, buf);
  const saved = buf.length;
    fs.unlinkSync(pngPath);
    console.log(`${name} → ${base}.webp (${saved} bytes)`);
    ok++;
  }

  console.log(`Convertiti ${ok} file. PNG rimossi (solo WebP in repo).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});