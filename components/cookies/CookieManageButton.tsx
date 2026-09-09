"use client";

import { openCookieBanner } from "@/lib/cookie-consent";

type Props = {
  className?: string;
};

export function CookieManageButton({ className = "" }: Props) {
  return (
    <button
      type="button"
      onClick={openCookieBanner}
      className={`text-white/75 hover:text-white hover:opacity-100 ${className}`}
    >
      Gestisci cookie
    </button>
  );
}
