import BracketSlot from "./bracket-slot";
import * as Dialog from "@radix-ui/react-dialog";
import SlotView from "../match-view/slot-view";
import EditorButton from "@/components/ui/editor-button";
import { X } from "lucide-react";
import { Match, Slot } from "@/types/bracket_t";
import { useState } from "react";
import { useBracketStatus } from "../../stores/bracket-view-store";
import { useMatchesStore } from "../../stores/matches-store";
import { useShallow } from "zustand/react/shallow";

type BracketMatchProps = {
  match: Match;
};

const BracketMatch = ({ match }: BracketMatchProps) => {
  const redPlayer = match.player1;
  const whitePlayer = match.player2;

  const bracketStatus = useBracketStatus()

  const [winner, setWinner] = useState<Slot | null>(null);
  const handleWinner = (player: Slot | null) => {
    if (player === redPlayer) {
      setWinner(redPlayer);
    } else if (player === whitePlayer) {
      setWinner(whitePlayer);
    }
  };

  const { submitScore, updateTournament } = useMatchesStore(useShallow((state) => ({submitScore: state.submitScore, updateTournament: state.updateTournament})))
  const handleSubmitScore = () => {
    console.log("Submitting score")
    submitScore(match.id!, winner)
    updateTournament()
  }

  // const {redScore, whiteScore} = useMatchesStore(useShallow((state) => ({redScore: state.redScore, whiteScore: state.whiteScore})))
  // console.log(`Red Score: ${redScore}, White Score: ${whiteScore}`)

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
          <Dialog.Title asChild>
            {/* Title */}
            <div className="w-full px-4 py-2 border-b border-white ">
              <p className="text-lead text-white">Report Scores</p>
            </div>
          </Dialog.Title>
          {/* Overlay Content */}
          <div
            className={`w-full h-full flex flex-col items-center ${
              bracketStatus === "In Progress" && redPlayer && whitePlayer
                ? "pt-9 justify-between"
                : "justify-center"
            }`}
          >
            {bracketStatus === "In Progress" && redPlayer && whitePlayer ? (
              <>
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
                    <SlotView
                      player={redPlayer}
                      color={"Red"}
                      handleWinner={handleWinner}
                      winner={winner}
                    />
                    <SlotView
                      player={whitePlayer}
                      color={"White"}
                      handleWinner={handleWinner}
                      winner={winner}
                    />
                  </div>
                </div>
                {/* Button */}
                <div className="flex justify-center items-center">
                  <EditorButton text={"submit scores"} onClickHandler={handleSubmitScore}/>
                </div>
                {/* Reset Button */}
                <div className="absolute bottom-4 right-4">
                  <EditorButton text={"reset bracket"} variant="no-outline" />
                </div>
              </>
            ) : (
              <>
                {/* Display */}
                <div className="flex flex-col w-full">
                  <div className="w-full flex flex-col gap-[2px] justify-center">
                    <SlotView
                      player={redPlayer}
                      color={"Red"}
                      isPending
                      handleWinner={handleWinner}
                      winner={winner}
                    />
                    <SlotView
                      player={whitePlayer}
                      color={"White"}
                      isPending
                      handleWinner={handleWinner}
                      winner={winner}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
          <Dialog.Close className="absolute top-4 right-4">
            <X
              size={"1.5rem"}
              color="#717171"
              className="hover:bg-shade2_30 rounded-full"
            />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default BracketMatch;
