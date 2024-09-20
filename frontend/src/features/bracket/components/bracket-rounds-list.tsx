import { RoundType } from "@/types/bracket_t";
import { useSlots } from "../stores/bracket-view-store";

type BracketRoundTitleProps = {
  roundTitle: RoundType;
};

const BracketRoundTitle = ({ roundTitle }: BracketRoundTitleProps) => {
  return (
    <div className="w-full h-full max-w-[230px] flex items-center justify-center bg-neutral7">
      <p className="text-white text-label uppercase">{roundTitle}</p>
    </div>
  );
};

const BracketRoundsList = () => {
  const slots = useSlots();

  const determineRoundTitles = (numberOfParticipants: number): RoundType[] => {
    const roundTitles: RoundType[] = [];
    const numberOfRounds = Math.ceil(
      Math.log(numberOfParticipants) / Math.log(2)
    );

    if (numberOfRounds == 0) return ["Finals"];

    for (let i = 0; i < numberOfRounds; i++) {
      const roundNumber = i + 1;
      let title: RoundType;

      if (roundNumber === numberOfRounds) {
        title = "Finals";
      } else if (roundNumber === numberOfRounds - 1) {
        title = "Semi-Finals";
      } else if (roundNumber === numberOfRounds - 2) {
        title = "Quarter-Finals";
      } else {
        title = `Round ${roundNumber}`;
      }

      roundTitles.push(title);
    }

    return roundTitles;
  };

  console.log("BracketRoundsList rendered");

  return (
    <div className="w-full max-h-[25px] flex gap-1">
      {determineRoundTitles(slots.length).map((title) => (
        <BracketRoundTitle roundTitle={title} key={title} />
      ))}
    </div>
  );
};

export default BracketRoundsList;
