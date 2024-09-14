import BracketNameInput from "./components/information-panel/bracket-name-input";
import BracketTypeInput from "./components/information-panel/bracket-type-input";
import BracketCodeShow from "./components/information-panel/bracket-code-show";

const InformationPanel = () => {

  console.log("InformationPanel rendered");

  return (
    <div className="w-full h-full flex flex-col gap-2.5 p-4">
      <p className="text-grey text-label uppercase w-fit">
        bracket information
      </p>
      <div className="w-full flex flex-col gap-8 px-2 py-4 bg-shade2_30 shadow rounded-sm">
        <BracketNameInput />
        <BracketTypeInput />
        <BracketCodeShow />
      </div>
    </div>
  );
};

export default InformationPanel;
