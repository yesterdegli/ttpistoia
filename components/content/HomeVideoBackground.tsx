"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  posterSrc: string;
  videoSrc?: string;
};

export function HomeVideoBackground({ posterSrc, videoSrc }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(Boolean(videoSrc));

  useEffect(() => {
    if (!videoSrc) {
      setShowVideo(false);
      return;
    }

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      if (motionQuery.matches) {
        setShowVideo(false);
        videoRef.current?.pause();
        return;
      }

      setShowVideo(true);
      const video = videoRef.current;
      if (!video) return;

      video.defaultMuted = true;
      void video.play().catch(() => {
        setShowVideo(false);
      });
    };

    sync();
    motionQuery.addEventListener("change", sync);
    return () => motionQuery.removeEventListener("change", sync);
  }, [videoSrc]);

  return (
    <div className="absolute inset-0 z-0" aria-hidden>
      {videoSrc ? (
        <video
          ref={videoRef}
          src={videoSrc}
          className={`absolute inset-0 h-full w-full object-cover object-[center_42%] transition-opacity duration-300 ${
            showVideo ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={posterSrc}
        />
      ) : null}

      <img
        src={posterSrc}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover object-[center_42%] transition-opacity duration-300 ${
          videoSrc && showVideo ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}
