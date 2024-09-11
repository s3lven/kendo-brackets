"use client";

import { User } from "lucide-react";
import BracketSettingsPopover from "./bracket-settings-popover";
import { Bracket, Tournament } from "@/types/bracket_t";

type BracketListProps = {
  item: Tournament;
};

type BracketContentProps = {
  item: Bracket;
};

const BracketContent = ({ item }: BracketContentProps) => {
  return (
    <div className="rounded-lg bg-shade2 flex justify-between px-4 py-4 group hover:bg-shade2_30 shadow-lg transition-transform ease-in-out duration-300 hover:scale-[1.01]">
      <div className="flex flex-col justify-center items-start">
        <p className="">{item.bracketName}</p>
        <p className="">{item.bracketType}</p>
      </div>
      <div className="flex items-center justify-center">
        <p className="">{item.status}</p>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <div className="flex gap-1 justify-center items-center">
          <p>21</p>
          <User />
        </div>
        <BracketSettingsPopover name={item.bracketName} />
      </div>
    </div>
  );
};

const BracketList = ({ item }: BracketListProps) => {
  const order = ["Active", "Upcoming", "Past"];
  return (
    <div
      className="w-full h-full flex-grow flex flex-col justify-between gap-2 px-2 py-9
                  text-desc text-white focus:outline-none overflow-y-scroll"
    >
      {item.brackets
        .toSorted((a, b) => order.indexOf(a.status) - order.indexOf(b.status))
        .map((item) => (
          <BracketContent
            key={`${item.bracketName}-${item.status}`}
            item={item}
          />
        ))}
    </div>
  );
};

export default BracketList;
