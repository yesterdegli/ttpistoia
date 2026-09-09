"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src?: string;
  alt: string;
  label?: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
};

function Fallback({
  alt,
  label,
  className,
}: {
  alt: string;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-surface-grey px-3 text-center text-xs font-medium text-ink-dim ${className}`}
      aria-label={alt}
    >
      <span className="text-[10px] uppercase tracking-wider text-ink-faint">
        Foto non disponibile
      </span>
      <span className="line-clamp-3 text-[11px] leading-snug">{label ?? alt}</span>
    </div>
  );
}

export function ImagePlaceholder({
  src,
  alt,
  label,
  className = "",
  width,
  height,
  fill,
}: Props) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <Fallback alt={alt} label={label} className={className} />;
  }

  if (fill) {
    return (
      <div className={`relative h-full w-full ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          loading="lazy"
          sizes="(max-width: 900px) 100vw, 50vw"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      className={`h-full w-full object-cover ${className}`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
