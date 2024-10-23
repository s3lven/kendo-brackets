import { BracketType, BracketWithTournament } from "@/types/bracket_t";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { useMatchesStore } from "./matches-store";
import { useChangeTrackerStore } from "./change-tracker-store";

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
  setBracket: (bracket: BracketWithTournament) => void;
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
        Object.entries(bracket).forEach(([key, value]) => {
          if (state[key] !== value) {
            state[key] = value;
          }
        });
      });
    },
    runBracket: () => {
      set((state) => {
        state.status = "In Progress";
        useChangeTrackerStore.getState().addChange({
          store: "bracket",
          field: "status",
          value: "In Progress",
        });
      });
    },
    resetBracket: () => {
      set((state) => {
        state.status = "Editing";
        state.progress = 0;
        useChangeTrackerStore.getState().addChange({
          store: "bracket",
          field: "status",
          value: "Editing",
        });
        useChangeTrackerStore.getState().addChange({
          store: "bracket",
          field: "progress",
          value: 0,
        });
        useMatchesStore.getState().resetBracket();
      });
    },
    completeBracket: () => {
      set((state) => {
        if (state.progress !== 100) {
          console.log(
            "Error: Bracket is at %d% and is not supposed to be finished",
            state.progress,
          );
          return;
        } else {
          state.status = "Completed";
          useChangeTrackerStore.getState().addChange({
            store: "bracket",
            field: "status",
            value: "Completed",
          });
        }
      });
    },
    openBracket: () => {
      set((state) => {
        state.status = "In Progress";
        useChangeTrackerStore.getState().addChange({
          store: "bracket",
          field: "status",
          value: "In Progress",
        });
      });
    },
    testBracket: () => {
      set((state) => {
        if (state.progress !== 100) {
          state.progress = Math.min(state.progress + 20, 100);
          useChangeTrackerStore.getState().addChange({
            store: "bracket",
            field: "progress",
            value: state.progress,
          });
        }
      });
    },
    setBracketName: (name: string) =>
      set((state) => {
        state.bracketName = name;
        useChangeTrackerStore.getState().addChange({
          store: "bracket",
          field: "bracketName",
          value: name,
        });
      }),
    setBracketType: (type: BracketType) =>
      set((state) => {
        state.bracketType = type;
        useChangeTrackerStore.getState().addChange({
          store: "bracket",
          field: "bracketType",
          value: type,
        });
      }),
    updateProgress: (progress: number) =>
      set((state) => {
        state.progress = progress;
        useChangeTrackerStore.getState().addChange({
          store: "bracket",
          field: "progress",
          value: progress,
        });
      }),
  })),
);
