import type { Metadata } from "next";
import { ClauseList } from "@/components/content/ClauseList";
import { SideIndex } from "@/components/content/SideIndex";
import { PageHero } from "@/components/layout/PageHero";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { regolamento } from "@/lib/content/regolamento";

export const metadata: Metadata = {
  title: "Le regole del gioco",
};

export default function RegolePage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Le regole" }]}
        title="Le regole del gioco"
      />

      <SectionContainer compact className="pb-0 pt-12" reveal={false}>
        <p className="mb-3 max-w-[820px] text-[17px] leading-[1.8] text-ink-body [text-wrap:pretty]">
          Il regolamento tecnico di gioco stabilisce come si gioca a tennistavolo:
          misure del tavolo, caratteristiche della pallina e della racchetta,
          servizio, punteggio e casi particolari.
        </p>
        <p className="mb-2 text-sm leading-[1.7] text-blue">
          Fonte: Federazione Italiana Tennistavolo — Regolamento Tecnico di Gioco,
          versione 2021.
        </p>
      </SectionContainer>

      <SectionContainer className="pb-20 pt-9" reveal={false}>
        <div className="reg-split grid items-start gap-14 max-lg:gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
          <ClauseList chapters={regolamento} />
          <SideIndex chapters={regolamento} />
        </div>
      </SectionContainer>
    </>
  );
}
