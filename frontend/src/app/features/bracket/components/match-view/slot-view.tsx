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
};

const SlotView = ({
  player,
  color,
  isPending = false,
  handleWinner,
  winner,
  matchId,
  scores,
}: SlotProps) => {
  return (
    <div className="w-full h-[70px] flex items-center">
      <div
        className={`w-[28px] h-full flex items-center justify-center ${
          color === "Red" ? "bg-error rounded-tl" : "bg-white rounded-bl"
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
        className={`w-full h-full flex justify-between items-center px-2 bg-shade2_30 ${
          color === "Red" ? "rounded-tr" : "rounded-br"
        }`}
      >
        <div className="flex items-center justify-center">
          <p className="text-desc text-white">
            {player ? player?.player.name : "To be determined"}
          </p>
        </div>
        {!isPending && (
          <div className="flex items-center gap-8">
            <button
              onClick={() => handleWinner(player)}
              className="outline-none hover:bg-neutral8 rounded"
            >
              <Check
                size={"30px"}
                color={`${winner === player ? "#2ECC71" : "white"}`}
                className="transition-colors ease-in-out"
              />
            </button>
            <div className="flex items-center gap-1">
              <MatchDropdown
                color={color}
                index={0}
                matchId={matchId}
                playerType={color === "Red" ? "player1" : "player2"}
                initialValue={scores[0]}
              />
              <MatchDropdown
                color={color}
                index={1}
                matchId={matchId}
                playerType={color === "Red" ? "player1" : "player2"}
                initialValue={scores[1]}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SlotView;
