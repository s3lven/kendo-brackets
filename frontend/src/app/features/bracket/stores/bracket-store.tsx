import { Bracket, BracketType, dummyTournamentData } from "@/types/bracket_t";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { useMatchesStore } from "./matches-store";

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

export type BracketStore = Bracket & BracketActions;

export const useBracketStore = create<BracketStore>()(
  immer((set) => ({
    bracketName: "",
    bracketType: "Single Elimination",
    status: "Editing",
    slots: [],
    bracketCode: "",
    progress: 0,

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
          state.bracketName = bracketData.bracketName;
          state.bracketType = bracketData.bracketType;
          state.status = bracketData.status;
          state.slots = bracketData.slots;
          state.bracketCode = bracketData.bracketCode;
          state.progress = bracketData.progress;
        } catch (error) {
          console.log(error);
        }
      });
    },
    runBracket: () => {
      set((state) => {
        state.status = "In Progress";
      });
    },
    resetBracket: () => {
      set((state) => {
        state.status = "Editing";
        state.progress = 0;
        useMatchesStore.getState().resetBracket();
      });
    },
    completeBracket: () => {
      set((state) => {
        if (state.progress !== 100) {
          console.log(
            "Error: Bracket is at %d% and is not supposed to be finished",
            state.progress
          );
          return;
        } else {
          state.status = "Completed";
        }
      });
    },
    openBracket: () => {
      set((state) => {
        state.status = "In Progress";
      });
    },
    testBracket: () => {
      set((state) => {
        if (state.progress !== 100) {
          state.progress = Math.min(state.progress + 20, 100);
        }
      });
    },
    setBracketName: (name: string) =>
      set((state) => {state.bracketName = name}),
    setBracketType: (type: BracketType) =>
      set((state) => {state.bracketType = type}),
    updateProgress: (progress: number) =>
      set((state) => {state.progress = progress}),
  }))
);
