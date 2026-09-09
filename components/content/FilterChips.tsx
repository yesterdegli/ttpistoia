"use client";

const categories = [
  "Tutte",
  "Campionati",
  "Tornei",
  "Vita del TT Pistoia",
] as const;

export function FilterChips({ active = "Tutte" }: { active?: string }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {categories.map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            type="button"
            className={`rounded-full px-4 py-2.5 text-[13px] ${
              isActive
                ? "border-0 bg-grad-bg font-semibold text-white"
                : "border border-line-control bg-surface font-medium text-ink-mid"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
