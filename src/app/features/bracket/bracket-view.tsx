import React from "react";
import { useCombinedStore } from "./stores/bracket-view-store";
import BracketRoundTitle from "./bracket-round-title";
import { Match, RoundType, Slot } from "@/types/bracket_t";
import BracketRound from "./bracket-round";
import BracketConnector from "./bracket-connector";
import BracketMatch from "./bracket-match";

const BracketView = () => {
  const { bracket } = useCombinedStore();
  const slotCount = bracket.slots.length;

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
    const participantsCount = slotCount;
    const rounds = Math.ceil(Math.log2(participantsCount));
    // const bracketSize = Math.pow(2, rounds);
    // const requiredByes = bracketSize - participantsCount;

    if (participantsCount < 2) {
      return [];
    }

    let matches: number[][] = [[1, 2]];

    for (let round = 1; round < rounds; round++) {
      const roundMatches = [];
      const sum = Math.pow(2, round + 1) + 1;

      for (let i = 0; i < matches.length; i++) {
        let player1 = changeIntoBye(matches[i][0], participantsCount);
        let player2 = changeIntoBye(sum - matches[i][0], participantsCount);
        roundMatches.push([player1, player2]);
        player1 = changeIntoBye(sum - matches[i][1], participantsCount);
        player2 = changeIntoBye(matches[i][1], participantsCount);
        roundMatches.push([player1, player2]);
      }
      matches = roundMatches;
    }

    return matches;
  };

  const changeIntoBye = (seed: number, participantsCount: number) => {
    return seed <= participantsCount ? seed : -1;
  };

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
        <BracketRound initMatchesMap={getBracket} round={1}/>
        <BracketRound initMatchesMap={() => [[1,3],[4,2]]} round={2}/>
        
        {/* <div className="w-full max-w-[200px] flex flex-col justify-between gap-4 py-9">
          {new Array(8).fill(null).map((_, index) => (
            <BracketMatch key={index} />
          ))}
        </div> */}

        {/* Round 2 Connectors */}
        {/* <div className="flex flex-col justify-center gap-[138px]">
          {new Array(4).fill(null).map((_, index) => (
            <div key={index} className="px-[7px] flex flex-col">
              <svg height={70} width={20} className="">
                <path
                  d="M0 1 L10 1 M10 0 L10 70.5 M10 74.5 L20 70.5 Z"
                  className="stroke-white stroke-2"
                />
              </svg>
              <svg height={70} width={20} className="">
                <path
                  d="M0 69 L10 69 M10 0 L10 70 M10 0.5 L20 0.5 Z"
                  className="stroke-white stroke-2"
                />
              </svg>
            </div>
          ))}
        </div>

        <div className="w-full max-w-[200px] flex flex-col justify-between gap-4 py-[108px]">
          {new Array(4).fill(null).map((_, index) => (
            <BracketMatch key={index} />
          ))}
        </div> */}
        
        {/* Round 3 Connectors */}
        {/* <div className="flex flex-col justify-center gap-[280px]">
          {new Array(2).fill(null).map((_, index) => (
            <div key={index} className="px-[7px] flex flex-col">
              <svg height={139} width={20} className="">
                <path
                  d="M0 1 L10 1 M10 0 L10 139.5 M10 139.5 L20 139.5 Z"
                  className="stroke-white stroke-2"
                />
              </svg>
              <svg height={139} width={20} className="">
                <path
                  d="M0 138 L10 138 M10 0 L10 139 M10 0.5 L20 0.5 Z"
                  className="stroke-white stroke-2"
                />
              </svg>
            </div>
          ))}
        </div>
        <div className="w-full max-w-[200px] flex flex-col justify-between gap-4 py-[246px]">
          {new Array(2).fill(null).map((_, index) => (
            <BracketMatch key={index} />
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <div className="px-[7px] flex flex-col">
            <svg height={280} width={20} className="">
              <path
                d="M0 1 L10 1 M10 0 L10 280.5 M10 280.5 L20 280.5 Z"
                className="stroke-white stroke-2"
              />
            </svg>
            <svg height={280} width={20} className="">
              <path
                d="M0 279 L10 279 M10 0 L10 280 M10 0.5 L20 0.5 Z"
                className="stroke-white stroke-2"
              />
            </svg>
          </div>
        </div>
        <div className="w-full max-w-[200px] flex flex-col justify-center">
          {new Array(1).fill(null).map((_, index) => (
            <BracketMatch key={index} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default BracketView;
