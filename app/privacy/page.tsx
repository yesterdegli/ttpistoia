import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument } from "@/components/content/LegalDocument";
import { PageHero } from "@/components/layout/PageHero";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { privacyMeta, privacySections } from "@/lib/content/privacy";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "Informativa sul trattamento dei dati personali del sito TT Pistoia asd, ai sensi del Regolamento (UE) 2016/679.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Privacy policy" },
        ]}
        title="Privacy policy"
        subtitle="Informativa sul trattamento dei dati personali"
      />

      <SectionContainer compact className="pb-0 pt-12" reveal={false}>
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.06em] text-blue">
          Ultimo aggiornamento: {privacyMeta.lastUpdated}
        </p>
        <p className="mb-0 max-w-[820px] text-[17px] leading-[1.8] text-ink-body [text-wrap:pretty]">
          {privacyMeta.intro}
        </p>
      </SectionContainer>

      <SectionContainer className="pb-20 pt-9" reveal={false}>
        <LegalDocument sections={privacySections} />

        <div className="mt-12 rounded-[18px] bg-surface-grey p-6 max-md:p-5">
          <h2 className="m-0 mb-3 font-display text-xl font-bold grad-text">
            Contatti privacy
          </h2>
          <p className="m-0 mb-4 text-[15px] leading-[1.8] text-ink-body">
            Per cookie e preferenze consulta la{" "}
            <Link href="/cookie" className="font-semibold text-blue hover:opacity-100">
              Cookie policy
            </Link>
            . Per richieste relative ai dati personali, senza moduli online, puoi
            contattare il titolare ai recapiti indicati nella pagina{" "}
            <Link href="/contatti" className="font-semibold text-blue hover:opacity-100">
              Contatti
            </Link>
            :
          </p>
          <p className="m-0 text-[15px] leading-[1.9] text-ink-body">
            <a href={SITE.emailHref} className="font-semibold text-blue hover:opacity-100">
              {SITE.email}
            </a>
            <br />
            <a href={SITE.phoneHref} className="font-semibold text-blue hover:opacity-100">
              {SITE.phone}
            </a>
          </p>
        </div>
      </SectionContainer>
    </>
  );
}
