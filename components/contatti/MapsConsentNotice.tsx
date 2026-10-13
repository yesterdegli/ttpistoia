"use client";

import Link from "next/link";
import { useCookieConsent } from "@/components/cookies/CookieConsentProvider";

export function MapsConsentNotice() {
  const { preferences } = useCookieConsent();

  if (preferences.maps) return null;

  return (
    <div className="rounded-[14px] border border-line bg-surface-grey px-5 py-4 text-sm leading-[1.75] text-ink-soft">
      <p className="m-0">
        Le mappe Google usano cookie di terze parti.{" "}
        <Link href="/cookie#preferenze" className="font-semibold text-blue hover:opacity-100">
          Gestisci i cookie
        </Link>{" "}
        per visualizzarle qui sotto, sede per sede.
      </p>
    </div>
  );
}
