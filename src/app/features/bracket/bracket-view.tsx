import React from "react";
import { useCombinedStore } from "./stores/bracket-view-store";
import BracketRoundTitle from "./bracket-round-title";
import { RoundType } from "@/types/bracket_t";
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
        <div className="w-full max-w-[200px] flex flex-col items-between gap-4">
          {new Array(16).fill(null).map((_, index) => (
            <BracketMatch key={index} />
          ))}
        </div>
        {/* Round 1 Connectors */}
        <div className="flex flex-col justify-center gap-[65.25px]">
          {new Array(8).fill(null).map((_, index) => (
            <div key={index} className="px-[7px] flex flex-col">
              <svg height={37} width={20} className="">
                <path
                  d="M0 1 L10 1 M10 0 L10 37.5 M10 36.5 L20 36.5 Z"
                  className="stroke-white stroke-2"
                />
              </svg>
              <svg height={37} width={20} className="">
                <path
                  d="M0 36 L10 36 M10 0 L10 37 M10 0.5 L20 0.5 Z"
                  className="stroke-white stroke-2"
                />
              </svg>
            </div>
          ))}
        </div>
        <div className="w-full max-w-[200px] flex flex-col justify-between gap-4 py-9">
          {new Array(8).fill(null).map((_, index) => (
            <BracketMatch key={index} />
          ))}
        </div>
        {/* Round 2 Connectors */}
        <div className="flex flex-col justify-center gap-[138px]">
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
        </div>
        {/* Round 3 Connectors */}
        <div className="flex flex-col justify-center gap-[280px]">
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
        </div>
      </div>
    </div>
  );
};

export default BracketView;
