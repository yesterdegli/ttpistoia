"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  acceptAllPreferences,
  defaultPreferences,
  OPEN_COOKIE_BANNER_EVENT,
  readConsent,
  writeConsent,
  type CookieConsent,
  type CookiePreferences,
} from "@/lib/cookie-consent";

type CookieConsentContextValue = {
  consent: CookieConsent | null;
  preferences: CookiePreferences;
  bannerOpen: boolean;
  acceptAll: () => void;
  rejectOptional: () => void;
  savePreferences: (preferences: CookiePreferences) => void;
  openBanner: () => void;
  closeBanner: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    setConsent(stored);
    setBannerOpen(!stored);
    setReady(true);

    const onOpen = () => setBannerOpen(true);
    const onChange = (event: Event) => {
      const detail = (event as CustomEvent<CookieConsent>).detail;
      setConsent(detail);
    };

    window.addEventListener(OPEN_COOKIE_BANNER_EVENT, onOpen);
    window.addEventListener("cookie-consent-change", onChange);
    return () => {
      window.removeEventListener(OPEN_COOKIE_BANNER_EVENT, onOpen);
      window.removeEventListener("cookie-consent-change", onChange);
    };
  }, []);

  const acceptAll = useCallback(() => {
    const next = writeConsent(acceptAllPreferences);
    setConsent(next);
    setBannerOpen(false);
  }, []);

  const rejectOptional = useCallback(() => {
    const next = writeConsent(defaultPreferences);
    setConsent(next);
    setBannerOpen(false);
  }, []);

  const savePreferences = useCallback((preferences: CookiePreferences) => {
    const next = writeConsent(preferences);
    setConsent(next);
    setBannerOpen(false);
  }, []);

  const openBanner = useCallback(() => setBannerOpen(true), []);
  const closeBanner = useCallback(() => setBannerOpen(false), []);

  const preferences = consent?.preferences ?? defaultPreferences;

  const value = useMemo(
    () => ({
      consent,
      preferences,
      bannerOpen: ready && bannerOpen,
      acceptAll,
      rejectOptional,
      savePreferences,
      openBanner,
      closeBanner,
    }),
    [
      consent,
      preferences,
      ready,
      bannerOpen,
      acceptAll,
      rejectOptional,
      savePreferences,
      openBanner,
      closeBanner,
    ],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return ctx;
}

export function useOptionalCookieConsent() {
  return useContext(CookieConsentContext);
}
