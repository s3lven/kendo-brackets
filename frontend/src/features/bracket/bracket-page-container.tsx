"use client";

import { useBracketStore } from "@/features/bracket/stores/bracket-store";
import { useSlotStore } from "@/features/bracket/stores/slots-store";
import React, { useEffect } from "react";

import BracketPanel from "@/features/bracket/bracket-panel";
import BracketView from "@/features/bracket/bracket-view";

type BracketContainerProps = {
  tournament: string;
  bracketCode: string;
};

const BracketPageContainer = ({
  tournament,
  bracketCode,
}: BracketContainerProps) => {
  const fetchBracket = useBracketStore((state) => state.fetchBracket);
  const slots = useBracketStore((state) => state.slots);
  const setSlots = useSlotStore((state) => state.setSlots);

  useEffect(() => {
    fetchBracket({ tournament, bracketCode });
    setSlots(slots);
    // console.log(bracket.slots)
  }, [slots, fetchBracket, setSlots, tournament, bracketCode]);

  return (
    <div className="w-full h-full flex gap-5 bg-shade2">
      <BracketPanel />
      <BracketView />
    </div>
  );
};

export default BracketPageContainer;
