import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import {
  PLAYER_CARD_BACKDROPS,
  resolvePlayerCardBackdrop,
} from "@/lib/player-card-backdrop";

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
  const photoH =
    size === "wide"
      ? "h-[300px] md:h-[320px]"
      : "h-[min(72vw,320px)] md:h-[300px] lg:h-[320px]";
  const backdrop =
    PLAYER_CARD_BACKDROPS[resolvePlayerCardBackdrop()].className;

  return (
    <div className="glow-2t glow-2t-hover w-full min-w-0 overflow-hidden rounded-[18px] bg-surface transition-[transform,box-shadow] duration-200 hover:-translate-y-1">
      <div className="group/img overflow-hidden">
        <div
          className={`player-photo-frame ${backdrop} relative w-full ${photoH} transition-transform duration-500 group-hover/img:scale-[1.03]`}
        >
          <ImagePlaceholder
            src={imageSrc}
            alt={`Foto ${name}`}
            label="Foto con maglie nuove in arrivo"
            hideUnavailableCaption
            labelClassName="max-w-[12rem] text-[13px] font-bold leading-snug text-blue md:text-[15px]"
            fill
            objectFit={imageSrc ? "contain" : "cover"}
            unoptimized={Boolean(imageSrc)}
            imageClassName={
              imageSrc
                ? "object-bottom px-1 pb-0 pt-1 drop-shadow-[0_10px_14px_rgb(0_0_0_/0.08)]"
                : ""
            }
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
