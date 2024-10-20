"use client"

import { Input } from "@headlessui/react";
import { useBracketName } from "../../stores/bracket-view-store";
import { useBracketStore } from "../../stores/bracket-store";
import { useShallow } from "zustand/react/shallow";

const BracketNameInput = () => {
  const bracketName = useBracketName();
  const { setBracketName } = useBracketStore(
    useShallow((state) => ({ setBracketName: state.setBracketName }))
  );

  console.log("BracketNameInput rendered");

  return (
    <div className="w-full h-full flex flex-wrap justify-between ">
      <p className="text-grey text-desc">Bracket Name</p>
      <Input
        className="w-[160px] h-full px-1 bg-transparent border border-grey font-poppins text-grey text-desc
                transition-all ease-out duration-500
                data-[focus]:scale-[1.05]"
        value={bracketName}
        onChange={(e) => setBracketName(e.target.value)}
      />
    </div>
  );
};

export default BracketNameInput;
