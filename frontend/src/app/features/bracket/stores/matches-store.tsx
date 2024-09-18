import { Match } from "@/types/bracket_t"
import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

export type MatchesState = {
    matches: (Match | null)[][][]
}

export type MatchesActions = {
    constructMatches: (matches: number[][][]) => void
    updateMatch: (match: Match) => void
}

export type MatchesStore = MatchesState & MatchesActions

export const useMatchesStore = create<MatchesStore>()(
    immer((set) => ({
        matches: [[[null]]],
        constructMatches: (matches: number[][][]) => {
            set((state) => {

            })
        },
        updateMatch: (match: Match) => {
            set((state) => {
                
            })
        },
    }))
)
