import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import Link from "next/link";
import { DocumentiStoriciPageClient } from "@/components/documenti-storici/DocumentiStoriciPageClient";
import { PageHero } from "@/components/layout/PageHero";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { documentiStorici } from "@/real-data/documenti-storici";

export const metadata: Metadata = buildPageMetadata({
  title: "Documenti storici",
  description:
    "Archivio storico del Tennistavolo Pistoia: documenti, opuscoli e materiali del club dal 1992. Patrimonio della società di ping pong pistoiese.",
  path: "/documenti-storici",
  keywords: ["archivio TT Pistoia", "documenti storici tennistavolo"],
});

export default function DocumentiStoriciPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Documenti storici" },
        ]}
        title="Documenti storici"
        subtitle="Rassegna stampa e archivio fotografico, 1970–2023"
      />
      <SectionContainer compact className="border-b border-line pb-8 pt-10" reveal={false}>
        <div className="rounded-[14px] border border-line bg-surface p-6 max-md:p-5">
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-dim">
            In evidenza
          </p>
          <h2 className="m-0 font-display text-[22px] font-bold tracking-[-0.01em] grad-text max-md:text-[19px]">
            Norme del bravo pongista
          </h2>
          <p className="mb-4 mt-2 max-w-[640px] text-sm leading-[1.75] text-ink-mid">
            Vignette ironiche di Roberto Morassi — regole «serie» del club in
            dialetto e foto di palestra.
          </p>
          <Link
            href="/documenti-storici/norme-del-pongista"
            className="inline-block text-sm font-bold uppercase tracking-[0.04em] text-blue hover:opacity-100"
          >
            Apri l’opuscolo →
          </Link>
        </div>
      </SectionContainer>
      <DocumentiStoriciPageClient sections={documentiStorici} />
    </>
  );
}
