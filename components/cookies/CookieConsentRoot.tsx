"use client";

import type { ReactNode } from "react";
import { CookieBanner } from "@/components/cookies/CookieBanner";
import { CookieConsentProvider } from "@/components/cookies/CookieConsentProvider";

export function CookieConsentRoot({ children }: { children: ReactNode }) {
  return (
    <CookieConsentProvider>
      {children}
      <CookieBanner />
    </CookieConsentProvider>
  );
}
