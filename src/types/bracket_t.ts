type BracketType =
  | "SingleElimination"
  | "DoubleElimination"
  | "Round Robin"
  | "Group Stage";
type StatusType = "Active" | "Upcoming" | "Past";
type IpponType = "Men" | "Kote" | "Do" | "Tsuki" | "Hantei" | "Hansoku"

type Player = {
  name: string;
  id: number
}

type Slot = {
  color?: "Red" | "White";
  score?: IpponType;
  isWinner?: boolean
  player: Player
  sequence: number
  id: number
}

type Bracket = {
  bracketName: string;
  bracketType: BracketType;
  status: StatusType;
  slots: Slot[]
  // seed: Match[]
  // players: Player[]
  // winner: Player
  bracketCode: string
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
    bracketCode: "0",
    slots: [
      {
        player: {
          name: "Team 1",
          id: 1,
        },
        sequence: 1,
        id: 1,
      },
      {
        player: {
          name: "Team 2",
          id: 2,
        },
        sequence: 2,
        id: 2,
      },
      {
        player: {
          name: "Team 3",
          id: 3,
        },
        sequence: 3,
        id: 3
      },
      {
        player: {
          name: "Team 4",
          id: 4,
        },
        sequence: 4,
        id:4,
      },
    ],
  },
  {
    bracketName: "Adult Kyu 1-3",
    bracketType: "SingleElimination",
    status: "Active",
    bracketCode: "1",
    slots: [
      {
        player: {
          name: "Team 1",
          id: 1,
        },
        sequence: 1,
        id: 1,
      },
      {
        player: {
          name: "Team 2",
          id: 2,
        },
        sequence: 2,
        id: 2,
      },
      {
        player: {
          name: "Team 3",
          id: 3,
        },
        sequence: 3,
        id: 3
      },
      {
        player: {
          name: "Team 4",
          id: 4,
        },
        sequence: 4,
        id:4,
      },
    ],
  },
  {
    bracketName: "1-2 Dan",
    bracketType: "SingleElimination",
    status: "Upcoming",
    bracketCode: "2",
    slots: [
      {
        player: {
          name: "Team 1",
          id: 1,
        },
        sequence: 1,
        id: 1,
      },
      {
        player: {
          name: "Team 2",
          id: 2,
        },
        sequence: 2,
        id: 2,
      },
      {
        player: {
          name: "Team 3",
          id: 3,
        },
        sequence: 3,
        id: 3
      },
      {
        player: {
          name: "Team 4",
          id: 4,
        },
        sequence: 4,
        id:4,
      },
    ],
  },
  {
    bracketName: "3 Dan and Up",
    bracketType: "SingleElimination",
    status: "Upcoming",
    bracketCode: "3",
    slots: [
      {
        player: {
          name: "Team 1",
          id: 1,
        },
        sequence: 1,
        id: 1,
      },
      {
        player: {
          name: "Team 2",
          id: 2,
        },
        sequence: 2,
        id: 2,
      },
      {
        player: {
          name: "Team 3",
          id: 3,
        },
        sequence: 3,
        id: 3
      },
      {
        player: {
          name: "Team 4",
          id: 4,
        },
        sequence: 4,
        id:4,
      },
    ],
  },
  {
    bracketName: "Womens Kyu",
    bracketType: "SingleElimination",
    status: "Active",
    bracketCode: "4",
    slots: [
      {
        player: {
          name: "Team 1",
          id: 1,
        },
        sequence: 1,
        id: 1,
      },
      {
        player: {
          name: "Team 2",
          id: 2,
        },
        sequence: 2,
        id: 2,
      },
      {
        player: {
          name: "Team 3",
          id: 3,
        },
        sequence: 3,
        id: 3
      },
      {
        player: {
          name: "Team 4",
          id: 4,
        },
        sequence: 4,
        id:4,
      },
    ],
  },
  {
    bracketName: "Womens Dan",
    bracketType: "SingleElimination",
    status: "Upcoming",
    bracketCode: "5",
    slots: [
      {
        player: {
          name: "Team 1",
          id: 1,
        },
        sequence: 1,
        id: 1,
      },
      {
        player: {
          name: "Team 2",
          id: 2,
        },
        sequence: 2,
        id: 2,
      },
      {
        player: {
          name: "Team 3",
          id: 3,
        },
        sequence: 3,
        id: 3
      },
      {
        player: {
          name: "Team 4",
          id: 4,
        },
        sequence: 4,
        id:4,
      },
    ],
  },
  {
    bracketName: "Senior Men",
    bracketType: "SingleElimination",
    status: "Past",
    bracketCode: "6",
    slots: [
      {
        player: {
          name: "Team 1",
          id: 1,
        },
        sequence: 1,
        id: 1,
      },
      {
        player: {
          name: "Team 2",
          id: 2,
        },
        sequence: 2,
        id: 2,
      },
      {
        player: {
          name: "Team 3",
          id: 3,
        },
        sequence: 3,
        id: 3
      },
      {
        player: {
          name: "Team 4",
          id: 4,
        },
        sequence: 4,
        id:4,
      },
    ],
  },
  {
    bracketName: "Seniors Women",
    bracketType: "SingleElimination",
    status: "Past",
    bracketCode: "7",
    slots: [
      {
        player: {
          name: "Team 1",
          id: 1,
        },
        sequence: 1,
        id: 1,
      },
      {
        player: {
          name: "Team 2",
          id: 2,
        },
        sequence: 2,
        id: 2,
      },
      {
        player: {
          name: "Team 3",
          id: 3,
        },
        sequence: 3,
        id: 3
      },
      {
        player: {
          name: "Team 4",
          id: 4,
        },
        sequence: 4,
        id:4,
      },
    ],
  },
  {
    bracketName: "Super Seniors",
    bracketType: "SingleElimination",
    status: "Past",
    bracketCode: "8",
    slots: [
      {
        player: {
          name: "Team 1",
          id: 1,
        },
        sequence: 1,
        id: 1,
      },
      {
        player: {
          name: "Team 2",
          id: 2,
        },
        sequence: 2,
        id: 2,
      },
      {
        player: {
          name: "Team 3",
          id: 3,
        },
        sequence: 3,
        id: 3
      },
      {
        player: {
          name: "Team 4",
          id: 4,
        },
        sequence: 4,
        id:4,
      },
    ],
  },
  {
    bracketName: "Adult Kyu 4-6",
    bracketType: "SingleElimination",
    status: "Active",
    bracketCode: "9",
    slots: [
      {
        player: {
          name: "Team 1",
          id: 1,
        },
        sequence: 1,
        id: 1,
      },
      {
        player: {
          name: "Team 2",
          id: 2,
        },
        sequence: 2,
        id: 2,
      },
      {
        player: {
          name: "Team 3",
          id: 3,
        },
        sequence: 3,
        id: 3
      },
      {
        player: {
          name: "Team 4",
          id: 4,
        },
        sequence: 4,
        id:4,
      },
    ],
  },
  {
    bracketName: "Youth 8-10 Years",
    bracketType: "SingleElimination",
    status: "Past",
    bracketCode: "10",
    slots: [
      {
        player: {
          name: "Team 1",
          id: 1,
        },
        sequence: 1,
        id: 1,
      },
      {
        player: {
          name: "Team 2",
          id: 2,
        },
        sequence: 2,
        id: 2,
      },
      {
        player: {
          name: "Team 3",
          id: 3,
        },
        sequence: 3,
        id: 3
      },
      {
        player: {
          name: "Team 4",
          id: 4,
        },
        sequence: 4,
        id:4,
      },
    ],
  },
  {
    bracketName: "Youth 11-14 Years",
    bracketType: "SingleElimination",
    status: "Past",
    bracketCode: "11",
    slots: [
      {
        player: {
          name: "Team 1",
          id: 1,
        },
        sequence: 1,
        id: 1,
      },
      {
        player: {
          name: "Team 2",
          id: 2,
        },
        sequence: 2,
        id: 2,
      },
      {
        player: {
          name: "Team 3",
          id: 3,
        },
        sequence: 3,
        id: 3
      },
      {
        player: {
          name: "Team 4",
          id: 4,
        },
        sequence: 4,
        id:4,
      },
    ],
  },
  {
    bracketName: "Youth 15-18",
    bracketType: "SingleElimination",
    status: "Past",
    bracketCode: "12",
    slots: [
      {
        player: {
          name: "Team 1",
          id: 1,
        },
        sequence: 1,
        id: 1,
      },
      {
        player: {
          name: "Team 2",
          id: 2,
        },
        sequence: 2,
        id: 2,
      },
      {
        player: {
          name: "Team 3",
          id: 3,
        },
        sequence: 3,
        id: 3
      },
      {
        player: {
          name: "Team 4",
          id: 4,
        },
        sequence: 4,
        id:4,
      },
    ],
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

export type { StatusType, Player, Slot, Bracket, Tournament };
export { dummyTournamentData };
