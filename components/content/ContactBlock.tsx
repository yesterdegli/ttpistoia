import { contactIntro } from "@/lib/content/contatti";
import { SITE } from "@/lib/site";

/** Telefono ed email condivisi tra le sedi. */
export function ContactBlock() {
  return (
    <div className="rounded-[18px] border border-line bg-white p-6 shadow-[0_4px_16px_rgb(0_0_0/0.06)] max-md:px-5">
      <h2 className="relative m-0 mb-5 pb-3 font-display text-2xl font-bold capitalize tracking-[-0.015em] grad-text">
        Contatti
        <span className="absolute bottom-0 left-0 h-1 w-14 bg-red" />
      </h2>
      <p className="m-0 mb-6 text-sm leading-[1.75] text-[#666]">
        Stesso numero e email per entrambe le sedi.
      </p>

      <div className="mb-6">
        <div className="mb-2 text-xs font-bold uppercase tracking-[0.05em] text-red">
          Telefono
        </div>
        <a
          href={SITE.phoneHref}
          className="text-[17px] font-semibold text-blue hover:opacity-100"
        >
          {SITE.phone}
        </a>
        <div className="mt-1 text-[13px] text-[#777]">{contactIntro.referent}</div>
      </div>

      <div>
        <div className="mb-2 text-xs font-bold uppercase tracking-[0.05em] text-red">
          Email
        </div>
        <a
          href={SITE.emailHref}
          className="text-[17px] font-semibold text-blue hover:opacity-100"
        >
          {SITE.email}
        </a>
      </div>
    </div>
  );
}
