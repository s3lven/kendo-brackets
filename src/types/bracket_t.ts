type BracketType =
  | "SingleElimination"
  | "DoubleElimination"
  | "Round Robin"
  | "Group Stage";
type StatusType = "Active" | "Upcoming" | "Past";

type Bracket = {
  bracketName: string;
  bracketType: BracketType;
  status: StatusType;

  // seed: Match[]
  // players: Player[]
  // winner: Player
  // bracketCode: string
};

type Tournament = {
  tournamentName: string;
  brackets: Bracket[];
  status: StatusType
};

const dummyBracketData: Bracket[] = [
  {
    bracketName: "Adult Kyu 4-6",
    bracketType: "SingleElimination",
    status: "Upcoming",
  },
  {
    bracketName: "Adult Kyu 1-3",
    bracketType: "SingleElimination",
    status: "Active",
  },
  {
    bracketName: "1-2 Dan",
    bracketType: "SingleElimination",
    status: "Upcoming",
  },
  {
    bracketName: "3 Dan and Up",
    bracketType: "SingleElimination",
    status: "Upcoming",
  },
  {
    bracketName: "Womens Kyu",
    bracketType: "SingleElimination",
    status: "Active",
  },
  {
    bracketName: "Womens Dan",
    bracketType: "SingleElimination",
    status: "Upcoming",
  },
  {
    bracketName: "Senior Men",
    bracketType: "SingleElimination",
    status: "Past",
  },
  {
    bracketName: "Seniors Women",
    bracketType: "SingleElimination",
    status: "Past",
  },
  {
    bracketName: "Super Seniors",
    bracketType: "SingleElimination",
    status: "Past",
  },
  {
    bracketName: "Adult Kyu 4-6",
    bracketType: "SingleElimination",
    status: "Active",
  },
  {
    bracketName: "Youth 8-10 Years",
    bracketType: "SingleElimination",
    status: "Past",
  },
  {
    bracketName: "Youth 11-14 Years",
    bracketType: "SingleElimination",
    status: "Past",
  },
  {
    bracketName: "Youth 15-18",
    bracketType: "SingleElimination",
    status: "Past",
  },
];

const dummyTournamentData: Tournament[] = [
  {
    tournamentName: "HSSK Taikai",
    brackets: dummyBracketData,
    status: "Active",
  },
  {
    tournamentName: "Sacramento Taikai",
    brackets: dummyBracketData,
    status: "Past",
  },
  {
    tournamentName: "San Jose",
    brackets: dummyBracketData,
    status: "Past",
  },
  {
    tournamentName: "NCKF Championships",
    brackets: dummyBracketData,
    status: "Upcoming",
  },
];

export type { Bracket, StatusType, Tournament };
export { dummyTournamentData };
