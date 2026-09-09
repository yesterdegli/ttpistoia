import fs from "fs";

const text = fs.readFileSync("real-data/storia.ts", "utf8");
const paths = [...text.matchAll(/src: "(\/images\/gallery\/[^"]+)"/g)].map(
  (m) => m[1],
);
const names = paths.map((p) => p.replace("/images/gallery/", ""));

fs.writeFileSync(
  "public/images/gallery/ELENCO-FILE-RICHIESTI.txt",
  names.join("\n"),
);
console.log(`${names.length} file elencati`);
