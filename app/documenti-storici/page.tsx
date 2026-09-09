import type { Metadata } from "next";
import { DocumentiStoriciPageClient } from "@/components/documenti-storici/DocumentiStoriciPageClient";
import { PageHero } from "@/components/layout/PageHero";
import { documentiStorici } from "@/real-data/documenti-storici";

export const metadata: Metadata = {
  title: "Documenti storici",
};

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
      <DocumentiStoriciPageClient sections={documentiStorici} />
    </>
  );
}
