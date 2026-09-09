import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  onGradient?: boolean;
  className?: string;
};

export function TextLink({
  href,
  children,
  onGradient = false,
  className = "",
}: Props) {
  return (
    <Link
      href={href}
      className={`text-[13px] font-bold uppercase tracking-[0.04em] hover:opacity-100 ${
        onGradient ? "border-b-2 border-white/50 pb-0.5 text-white" : "grad-text"
      } ${className}`}
    >
      {children}
      {!String(children).includes("→") && !String(children).includes("&rarr;") && (
        <> →</>
      )}
    </Link>
  );
}
