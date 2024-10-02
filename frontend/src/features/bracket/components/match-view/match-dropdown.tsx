import { IpponType, PlayerColorType } from "@/types/bracket_t";
import * as Select from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useMatchesStore } from "../../stores/matches-store";
import { useShallow } from "zustand/react/shallow";
const hitMap: Record<string, string> = {
  Men: "M",
  Kote: "K",
  Do: "D",
  Tsuki: "T",
  Hantei: "HT",
  Hansoku: "HS",
  None: "",
};

type MatchDropdownType = {
  index: number;
  matchId: string;
  playerType: "player1" | "player2";
  initialValue: IpponType;
  disabled: boolean;
};

const MatchDropdown = ({
  index,
  matchId,
  playerType,
  initialValue,
  disabled,
}: MatchDropdownType) => {
  const [value, setValue] = useState("");
  const { setScore } = useMatchesStore(
    useShallow((state) => ({ setScore: state.setScore }))
  );

  useEffect(() => {
    setValue(initialValue || "");
  }, [initialValue]);

  const handleSetValue = (valueChange: IpponType) => {
    setValue(valueChange);
    setScore(matchId, playerType, index, valueChange);
  };

  return (
    <Select.Root
      value={value}
      onValueChange={handleSetValue}
      disabled={disabled}
    >
      <Select.Trigger className="h-full w-12 px-3 py-4 border border-grey rounded-lg text-white hover:bg-neutral8 disabled:hover:bg-transparent disabled:border-none">
        <Select.Value aria-label={value} className="">
          {value != "None" && hitMap[value]}
        </Select.Value>
        <Select.Icon
          className={`${value && value !== "None" ? "hidden" : "block"} ${
            disabled && "opacity-0"
          }`}
        >
          <ChevronDown color="white" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className="rounded-lg bg-neutral8 focus:outline-none shadow-lg outline outline-1 outline-shade2 text-button-sm text-white font-poppins"
          position="popper"
        >
          <Select.Viewport className="py-4">
            <Select.Item
              value="Men"
              className="hover:bg-neutral7 px-4 py-2 cursor-pointer outline-none"
            >
              Men
            </Select.Item>
            <Select.Item
              value="Kote"
              className="hover:bg-neutral7 px-4 py-2 cursor-pointer outline-none"
            >
              Kote
            </Select.Item>
            <Select.Item
              value="Do"
              className="hover:bg-neutral7 px-4 py-2 cursor-pointer outline-none"
            >
              Do
            </Select.Item>
            <Select.Item
              value="Tsuki"
              className="hover:bg-neutral7 px-4 py-2 cursor-pointer outline-none"
            >
              Tsuki
            </Select.Item>
            <Select.Item
              value="Hantei"
              className="hover:bg-neutral7 px-4 py-2 cursor-pointer outline-none"
            >
              Hantei
            </Select.Item>
            <Select.Item
              value="Hansoku"
              className="hover:bg-neutral7 px-4 py-2 cursor-pointer outline-none"
            >
              Hansoku
            </Select.Item>
            <Select.Item
              value="None"
              className="hover:bg-neutral7 px-4 py-2 cursor-pointer outline-none"
            >
              None
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default MatchDropdown;