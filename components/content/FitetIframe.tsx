"use client";

import { useCallback, useRef, useState } from "react";

const DEFAULT_HEIGHT = { calendar: 300, standings: 260 } as const;
const MAX_HEIGHT = { calendar: 720, standings: 520 } as const;
/** Referto: ~290px testata FITeT (fissa) + tabella singolari (scroll nel frame interno). */
const CALENDAR_MATCH_DETAIL_HEIGHT = 500;

type Variant = keyof typeof DEFAULT_HEIGHT;

function calendarDetailHeight() {
  if (typeof window === "undefined") return CALENDAR_MATCH_DETAIL_HEIGHT;
  return Math.min(
    CALENDAR_MATCH_DETAIL_HEIGHT,
    Math.max(460, Math.round(window.innerHeight * 0.52)),
  );
}

export function FitetIframe({
  src,
  title,
  variant,
}: {
  src: string;
  title: string;
  variant: Variant;
}) {
  const [height, setHeight] = useState<number>(DEFAULT_HEIGHT[variant]);
  const [contentWidth, setContentWidth] = useState<number | null>(null);
  const [showCalendarBack, setShowCalendarBack] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const loadCountRef = useRef(0);

  const resetCalendar = useCallback(() => {
    loadCountRef.current = 0;
    setHeight(DEFAULT_HEIGHT.calendar);
    setShowCalendarBack(false);
    setIframeKey((k) => k + 1);
  }, []);

  const onLoad = useCallback(
    (e: React.SyntheticEvent<HTMLIFrameElement>) => {
      loadCountRef.current += 1;
      const iframe = e.currentTarget;

      try {
        const doc = iframe.contentDocument ?? iframe.contentWindow?.document;
        if (!doc) return;
        const body = doc.body;
        const html = doc.documentElement;
        const contentHeight = Math.ceil(
          Math.max(
            body?.scrollHeight ?? 0,
            body?.offsetHeight ?? 0,
            html?.scrollHeight ?? 0,
            html?.offsetHeight ?? 0,
          ),
        );
        const contentWidthPx = Math.ceil(
          Math.max(
            body?.scrollWidth ?? 0,
            html?.scrollWidth ?? 0,
            body?.offsetWidth ?? 0,
          ),
        );

        if (contentHeight > 80) {
          const next =
            variant === "standings"
              ? contentHeight + 2
              : Math.min(contentHeight + 4, MAX_HEIGHT[variant]);
          setHeight(next);
        }

        if (variant === "standings" && contentWidthPx > 0) {
          setContentWidth(contentWidthPx);
        }
      } catch {
        if (variant === "calendar" && loadCountRef.current >= 2) {
          setShowCalendarBack(true);
          const detailH = calendarDetailHeight();
          setHeight((h) => Math.max(h, detailH));
        }
      }
    },
    [variant],
  );

  const iframeEl = (
    <iframe
      key={iframeKey}
      title={title}
      src={src}
      onLoad={onLoad}
      className="block border-0 bg-white transition-[height] duration-300 ease-out"
      style={{
        height: `${height}px`,
        width: contentWidth ? `${contentWidth}px` : "100%",
        minWidth: "100%",
      }}
      scrolling="auto"
      loading="lazy"
    />
  );

  if (variant === "standings") {
    return (
      <div className="overflow-x-auto bg-white [-webkit-overflow-scrolling:touch] [overscroll-behavior-x:contain]">
        {iframeEl}
      </div>
    );
  }

  if (variant !== "calendar") {
    return iframeEl;
  }

  return (
    <div className="bg-white">
      {showCalendarBack ? (
        <div className="flex items-center border-b border-[#eee] bg-surface-grey/80 px-3 py-2.5">
          <button
            type="button"
            onClick={resetCalendar}
            className="m-0 border-0 bg-transparent p-0 font-display text-sm font-semibold text-blue hover:opacity-80"
          >
            ← Torna al calendario
          </button>
        </div>
      ) : null}
      {iframeEl}
    </div>
  );
}
