import type { Metadata } from "next";
import Link from "next/link";
import { NormePongistaPageClient } from "@/components/norme-pongista/NormePongistaPageClient";
import { PageHero } from "@/components/layout/PageHero";
import { SectionContainer } from "@/components/ui/SectionContainer";
import {
  normePongistaIntro,
  normePongistaPages,
} from "@/real-data/norme-pongista";

export const metadata: Metadata = {
  title: "Norme del bravo pongista",
  description:
    "Opuscolo ironico a vignette del Tennistavolo Pistoia, di Roberto Morassi — archivio documenti storici.",
};

export default function NormeDelPongistaPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Documenti storici", href: "/documenti-storici" },
          { label: "Norme del pongista" },
        ]}
        title="Norme del bravo pongista"
        subtitle="Opuscolo ironico · Roberto Morassi"
      />

      <SectionContainer compact className="pb-4 pt-12" reveal={false}>
        <p className="m-0 max-w-[780px] text-[17px] leading-[1.8] text-ink-body [text-wrap:pretty]">
          {normePongistaIntro.lead}
        </p>
        <p className="mb-0 mt-4 max-w-[780px] text-[17px] leading-[1.8] text-ink-body [text-wrap:pretty]">
          {normePongistaIntro.body}
        </p>
        <p className="mb-0 mt-6 text-sm leading-[1.7] text-blue">
          Autore: {normePongistaIntro.author}.{" "}
          <Link
            href={normePongistaIntro.pdfHref}
            className="font-semibold hover:opacity-100"
            download
          >
            Scarica il PDF originale
          </Link>
        </p>
        <p className="mb-0 mt-4 text-xs leading-[1.65] text-ink-dim">
          {normePongistaIntro.copyright}
        </p>
      </SectionContainer>

      <SectionContainer className="pb-20 pt-6" reveal={false}>
        <NormePongistaPageClient pages={normePongistaPages} />
      </SectionContainer>
    </>
  );
}
