import { generateBrandShareImage } from "@/lib/generate-brand-share-image";

export const runtime = "nodejs";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch + logo quadrato per Google (schema.org) */
export default function AppleIcon() {
  return generateBrandShareImage({
    width: 180,
    height: 180,
    logoSize: 120,
    titleSize: 0,
    subtitleSize: 0,
    padding: 20,
  });
}
