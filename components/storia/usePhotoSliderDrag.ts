"use client";

import { useEffect, useRef } from "react";

type DragState = {
  el: HTMLDivElement;
  x: number;
  left: number;
  moved: boolean;
};

/** Drag-to-scroll e rotella orizzontale come nel prototipo Storia.dc.html */
export function usePhotoSliderDrag<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const wasDraggedRef = useRef(false);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    let drag: DragState | null = null;

    const onPointerDown = (e: PointerEvent) => {
      wasDraggedRef.current = false;
      const sl = (e.target as Element).closest(".st-slider") as HTMLDivElement | null;
      if (!sl || !(sl instanceof HTMLDivElement)) return;
      if ((e.target as Element).closest("button")) return;
      drag = { el: sl, x: e.clientX, left: sl.scrollLeft, moved: false };
      sl.style.cursor = "grabbing";
      sl.style.scrollSnapType = "none";
      sl.style.scrollBehavior = "auto";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!drag) return;
      const dx = e.clientX - drag.x;
      if (Math.abs(dx) > 3) {
        drag.moved = true;
        wasDraggedRef.current = true;
      }
      if (Math.abs(dx) > 3) e.preventDefault();
      drag.el.scrollLeft = drag.left - dx;
    };

    const onPointerUp = () => {
      if (!drag) return;
      drag.el.style.cursor = "";
      drag.el.style.scrollSnapType = "x mandatory";
      drag.el.style.scrollBehavior = "";
      drag = null;
    };

    const onWheel = (e: WheelEvent) => {
      const sl = (e.target as Element).closest(".st-slider") as HTMLDivElement | null;
      if (!sl) return;
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      const max = sl.scrollWidth - sl.clientWidth;
      if (max <= 0) return;
      const atStart = sl.scrollLeft <= 0 && e.deltaY < 0;
      const atEnd = sl.scrollLeft >= max - 1 && e.deltaY > 0;
      if (atStart || atEnd) return;
      sl.scrollLeft += e.deltaY;
      e.preventDefault();
    };

    root.addEventListener("pointerdown", onPointerDown);
    root.addEventListener("pointermove", onPointerMove);
    root.addEventListener("pointerup", onPointerUp);
    root.addEventListener("pointercancel", onPointerUp);
    root.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      root.removeEventListener("pointerdown", onPointerDown);
      root.removeEventListener("pointermove", onPointerMove);
      root.removeEventListener("pointerup", onPointerUp);
      root.removeEventListener("pointercancel", onPointerUp);
      root.removeEventListener("wheel", onWheel);
    };
  }, []);

  return { ref, wasDraggedRef };
}
