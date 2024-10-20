import { BracketType, BracketWithTournament } from "@/types/bracket_t";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { useMatchesStore } from "./matches-store";

export type BracketActions = {
  // fetchBracket: (params: { tournament: string; bracketCode: string }) => void;
  runBracket: () => void;
  resetBracket: () => void;
  completeBracket: () => void;
  openBracket: () => void;
  testBracket: () => void;
  setBracketName: (name: string) => void;
  setBracketType: (type: BracketType) => void;
  updateProgress: (progress: number) => void;
  setBracket: (bracket: BracketWithTournament) => void
};

export type BracketStore = BracketWithTournament & BracketActions;

export const useBracketStore = create<BracketStore>()(
  immer((set) => ({
    bracketName: "",
    bracketType: "Single Elimination",
    status: "Editing",
    slots: [],
    bracketCode: "",
    progress: 0,
    tournamentName: "",

    setBracket: (bracket) => {
      set((state) => {
        
          state.bracketName = bracket.bracketName
          state.bracketType = bracket.bracketType;
          state.status = bracket.status;
          state.slots = bracket.slots;
          state.bracketCode = bracket.bracketCode;
          state.progress = bracket.progress;
          state.tournamentName = bracket.tournamentName
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
