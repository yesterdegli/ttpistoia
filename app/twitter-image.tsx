import { generateBrandShareImage, BRAND_SHARE_ALT } from "@/lib/generate-brand-share-image";

export const runtime = "nodejs";
export const alt = BRAND_SHARE_ALT;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return generateBrandShareImage({
    width: 1200,
    height: 630,
    logoSize: 320,
    titleSize: 52,
    subtitleSize: 28,
    padding: 48,
  });
}
