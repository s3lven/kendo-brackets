"use client"

import BracketPanel from "@/app/features/bracket/bracket-panel";
import { useBracketStore } from "@/app/features/bracket/stores/bracket-store";
import React from "react";

type EditBracketPageProps = {
  params: {
    tournament: string;
    bracketCode: string;
  };
};

const EditBracketPage = ({ params }: EditBracketPageProps) => {
  const fetchBracket = useBracketStore((state) => state.fetchBracket)
  fetchBracket(params)

  return (
    <div className="w-full h-full flex gap-5 bg-shade2">
      <BracketPanel/>
    </div>
  );
};

export default EditBracketPage;
