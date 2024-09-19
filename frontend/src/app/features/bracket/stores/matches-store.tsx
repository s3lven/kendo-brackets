import { IpponType, Match, Slot } from "@/types/bracket_t";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type MatchesState = {
  rounds: Match[][];
  redScore: IpponType[];
  whiteScore: IpponType[];
};

export type MatchesActions = {
  setTournament: (rounds: Match[][]) => void;
  setScore: (player: string, index: number, value: IpponType) => void;
  submitScore: (matchid: string, player: Slot | null) => void;
  updateTournament: () => void;
  resetMatch: (matchId: string) => void
};

export type MatchesStore = MatchesState & MatchesActions;

export const useMatchesStore = create<MatchesStore>()(
  immer((set) => ({
    rounds: [],
    redScore: [],
    whiteScore: [],

    setScore: (player, index, value) =>
      set((state) => {
        if (player === "Red") {
          state.redScore[index] = value;
        } else if (player === "White") state.whiteScore[index] = value;
      }),

    submitScore: (matchId, player) =>
      set((state) => {
        for (
          let roundIndex = 0;
          roundIndex < state.rounds.length;
          roundIndex++
        ) {
          const matchIndex = state.rounds[roundIndex].findIndex(
            (match) => match.id === matchId
          );
          if (matchIndex !== -1) {
            const match = state.rounds[roundIndex][matchIndex];
            const redScore = state.redScore[matchIndex];
            const whiteScore = state.whiteScore[matchIndex];

            // Update scores
            match.player1Score = redScore ? [redScore] : [];
            match.player2Score = whiteScore ? [whiteScore] : [];
            match.winner = player;

            // Clear the temporary scores
            state.redScore[matchIndex] = "";
            state.whiteScore[matchIndex] = "";

            // const nextRoundMatchIndex = Math.floor(matchIndex / 2);
            // console.log(
            //   `${match.winner!.player.name} next match is in round ${roundIndex + 1} match ${nextRoundMatchIndex}`
            // );

            // const nextMatch = state.rounds[roundIndex + 1]?.[nextRoundMatchIndex];
            // console.log(roundIndex)
            // console.log("nextMatch",nextMatch)
            // if (nextMatch) {
            //   if (matchIndex % 2 === 0) {
            //     nextMatch.player1 = player;
            //   } else {
            //     nextMatch.player2 = player;
            //   }
            // }

            break; // Exit the loop once we've found and updated the match
          }
        }
      }),

    updateTournament: () => {
      set((state) => {
        state.rounds.forEach((round, roundIndex) =>
          round.forEach((match, matchIndex) => {
            const nextRoundMatchIndex = Math.floor(matchIndex / 2);
            const nextMatch = state.rounds[roundIndex + 1]?.[nextRoundMatchIndex];
            if (match.winner !== null) {
              console.log(
                `${match.winner!.player.name} next match is in round ${
                  roundIndex + 1
                } match ${nextRoundMatchIndex}`
              );
              console.log("nextMatch", nextMatch);
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
    },

    setTournament: (rounds) => set({ rounds }),

    resetMatch: (matchId) =>
      set((state) => {
        let resetRoundIndex = -1;
        let resetMatchIndex = -1;

        // Find the match to reset
        for (let roundIndex = 0; roundIndex < state.rounds.length; roundIndex++) {
          const matchIndex = state.rounds[roundIndex].findIndex(
            (match) => match.id === matchId
          );
          if (matchIndex !== -1) {
            resetRoundIndex = roundIndex;
            resetMatchIndex = matchIndex;
            break;
          }
        }

        if (resetRoundIndex !== -1 && resetMatchIndex !== -1) {
          const match = state.rounds[resetRoundIndex][resetMatchIndex];

          // Reset the match
          match.player1Score = [];
          match.player2Score = [];
          match.winner = null;

          // Reset temporary scores
          state.redScore[resetMatchIndex] = "";
          state.whiteScore[resetMatchIndex] = "";

          // Reset subsequent rounds
          for (let roundIndex = resetRoundIndex + 1; roundIndex < state.rounds.length; roundIndex++) {
            const nextRoundMatchIndex = Math.floor(resetMatchIndex / 2);
            const nextMatch = state.rounds[roundIndex][nextRoundMatchIndex];

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
        }
      }),
  }))
);
