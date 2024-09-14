import React from "react";
import { useCombinedStore } from "./stores/bracket-view-store";
import BracketRoundTitle from "./bracket-round-title";
import { RoundType } from "@/types/bracket_t";
import BracketRound from "./bracket-round";

const BracketView = () => {
  const { bracket } = useCombinedStore();
  const slotCount = bracket.slots.length;
  const rounds = Math.ceil(Math.log2(slotCount));
  // console.log(rounds)

  const determineRoundTitles = (numberOfParticipants: number): RoundType[] => {
    const roundTitles: RoundType[] = [];
    const numberOfRounds = Math.ceil(
      Math.log(numberOfParticipants) / Math.log(2)
    );

    if (numberOfRounds == 0) return ["Finals"];

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

  const getBracket = () => {
    if (slotCount < 2) {
      return [];
    }

    let matches: number[][] = [[1, 2]];

    for (let round = 1; round < rounds; round++) {
      const roundMatches = [];
      const sum = Math.pow(2, round + 1) + 1;

      for (let i = 0; i < matches.length; i++) {
        let player1 = changeIntoBye(matches[i][0]);
        let player2 = changeIntoBye(sum - matches[i][0]);
        roundMatches.push([player1, player2]);
        player1 = changeIntoBye(sum - matches[i][1]);
        player2 = changeIntoBye(matches[i][1]);
        roundMatches.push([player1, player2]);
      }
      matches = roundMatches;
    }

    return matches;
  };

  const changeIntoBye = (seed: number) => {
    return seed <= slotCount ? seed : -1;
  };

  const buildBracket = () => {
    const bracket = []
    const initialMatches = getBracket().length
    bracket.push(getBracket())

    for (let i = 1; i < rounds; i++) {
      bracket.push(new Array(initialMatches / Math.pow(2, i)).fill([]))
    }

    return bracket
  }

  const matches: number[][][] = buildBracket()
  console.log(matches)

  return (
    <div className="w-full h-full space-y-4 pr-5 overflow-y-scroll no-scrollbar pb-20">
      {/* Round Titles */}
      <div className="w-full max-h-[25px] flex gap-1">
        {determineRoundTitles(slotCount).map((title) => (
          <BracketRoundTitle roundTitle={title} key={title} />
        ))}
      </div>

      {/* Bracket */}
      <div className="w-full flex ">
        {matches.map((match, index) => (
          <BracketRound key={index} round={index + 1} initMatchesMap={() => match}/>
        ) )}
      </div>
    </div>
  );
};

export default BracketView;
