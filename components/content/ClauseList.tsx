import type { RegoleChapter } from "@/lib/content/regolamento";

function clauseDepth(number: string): number {
  return number.split(".").length - 1;
}

export function ClauseList({ chapters }: { chapters: RegoleChapter[] }) {
  return (
    <div>
      {chapters.map((chapter) => (
        <div
          key={chapter.number}
          id={`cap-${chapter.number}`}
          className="scroll-mt-[120px] pb-10"
        >
          <div className="mb-4 flex items-baseline gap-3.5">
            <span className="flex h-[34px] min-w-[34px] items-center justify-center rounded-full bg-grad-bg text-[15px] font-bold text-white">
              {chapter.number}
            </span>
            <h2 className="m-0 font-display text-[26px] font-bold tracking-[-0.015em] grad-text max-md:text-[22px]">
              {chapter.title}
            </h2>
          </div>
          <div>
            {chapter.clauses.map((clause) => {
              const depth = clauseDepth(clause.number);
              return (
                <div
                  key={clause.number}
                  className="flex gap-3.5 border-t border-line py-3 last:border-b last:border-line"
                  style={{ paddingLeft: depth > 1 ? depth * 26 : 0 }}
                >
                  <span
                    className={`w-11 shrink-0 pt-1 text-xs font-semibold text-ink-faint ${
                      depth > 1 ? "text-[11px]" : ""
                    }`}
                  >
                    {clause.number}
                  </span>
                  <p
                    className={`m-0 leading-[1.75] [text-wrap:pretty] ${
                      depth > 1
                        ? "text-[15px] text-ink-mid"
                        : "text-base text-ink-body"
                    }`}
                  >
                    {clause.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
