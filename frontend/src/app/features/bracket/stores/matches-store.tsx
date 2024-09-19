import { IpponType, Match, Slot } from "@/types/bracket_t";
import { match } from "assert";
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

            break; // Exit the loop once we've found and updated the match
          }
        }
      }),

    updateTournament: () => {
      set((state) => {
        const dirtyRounds = [...state.rounds];

        dirtyRounds.forEach((round, roundIndex) => {
          round.forEach((match, matchIndex) => {
            if (match.winner != null && match.submitted == false) {
              console.log("Processing match:", match.id);

              // Check if there's a next round
              if (roundIndex < dirtyRounds.length - 1) {
                const nextRoundMatch = Math.floor(matchIndex / 2);
                const nextRound = dirtyRounds[roundIndex + 1];

                if (nextRound && nextRound[nextRoundMatch]) {
                  if (matchIndex % 2 === 0) {
                    nextRound[nextRoundMatch].player1 = match.winner;
                  } else {
                    nextRound[nextRoundMatch].player2 = match.winner;
                  }
                  console.log(
                    `Set ${
                      matchIndex % 2 === 0 ? "player1" : "player2"
                    } for next round match:`,
                    nextRoundMatch
                  );
                } else {
                  console.log("No next round match found for:", matchIndex);
                }
              } else {
                console.log("Final match result:", match.winner);
              }

              match.submitted = true;
            }
          });
        });

        state.rounds = dirtyRounds;
      });
    },

    setTournament: (rounds) => set({ rounds }),
  }))
);
