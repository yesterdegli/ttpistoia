import { NextResponse } from "next/server";

const FITET_CAMPIONATI_BASE =
  "https://portale.fitet.org/risultati/campionati/";

function decodeFitetHtml(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let start = 0;
  if (
    bytes.length >= 3 &&
    bytes[0] === 0xef &&
    bytes[1] === 0xbb &&
    bytes[2] === 0xbf
  ) {
    start = 3;
  }
  return new TextDecoder("windows-1252")
    .decode(bytes.subarray(start))
    .replace(/^\uFEFF/, "");
}

export async function GET(request: Request) {
  const cam = new URL(request.url).searchParams.get("CAM");
  if (!cam || !/^\d+$/.test(cam)) {
    return NextResponse.json({ error: "CAM non valido" }, { status: 400 });
  }

  const upstream = `${FITET_CAMPIONATI_BASE}classifica_squadre.php?CAM=${cam}`;
  const res = await fetch(upstream, {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Portale FITeT non disponibile" },
      { status: 502 },
    );
  }

  const buffer = await res.arrayBuffer();
  let html = decodeFitetHtml(buffer);

  const fitetBase = FITET_CAMPIONATI_BASE;
  if (/<base[\s>]/i.test(html)) {
    html = html.replace(
      /<base[^>]*>/i,
      `<base href="${fitetBase}" target="_self">`,
    );
  } else {
    html = html.replace(/<head>/i, `<head><base href="${fitetBase}">`);
  }

  const fitetImagesBase = "https://portale.fitet.org/images/";
  html = html.replace(
    /src=(["']?)\.\.\/\.\.\/images\//gi,
    `src=$1${fitetImagesBase}`,
  );

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=windows-1252",
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
    },
  });
}
