/**
 * Esporta le pagine del PDF in WebP ritagliate (senza bordi bianchi).
 * Salta pagine vuote (es. bianco dopo la copertina).
 * Uso: node scripts/export-norme-pongista-pdf.mjs [path-al-pdf]
 */
import fs from "node:fs";
import path from "node:path";
import { createCanvas } from "@napi-rs/canvas";
import sharp from "sharp";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

const pdfPath =
  process.argv[2] ??
  path.join(process.env.USERPROFILE ?? "", "Downloads", "norme pongista.pdf");

const outDir = path.join(process.cwd(), "public", "images", "norme-pongista");
const publicDocs = path.join(process.cwd(), "public", "docs");

/** Pagine PDF da non esportare (1-based). Pagina 2 = bianco dopo copertina. */
const SKIP_PDF_PAGES = new Set([2]);

if (!fs.existsSync(pdfPath)) {
  console.error("PDF non trovato:", pdfPath);
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(publicDocs, { recursive: true });

const pdfDest = path.join(publicDocs, "norme-pongista.pdf");
fs.copyFileSync(pdfPath, pdfDest);

for (const file of fs.readdirSync(outDir)) {
  if (file.endsWith(".webp")) fs.unlinkSync(path.join(outDir, file));
}

const data = new Uint8Array(fs.readFileSync(pdfPath));
const doc = await getDocument({ data, useSystemFonts: true }).promise;

console.log(`Pagine PDF: ${doc.numPages}`);

let outIndex = 0;

async function isMostlyBlank(pngBuffer) {
  const { width, height } = await sharp(pngBuffer).metadata();
  if (!width || !height) return true;
  const sample = await sharp(pngBuffer)
    .resize(120, 120, { fit: "inside" })
    .raw()
    .toBuffer({ resolveWithObject: true });
  let nonWhite = 0;
  const pixels = sample.data.length / 3;
  for (let i = 0; i < sample.data.length; i += 3) {
    const r = sample.data[i];
    const g = sample.data[i + 1];
    const b = sample.data[i + 2];
    if (r < 248 || g < 248 || b < 248) nonWhite++;
  }
  return nonWhite / pixels < 0.008;
}

for (let pageNum = 1; pageNum <= doc.numPages; pageNum++) {
  if (SKIP_PDF_PAGES.has(pageNum)) {
    console.log(`— skip PDF pagina ${pageNum} (esclusa)`);
    continue;
  }

  const page = await doc.getPage(pageNum);
  const scale = 2.5;
  const viewport = page.getViewport({ scale });
  const canvas = createCanvas(viewport.width, viewport.height);
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, viewport.width, viewport.height);

  await page.render({
    canvasContext: ctx,
    viewport,
  }).promise;

  const png = canvas.toBuffer("image/png");

  if (await isMostlyBlank(png)) {
    console.log(`— skip PDF pagina ${pageNum} (quasi tutta bianca)`);
    continue;
  }

  outIndex++;
  const name = `pagina-${String(outIndex).padStart(2, "0")}.webp`;
  const outPath = path.join(outDir, name);

  await sharp(png)
    .trim({ threshold: 18 })
    .webp({ quality: 88, effort: 4 })
    .resize({ width: 1600, withoutEnlargement: true })
    .toFile(outPath);

  const meta = await sharp(outPath).metadata();
  console.log(`→ ${name}  (da PDF ${pageNum}, ${meta.width}×${meta.height})`);
}

console.log(`Fatto: ${outIndex} file in ${outDir}`);
