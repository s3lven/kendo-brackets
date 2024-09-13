import { RoundType } from "@/types/bracket_t";

type BracketRoundTitleProps = {
    roundTitle: RoundType
}

function BracketRoundTitle({roundTitle} : BracketRoundTitleProps) {
  return (
    <div className="w-full h-full max-w-[230px] flex items-center justify-center bg-neutral7">
      <p className="text-white text-label">{roundTitle}</p>
    </div>
  );
}

export default BracketRoundTitle;
