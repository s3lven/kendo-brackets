"use client"

import { BracketType } from "@/types/bracket_t";
import * as Select from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { useBracketStatus, useBracketType } from "../../stores/bracket-view-store";
import { useBracketStore } from "../../stores/bracket-store";
import { useShallow } from "zustand/react/shallow";

const BracketTypeInput = () => {
  const bracketType = useBracketType();
  const bracketStatus = useBracketStatus()
  const { setBracketType } = useBracketStore(
    useShallow((state) => ({ setBracketType: state.setBracketType }))
  );

  const isOfBracketType = (value: string): value is BracketType => {
    return [
      "Single Elimination",
      "Double Elimination",
      "Round Robin",
      "Group Stage",
    ].includes(value);
  };

  console.log("BracketTypeInput rendered");

  return (
    <div className="w-full h-full flex flex-wrap justify-between ">
      <p className="text-grey text-desc">Bracket Type</p>
      <Select.Root
        defaultValue={bracketType}
        value={bracketType}
        onValueChange={(value) => {
          if (isOfBracketType(value) && bracketStatus === "Editing") setBracketType(value);
        }}
        disabled={bracketStatus !== "Editing"}
      >
        <Select.Trigger
          aria-label="bracket type"
          className={`w-[160px] h-full px-1 bg-transparent  border-grey font-poppins text-grey text-desc
                    flex justify-between items-center ${bracketStatus !== "Editing" ? "": "border"}`}
        >
          <Select.Value>{bracketType}</Select.Value>
          <Select.Icon asChild className={`${bracketStatus !== "Editing" && "hidden"}`}>
            <ChevronDown size={"1rem"} />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            className="rounded-lg bg-neutral8 w-[220px] focus:outline-none shadow-lg outline outline-1 outline-shade2 text-button-sm text-white font-poppins"
            position="popper"
            sideOffset={10}
            alignOffset={-22}
          >
            <Select.ScrollUpButton></Select.ScrollUpButton>
            <Select.Viewport className="py-4">
              <Select.Item
                value="Single Elimination"
                className="hover:bg-neutral7 px-4 py-2 cursor-pointer"
              >
                Single Elimination
              </Select.Item>
              {/* TODO: Implement these rendering modes!!! */}
              {/* <Select.Item
                value="Double Elimination"
                className="hover:bg-neutral7 px-4 py-2 cursor-pointer"
              >
                Double Elimination
              </Select.Item>
              <Select.Item
                value="Round Robin"
                className="hover:bg-neutral7 px-4 py-2 cursor-pointer"
              >
                Round Robin
              </Select.Item>
              <Select.Item
                value="Group Stage"
                className="hover:bg-neutral7 px-4 py-2 cursor-pointer"
              >
                Group Stage
              </Select.Item> */}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};

export default BracketTypeInput;
