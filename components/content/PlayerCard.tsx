import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

type Props = {
  name: string;
  category: string;
  size?: "wide" | "narrow";
  imageSrc?: string;
};

export function PlayerCard({
  name,
  category,
  size = "narrow",
  imageSrc,
}: Props) {
  const photoH = size === "wide" ? "h-[240px]" : "h-[200px]";

  return (
    <div className="glow-2t glow-2t-hover overflow-hidden rounded-[18px] bg-surface transition-[transform,box-shadow] duration-200 hover:-translate-y-1">
      <div className="group/img overflow-hidden">
        <div
          className={`relative w-full ${photoH} transition-transform duration-500 group-hover/img:scale-[1.06]`}
        >
          <ImagePlaceholder
            src={imageSrc}
            alt={`Foto ${name}`}
            label="Foto giocatore"
            fill
          />
        </div>
      </div>
      <div className="px-[18px] py-[18px] text-center">
        <div className="text-base font-semibold text-blue">{name}</div>
        <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.05em] text-red">
          {category}
        </div>
      </div>
    </div>
  );
}
