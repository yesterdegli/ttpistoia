import { HomeVideoBackground } from "@/components/content/HomeVideoBackground";
import { TextLink } from "@/components/ui/TextLink";

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  posterSrc: string;
  videoSrc?: string;
  link?: { href: string; label: string };
};

export function HomeVideoBand({
  eyebrow,
  title,
  subtitle,
  posterSrc,
  videoSrc,
  link,
}: Props) {
  return (
    <section className="relative isolate z-[2] flex h-[clamp(320px,40vh,480px)] w-full items-center overflow-hidden bg-black md:h-[clamp(560px,72vh,880px)]">
      <HomeVideoBackground posterSrc={posterSrc} videoSrc={videoSrc} />

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(229,13,34,0.52)_0%,rgba(140,10,25,0.44)_22%,rgba(10,10,143,0.5)_58%,rgba(1,1,123,0.54)_100%)]" />
        <div className="absolute inset-0 bg-black/22" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.08)_50%,rgba(0,0,0,0.28)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-10 text-center max-md:px-5">
        <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.12em] text-white/80">
          {eyebrow}
        </div>
        <h2 className="mx-auto mb-4 max-w-[720px] font-display text-[clamp(1.75rem,4.5vw,2.75rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
          {title}
        </h2>
        <p className="mx-auto mb-6 max-w-[720px] font-display text-[clamp(22px,3.2vw,30px)] font-bold leading-[1.15] tracking-[-0.02em] text-white">
          {subtitle}
        </p>
        {link ? (
          <TextLink href={link.href} onGradient className="!text-[13px]">
            {link.label}
          </TextLink>
        ) : null}
      </div>
    </section>
  );
}
