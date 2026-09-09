import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type Props = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  /** @deprecated All sections use light grey; kept for compatibility */
  bg?: "white" | "grey";
  compact?: boolean;
  id?: string;
  /** Wider inner container (e.g. contatti layout). Default 1200px. */
  wide?: boolean;
  /** Fade-in allo scroll (default). Disattivare se la sezione ha già animazioni proprie. */
  reveal?: boolean;
};

export function SectionContainer({
  children,
  className = "",
  innerClassName = "",
  compact,
  id,
  wide,
  reveal = true,
}: Props) {
  const inner = (
    <div
      className={`relative z-[1] mx-auto ${wide ? "max-w-[1280px]" : "max-w-[1200px]"} ${innerClassName}`}
    >
      {children}
    </div>
  );

  return (
    <section
      id={id}
      className={`section-pattern relative bg-surface-grey px-10 py-14 max-md:px-5 max-md:py-11 ${
        compact ? "md:py-11" : ""
      } ${className}`}
    >
      {reveal ? <ScrollReveal>{inner}</ScrollReveal> : inner}
    </section>
  );
}
