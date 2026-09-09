import Link from "next/link";
import type { ReactNode } from "react";
import { GradientHeaderShell } from "@/components/layout/GradientHeaderShell";

type Props = {
  breadcrumb: { label: string; href?: string }[];
  title: string;
  subtitle?: string;
};

export function PageHero({ breadcrumb, title, subtitle }: Props) {
  return (
    <GradientHeaderShell className="h-[230px] [clip-path:polygon(0_0,100%_0,100%_88%,0_100%)] max-md:h-[190px]">
      <div className="mx-auto flex h-full w-full max-w-[1280px] flex-col justify-center px-10 max-md:px-5">
        <div className="mb-2 text-xs font-semibold text-white/60">
          {breadcrumb.map((item, i) => (
            <span key={item.label}>
              {i > 0 && " / "}
              {item.href ? (
                <Link href={item.href} className="text-white/60 hover:opacity-100">
                  {item.label}
                </Link>
              ) : (
                item.label
              )}
            </span>
          ))}
        </div>
        <h1 className="m-0 font-display text-[52px] font-bold capitalize tracking-[-0.015em] text-white max-md:text-[34px]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-sm text-white/75">{subtitle}</p>
        )}
      </div>
    </GradientHeaderShell>
  );
}

export function PageHeroSlot({ children }: { children: ReactNode }) {
  return (
    <GradientHeaderShell className="[clip-path:polygon(0_0,100%_0,100%_88%,0_100%)]">
      {children}
    </GradientHeaderShell>
  );
}
