import type { Metadata } from "next";
import Link from "next/link";
import { CookiePreferencesPanel } from "@/components/cookies/CookiePreferencesPanel";
import { LegalDocument } from "@/components/content/LegalDocument";
import { PageHero } from "@/components/layout/PageHero";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { cookieCategories, cookieMeta, cookieSections } from "@/lib/content/cookies";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie policy",
  description:
    "Informativa sui cookie e sulle tecnologie simili utilizzate dal sito TT Pistoia asd.",
};

export default function CookiePage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Cookie policy" },
        ]}
        title="Cookie policy"
        subtitle="Informazioni sui cookie e sulle tue scelte"
      />

      <SectionContainer compact className="pb-0 pt-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.06em] text-blue">
          Ultimo aggiornamento: {cookieMeta.lastUpdated}
        </p>
        <p className="mb-0 max-w-[820px] text-[17px] leading-[1.8] text-ink-body [text-wrap:pretty]">
          {cookieMeta.intro}
        </p>
      </SectionContainer>

      <SectionContainer className="pb-20 pt-9">
        <LegalDocument sections={cookieSections} />

        <div className="mt-10 border-t border-line pt-10">
          <h2 className="relative m-0 mb-5 pb-3 font-display text-[26px] font-bold capitalize tracking-[-0.015em] grad-text max-md:text-[22px]">
            Riepilogo categorie
            <span className="absolute bottom-0 left-0 h-1 w-14 bg-red" />
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left text-[15px]">
              <thead>
                <tr className="border-b border-line text-xs font-bold uppercase tracking-[0.05em] text-blue">
                  <th className="py-3 pr-4">Categoria</th>
                  <th className="py-3 pr-4">Fornitore</th>
                  <th className="py-3 pr-4">Consenso</th>
                  <th className="py-3">Durata</th>
                </tr>
              </thead>
              <tbody className="text-ink-body">
                <tr className="border-b border-line">
                  <td className="py-3 pr-4 font-semibold">Necessari</td>
                  <td className="py-3 pr-4">TT Pistoia asd</td>
                  <td className="py-3 pr-4">Non richiesto</td>
                  <td className="py-3">Sessione / persistenti</td>
                </tr>
                {cookieCategories.map((cat) => (
                  <tr key={cat.id} className="border-b border-line">
                    <td className="py-3 pr-4 font-semibold">{cat.name}</td>
                    <td className="py-3 pr-4">{cat.provider ?? "—"}</td>
                    <td className="py-3 pr-4">Facoltativo</td>
                    <td className="py-3">{cat.duration ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-10">
          <CookiePreferencesPanel />
        </div>

        <div className="mt-12 rounded-[18px] bg-surface-grey p-6 max-md:p-5">
          <h2 className="m-0 mb-3 font-display text-xl font-bold grad-text">
            Altre informazioni
          </h2>
          <p className="m-0 text-[15px] leading-[1.8] text-ink-body">
            Per il trattamento dei dati personali consulta la{" "}
            <Link href="/privacy" className="font-semibold text-blue hover:opacity-100">
              Privacy policy
            </Link>
            . Per contatti:{" "}
            <a href={SITE.emailHref} className="font-semibold text-blue hover:opacity-100">
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </SectionContainer>
    </>
  );
}
