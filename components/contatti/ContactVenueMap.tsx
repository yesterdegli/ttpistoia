"use client";

import type { ContactVenue } from "@/lib/content/contatti";
import { useCookieConsent } from "@/components/cookies/CookieConsentProvider";

type Props = {
  venue: ContactVenue;
};

export function ContactVenueMap({ venue }: Props) {
  const { preferences } = useCookieConsent();

  if (!preferences.maps) {
    return (
      <div className="flex min-h-[260px] flex-col items-center justify-center rounded-[14px] bg-surface-grey p-6 text-center">
        <p className="m-0 mb-1 text-xs font-bold uppercase tracking-[0.05em] text-red">Mappa</p>
        <p className="m-0 mb-4 text-sm text-ink-soft">
          Attiva i cookie facoltativi per la mappa incorporata, oppure apri Google Maps.
        </p>
        <a
          href={venue.mapsOpenUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-grad-bg px-5 py-2.5 text-xs font-bold uppercase tracking-[0.04em] text-white shadow-[0_8px_22px_rgb(1_1_123/0.25)] transition-transform duration-[180ms] hover:-translate-y-0.5"
        >
          {venue.title} su Google Maps
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-[260px] overflow-hidden rounded-[14px] shadow-[0_4px_16px_rgb(0_0_0/0.08)]">
      <iframe
        title={`Mappa — ${venue.title}`}
        src={venue.mapEmbedUrl}
        className="h-full min-h-[260px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
