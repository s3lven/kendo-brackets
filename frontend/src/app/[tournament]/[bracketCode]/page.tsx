"use client";

import BracketPanel from "@/app/features/bracket/bracket-panel";
import BracketView from "@/app/features/bracket/bracket-view";
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
    // console.log(bracket.slots)
  }, [bracket.slots, fetchBracket, params, setSlots]);

  console.log("EditBracketPage rendered")

  return (
    <div className="w-full h-full flex gap-5 bg-shade2">
      <BracketPanel />
      <BracketView />
    </div>
  );
};

export default EditBracketPage;
