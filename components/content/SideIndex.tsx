import Link from "next/link";
import type { RegoleChapter } from "@/lib/content/regolamento";

export function SideIndex({ chapters }: { chapters: RegoleChapter[] }) {
  return (
    <aside className="reg-aside sticky top-[110px] rounded-[18px] bg-surface-grey p-6 max-lg:static max-lg:order-first">
      <div className="mb-3 text-xs font-bold uppercase tracking-[0.06em] text-blue">
        Indice
      </div>
      <nav className="grid gap-1">
        {chapters.map((ch) => (
          <Link
            key={ch.number}
            href={`#cap-${ch.number}`}
            className="reg-idx flex gap-2 py-1.5 text-[13.5px] font-medium text-ink-soft hover:opacity-100 hover:grad-text"
          >
            <span className="w-5 shrink-0 text-xs font-bold text-ink-faint">
              {ch.number}
            </span>
            {ch.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
