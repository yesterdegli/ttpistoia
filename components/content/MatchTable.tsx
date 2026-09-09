import type { FixtureRow, StandingsRow } from "@/lib/content/campionati";

export function MatchTable({ rows }: { rows: FixtureRow[] }) {
  return (
    <div className="mb-6 overflow-x-auto rounded-2xl shadow-[0_4px_16px_rgb(0_0_0/0.06)]">
      <table className="w-full min-w-[520px] border-collapse">
        <thead>
          <tr className="bg-blue">
            {["Data", "Incontro", "Sede", "Ora"].map((h) => (
              <th
                key={h}
                className="px-3 py-2.5 text-left text-xs font-bold uppercase tracking-[0.04em] text-white"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={`${row.date}-${row.match}`}
              className={`border-b border-[#eee] ${
                i % 2 === 1 ? "bg-surface-tint" : "bg-surface"
              }`}
            >
              <td className="px-3 py-2.5 text-[13px] font-medium text-[#333]">
                {row.date}
              </td>
              <td className="px-3 py-2.5 text-[13px] font-medium text-[#333]">
                {row.match}
              </td>
              <td className="px-3 py-2.5 text-[13px] text-[#666]">{row.venue}</td>
              <td className="px-3 py-2.5 text-[13px] text-[#666]">{row.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function StandingsTable({
  category,
  rows,
}: {
  category: string;
  rows: StandingsRow[];
}) {
  const cols = [
    "Soc.",
    "SQUADRA",
    "Punti",
    "ID",
    "IV",
    "IPa",
    "IP",
    "PaV",
    "PaP",
    "SV",
    "SP",
    "PV",
    "PP",
    "Pe",
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-line-frame shadow-[0_4px_16px_rgb(0_0_0/0.06)]">
      <table className="w-full min-w-[720px] border-collapse font-sans">
        <thead>
          <tr>
            <th
              colSpan={14}
              className="border border-blue bg-blue px-2 py-2 text-center text-[13px] font-bold tracking-[0.06em] text-white"
            >
              CLASSIFICA SQUADRE — {category}
            </th>
          </tr>
          <tr className="bg-[#dfe3ea]">
            {cols.map((c) => (
              <th
                key={c}
                className="border border-line-grid px-2 py-1.5 text-[11px] font-bold text-[#222]"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const isFirst = i === 0;
            const isLast = i === rows.length - 1;
            const bg = isFirst
              ? "bg-state-playoff"
              : isLast
                ? "bg-state-relegated"
                : i % 2 === 1
                  ? "bg-surface-grey"
                  : "bg-surface";
            const vals = [
              row.position,
              row.team,
              row.points,
              row.id,
              row.iv,
              row.ipa,
              row.ip,
              row.pav,
              row.pap,
              row.sv,
              row.sp,
              row.pv,
              row.pp,
              row.pe,
            ];
            return (
              <tr key={row.team} className={bg}>
                {vals.map((v, ci) => (
                  <td
                    key={cols[ci]}
                    className={`border border-line-grid px-2 py-1.5 text-center text-xs ${
                      ci === 1 ? "text-left font-bold" : "font-medium"
                    }`}
                  >
                    {v}
                  </td>
                ))}
              </tr>
            );
          })}
          <tr>
            <td
              colSpan={14}
              className="border border-line-grid bg-state-legend px-2.5 py-1.5"
            >
              <div className="flex flex-wrap items-center gap-3.5 text-[11px] font-medium text-[#333]">
                <span className="flex items-center gap-1.5">
                  <span className="inline-block h-3 w-3 border border-[#98a2ad] bg-state-playoff" />
                  Playoff
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="inline-block h-3 w-3 border border-[#98a2ad] bg-state-relegated" />
                  Retrocessa
                </span>
                <span className="ml-auto italic text-[#777]">
                  @ Salvo omologazione della commissione gare
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
