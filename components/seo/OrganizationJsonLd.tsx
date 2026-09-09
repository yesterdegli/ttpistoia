import { buildOrganizationJsonLd } from "@/lib/site-seo";

export function OrganizationJsonLd() {
  const jsonLd = buildOrganizationJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
