import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE } from "@/lib/site";

export const BRAND_SHARE_ALT = `${SITE.name} — Tennistavolo a Pistoia`;

type ShareImageOptions = {
  width: number;
  height: number;
  logoSize: number;
  titleSize: number;
  subtitleSize: number;
  padding: number;
};

async function loadLogoDataUrl(): Promise<string> {
  const logoPath = join(process.cwd(), "public/assets/brand/logo-header.svg");
  const logo = await readFile(logoPath);
  return `data:image/svg+xml;base64,${logo.toString("base64")}`;
}

export async function generateBrandShareImage({
  width,
  height,
  logoSize,
  titleSize,
  subtitleSize,
  padding,
}: ShareImageOptions) {
  const logoSrc = await loadLogoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding,
        }}
      >
        <img
          src={logoSrc}
          width={logoSize}
          height={logoSize}
          alt=""
          style={{ objectFit: "contain" }}
        />
        {titleSize > 0 ? (
          <div
            style={{
              marginTop: Math.round(logoSize * 0.12),
              fontSize: titleSize,
              fontWeight: 700,
              color: "#01017b",
              letterSpacing: "-0.02em",
            }}
          >
            {SITE.name}
          </div>
        ) : null}
        {subtitleSize > 0 ? (
          <div
            style={{
              marginTop: Math.round(titleSize * 0.25),
              fontSize: subtitleSize,
              fontWeight: 600,
              color: "#6b7078",
            }}
          >
            Tennistavolo · Pistoia
          </div>
        ) : null}
      </div>
    ),
    { width, height },
  );
}
