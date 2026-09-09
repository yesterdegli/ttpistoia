type Props = {
  value: string;
  label: string;
  className?: string;
};

export function StatCard({ value, label, className = "" }: Props) {
  return (
    <div
      className={`glow-2t rounded-[18px] bg-surface px-4 py-4 max-md:py-[18px] md:px-6 md:py-[22px] ${className}`}
    >
      <div className="font-display text-[clamp(1.75rem,8vw,2.375rem)] font-bold tracking-[-0.02em] grad-text">
        {value}
      </div>
      <div className="mt-1 text-[12px] font-medium leading-snug text-ink-muted md:text-[13px]">
        {label}
      </div>
    </div>
  );
}
