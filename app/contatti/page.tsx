import type { Metadata } from "next";
import { contattiMeta } from "@/lib/content/page-meta";
import { buildPageMetadata } from "@/lib/page-metadata";
import { ContactVenueSection } from "@/components/contatti/ContactVenueSection";
import { MapsConsentNotice } from "@/components/contatti/MapsConsentNotice";
import { ContactBlock } from "@/components/content/ContactBlock";
import { PageHero } from "@/components/layout/PageHero";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { contactVenues } from "@/lib/content/contatti";

export const metadata: Metadata = buildPageMetadata(contattiMeta);

export default function ContattiPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contatti" }]}
        title="Contatti"
      />
      <SectionContainer wide reveal={false} innerClassName="flex flex-col gap-10 max-md:gap-8">
        <ContactBlock />
        <MapsConsentNotice />
        {contactVenues.map((venue) => (
          <ContactVenueSection key={venue.id} venue={venue} />
        ))}
      </SectionContainer>
    </>
  );
}