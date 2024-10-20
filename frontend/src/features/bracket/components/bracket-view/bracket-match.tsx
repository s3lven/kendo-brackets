import BracketSlot from "./bracket-slot";
import * as Dialog from "@radix-ui/react-dialog";
import SlotView from "../match-view/slot-view";
import EditorButton from "@/components/ui/editor-button";
import { X } from "lucide-react";
import { Match, Slot } from "@/types/bracket_t";
import { useEffect, useState } from "react";
import { useBracketStatus } from "../../stores/bracket-view-store";
import { useMatchesStore } from "../../stores/matches-store";
import { useShallow } from "zustand/react/shallow";

type BracketMatchProps = {
  match: Match;
};

const BracketMatch = ({ match }: BracketMatchProps) => {
  const redPlayer = match.player1;
  const whitePlayer = match.player2;

  const bracketStatus = useBracketStatus();

  const [winner, setWinner] = useState<Slot | null>(null);
  const handleWinner = (player: Slot | null) => {
    if (player === redPlayer) {
      if (winner === redPlayer) {
        setWinner(null);
      } else {
        setWinner(redPlayer);
      }
    }
    if (player === whitePlayer) {
      if (winner === whitePlayer) {
        setWinner(null);
      } else {
        setWinner(whitePlayer);
      }
    }
  };

  const { submitScore, updateMatches, resetMatch } = useMatchesStore(
    useShallow((state) => ({
      submitScore: state.submitScore,
      updateMatches: state.updateTournament,
      resetMatch: state.resetMatch,
    })),
  );
  const handleSubmitScore = () => {
    console.log("Submitting score");
    submitScore(match.id!, winner);
    updateMatches();
  };
  const handleResetMatch = () => {
    console.log("Resetting score");
    resetMatch(match.id!);
    setWinner(null);
  };

  // Subscribe to changes in the match
  const matchFromStore = useMatchesStore(
    useShallow((state) => state.rounds.flat().find((m) => m.id === match.id)),
  );

  useEffect(() => {
    if (matchFromStore) {
      setWinner(matchFromStore.winner);
    }
  }, [matchFromStore]);

  const InProgressMatchView = () => (
    <div
      className={`flex h-full w-full flex-col items-center justify-between pt-9`}
    >
      {/* Display */}
      <div className="flex w-full flex-col">
        {/* Match Labels */}
        <div className="flex w-full items-center justify-end gap-[28px] px-[22px]">
          <div className="flex items-center justify-center">
            <p className="text-label uppercase text-white">winner</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-label uppercase text-white">score</p>
          </div>
        </div>
        <div className="flex w-full flex-col justify-center gap-[2px]">
          <SlotView
            player={redPlayer}
            color={"Red"}
            handleWinner={handleWinner}
            winner={winner}
            matchId={match.id!}
            scores={match.player1Score}
          />
          <SlotView
            player={whitePlayer}
            color={"White"}
            handleWinner={handleWinner}
            winner={winner}
            matchId={match.id!}
            scores={match.player2Score}
          />
        </div>
      </div>
      {/* Button */}
      <Dialog.Close asChild>
        <div className="flex items-center justify-center">
          <EditorButton
            text={"submit scores"}
            onClickHandler={handleSubmitScore}
          />
        </div>
      </Dialog.Close>
      {/* Reset Button */}
      <Dialog.Close asChild>
        <div className="absolute bottom-4 right-4">
          <EditorButton
            text={"reset match"}
            variant="no-outline"
            onClickHandler={handleResetMatch}
          />
        </div>
      </Dialog.Close>
    </div>
  );

  const EditMatchView = () => (
    <div className={`flex h-full w-full flex-col items-center justify-center`}>
      {/* Display */}
      <div className="flex w-full flex-col">
        <div className="flex w-full flex-col justify-center gap-[2px]">
          <SlotView
            player={redPlayer}
            color={"Red"}
            isPending
            handleWinner={handleWinner}
            winner={winner}
            matchId={match.id!}
            scores={match.player1Score}
          />
          <SlotView
            player={whitePlayer}
            color={"White"}
            isPending
            handleWinner={handleWinner}
            winner={winner}
            matchId={match.id!}
            scores={match.player2Score}
          />
        </div>
      </div>
    </div>
  );

  const CompletedView = () => (
    <div className={`flex h-full w-full flex-col items-center justify-center`}>
      {/* Display */}
      <div className="flex w-full flex-col">
        {/* Match Labels */}
        <div className="flex w-full items-center justify-end gap-[36px] px-[25.5px]">
          <div className="flex items-center justify-center">
            <p className="text-label uppercase text-white">winner</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-label uppercase text-white">score</p>
          </div>
        </div>
        <div className="flex w-full flex-col justify-center gap-[2px]">
          <SlotView
            player={redPlayer}
            color={"Red"}
            handleWinner={handleWinner}
            winner={winner}
            matchId={match.id!}
            scores={match.player1Score}
            disabled
          />
          <SlotView
            player={whitePlayer}
            color={"White"}
            handleWinner={handleWinner}
            winner={winner}
            matchId={match.id!}
            scores={match.player2Score}
            disabled
          />
        </div>
      </div>
    </div>
  );

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="hover:outline-primary flex w-full cursor-pointer flex-col justify-center gap-[2px] hover:outline">
          <BracketSlot
            variant="Red"
            name={redPlayer?.name}
            sequence={redPlayer?.sequence}
            isWinner={winner === redPlayer}
            scores={matchFromStore?.player1Score || []}
          />
          <BracketSlot
            variant="White"
            name={whitePlayer?.name}
            sequence={whitePlayer?.sequence}
            isWinner={winner === whitePlayer}
            scores={matchFromStore?.player2Score || []}
          />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-shade2/80 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content
          className="data-[state=open]:animate-contentShow bg-neutral8 font-poppins fixed left-[50%] top-[50%] flex h-full max-h-[425px] w-full max-w-[680px] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-between gap-[10px] p-4 focus:outline-none"
          aria-describedby={undefined}
        >
          <Dialog.Title asChild>
            {/* Title */}
            <div className="w-full border-b border-white px-4 py-2">
              <p className="text-lead text-white">Report Scores</p>
            </div>
          </Dialog.Title>
          {/* Overlay Content */}
          {/* Render based on different scenarios */}
          {/* If we are in progress and both players are present */}
          {bracketStatus === "In Progress" && redPlayer && whitePlayer && (
            <InProgressMatchView />
          )}
          {/* If we are in progress, but the match isnt ready to score because there aren't enough players */}
          {bracketStatus === "In Progress" && (!redPlayer || !whitePlayer) && (
            <EditMatchView />
          )}
          {/* If we are editting the details/participants list, we should not be able to edit match status */}
          {bracketStatus === "Editing" && <EditMatchView />}
          {bracketStatus === "Completed" && <CompletedView />}
          <Dialog.Close className="absolute right-4 top-4">
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
