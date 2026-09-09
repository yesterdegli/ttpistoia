import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  onGradient?: boolean;
  className?: string;
};

export function ButtonSecondary({
  href,
  children,
  onGradient = false,
  className = "",
}: Props) {
  return (
    <Link
      href={href}
      className={`inline-block rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-[0.03em] transition-transform duration-[180ms] hover:-translate-y-0.5 hover:opacity-100 ${
        onGradient
          ? "border-[1.5px] border-white/70 text-white"
          : "border-[1.5px] border-blue text-blue"
      } ${className}`}
    >
      {children}
    </Link>
  );
}
