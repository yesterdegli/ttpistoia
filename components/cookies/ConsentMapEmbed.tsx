"use client";

import Link from "next/link";
import { useCookieConsent } from "@/components/cookies/CookieConsentProvider";
import { mapEmbedUrl } from "@/lib/content/contatti";

export function ConsentMapEmbed() {
  const { preferences } = useCookieConsent();

  if (!preferences.maps) {
    return (
      <div className="flex min-h-[360px] flex-col items-center justify-center rounded-[18px] bg-surface-grey p-8 text-center shadow-[0_4px_16px_rgb(0_0_0/0.08)]">
        <p className="m-0 mb-2 font-display text-lg font-bold grad-text">
          Mappa non attiva
        </p>
        <p className="m-0 mb-5 max-w-[360px] text-sm leading-[1.75] text-ink-soft">
          Google Maps utilizza cookie di terze parti. Puoi attivare la mappa
          accettando i cookie facoltativi.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/cookie#preferenze"
            className="rounded-full border-[1.5px] border-blue px-5 py-2.5 text-xs font-bold uppercase tracking-[0.04em] text-blue transition-transform duration-[180ms] hover:-translate-y-0.5"
          >
            Gestisci cookie
          </Link>
          <a
            href="https://www.google.com/maps?q=Palestra+Einaudi,+Viale+Pacinotti,+Pistoia"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-grad-bg px-5 py-2.5 text-xs font-bold uppercase tracking-[0.04em] text-white shadow-[0_8px_22px_rgb(1_1_123/0.25)] transition-transform duration-[180ms] hover:-translate-y-0.5"
          >
            Apri in Google Maps
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[360px] overflow-hidden rounded-[18px] shadow-[0_4px_16px_rgb(0_0_0/0.08)]">
      <iframe
        title="Mappa — Palestra Einaudi"
        src={mapEmbedUrl}
        className="h-full min-h-[360px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
