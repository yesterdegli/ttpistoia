"use client";

import type { ReactNode } from "react";
import { useLayoutEffect, useRef, useState } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

function isInViewport(el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  return rect.top < vh * 0.92 && rect.bottom > 0;
}

export function ScrollReveal({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  // Visibile finché non confermiamo che è sotto la piega (evita sezioni vuote al load)
  const [visible, setVisible] = useState(true);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const reveal = () => setVisible(true);

    if (isInViewport(el)) {
      reveal();
      return;
    }

    setVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px 8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${visible ? "scroll-reveal-visible" : "scroll-reveal"} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
