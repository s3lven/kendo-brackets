import { Match } from "@/types/bracket_t";
import {
  Round1ConnectorBot,
  Round1ConnectorTop,
  Round2ConnectorBot,
  Round2ConnectorTop,
  Round3ConnectorBot,
  Round3ConnectorTop,
  Round4ConnectorBot,
  Round4ConnectorTop,
} from "../../assets/round-connectors";
import BracketMatch from "./bracket-match";

type BracketRoundProps = {
  roundMatches: Match[];
  round: number;
};

type ViewPropertiesType = {
  connectorTop: JSX.Element;
  connectorBot: JSX.Element;
  roundPaddingY: string;
  matchCount: number;
  connectorGap: string;
};

const BracketMatchSkeleton = () => {
  return <div className="w-full h-[73px] bg-neutral8 opacity-0" />;
};

const BracketRound = ({ roundMatches, round }: BracketRoundProps) => {
  const matchCount = roundMatches.length;
  const viewProperties: ViewPropertiesType[] = [
    {
      connectorTop: <Round1ConnectorTop />,
      connectorBot: <Round1ConnectorBot />,
      roundPaddingY: "0px",
      matchCount: matchCount,
      connectorGap: "0px",
    },
    {
      connectorTop: <Round2ConnectorTop />,
      connectorBot: <Round2ConnectorBot />,
      roundPaddingY: "36px",
      matchCount: Math.ceil(matchCount / 2),
      connectorGap: "138px",
    },
    {
      connectorTop: <Round3ConnectorTop />,
      connectorBot: <Round3ConnectorBot />,
      roundPaddingY: "108px",
      matchCount: Math.ceil(matchCount / 4),
      connectorGap: "280px",
    },
    {
      connectorTop: <Round4ConnectorTop />,
      connectorBot: <Round4ConnectorBot />,
      roundPaddingY: "246px",
      matchCount: Math.ceil(matchCount / 8),
      connectorGap: "0px",
    },
    {
      connectorTop: <div className="hidden" />,
      connectorBot: <div className="hidden" />,
      roundPaddingY: "492px",
      matchCount: Math.ceil(matchCount / 16),
      connectorGap: "0px",
    },
  ];

  return (
    <div
      className={`w-full max-w-[236px] flex flex-col justify-center 
      py-[${viewProperties[round - 1].roundPaddingY}]
      group
      `}
    >
      {roundMatches.map((match, index) =>
        // if there are any bye matches, render the skeleton instead of the matches
        match.id === "NULL" ? (
          // render hidden skeleton
          <BracketMatchSkeleton key={index} />
        ) : (
          <div key={index} className="flex gap-[7px] pr-[7px]">
            <BracketMatch match={match} />
            {index % 2 == 0
              ? viewProperties[round - 1].connectorTop
              : viewProperties[round - 1].connectorBot}
          </div>
        )
      )}
    </div>
  );
};

export default BracketRound;
