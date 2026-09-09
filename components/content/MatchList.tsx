import Link from "next/link";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export type MatchRow = {
  date: string;
  match: string;
  time: string;
};

type Props = {
  category: string;
  venue: string;
  matches: MatchRow[];
};

export function MatchList({ category, venue, matches }: Props) {
  return (
    <div className="overflow-hidden rounded-[18px] shadow-[0_4px_16px_rgb(0_0_0/0.08)]">
      <div className="flex items-center justify-between bg-grad-bg px-5 py-3.5">
        <span className="text-xs font-bold uppercase tracking-[0.06em] text-white">
          {category}
        </span>
        <span className="text-xs font-semibold text-white/80">{venue}</span>
      </div>
      {matches.map((row, i) => (
        <div
          key={`${row.date}-${row.match}`}
          className={`flex items-center gap-[18px] border-b border-line-table px-5 py-4 last:border-b-0 ${
            i % 2 === 1 ? "bg-surface-alt" : ""
          }`}
        >
          <span className="w-[92px] shrink-0 text-[13px] font-semibold text-ink-dim">
            {row.date}
          </span>
          <span className="flex-1 text-[15px] font-semibold text-ink-strong">
            {row.match}
          </span>
          <span className="shrink-0 text-[13px] font-semibold text-blue">
            {row.time}
          </span>
        </div>
      ))}
    </div>
  );
}

export type StandingsPreviewRow = {
  position: number;
  team: string;
  points: number;
  highlight?: boolean;
};

export function MiniStandings({
  title,
  rows,
  linkHref,
  linkLabel,
}: {
  title: string;
  rows: StandingsPreviewRow[];
  linkHref: string;
  linkLabel: string;
}) {
  return (
    <div className="rounded-[18px] bg-surface-grey p-[26px]">
      <div className="mb-3.5 text-xs font-bold uppercase tracking-[0.06em] text-blue">
        {title}
      </div>
      {rows.map((row, i) => (
        <div
          key={row.team}
          className={`flex justify-between border-b border-[#e2e5ea] py-2.5 ${
            i === rows.length - 1 ? "border-b-0" : ""
          }`}
        >
          <span
            className={`text-sm ${
              row.highlight
                ? "font-bold text-blue"
                : "font-medium text-ink-mid"
            }`}
          >
            {row.position}. {row.team}
          </span>
          <span
            className={`text-sm ${
              row.highlight ? "font-bold text-red" : "font-medium text-ink-muted"
            }`}
          >
            {row.points}
          </span>
        </div>
      ))}
      <div className="mt-[18px]">
        <Link
          href={linkHref}
          className="text-[13px] font-bold uppercase tracking-[0.04em] grad-text hover:opacity-100"
        >
          {linkLabel} →
        </Link>
      </div>
    </div>
  );
}
