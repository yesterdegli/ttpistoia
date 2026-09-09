import fs from "fs";

const text = fs.readFileSync("real-data/storia.ts", "utf8");
const expected = [...text.matchAll(/src: "\/images\/gallery\/([^"]+)"/g)].map(
  (m) => m[1],
);
const dir = "public/images/gallery";
const actual = fs
  .readdirSync(dir)
  .filter((f) => /\.(webp|jpg|jpeg|png|gif|avif)$/i.test(f));

const missing = expected.filter((e) => !actual.includes(e));
const extra = actual.filter((a) => !expected.includes(a));

console.log(JSON.stringify({ expected: expected.length, actual: actual.length, missing, extra }, null, 2));
