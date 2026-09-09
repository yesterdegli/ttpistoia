"use client";

import Link from "next/link";
import { useCookieConsent } from "@/components/cookies/CookieConsentProvider";

export function CookieBanner() {
  const { bannerOpen, acceptAll, rejectOptional, closeBanner, consent } =
    useCookieConsent();

  if (!bannerOpen) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[90] border-t border-line bg-surface p-5 shadow-[0_-8px_32px_rgb(1_1_40/0.12)] max-md:p-4"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
    >
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-end justify-between gap-5 max-md:flex-col max-md:items-stretch">
        <div className="min-w-0 flex-1">
          <p
            id="cookie-banner-title"
            className="m-0 mb-2 font-display text-lg font-bold grad-text"
          >
            Cookie e privacy
          </p>
          <p
            id="cookie-banner-desc"
            className="m-0 max-w-[720px] text-sm leading-[1.75] text-ink-body"
          >
            Usiamo cookie necessari al funzionamento del sito e, solo se lo
            accetti, Google Maps nella pagina Contatti. Nessun tracciamento
            pubblicitario.{" "}
            <Link href="/cookie" className="font-semibold text-blue hover:opacity-100">
              Cookie policy
            </Link>
            {" · "}
            <Link href="/privacy" className="font-semibold text-blue hover:opacity-100">
              Privacy policy
            </Link>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 max-md:w-full max-md:flex-col max-md:items-stretch">
          {consent && (
            <button
              type="button"
              onClick={closeBanner}
              className="rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-[0.04em] text-blue hover:opacity-80 max-md:w-full"
            >
              Chiudi
            </button>
          )}
          <button
            type="button"
            onClick={rejectOptional}
            className="rounded-full border-[1.5px] border-blue px-5 py-2.5 text-xs font-bold uppercase tracking-[0.04em] text-blue transition-transform duration-[180ms] hover:-translate-y-0.5 max-md:w-full"
          >
            Solo necessari
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="rounded-full bg-grad-bg px-5 py-2.5 text-xs font-bold uppercase tracking-[0.04em] text-white shadow-[0_8px_22px_rgb(1_1_123/0.25)] transition-transform duration-[180ms] hover:-translate-y-0.5 max-md:w-full"
          >
            Accetta tutti
          </button>
        </div>
      </div>
    </div>
  );
}
