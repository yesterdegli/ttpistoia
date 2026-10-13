import type { ContactVenue } from "@/lib/content/contatti";
import { ContactVenueMap } from "@/components/contatti/ContactVenueMap";
import { VenueHoursTable } from "@/components/contatti/VenueHoursTable";

type Props = {
  venue: ContactVenue;
};

export function ContactVenueSection({ venue }: Props) {
  return (
    <article className="overflow-hidden rounded-[18px] border border-line bg-white shadow-[0_4px_16px_rgb(0_0_0/0.06)]">
      <header className="border-b border-line bg-surface-grey px-6 py-4 max-md:px-5">
        <h2 className="m-0 font-display text-xl font-bold text-blue">{venue.title}</h2>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] lg:divide-x lg:divide-line">
        <div className="flex flex-col gap-6 p-6 max-md:px-5 max-md:pb-5">
          <div>
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.05em] text-red">
              Indirizzo
            </div>
            <p className="m-0 text-[15px] leading-[1.8] text-[#444]">
              {venue.lines.map((line, lineIndex) => (
                <span key={`${venue.id}-${lineIndex}`} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
          <VenueHoursTable rows={venue.hours} />
        </div>
        <div className="border-t border-line p-6 max-md:px-5 lg:border-t-0">
          <ContactVenueMap venue={venue} />
        </div>
      </div>
    </article>
  );
}
