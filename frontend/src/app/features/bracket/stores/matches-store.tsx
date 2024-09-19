import { IpponType, Match, Slot } from "@/types/bracket_t";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { useBracketStore } from "./bracket-store";

export type MatchesState = {
  rounds: Match[][];
};

export type MatchesActions = {
  setTournament: (rounds: Match[][]) => void;
  setScore: (matchId: string, player: "player1" | "player2", index: number, value: IpponType) => void;
  submitScore: (matchId: string, winner: Slot | null) => void;
  updateTournament: () => void;
  resetMatch: (matchId: string) => void;
  calculateProgress: () => number;
};

export type MatchesStore = MatchesState & MatchesActions;

export const useMatchesStore = create<MatchesStore>()(
  immer((set, get) => ({
    rounds: [],

    setScore: (matchId, player, index, value) =>
      set((state) => {
        const match = state.rounds.flat().find(m => m.id === matchId);
        if (match) {
          if (player === "player1") {
            match.player1Score[index] = value;
          } else {
            match.player2Score[index] = value;
          }
        }
      }),

    submitScore: (matchId, winner) =>
      set((state) => {
        const match = state.rounds.flat().find(m => m.id === matchId);
        if (match) {
          match.winner = winner;
        }
        const progress = get().calculateProgress();
      useBracketStore.getState().updateProgress(progress);
      }),

    updateTournament: () => {
      set((state) => {
        state.rounds.forEach((round, roundIndex) =>
          round.forEach((match, matchIndex) => {
            const nextRoundMatchIndex = Math.floor(matchIndex / 2);
            const nextMatch = state.rounds[roundIndex + 1]?.[nextRoundMatchIndex];
            if (match.winner !== null) {
              if (nextMatch) {
                if (matchIndex % 2 === 0) {
                  nextMatch.player1 = match.winner;
                } else {
                  nextMatch.player2 = match.winner;
                }
              }
            }
          })
        );
      });
      const progress = get().calculateProgress();
      useBracketStore.getState().updateProgress(progress);
    },

    setTournament: (rounds) => set({ rounds }),

    resetMatch: (matchId) =>
      set((state) => {
        const resetRoundIndex = state.rounds.findIndex(round => round.some(m => m.id === matchId));
        if (resetRoundIndex === -1) return;

        let resetMatchIndex = state.rounds[resetRoundIndex].findIndex(m => m.id === matchId);
        const currentMatch = state.rounds[resetRoundIndex][resetMatchIndex];

        // Reset the current match
        currentMatch.player1Score = [];
        currentMatch.player2Score = [];
        currentMatch.winner = null;

        // Reset subsequent rounds
        for (let roundIndex = resetRoundIndex; roundIndex < state.rounds.length; roundIndex++) {
          const nextRoundMatchIndex = Math.floor(resetMatchIndex / 2);
          const nextMatch = state.rounds[roundIndex + 1]?.[nextRoundMatchIndex];

          if (nextMatch) {
            if (resetMatchIndex % 2 === 0) {
              nextMatch.player1 = null;
            } else {
              nextMatch.player2 = null;
            }
            nextMatch.player1Score = [];
            nextMatch.player2Score = [];
            nextMatch.winner = null;
          }

          resetMatchIndex = nextRoundMatchIndex;
        }

        const progress = get().calculateProgress();
        useBracketStore.getState().updateProgress(progress);
      }),

      calculateProgress: () => {
      const state = get();
      let totalMatches = 0;
      let completedMatches = 0;

      state.rounds.flat().forEach(match => {
        // Check if the match is not a bye (both players are present)
        if (match.player1 !== null && match.player2 !== null) {
          totalMatches++;
          if (match.winner !== null) {
            completedMatches++;
          }
        }
      });

      return totalMatches > 0 ? Math.round((completedMatches / totalMatches) * 100) : 0;
    },
  }))
);