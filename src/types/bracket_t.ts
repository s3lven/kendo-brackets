type BracketType = "SingleElimination" | "DoubleElimination" | "Round Robin" | "Group Stage"
type StatusType = "Active" | "Upcoming" | "Past"

type Bracket = {
    bracketName: string
    bracketType: BracketType
    tournamentName: string
    status: StatusType

    // seed: Match[]
    // players: Player[]
    // winner: Player
    // bracketCode: string
}

const dummyData: Bracket[] = [
    {
      bracketName: "Adult Kyu 4-6",
      bracketType: "SingleElimination",
      tournamentName: "HSSK Taikai",
      status: "Upcoming",
    },
    {
      bracketName: "Adult Kyu 1-3",
      bracketType: "SingleElimination",
      tournamentName: "HSSK Taikai",
      status: "Active",
    },
    {
      bracketName: "1-2 Dan",
      bracketType: "SingleElimination",
      tournamentName: "HSSK Taikai",
      status: "Upcoming",
    },
    {
      bracketName: "3 Dan and Up",
      bracketType: "SingleElimination",
      tournamentName: "HSSK Taikai",
      status: "Upcoming",
    },
    {
      bracketName: "Womens Kyu",
      bracketType: "SingleElimination",
      tournamentName: "HSSK Taikai",
      status: "Active",
    },
    {
      bracketName: "Womens Dan",
      bracketType: "SingleElimination",
      tournamentName: "HSSK Taikai",
      status: "Upcoming",
    },
    {
      bracketName: "Senior Men",
      bracketType: "SingleElimination",
      tournamentName: "HSSK Taikai",
      status: "Past",
    },
    {
      bracketName: "Seniors Women",
      bracketType: "SingleElimination",
      tournamentName: "HSSK Taikai",
      status: "Past",
    },
    {
      bracketName: "Super Seniors",
      bracketType: "SingleElimination",
      tournamentName: "HSSK Taikai",
      status: "Past",
    },
    {
      bracketName: "Adult Kyu 4-6",
      bracketType: "SingleElimination",
      tournamentName: "HSSK Taikai",
      status: "Active",
    },
    {
      bracketName: "Youth 8-10 Years",
      bracketType: "SingleElimination",
      tournamentName: "HSSK Taikai",
      status: "Past",
    },
    {
      bracketName: "Youth 11-14 Years",
      bracketType: "SingleElimination",
      tournamentName: "HSSK Taikai",
      status: "Past",
    },
    {
      bracketName: "Youth 15-18",
      bracketType: "SingleElimination",
      tournamentName: "HSSK Taikai",
      status: "Past",
    },
  ];

export type {Bracket, StatusType,}
export {dummyData}