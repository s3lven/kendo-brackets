type BracketType =
  | "Single Elimination"
  | "Double Elimination"
  | "Round Robin"
  | "Group Stage";
type TournamentStatusType = "Active" | "Upcoming" | "Past";
type BracketStatusType = "Editing" | "In Progress" | "Completed";
type IpponType = "Men" | "Kote" | "Do" | "Tsuki" | "Hantei" | "Hansoku" | "";
type RoundType =
  | `Round ${number}`
  | "Quarter-Finals"
  | "Semi-Finals"
  | "Finals";
type PlayerColorType = "Red" | "White";

type Player = {
  name: string;
  id: number;
};

type Slot = {
  player: Player;
  sequence: number;
  id: number | string;
};

type Match = {
  id: string;
  player1: Slot | null;
  player2: Slot | null;
  player1Score: IpponType[];
  player2Score: IpponType[];
  winner: Slot | null;
};

type Bracket = {
  bracketName: string;
  bracketType: BracketType;
  status: BracketStatusType;
  bracketCode: string;
  progress: number;
  slots: Slot[];
};

type Tournament = {
  id: number;
  tournamentName: string;
  location: string;
  status: TournamentStatusType;
};


export type {
  TournamentStatusType,
  BracketType,
  RoundType,
  PlayerColorType,
  IpponType,
  Player,
  Slot,
  Match,
  Bracket,
  Tournament,
};
