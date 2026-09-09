"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { StoriaSeason } from "@/real-data/storia";
import {
  getFirstSentence,
  getSeasonsNewestFirst,
  scrollSeasonIntoViewAfterExpand,
  seasonAnchorId,
  splitParagraphs,
} from "@/lib/storia-utils";
import { SeasonAccordion } from "@/components/storia/SeasonAccordion";
import { YearPills } from "@/components/storia/YearPills";
import { SectionContainer } from "@/components/ui/SectionContainer";

const DEFAULT_OPEN = "2023-2024";

type Props = {
  seasons: StoriaSeason[];
};

export function StoriaPageClient({ seasons: storiaData }: Props) {
  const seasons = getSeasonsNewestFirst(storiaData);
  const foundingSeason = storiaData.find((s) => s.id === "1992")!;
  const [openId, setOpenId] = useState(DEFAULT_OPEN);
  const skipHashSync = useRef(true);
  const shouldScrollRef = useRef(false);

  const handleToggle = useCallback((id: string) => {
    setOpenId((current) => {
      const next = current === id ? "" : id;
      if (next) shouldScrollRef.current = true;
      return next;
    });
  }, []);

  const handleJump = useCallback((id: string) => {
    shouldScrollRef.current = true;
    setOpenId(id);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const match = storiaData.find((s) => seasonAnchorId(s.id) === hash);
    if (match) {
      shouldScrollRef.current = true;
      setOpenId(match.id);
    }
  }, []);

  useEffect(() => {
    if (!openId || !shouldScrollRef.current) return;
    shouldScrollRef.current = false;
    scrollSeasonIntoViewAfterExpand(openId);
  }, [openId]);

  useEffect(() => {
    if (skipHashSync.current) {
      skipHashSync.current = false;
      return;
    }

    if (!openId) {
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
      return;
    }

    const target = `#${seasonAnchorId(openId)}`;
    if (window.location.hash !== target) {
      window.history.replaceState(null, "", target);
    }
  }, [openId]);

  const introFirst = getFirstSentence(foundingSeason.description);
  const introRest = splitParagraphs(foundingSeason.description).slice(1, 3);

  return (
    <>
      <SectionContainer compact className="pb-2 pt-12" reveal={false}>
        <p className="mb-5 font-display text-[26px] font-bold leading-[1.35] tracking-[-0.015em] grad-text [text-wrap:pretty] max-md:text-[22px]">
          {introFirst}
        </p>
        {introRest.map((p) => (
          <p
            key={p.slice(0, 30)}
            className="mb-4 text-[17px] leading-[1.8] text-ink-body [text-wrap:pretty] last:mb-0"
          >
            {p}
          </p>
        ))}
        <p className="my-14 text-[15px] leading-[1.8] text-blue">
          Da qui in avanti, stagione per stagione, il racconto completo. Gli archivi
          sono stati ricostruiti dai verbali societari, dai referti di gara e dalle
          fotografie conservate dai soci.
        </p>
      </SectionContainer>

      <YearPills
        seasons={seasons}
        activeId={openId}
        onSelect={handleJump}
      />

      <SectionContainer className="pb-20 pt-10" reveal={false}>
        <SeasonAccordion
          seasons={seasons}
          openId={openId}
          onToggle={handleToggle}
        />
      </SectionContainer>
    </>
  );
}
