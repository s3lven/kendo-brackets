import { IpponType, PlayerColorType } from "@/types/bracket_t";
import React from "react";

type BracketSlotProps = {
  variant: PlayerColorType;
  sequence?: number | string;
  name?: string;
  isWinner: boolean;
  scores: IpponType[];
};

const BracketSlot = ({
  variant,
  sequence = "-1",
  name = "-1",
  isWinner,
  scores,
}: BracketSlotProps) => {
  const hitMap: Record<string, string> = {
    Men: "M",
    Kote: "K",
    Do: "D",
    Tsuki: "T",
    Hantei: "HT",
    Hansoku: "HS",
    "": "-",
  };
  return (
    <div className="max-w-[200px] w-full max-h-[27px] h-full flex items-center font-poppins">
      <div
        className={`w-[28px] max-h-[27px] h-full flex items-center justify-center 
            ${
              variant === "Red"
                ? "bg-error rounded-tl text-white"
                : "bg-white text-black rounded-bl"
            }`}
      >
        <p
          className={`w-full h-full text-label uppercase text-center
                ${sequence == -1 && "opacity-0"}`}
        >
          {sequence}
        </p>
      </div>
      <div
        className={`w-full max-h-[27px] h-full flex items-center justify-center px-1 bg-neutral8
            ${variant === "Red" ? "rounded-tr " : "rounded-br"}`}
      >
        <div className="w-full h-full flex items-center flex-1">
          <p
            className={`w-[128px] text-desc text-white truncate ${
              sequence == -1 && "opacity-0"
            }
            ${isWinner ? "text-green" : "text-white"}`}
          >
            {name}
          </p>
        </div>
        <div className="w-9 h-full gap-1 flex items-center justify-center">
          {scores.map((score, index) => (
            <div
              key={index}
              className="w-full h-full flex items-center justify-center"
            >
              <p className={`text-desc w-5 ${isWinner ? "text-green" : "text-white"}`}>{hitMap[score] || "-"}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BracketSlot;
