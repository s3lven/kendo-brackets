import React from "react";
import { useCombinedStore } from "./stores/bracket-view-store";
import BracketRoundTitle from "./bracket-round-title";
import { RoundType } from "@/types/bracket_t";

const BracketView = () => {
  const { bracket } = useCombinedStore();
  const slotCount = bracket.slots.length;

  const determineRoundTitles = (numberOfParticipants: number): RoundType[] => {
    const roundTitles: RoundType[] = [];
    const numberOfRounds = Math.ceil(
      Math.log(numberOfParticipants) / Math.log(2)
    );

    if (numberOfRounds == 0) return ["Finals"]

    for (let i = 0; i < numberOfRounds; i++) {
      const roundNumber = i + 1;
      let title: RoundType;

      if (roundNumber === numberOfRounds) {
        title = "Finals";
      } else if (roundNumber === numberOfRounds - 1) {
        title = "Semi-Finals";
      } else if (roundNumber === numberOfRounds - 2) {
        title = "Quarter-Finals";
      } else {
        title = `Round ${roundNumber}`;
      }

      roundTitles.push(title);
    }

    return roundTitles;
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 pr-5">
      <div className="w-full h-full max-h-[25px] flex gap-1">
        {determineRoundTitles(slotCount).map((title) => (
          <BracketRoundTitle roundTitle={title} key={title} />
        ))}
      </div>
    </div>
  );
};

export default BracketView;
