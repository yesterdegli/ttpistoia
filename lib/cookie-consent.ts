export const CONSENT_STORAGE_KEY = "ttpistoia-cookie-consent";
export const CONSENT_VERSION = 1;

export type CookiePreferences = {
  /** Google Maps embed on /contatti */
  maps: boolean;
};

export type CookieConsent = {
  version: number;
  necessary: true;
  preferences: CookiePreferences;
  updatedAt: string;
};

export const defaultPreferences: CookiePreferences = {
  maps: false,
};

export const acceptAllPreferences: CookiePreferences = {
  maps: true,
};

export function parseConsent(raw: string | null): CookieConsent | null {
  if (!raw) return null;
  try {
    const data = JSON.parse(raw) as CookieConsent;
    if (data.version !== CONSENT_VERSION) return null;
    if (typeof data.preferences?.maps !== "boolean") return null;
    return data;
  } catch {
    return null;
  }
}

export function readConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  return parseConsent(localStorage.getItem(CONSENT_STORAGE_KEY));
}

export function writeConsent(preferences: CookiePreferences): CookieConsent {
  const consent: CookieConsent = {
    version: CONSENT_VERSION,
    necessary: true,
    preferences,
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: consent }));
  return consent;
}

export const OPEN_COOKIE_BANNER_EVENT = "cookie-consent-open";

export function openCookieBanner() {
  window.dispatchEvent(new CustomEvent(OPEN_COOKIE_BANNER_EVENT));
}
