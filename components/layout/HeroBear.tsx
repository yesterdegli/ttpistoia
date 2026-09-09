"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const HeroBearContext = createContext(0);

export function HeroBearAnimProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [cycle, setCycle] = useState(0);
  const isFirstHomeVisit = useRef(true);

  useEffect(() => {
    if (pathname !== "/") return;

    if (isFirstHomeVisit.current) {
      isFirstHomeVisit.current = false;
      return;
    }

    setCycle((c) => c + 1);
  }, [pathname]);

  return (
    <HeroBearContext.Provider value={cycle}>{children}</HeroBearContext.Provider>
  );
}

export function HeroBearDesktop() {
  const cycle = useContext(HeroBearContext);

  return (
    <Image
      key={`bear-desktop-${cycle}`}
      src="/assets/logo-hero.svg"
      alt=""
      width={520}
      height={520}
      className="hero-bear-enter-desktop pointer-events-none absolute right-[-20px] top-1/2 z-[1] h-[520px] w-[520px] -translate-y-1/2 object-contain max-md:hidden max-lg:right-0 max-lg:h-auto max-lg:max-h-[88%] max-lg:w-[min(62vw,420px)]"
      priority
    />
  );
}

export function HeroBearMobile() {
  const cycle = useContext(HeroBearContext);

  return (
    <Image
      key={`bear-mobile-${cycle}`}
      src="/assets/logo-hero.svg"
      alt=""
      width={520}
      height={520}
      sizes="(max-width: 640px) 88vw, 520px"
      className="hero-bear-enter-mobile pointer-events-none mt-3 h-auto w-[min(88vw,17.5rem)] object-contain object-left md:hidden"
      priority
    />
  );
}
