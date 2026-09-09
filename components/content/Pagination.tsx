import Link from "next/link";

export function Pagination() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex gap-2">
        {[1, 2, 3].map((n) => (
          <span
            key={n}
            className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold ${
              n === 1
                ? "bg-grad-bg text-white"
                : "border border-line-control text-ink-mid"
            }`}
          >
            {n}
          </span>
        ))}
      </div>
      <Link
        href="#"
        className="text-[13px] font-bold uppercase tracking-[0.04em] grad-text hover:opacity-100"
      >
        Pagina successiva →
      </Link>
    </div>
  );
}
