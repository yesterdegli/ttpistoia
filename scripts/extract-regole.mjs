import fs from "fs";

const html = fs.readFileSync("Le Regole.dc.html", "utf8");
const chapters = [];

const capParts = html.split(/<div id="cap-(\d+)"/).slice(1);
for (let i = 0; i < capParts.length; i += 2) {
  const num = parseInt(capParts[i], 10);
  const block = capParts[i + 1] ?? "";
  const titleMatch = block.match(/<h2[^>]*>([^<]+)<\/h2>/);
  const title = titleMatch ? titleMatch[1].trim() : "";
  const clauses = [];
  const clauseRegex =
    /<span[^>]*>([\d.]+)<\/span>\s*<p[^>]*>([\s\S]*?)<\/p>/g;
  let c;
  while ((c = clauseRegex.exec(block))) {
    clauses.push({
      number: c[1],
      text: c[2]
        .replace(/&mdash;/g, "—")
        .replace(/&ldquo;/g, "\u201C")
        .replace(/&rdquo;/g, "\u201D")
        .replace(/&nbsp;/g, " ")
        .replace(/&middot;/g, "·")
        .replace(/&egrave;/g, "è")
        .replace(/&agrave;/g, "à")
        .replace(/&igrave;/g, "ì")
        .replace(/&ograve;/g, "ò")
        .replace(/&ugrave;/g, "ù")
        .replace(/&eacute;/g, "é")
        .replace(/&quot;/g, '"')
        .trim(),
    });
  }
  chapters.push({ number: num, title, clauses });
}

const out = `export interface RegoleClause {
  number: string;
  text: string;
}

export interface RegoleChapter {
  number: number;
  title: string;
  clauses: RegoleClause[];
}

export const regolamento: RegoleChapter[] = ${JSON.stringify(chapters, null, 2)};
`;

fs.writeFileSync("lib/content/regolamento.ts", out);
console.log(
  `Wrote ${chapters.length} chapters, ${chapters.reduce((a, c) => a + c.clauses.length, 0)} clauses`,
);
