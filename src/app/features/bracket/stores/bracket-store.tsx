import { Bracket, dummyTournamentData } from "@/types/bracket_t";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type BracketState = {
  bracket: Bracket;
};

export type BracketActions = {
  setBracket: (bracket: Bracket) => void;
  fetchBracket: (params: { tournament: string; bracketCode: string }) => void;
};

export type BracketStore = BracketState & BracketActions;

export const useBracketStore = create<BracketStore>()(
  immer((set) => ({
    bracket: {
      bracketName: "",
      bracketType: "Single Elimination",
      status: "Active",
      slots: [],
      bracketCode: "",
    },
    setBracket: (bracket: Bracket) => {
      set((state) => {
        state.bracket = bracket;
      });
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
            state.bracket = bracketData 
        } catch (error) {
          console.log(error);
        }        
      });
    },
  }))
);
