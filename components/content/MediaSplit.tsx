import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";

type Props = {
  title: string;
  text: string;
  link: { href: string; label: string };
  imageSrc?: string;
  imageAlt?: string;
};

export function MediaSplit({ title, text, link, imageSrc, imageAlt }: Props) {
  return (
    <div className="grid items-center gap-12 max-md:gap-8 lg:grid-cols-[1fr_1.15fr]">
      <div className="order-2 overflow-hidden rounded-[18px] shadow-[0_12px_40px_rgba(0,0,0,0.28)] lg:order-1">
        <div className="group/img relative h-[320px] w-full max-md:h-[240px]">
          <div className="h-full w-full transition-transform duration-500 group-hover/img:scale-[1.06]">
            <ImagePlaceholder
              src={imageSrc}
              alt={imageAlt ?? "Foto del club"}
              label="Club members photo"
              fill
            />
          </div>
        </div>
      </div>
      <div className="order-1 lg:order-2">
        <SectionHeading variant="white">{title}</SectionHeading>
        <p className="mb-5 text-base leading-[1.7] text-white/90">{text}</p>
        <TextLink href={link.href} onGradient>
          {link.label}
        </TextLink>
      </div>
    </div>
  );
}
