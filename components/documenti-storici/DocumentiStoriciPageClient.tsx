"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { DocumentoSection } from "@/real-data/documenti-storici";
import {
  getSeasonsNewestFirst,
  scrollSeasonIntoViewAfterExpand,
  seasonAnchorId,
} from "@/lib/storia-utils";
import { SeasonAccordion } from "@/components/storia/SeasonAccordion";
import { YearPills } from "@/components/storia/YearPills";
import { SectionContainer } from "@/components/ui/SectionContainer";

const DEFAULT_OPEN = "2023";

type Props = {
  sections: DocumentoSection[];
};

export function DocumentiStoriciPageClient({ sections: documentiStorici }: Props) {
  const sections = getSeasonsNewestFirst(documentiStorici);
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
    const match = documentiStorici.find((s) => seasonAnchorId(s.id) === hash);
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

  return (
    <>
      <SectionContainer compact className="pb-2 pt-12" reveal={false}>
        <p className="mb-4 text-[17px] leading-[1.8] text-ink-body [text-wrap:pretty]">
          Rassegna stampa e documenti d&apos;archivio: articoli de{" "}
          <em>La Nazione</em>, <em>Il Tirreno</em> e altre testate, dagli
          anni Settanta al 2023.
        </p>
      </SectionContainer>

      <YearPills
        seasons={sections}
        activeId={openId}
        onSelect={handleJump}
        heading="Salta all'anno"
      />

      <SectionContainer className="pb-20 pt-10" reveal={false}>
        <SeasonAccordion
          seasons={sections}
          openId={openId}
          onToggle={handleToggle}
          getSectionLabel={(id) => id}
          photoSliderHeading="Documenti e articoli"
        />
      </SectionContainer>
    </>
  );
}
