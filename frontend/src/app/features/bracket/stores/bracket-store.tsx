import { Bracket, BracketType, dummyTournamentData } from "@/types/bracket_t";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { useMatchesStore } from "./matches-store";

export type BracketState = {
  bracket: Bracket;
};

export type BracketActions = {
  fetchBracket: (params: { tournament: string; bracketCode: string }) => void;
  runBracket: () => void;
  resetBracket: () => void;
  completeBracket: () => void;
  openBracket: () => void;
  testBracket: () => void;
  setBracketName: (name: string) => void;
  setBracketType: (type: BracketType) => void;
  updateProgress: (progress: number) => void;
};

export type BracketStore = BracketState & BracketActions;

export const useBracketStore = create<BracketStore>()(
  immer((set) => ({
    bracket: {
      bracketName: "",
      bracketType: "Single Elimination",
      status: "Editing",
      slots: [],
      bracketCode: "",
      progress: 0,
    },
    fetchBracket: (params: { tournament: string; bracketCode: string }) => {
      set((state) => {
        try {
          const tournamentData = dummyTournamentData.find((tournament) => {
            const searchTerm = params.tournament.replace("%20", " ");
            return tournament.tournamentName === searchTerm;
          });

          if (tournamentData === undefined) {
            throw new TypeError("Where did the tournamentData go!");
          }

          const bracketData = tournamentData?.brackets.find((bracket) => {
            if (bracket.bracketCode === params.bracketCode) {
              return true;
            } else return false;
          });

          if (bracketData === undefined) {
            throw new TypeError("Where did the bracketData go!");
          }
          state.bracket = bracketData;
        } catch (error) {
          console.log(error);
        }
      });
    },
    runBracket: () => {
      set((state) => {
        state.bracket.status = "In Progress";
      });
    },
    resetBracket: () => {
      set((state) => {
        state.bracket.status = "Editing";
        state.bracket.progress = 0;
      });
    },
    completeBracket: () => {
      set((state) => {
        if (state.bracket.progress !== 100) {
          console.log(
            "Error: Bracket is at %d% and is not supposed to be finished",
            state.bracket.progress
          );
          return;
        } else {
          state.bracket.status = "Completed";
        }
      });
    },
    openBracket: () => {
      set((state) => {
        state.bracket.status = "In Progress";
      });
    },
    testBracket: () => {
      set((state) => {
        if (state.bracket.progress !== 100) {
          state.bracket.progress = Math.min(state.bracket.progress + 20, 100);
        }
      });
    },
    setBracketName: (name: string) => {
      set((state) => {
        state.bracket.bracketName = name;
      });
    },
    setBracketType: (type: BracketType) => {
      set((state) => {
        state.bracket.bracketType = type;
      });
    },
    updateProgress: (progress: number) => {
      set((state) => {
        state.bracket.progress = progress;
      });
    },
  }))
);