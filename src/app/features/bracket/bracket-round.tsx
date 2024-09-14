import Round1ConnectorBot from "./assets/round-1-connector-bot";
import Round1ConnectorTop from "./assets/round-1-connector-top";
import BracketMatch from "./bracket-match";

type BracketRoundProps = {
  initMatchesMap: () => number[][];
  round: number;
};

const BracketMatchSkeleton = () => {
  return <div className="w-full h-14 bg-neutral8 opacity-0" />;
};

const BracketRound = ({ initMatchesMap }: BracketRoundProps) => {
  const tournamentProperties = {
    round1: {
      connectorTop: <Round1ConnectorTop />,
      connectorBot: <Round1ConnectorBot />,
      paddingY: 0,
      rounds: initMatchesMap(),
    },
  };

  return (
    <div className="w-full h-auto max-w-[236px] flex flex-col items-between ">
      {initMatchesMap().map((match, index) =>
        // if there are any bye matches, render the skeleton instead of the matches
        match.some((match) => match == -1) ? (
          // render hidden skeleton
          <BracketMatchSkeleton key={index} />
        ) : (
          <div key={index} className="flex gap-[7px] pr-[7px]">
            <BracketMatch playerSequences={match} />
            {index % 2 === 0 ? <Round1ConnectorTop /> : <Round1ConnectorBot />}
          </div>
        )
      )}
    </div>
  );
};

export default BracketRound;
