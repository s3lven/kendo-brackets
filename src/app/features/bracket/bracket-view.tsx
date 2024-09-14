import BracketRoundsList from "./components/bracket-rounds-list";
import BracketStructure from "./bracket-structure";

const BracketView = () => {

  console.log("BracketView rendered")

  return (
    <div className="w-full h-full space-y-4 pr-5 overflow-y-scroll no-scrollbar pb-20">
      {/* Round Titles */}
      <BracketRoundsList />

      {/* Bracket */}
      <BracketStructure />
    </div>
  );
};

export default BracketView;
