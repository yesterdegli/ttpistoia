"use client";

import { useEffect, useState } from "react";
import { useCookieConsent } from "@/components/cookies/CookieConsentProvider";
import { cookieCategories } from "@/lib/content/cookies";
import type { CookiePreferences } from "@/lib/cookie-consent";

export function CookiePreferencesPanel() {
  const { preferences, savePreferences } = useCookieConsent();
  const [draft, setDraft] = useState<CookiePreferences>(preferences);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setDraft(preferences);
  }, [preferences]);

  const toggle = (key: keyof CookiePreferences) => {
    setDraft((prev) => ({ ...prev, [key]: !prev[key] }));
    setSaved(false);
  };

  const handleSave = () => {
    savePreferences(draft);
    setSaved(true);
  };

  const handleAcceptAll = () => {
    const all = { maps: true };
    setDraft(all);
    savePreferences(all);
    setSaved(true);
  };

  return (
    <div id="preferenze" className="scroll-mt-[140px]">
      <h2 className="relative m-0 mb-5 pb-3 font-display text-[26px] font-bold capitalize tracking-[-0.015em] grad-text max-md:text-[22px]">
        Preferenze cookie
        <span className="absolute bottom-0 left-0 h-1 w-14 bg-red" />
      </h2>

      <div className="space-y-4">
        <div className="rounded-[18px] border border-line bg-surface-grey p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="font-display text-lg font-bold text-ink-body">
                Cookie necessari
              </div>
              <p className="mt-2 m-0 text-[15px] leading-[1.75] text-ink-soft">
                Sempre attivi. Necessari al funzionamento del sito e alla
                memorizzazione della tua scelta sui cookie.
              </p>
            </div>
            <span className="rounded-full bg-blue/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-blue">
              Sempre attivi
            </span>
          </div>
        </div>

        {cookieCategories.map((category) => (
          <div
            key={category.id}
            className="rounded-[18px] border border-line bg-surface p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="min-w-[min(100%,220px)] flex-1">
                <div className="font-display text-lg font-bold text-ink-body">
                  {category.name}
                </div>
                {category.provider && (
                  <p className="mt-1 mb-0 text-xs font-semibold uppercase tracking-[0.05em] text-blue">
                    {category.provider}
                  </p>
                )}
                <p className="mt-2 mb-0 text-[15px] leading-[1.75] text-ink-soft">
                  {category.description}
                </p>
                {category.duration && (
                  <p className="mt-2 mb-0 text-xs text-ink-soft">
                    Durata: {category.duration}
                  </p>
                )}
              </div>
              <label className="flex cursor-pointer items-center gap-2.5">
                <span className="text-xs font-bold uppercase tracking-[0.05em] text-ink-soft">
                  {draft[category.id] ? "Attivo" : "Disattivo"}
                </span>
                <input
                  type="checkbox"
                  checked={draft[category.id]}
                  onChange={() => toggle(category.id)}
                  className="h-5 w-5 accent-blue"
                />
              </label>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleSave}
          className="rounded-full bg-grad-bg px-6 py-3 text-xs font-bold uppercase tracking-[0.04em] text-white shadow-[0_8px_22px_rgb(1_1_123/0.25)] transition-transform duration-[180ms] hover:-translate-y-0.5"
        >
          Salva preferenze
        </button>
        <button
          type="button"
          onClick={handleAcceptAll}
          className="rounded-full border-[1.5px] border-blue px-6 py-3 text-xs font-bold uppercase tracking-[0.04em] text-blue transition-transform duration-[180ms] hover:-translate-y-0.5"
        >
          Accetta tutti
        </button>
      </div>

      {saved && (
        <p className="mt-4 mb-0 text-sm font-semibold text-blue">
          Preferenze salvate.
        </p>
      )}
    </div>
  );
}
