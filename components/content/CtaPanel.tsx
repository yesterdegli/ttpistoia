import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { ButtonSecondary } from "@/components/ui/ButtonSecondary";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";

export type CtaInfoRow = {
  label: string;
  value: string;
};

type Props = {
  title: string;
  text: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  infoRows?: CtaInfoRow[];
  footerLink?: { href: string; label: string };
};

export function CtaPanel({
  title,
  text,
  primaryCta,
  secondaryCta,
  infoRows,
  footerLink,
}: Props) {
  return (
    <div className="glow-2t relative grid items-center gap-10 rounded-3xl bg-surface p-11 max-lg:grid-cols-1 max-md:gap-8 max-md:p-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <SectionHeading>{title}</SectionHeading>
        <p className="mb-6 max-w-[520px] text-base leading-[1.75] text-ink-mid">
          {text}
        </p>
        <div className="flex flex-wrap gap-3.5">
          <ButtonPrimary href={primaryCta.href}>{primaryCta.label}</ButtonPrimary>
          {secondaryCta && (
            <ButtonSecondary href={secondaryCta.href}>
              {secondaryCta.label}
            </ButtonSecondary>
          )}
        </div>
      </div>
      {infoRows && (
        <div className="grid gap-3">
          {infoRows.map((row) => (
            <div
              key={row.label}
              className="flex justify-between rounded-[14px] bg-surface px-[18px] py-3.5"
            >
              <span className="text-sm font-semibold text-ink-strong">
                {row.label}
              </span>
              <span className="text-sm font-medium text-ink-muted">
                {row.value}
              </span>
            </div>
          ))}
          {footerLink && (
            <div className="px-[18px] py-3.5">
              <TextLink href={footerLink.href}>{footerLink.label}</TextLink>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
