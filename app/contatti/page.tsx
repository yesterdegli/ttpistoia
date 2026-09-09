import type { Metadata } from "next";
import { ConsentMapEmbed } from "@/components/cookies/ConsentMapEmbed";
import { ContactBlock } from "@/components/content/ContactBlock";
import { PageHero } from "@/components/layout/PageHero";
import { SectionContainer } from "@/components/ui/SectionContainer";

export const metadata: Metadata = {
  title: "Contatti",
};

export default function ContattiPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contatti" }]}
        title="Contatti"
      />
      <SectionContainer
        wide
        innerClassName="grid grid-cols-1 gap-12 max-md:gap-8 lg:grid-cols-[1fr_1.3fr]"
      >
        <ContactBlock />
        <ConsentMapEmbed />
      </SectionContainer>
    </>
  );
}
