"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/site";

function navLinkClasses(isActive: boolean, variant: "desktop" | "mobile") {
  const state = isActive
    ? "grad-text font-bold !opacity-100 hover:!opacity-100"
    : "font-semibold text-ink-muted hover:grad-text hover:!opacity-100";

  if (variant === "mobile") {
    return `w-full border-b border-line-table py-[clamp(0.5rem,1.75dvh,1.125rem)] text-center font-display text-[clamp(1rem,2.55dvh,1.375rem)] capitalize leading-[1.25] tracking-[-0.005em] transition-[opacity,color] ${state}`;
  }

  return `font-display text-lg capitalize tracking-[-0.005em] transition-[opacity,color] lg:text-[18px] ${state}`;
}

function NavLink({
  href,
  label,
  onNavigate,
  variant = "desktop",
}: {
  href: string;
  label: string;
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
}) {
  const pathname = usePathname();
  const isActive =
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      prefetch
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      className={navLinkClasses(isActive, variant)}
    >
      {label}
    </Link>
  );
}

function HamburgerButton({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={open ? "Chiudi il menu" : "Apri il menu"}
      aria-expanded={open}
      onClick={onToggle}
      className="relative z-[70] flex h-11 w-11 flex-col items-center justify-center gap-[5px] border-0 bg-transparent p-0 lg:hidden"
    >
      <span
        className={`block h-[2.5px] w-6 rounded-sm bg-grad-hamburger transition-all duration-[250ms] ease-out ${
          open ? "translate-y-[7.5px] rotate-45" : ""
        }`}
      />
      <span
        className={`block h-[2.5px] w-6 rounded-sm bg-grad-hamburger transition-opacity duration-[180ms] ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block h-[2.5px] w-6 rounded-sm bg-grad-hamburger transition-all duration-[250ms] ease-out ${
          open ? "-translate-y-[7.5px] -rotate-45" : ""
        }`}
      />
    </button>
  );
}

export function MobileDrawer() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    close();
  }, [pathname, close]);

  useEffect(() => {
    if (open) {
      document.documentElement.classList.add("overflow-hidden");
      document.body.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [close]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 901) close();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [close]);

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden items-center gap-[30px] lg:flex">
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.href} href={item.href} label={item.label} />
        ))}
      </nav>

      {/* Mobile/tablet — menu canvas a schermo intero */}
      <div className="lg:hidden">
        <HamburgerButton open={open} onToggle={() => setOpen((v) => !v)} />

        <nav
          aria-hidden={!open}
          className={`section-pattern fixed inset-0 z-[60] flex h-[100dvh] flex-col overflow-hidden bg-surface-grey transition-[opacity,visibility] duration-300 ease-out ${
            open
              ? "visible opacity-100"
              : "invisible pointer-events-none opacity-0"
          }`}
        >
          <div className="relative z-[1] mx-auto flex h-full w-full max-w-[1280px] flex-col items-center justify-center px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[max(4.75rem,calc(env(safe-area-inset-top)+3.25rem))] text-center">
            <Link
              href="/"
              prefetch
              onClick={close}
              className="mb-[clamp(0.75rem,2.5dvh,2rem)] shrink-0 hover:opacity-100"
            >
              <img
                src="/assets/brand/logo-header.svg"
                alt="TT Pistoia asd"
                width={88}
                height={88}
                className="h-[clamp(4rem,11dvh,5.5rem)] w-[clamp(4rem,11dvh,5.5rem)] object-contain"
              />
            </Link>

            <div className="flex w-full max-w-[320px] shrink flex-col justify-center">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  variant="mobile"
                  onNavigate={close}
                />
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
