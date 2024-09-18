import React, { useState } from "react";
import MatchDropdown from "./match-dropdown";
import { Check } from "lucide-react";
import { Slot } from "@/types/bracket_t"

type SlotProps = {
    player: Slot | undefined
}

const SlotView = ({player} : SlotProps) => {
    const [markedWinner, setMarkedWinner] = useState(false);
    console.log(player)

  return (
    <div className="w-full h-[70px] flex items-center">
      <div
        className={`w-[28px] h-full flex items-center justify-center ${player?.color === "Red" ? "bg-error rounded-tl" : "bg-white rounded-bl"}`}
      >
        <p className={`text-label text-center ${player?.color === "Red" ? "text-white" : "text-black"}`}>
          {player?.sequence}
        </p>
      </div>
      <div className={`w-full h-full flex justify-between items-center px-2 bg-shade2_30 ${player?.color === "Red" ? "rounded-tr" : "rounded-br"}`}>
        <div className="flex items-center justify-center">
          <p className="text-desc text-white">{player?.player.name}</p>
        </div>
        <div className="flex items-center gap-8">
          <button
            onClick={() => setMarkedWinner(!markedWinner)}
            className="outline-none hover:bg-neutral8 rounded"
          >
            <Check
              size={"30px"}
              color={`${markedWinner ? "#2ECC71" : "white"}`}
              className="transition-colors ease-in-out"
            />
          </button>
          <div className="flex items-center gap-1">
            <MatchDropdown />
            <MatchDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlotView;
