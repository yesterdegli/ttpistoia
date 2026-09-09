import type { ReactNode } from "react";
import { TextLink } from "@/components/ui/TextLink";

type Props = {
  children: ReactNode;
  link?: { href: string; label: string };
  variant?: "default" | "white";
  className?: string;
  as?: "h2" | "h3";
  centered?: boolean;
};

export function SectionHeading({
  children,
  link,
  variant = "default",
  className = "",
  as: Tag = "h2",
  centered = false,
}: Props) {
  const isWhite = variant === "white";

  return (
    <div
      className={`mb-7 flex flex-wrap gap-x-4 gap-y-3 max-md:mb-5 ${
        centered
          ? "items-center justify-center max-md:flex-col max-md:items-center"
          : "items-baseline justify-between max-md:flex-col max-md:items-start"
      } ${className}`}
    >
      <Tag
        className={`relative m-0 pb-3 font-display text-[30px] font-bold capitalize tracking-[-0.015em] max-md:text-[22px] ${
          isWhite ? "text-white" : "grad-text"
        }`}
      >
        {children}
        <span
          className={`absolute bottom-0 h-1 w-14 ${
            centered ? "left-1/2 -translate-x-1/2" : "left-0"
          } ${isWhite ? "bg-white" : "bg-red"}`}
        />
      </Tag>
      {link && (
        <TextLink href={link.href} onGradient={isWhite}>
          {link.label}
        </TextLink>
      )}
    </div>
  );
}
