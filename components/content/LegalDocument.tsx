import type { LegalSection } from "@/lib/content/privacy";

type Props = {
  sections: LegalSection[];
};

export function LegalDocument({ sections }: Props) {
  return (
    <article className="legal-doc">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-[140px] border-t border-line py-10 first:border-t-0 first:pt-0"
        >
          <h2 className="relative m-0 mb-5 pb-3 font-display text-[26px] font-bold capitalize tracking-[-0.015em] grad-text max-md:text-[22px]">
            {section.title}
            <span className="absolute bottom-0 left-0 h-1 w-14 bg-red" />
          </h2>
          {section.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="mb-4 text-[17px] leading-[1.85] text-ink-body [text-wrap:pretty] last:mb-0"
            >
              {paragraph}
            </p>
          ))}
          {section.list && section.list.length > 0 && (
            <ul className="m-0 list-disc space-y-2 pl-5 text-[17px] leading-[1.85] text-ink-body">
              {section.list.map((item) => (
                <li key={item.slice(0, 48)} className="[text-wrap:pretty]">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </article>
  );
}
