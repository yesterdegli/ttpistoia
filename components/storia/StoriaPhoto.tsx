"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
};

export function StoriaPhoto({ src, alt, sizes, className = "" }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-surface-grey px-3 text-center ${className}`}
        aria-label={alt}
      >
        <span className="text-[10px] font-medium uppercase tracking-wider text-ink-faint">
          Foto non disponibile
        </span>
        <span className="line-clamp-3 text-[11px] leading-snug text-ink-dim">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={`object-cover ${className}`}
      loading="lazy"
      sizes={sizes ?? "(max-width: 900px) 85vw, 380px"}
      onError={() => setFailed(true)}
    />
  );
}
