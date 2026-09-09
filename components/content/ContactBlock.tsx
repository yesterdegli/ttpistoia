import { contactHours, contactIntro } from "@/lib/content/contatti";
import { SITE } from "@/lib/site";

export function ContactBlock() {
  return (
    <div>
      <h2 className="relative m-0 mb-5 pb-3 font-display text-2xl font-bold capitalize tracking-[-0.015em] grad-text">
        Dove siamo
        <span className="absolute bottom-0 left-0 h-1 w-14 bg-red" />
      </h2>
      <p className="mb-6 whitespace-pre-line text-[15px] leading-[1.8] text-[#444]">
        {contactIntro.address}
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

      <div className="mb-6">
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

      <div>
        <div className="mb-2.5 text-xs font-bold uppercase tracking-[0.05em] text-red">
          Orari di apertura
        </div>
        <div>
          {contactHours.map((row, i) => (
            <div
              key={row.day}
              className={`flex justify-between border-t border-[#eee] py-2 ${
                i === contactHours.length - 1 ? "border-b border-[#eee]" : ""
              }`}
            >
              <span className="text-sm font-medium text-[#333]">{row.day}</span>
              <span className="text-sm text-[#666]">{row.hours}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
