#!/usr/bin/env node
/**
 * Abbina le foto caricate in uploads/gallery-incoming/ ai path in real-data/storia.ts
 * e le copia in public/images/gallery/ con il nome atteso dal sito.
 */
import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const INCOMING = path.join(ROOT, "uploads/gallery-incoming");
const OUT_DIR = path.join(ROOT, "public/images/gallery");
const STORIA_PATH = path.join(ROOT, "real-data/storia.ts");
const REPORT_PATH = path.join(OUT_DIR, "SYNC-REPORT.txt");

const IMAGE_EXT = new Set([".webp", ".jpg", ".jpeg", ".png", ".gif", ".avif"]);

function normalize(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function walkDir(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkDir(full, files);
    else if (IMAGE_EXT.has(path.extname(entry.name).toLowerCase())) files.push(full);
  }
  return files;
}

function parseExpectedFromStoria(content) {
  const expected = [];
  const re = /src:\s*"(\/images\/gallery\/([^"]+))"/g;
  let m;
  while ((m = re.exec(content))) {
    expected.push({ fullSrc: m[1], basename: m[2] });
  }
  return expected;
}

function buildIncomingIndex(files) {
  const byNorm = new Map();
  const byExact = new Map();

  for (const file of files) {
    const base = path.basename(file);
    const norm = normalize(base);
    const entry = { file, base, norm, ext: path.extname(base).toLowerCase() };

    byExact.set(base.toLowerCase(), entry);
    if (!byNorm.has(norm)) byNorm.set(norm, []);
    byNorm.get(norm).push(entry);
  }

  return { byNorm, byExact };
}

function findMatch(expectedBasename, index) {
  const expectedExt = path.extname(expectedBasename).toLowerCase();
  const expectedBase = path.basename(expectedBasename, expectedExt);
  const normExpected = normalize(expectedBasename);

  // 1. Nome file identico (case insensitive)
  const exact = index.byExact.get(expectedBasename.toLowerCase());
  if (exact) return { entry: exact, reason: "nome identico" };

  // 2. Stesso slug, estensione diversa (es. .jpg al posto di .webp)
  for (const ext of IMAGE_EXT) {
    const alt = `${expectedBase}${ext}`.toLowerCase();
    const hit = index.byExact.get(alt);
    if (hit) return { entry: hit, reason: `stesso nome, ext ${hit.ext}` };
  }

  // 3. Slug normalizzato identico
  const normHits = index.byNorm.get(normExpected);
  if (normHits?.length === 1) {
    return { entry: normHits[0], reason: "slug normalizzato" };
  }

  // 4. Slug normalizzato: expected è prefisso o viceversa (nomi troncati nel vecchio sito)
  for (const [norm, hits] of index.byNorm) {
    if (norm === normExpected) continue;
    if (norm.startsWith(normExpected) || normExpected.startsWith(norm)) {
      if (hits.length === 1) {
        return { entry: hits[0], reason: "slug parziale" };
      }
    }
  }

  return null;
}

function main() {
  if (!fs.existsSync(INCOMING)) {
    fs.mkdirSync(INCOMING, { recursive: true });
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const incomingFiles = walkDir(INCOMING);
  if (incomingFiles.length === 0) {
    console.log("Nessuna foto in uploads/gallery-incoming/");
    console.log("Copia lì la tua cartella ( anche in sottocartelle ) e rilancia: npm run sync-gallery");
    process.exit(1);
  }

  let storiaContent = fs.readFileSync(STORIA_PATH, "utf8");
  const expected = parseExpectedFromStoria(storiaContent);
  const index = buildIncomingIndex(incomingFiles);

  const matched = [];
  const missing = [];
  const usedIncoming = new Set();
  const replacements = new Map(); // old full src -> new full src (ext change)

  for (const exp of expected) {
    const match = findMatch(exp.basename, index);
    if (!match) {
      missing.push(exp.basename);
      continue;
    }

    const { entry, reason } = match;
    if (usedIncoming.has(entry.file)) {
      missing.push(`${exp.basename} (file già usato: ${entry.base})`);
      continue;
    }

    usedIncoming.add(entry.file);

    const outBasename =
      path.basename(exp.basename, path.extname(exp.basename)) + entry.ext;
    const outPath = path.join(OUT_DIR, outBasename);
    fs.copyFileSync(entry.file, outPath);

    const newSrc = `/images/gallery/${outBasename}`;
    if (newSrc !== exp.fullSrc) {
      replacements.set(exp.fullSrc, newSrc);
    }

    matched.push({
      expected: exp.basename,
      from: entry.base,
      out: outBasename,
      reason,
    });
  }

  // Aggiorna storia.ts se cambia estensione
  for (const [oldSrc, newSrc] of replacements) {
    storiaContent = storiaContent.split(oldSrc).join(newSrc);
  }
  if (replacements.size > 0) {
    fs.writeFileSync(STORIA_PATH, storiaContent);
  }

  const unusedIncoming = incomingFiles.filter((f) => !usedIncoming.has(f));

  const lines = [
    `Sync galleria — ${new Date().toISOString()}`,
    "",
    `Foto in ingresso: ${incomingFiles.length}`,
    `Abbinate e copiate: ${matched.length} / ${expected.length}`,
    `Ancora mancanti nel sito: ${missing.length}`,
    `File in ingresso non abbinati: ${unusedIncoming.length}`,
    "",
    "=== ABBINATE ===",
    ...matched.map(
      (m) =>
        `✓ ${m.out}\n    da: ${m.from}\n    (${m.reason})`,
    ),
    "",
    "=== MANCANTI (attese da storia.ts) ===",
    ...missing.map((m) => `✗ ${m}`),
    "",
    "=== NON ABBINATI (caricati ma senza corrispondenza) ===",
    ...unusedIncoming.map((f) => `? ${path.relative(INCOMING, f)}`),
    "",
    replacements.size
      ? `=== storia.ts aggiornato (${replacements.size} path estensione) ===`
      : "",
    ...[...replacements.entries()].map(([a, b]) => `${a} → ${b}`),
  ];

  fs.writeFileSync(REPORT_PATH, lines.join("\n"));

  console.log(`Abbinate: ${matched.length}/${expected.length}`);
  console.log(`Mancanti: ${missing.length}`);
  console.log(`Non abbinati: ${unusedIncoming.length}`);
  console.log(`Report: ${REPORT_PATH}`);
  if (replacements.size) console.log(`Aggiornati ${replacements.size} path in storia.ts`);
}

main();
