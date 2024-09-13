"use client";

import { BracketType } from "@/types/bracket_t";
import { Button, Input } from "@headlessui/react";
import * as Select from "@radix-ui/react-select";
import { ChevronDown, Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { useBracketStore } from "./stores/bracket-store";


const InformationPanel = () => {
  const bracket = useBracketStore((state) => state.bracket)
  const [typeSelect, setTypeSelect] = useState(bracket.bracketType);
  const [showPassword, setShowPassword] = useState(false);

  const isOfBracketType = (value: string): value is BracketType => {
    return [
      "Single Elimination",
      "Double Elimination",
      "Round Robin",
      "Group Stage",
    ].includes(value);
  };

  return (
    <div className="w-full h-full flex flex-col gap-2.5 p-4">
      <p className="text-grey text-label uppercase w-fit">
        bracket information
      </p>
      <div className="w-full flex flex-col gap-8 px-2 py-4 bg-shade2_30 shadow rounded-sm">
        <div className="w-full h-full flex flex-wrap justify-between ">
          <p className="text-grey text-desc">Bracket Name</p>
          {/* TODO: Track the current value */}
          <Input
            className="w-[160px] h-full px-1 bg-transparent border border-grey font-poppins text-grey text-desc
                transition-all ease-out duration-500
                data-[focus]:scale-[1.05]"
            defaultValue={bracket.bracketName}
          />
        </div>
        <div className="w-full h-full flex flex-wrap justify-between ">
          <p className="text-grey text-desc">Bracket Type</p>
          <Select.Root
            defaultValue={typeSelect}
            value={typeSelect}
            onValueChange={(value) => {
              if (isOfBracketType(value)) setTypeSelect(value);
            }}
          >
            <Select.Trigger
              aria-label="bracket type"
              className="w-[160px] h-full px-1 bg-transparent border border-grey font-poppins text-grey text-desc
                    flex justify-between items-center"
            >
              <Select.Value>{typeSelect}</Select.Value>
              <Select.Icon asChild>
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
                  <Select.Item
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
                  </Select.Item>
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>
        <div className="w-full h-full flex flex-wrap justify-between ">
          <p className="text-grey text-desc">Bracket Code</p>
          <div
            className="w-[160px] h-full px-1 bg-transparent font-poppins text-grey text-desc
                flex justify-between items-center"
          >
            <Input
              className="w-full h-full bg-transparent"
              defaultValue={
                showPassword ? bracket.bracketCode : "aaaaaaaaaaaa"
              }
              type={showPassword ? "text" : "password"}
              readOnly
            />
            <Button className="" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <Eye size={"1rem"} /> : <EyeOff size={"1rem"} />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPanel;
