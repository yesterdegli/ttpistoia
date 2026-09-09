import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/** Sfondo gradiente + dot grid bianco (come HomeHero), per PageHero e header pagina interne */
export function GradientHeaderShell({ children, className = "" }: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-grad-hero" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_22%_40%,rgba(255,255,255,0.10)_0%,transparent_60%)]"
        aria-hidden
      />
      <div className="section-pattern-light absolute inset-0 z-[1]" aria-hidden />
      <div className="relative z-[2] h-full">{children}</div>
    </div>
  );
}
