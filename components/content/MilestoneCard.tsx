import Link from "next/link";

type Props = {
  year: string;
  description: string;
  href?: string;
};

export function MilestoneCard({ year, description, href = "/storia" }: Props) {
  return (
    <Link
      href={href}
      className="glow-2t glow-2t-hover block rounded-[18px] bg-surface p-6 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:opacity-100"
    >
      <div className="font-display text-[22px] font-bold grad-text">{year}</div>
      <div className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</div>
    </Link>
  );
}
