import Link from "next/link";
import { MobileDrawer } from "@/components/layout/MobileDrawer";

export function SiteHeader() {
  return (
    <header className="section-pattern sticky top-0 z-20 overflow-hidden bg-surface-grey shadow-header max-lg:p-0">
      <div className="relative z-[1] mx-auto flex h-[76px] max-w-[1280px] items-center justify-between px-10 max-lg:h-16 max-lg:px-5 max-md:px-5">
        <Link href="/" className="site-header-logo shrink-0 hover:opacity-100">
          <img
            src="/assets/brand/logo-header.svg"
            alt="TT Pistoia asd"
            width={64}
            height={64}
            className="h-16 w-16 object-contain max-lg:h-[52px] max-lg:w-[52px] max-md:h-[46px] max-md:w-[46px]"
          />
        </Link>
        <MobileDrawer />
      </div>
    </header>
  );
}
