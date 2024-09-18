import BracketSlot from "./bracket-slot";
import { useCombinedStore } from "../../stores/bracket-view-store";
import * as Dialog from "@radix-ui/react-dialog";
import SlotView from "../match-view/slot-view";
import EditorButton from "@/components/ui/editor-button";
import { X } from "lucide-react";

type BracketMatchProps = {
  playerSequences: number[];
};

const BracketMatch = ({ playerSequences }: BracketMatchProps) => {
  const { slots } = useCombinedStore();

  // Look up the players
  const redPlayer = slots.find(
    (player) => player.sequence == playerSequences[0]
  );
  const whitePlayer = slots.find(
    (player) => player.sequence == playerSequences[1]
  );

  // if (redPlayer) redPlayer.color = "Red"
  // if (whitePlayer) whitePlayer.color = "White"

  // Given two players and their seeding (sequence), render the match
  // console.log("Red Player: ", redPlayer?.player.name);
  // console.log("White Player: ", whitePlayer?.player.name);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="w-full flex flex-col justify-center gap-[2px] hover:outline-primary hover:outline">
          <BracketSlot
            variant="Red"
            name={redPlayer?.player.name}
            sequence={redPlayer?.sequence}
          />
          <BracketSlot
            variant="White"
            name={whitePlayer?.player.name}
            sequence={whitePlayer?.sequence}
          />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-shade2/80 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content
          className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] focus:outline-none
          max-w-[680px] max-h-[425px] flex flex-col justify-between items-center p-4 gap-[10px] bg-neutral8 w-full h-full font-poppins"
        >
          {/* Title */}
          <div className="w-full px-4 py-2 border-b border-white ">
            <p className="text-lead text-white">Report Scores</p>
          </div>
          {/* Overlay Content */}
          <div className="w-full h-full flex flex-col justify-between items-center pt-9">
            {/* Display */}
            <div className="flex flex-col w-full">
              {/* Match Labels */}
              <div className="w-full flex justify-end items-center gap-[28px] px-[22px] ">
                <div className="flex items-center justify-center">
                  <p className="text-label uppercase text-white">winner</p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-label uppercase text-white">score</p>
                </div>
              </div>
              <div className="w-full flex flex-col gap-[2px] justify-center">
                <SlotView player={redPlayer} />
                <SlotView player={whitePlayer} />
              </div>
            </div>
            {/* Button */}
            <div className="flex justify-center items-center">
              <EditorButton text={"submit scores"} />
            </div>
            {/* Reset Button */}
            <div className="absolute bottom-4 right-4">
              <EditorButton text={"reset bracket"} variant="no-outline" />
            </div>
          </div>
          <Dialog.Close className="absolute top-4 right-4">
            <X size={"1.5rem"} color="#717171" className="hover:bg-shade2_30 rounded-full"/>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default BracketMatch;
