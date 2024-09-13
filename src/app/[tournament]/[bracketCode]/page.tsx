"use client";

import BracketPanel from "@/app/features/bracket/bracket-panel";
import { useBracketStore } from "@/app/features/bracket/stores/bracket-store";
import { useSlotStore } from "@/app/features/bracket/stores/slots-store";
import React, { useEffect } from "react";

type EditBracketPageProps = {
  params: {
    tournament: string;
    bracketCode: string;
  };
};

const EditBracketPage = ({ params }: EditBracketPageProps) => {
  const fetchBracket = useBracketStore((state) => state.fetchBracket);
  const bracket = useBracketStore((state) => state.bracket);
  const setSlots = useSlotStore((state) => state.setSlots);

  useEffect(() => {
    fetchBracket(params);
    setSlots(bracket.slots);
  }, [bracket.slots, fetchBracket, params, setSlots]);

  return (
    <div className="w-full h-full flex gap-5 bg-shade2">
      <BracketPanel />
    </div>
  );
};

export default EditBracketPage;
