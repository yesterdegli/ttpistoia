import Link from "next/link";
import { CookieManageButton } from "@/components/cookies/CookieManageButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FacebookIcon } from "@/components/ui/FacebookIcon";
import { FACEBOOK_URL, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <ScrollReveal>
    <footer className="bg-blue text-white">
      <div className="h-1 bg-footer-rule" />
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-7 px-10 py-12 max-md:px-5 max-md:py-10 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-8">
        <div>
          <div className="mb-3 font-display text-xl font-bold capitalize tracking-[-0.015em]">
            {SITE.name}
          </div>
          <p className="m-0 text-sm leading-relaxed text-white/75">
            {SITE.address.line1}
            <br />
            {SITE.address.line2}
            <br />
            {SITE.address.line3}
          </p>
        </div>
        <div>
          <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.05em] text-white">
            Contatti
          </div>
          <p className="m-0 text-sm leading-[1.9] text-white/75">
            <a href={SITE.emailHref} className="hover:opacity-100">
              {SITE.email}
            </a>
            <br />
            <a href={SITE.phoneHref} className="hover:opacity-100">
              {SITE.phone}
            </a>
            <br />
            {SITE.hours}
          </p>
        </div>
        <div>
          <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.05em] text-white">
            Seguici
          </div>
          <Link
            href={FACEBOOK_URL}
            aria-label="Facebook — TT Pistoia asd"
            className="inline-flex text-red transition-transform duration-[180ms] hover:translate-y-[-2px] hover:opacity-100"
          >
            <FacebookIcon className="h-[34px] w-[34px]" />
          </Link>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 border-t border-white/15 px-10 py-[18px] text-xs text-white/55 max-md:px-5">
        <span>{SITE.copyright}</span>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <Link href="/privacy" className="text-white/75 hover:text-white hover:opacity-100">
            Privacy policy
          </Link>
          <Link href="/cookie" className="text-white/75 hover:text-white hover:opacity-100">
            Cookie policy
          </Link>
          <CookieManageButton />
        </div>
      </div>
    </footer>
    </ScrollReveal>
  );
}
