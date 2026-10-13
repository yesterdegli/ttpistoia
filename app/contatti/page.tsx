import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import { ContactVenueSection } from "@/components/contatti/ContactVenueSection";
import { MapsConsentNotice } from "@/components/contatti/MapsConsentNotice";
import { ContactBlock } from "@/components/content/ContactBlock";
import { PageHero } from "@/components/layout/PageHero";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { contactVenues } from "@/lib/content/contatti";

export const metadata: Metadata = buildPageMetadata({
  title: "Contatti e palestre",
  description:
    "Contatti TT Pistoia: telefono e email. Palestra Einaudi (Viale Pacinotti, Pistoia) e palestra Alberto Manzi (Via Torino, Quarrata). Orari allenamento e mappe.",
  path: "/contatti",
  keywords: [
    "palestra ping pong Pistoia",
    "tennistavolo Quarrata",
    "orari allenamento",
    "Luca Pancani",
  ],
});

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
