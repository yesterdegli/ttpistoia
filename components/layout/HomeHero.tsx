import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import {
  HeroBearAnimProvider,
  HeroBearDesktop,
  HeroBearMobile,
} from "@/components/layout/HeroBear";

export function HomeHero() {
  return (
    <HeroBearAnimProvider>
      <div className="section-pattern-light relative h-[600px] overflow-hidden [clip-path:polygon(0_0,100%_0,100%_93%,0_100%)] max-lg:h-[520px] max-md:h-[calc(100dvh-4rem)] max-md:min-h-[calc(100dvh-4rem)] max-md:[clip-path:none]">
        <div className="hero-grad-wrap absolute inset-0 z-0 overflow-hidden">
          <div className="hero-grad-pan absolute -inset-[30%]" aria-hidden />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_18%_28%,rgba(255,255,255,0.07)_0%,transparent_50%)]" />

        <HeroBearDesktop />

        {/* Veli — desktop / tablet */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(105deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.12)_45%,rgba(0,0,0,0)_75%)] max-md:hidden" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(0deg,rgba(0,0,10,0.35)_0%,rgba(0,0,10,0)_30%)] max-md:hidden" />

        {/* Velo leggero sulla zona testo — solo mobile */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[52%] bg-[linear-gradient(180deg,rgba(0,0,10,0.28)_0%,transparent_100%)] md:hidden" />

        {/* Desktop / tablet */}
        <div className="absolute left-1/2 top-0 z-[2] flex h-full w-full max-w-[1280px] -translate-x-1/2 items-center px-10 max-md:hidden">
          <div className="max-w-[620px]">
            <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.12em] text-white/85">
              Fondato nel 1991
            </div>
            <h1 className="mb-7 font-display text-[64px] font-bold leading-[1.05] tracking-[-0.02em] text-white [text-shadow:0_4px_24px_rgba(0,0,0,0.35)] max-lg:mb-6 max-lg:text-[48px]">
              Anni di storia, un&apos;unica
              <br />
              passione che si tramanda.
            </h1>
            <ButtonPrimary
              href="/contatti"
              className="!bg-red !px-[34px] !py-[17px] !tracking-[0.04em] !shadow-[0_10px_28px_rgba(229,13,34,0.4)]"
            >
              Prenota una prova gratuita
            </ButtonPrimary>
          </div>
        </div>

        {/* Mobile — blocco compatto centrato */}
        <div className="relative z-[2] flex h-full w-full items-center justify-center px-5 md:hidden">
          <div className="flex w-full max-w-[22rem] flex-col items-start">
            <div className="relative shrink-0">
              <div className="mb-2 text-[clamp(0.625rem,2.8vw,0.6875rem)] font-bold uppercase tracking-[0.06em] text-white/85">
                Fondato nel 1991
              </div>
              <h1 className="font-display text-[clamp(1.5rem,7.8vw,1.875rem)] font-bold leading-[1.12] text-white">
                Anni di storia, un&apos;unica
                <br />
                passione che si tramanda.
              </h1>
            </div>

            <HeroBearMobile />

            <ButtonPrimary
              href="/contatti"
              className="mt-10 !bg-red !px-[clamp(1.25rem,5vw,1.75rem)] !py-[clamp(0.75rem,2.5vw,0.875rem)] !text-[clamp(0.75rem,3.2vw,0.8125rem)] !tracking-[0.04em] !shadow-[0_10px_28px_rgba(229,13,34,0.4)]"
            >
              Prenota una prova gratuita
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </HeroBearAnimProvider>
  );
}
