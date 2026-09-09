"use client";

import { useState } from "react";
import { RankingModal } from "@/components/RankingModal";

export function CampionatiRankingTrigger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-full bg-[#e50d22] px-5 py-2.5 text-sm font-bold uppercase tracking-[0.03em] text-white shadow-[0_8px_22px_rgb(229_13_34/0.35)] transition-transform duration-[180ms] hover:-translate-y-0.5"
      >
        Ranking individuale
      </button>

      <RankingModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
