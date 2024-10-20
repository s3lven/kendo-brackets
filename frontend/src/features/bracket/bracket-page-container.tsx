"use client";

import { useBracketStore } from "@/features/bracket/stores/bracket-store";
import { useSlotStore } from "@/features/bracket/stores/slots-store";
import { BracketWithTournament } from "@/types/bracket_t";
import { useEffect } from "react";

type BracketContainerProps = {
  bracket: BracketWithTournament
  children: React.ReactNode
};

const BracketPageContainer = ({
  bracket,
  children
}: BracketContainerProps) => {
  const setBracket = useBracketStore((state) => state.setBracket);
  const slots = useBracketStore((state) => state.slots);
  const setSlots = useSlotStore((state) => state.setSlots);

  useEffect(() => {
    setBracket(bracket);
    setSlots(slots);
    // console.log(bracket.slots)
  }, [slots, setSlots, setBracket, bracket]);

  return (
    <div className="w-full h-full flex gap-5 bg-shade2">
      {children}
    </div>
  );
};

export default BracketPageContainer;
