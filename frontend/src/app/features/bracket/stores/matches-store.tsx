import { Match, MatchResult } from "@/types/bracket_t";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type MatchesState = {
  rounds: Match[][];
};

export type MatchesActions = {
//   submitMatchResult: (roundIndex: number, matchIndex: number, result: MatchResult) => void
  setTournament: (rounds: Match[][]) => void;
};

export type MatchesStore = MatchesState & MatchesActions;

export const useMatchesStore = create<MatchesStore>()(
  immer((set) => ({
    rounds: [],

    // submitMatchResult:  (roundIndex, matchIndex, result) =>
    //     set((state) => {
    //       const newRounds = [...state.rounds];
    //       const match = newRounds[roundIndex][matchIndex];
          
    //       const updatedMatch = {
    //         ...match,
    //         scores1: result.scores1.filter(score => score !== ''),
    //         scores2: result.scores2.filter(score => score !== ''),
    //         winner: result.winnerId ? (result.winnerId === match.player1.id ? match.player1 : match.player2) : undefined,
    //       };
    
    //       newRounds[roundIndex][matchIndex] = updatedMatch;
    
    //       // Update next round's match if a winner is declared
    //       if (result.winnerId && roundIndex + 1 < newRounds.length) {
    //         const nextMatchIndex = Math.floor(matchIndex / 2);
    //         const nextMatch = newRounds[roundIndex + 1][nextMatchIndex];
    //         const playerKey = matchIndex % 2 === 0 ? 'player1' : 'player2';
    //         const scoreKey = matchIndex % 2 === 0 ? 'scores1' : 'scores2';
            
    //         newRounds[roundIndex + 1][nextMatchIndex] = {
    //           ...nextMatch,
    //           [playerKey]: updatedMatch.winner!,
    //           [scoreKey]: []
    //         };
    //       }
    
    //       return { rounds: newRounds };
    //     }),

    setTournament: (rounds) => set({ rounds }),
  }))
);
