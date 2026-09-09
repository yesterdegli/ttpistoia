"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/site";

function NavLink({
  href,
  label,
  onNavigate,
}: {
  href: string;
  label: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const isActive =
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`font-display text-lg capitalize tracking-[-0.005em] transition-[opacity,color] hover:!opacity-100 lg:text-[18px] ${
        isActive
          ? "grad-text font-bold opacity-100"
          : "font-semibold text-ink-muted hover:grad-text"
      }`}
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

      {/* Mobile/tablet drawer */}
      <div className="lg:hidden">
        <HamburgerButton open={open} onToggle={() => setOpen((v) => !v)} />

        <div
          role="presentation"
          aria-hidden={!open}
          onClick={close}
          className={`fixed inset-0 z-50 bg-[rgb(1_1_40/0.45)] transition-opacity duration-300 ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        />

        <nav
          className={`fixed right-0 top-0 z-[60] flex h-screen w-[min(80vw,320px)] flex-col items-stretch justify-start gap-0 overflow-y-auto bg-surface-grey px-[26px] pb-7 pt-[92px] shadow-drawer transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            open ? "translate-x-0" : "translate-x-[102%]"
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className={`w-full border-b border-line-table py-[15px] font-display text-xl capitalize leading-[1.3] tracking-[-0.005em] hover:!opacity-100 ${
                (item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href))
                  ? "grad-text font-bold opacity-100"
                  : "font-semibold text-ink-muted hover:grad-text"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
