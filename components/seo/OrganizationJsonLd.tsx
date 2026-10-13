import { buildOrganizationJsonLd, buildWebSiteJsonLd } from "@/lib/site-seo";

export function OrganizationJsonLd() {
  const organization = buildOrganizationJsonLd();
  const website = buildWebSiteJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
