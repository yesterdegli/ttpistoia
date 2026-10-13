import type { ContactHoursRow } from "@/lib/content/contatti";

type Props = {
  rows: readonly ContactHoursRow[];
  label?: string;
};

export function VenueHoursTable({ rows, label = "Orari di apertura" }: Props) {
  return (
    <div>
      <div className="mb-2.5 text-xs font-bold uppercase tracking-[0.05em] text-red">{label}</div>
      <div>
        {rows.map((row, i) => (
          <div
            key={row.day}
            className={`flex justify-between border-t border-[#eee] py-2 ${
              i === rows.length - 1 ? "border-b border-[#eee]" : ""
            }`}
          >
            <span className="text-sm font-medium text-[#333]">{row.day}</span>
            <span className="text-sm text-[#666]">{row.hours}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
