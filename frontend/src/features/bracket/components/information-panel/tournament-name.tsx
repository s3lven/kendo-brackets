"use client"

import { useBracketStore } from "../../stores/bracket-store";
import * as Tooltip from "@radix-ui/react-tooltip";

const TournamentName = () => {
    const tournamentName = useBracketStore((state) => state.tournamentName)

  return (
    <div className="w-full h-full flex flex-wrap justify-between">
      <p className="text-grey text-desc">Tournament Name</p>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <p
              className="w-[160px] h-full px-1 bg-transparent font-poppins text-grey text-desc
                      flex items-center ml-2 overflow-hidden cursor-pointer"
            >
              <span className="truncate">{tournamentName}</span>
            </p>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="bg-neutral8 text-grey text-desc px-4 py-2 rounded shadow-md"
              sideOffset={5}
            >
              {tournamentName}
              <Tooltip.Arrow className="fill-neutral8" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  );
};

export default TournamentName;
