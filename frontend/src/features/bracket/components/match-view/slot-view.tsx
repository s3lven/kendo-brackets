import MatchDropdown from "./match-dropdown";
import { Check } from "lucide-react";
import { IpponType, PlayerColorType, Slot } from "@/types/bracket_t";

type SlotProps = {
  player: Slot | null;
  color: PlayerColorType;
  isPending?: boolean;
  handleWinner: (player: Slot | null) => void;
  winner: Slot | null;
  matchId: string;
  scores: IpponType[];
  disabled?: boolean;
};

const SlotView = ({
  player,
  color,
  isPending = false,
  handleWinner,
  winner,
  matchId,
  scores,
  disabled = false,
}: SlotProps) => {
  return (
    <div className="flex h-[70px] w-full items-center">
      <div
        className={`flex h-full w-[28px] items-center justify-center ${
          color === "Red" ? "bg-error rounded-tl" : "rounded-bl bg-white"
        }`}
      >
        <p
          className={`text-label text-center ${
            color === "Red" ? "text-white" : "text-black"
          }`}
        >
          {player?.sequence}
        </p>
      </div>
      <div
        className={`bg-shade2_30 flex h-full w-full items-center justify-between px-2 ${
          color === "Red" ? "rounded-tr" : "rounded-br"
        }`}
      >
        <div className="flex items-center justify-center">
          <p className="text-desc text-white">
            {player ? player?.name : "To be determined"}
          </p>
        </div>
        {!isPending && (
          <div className="flex items-center gap-8">
            <button
              onClick={() => handleWinner(player)}
              className={`hover:bg-neutral8 rounded outline-none disabled:hover:bg-transparent ${
                disabled && winner !== player && "opacity-0"
              }`}
              disabled={disabled}
            >
              <Check
                size={"30px"}
                color={`${winner === player ? "#2ECC71" : "white"}`}
                className="transition-colors ease-in-out"
              />
            </button>
            <div className="flex items-center gap-1">
              <MatchDropdown
                index={0}
                matchId={matchId}
                playerType={color === "Red" ? "player1" : "player2"}
                initialValue={scores[0]}
                disabled={disabled}
              />
              <MatchDropdown
                index={1}
                matchId={matchId}
                playerType={color === "Red" ? "player1" : "player2"}
                initialValue={scores[1]}
                disabled={disabled}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SlotView;
