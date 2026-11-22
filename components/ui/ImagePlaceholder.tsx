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
  /** Nasconde la riga «Foto non disponibile» (es. card giocatori) */
  hideUnavailableCaption?: boolean;
  labelClassName?: string;
  objectFit?: "cover" | "contain";
  imageClassName?: string;
  /** PNG scontornati / asset locali — evita errori dell’optimizer Next */
  unoptimized?: boolean;
};

function Fallback({
  alt,
  label,
  className,
  hideUnavailableCaption,
  labelClassName,
}: {
  alt: string;
  label?: string;
  className?: string;
  hideUnavailableCaption?: boolean;
  labelClassName?: string;
}) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-surface-grey px-4 text-center ${className}`}
      aria-label={alt}
    >
      {!hideUnavailableCaption && (
        <span className="text-[10px] font-medium uppercase tracking-wider text-ink-faint">
          Foto non disponibile
        </span>
      )}
      <span
        className={
          labelClassName ??
          "line-clamp-3 text-[11px] font-medium leading-snug text-ink-dim"
        }
      >
        {label ?? alt}
      </span>
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
  hideUnavailableCaption,
  labelClassName,
  objectFit = "cover",
  imageClassName = "",
  unoptimized = false,
}: Props) {
  const [failed, setFailed] = useState(false);
  const fitClass =
    objectFit === "contain" ? "object-contain" : "object-cover";

  if (!src || failed) {
    return (
      <Fallback
        alt={alt}
        label={label}
        className={className}
        hideUnavailableCaption={hideUnavailableCaption}
        labelClassName={labelClassName}
      />
    );
  }

  if (fill) {
    return (
      <div className={`relative h-full w-full ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className={`${fitClass} ${imageClassName}`.trim()}
          loading="lazy"
          sizes="(max-width: 900px) 100vw, 50vw"
          unoptimized={unoptimized}
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
      className={`h-full w-full ${fitClass} ${imageClassName} ${className}`.trim()}
      loading="lazy"
      unoptimized={unoptimized}
      onError={() => setFailed(true)}
    />
  );
}
