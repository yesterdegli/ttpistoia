import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  onGradient?: boolean;
  className?: string;
};

export function ButtonPrimary({
  href,
  children,
  onGradient = false,
  className = "",
}: Props) {
  return (
    <Link
      href={href}
      className={`inline-block rounded-full px-[30px] py-[15px] text-sm font-bold uppercase tracking-[0.03em] transition-[transform,box-shadow,background] duration-[180ms] hover:-translate-y-0.5 hover:opacity-100 ${
        onGradient
          ? "bg-white text-blue shadow-none"
          : "bg-grad-bg text-white shadow-[0_8px_22px_rgb(1_1_123/0.25)]"
      } ${className}`}
    >
      {children}
    </Link>
  );
}
