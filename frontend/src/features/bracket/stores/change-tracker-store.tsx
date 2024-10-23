import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type Change = {
  store: "tournament" | "matches" | "bracket" | "slots";
  field: string;
  value: any;
  timestamp: number;
};

type ChangeState = {
  changes: Change[];
};

type ChangeActions = {
  addChange: (change: Omit<Change, "timestamp">) => void;
  clearChanges: () => void;
  getPendingChanges: () => Change[];
};

type ChangeStore = ChangeState & ChangeActions;

export const useChangeTrackerStore = create<ChangeStore>()(
  immer((set, get) => ({
    changes: [],
    addChange: (change) =>
      set((state) => {
        // Check if the field exists first. if so, replace. if not, add
        const indexOfExistingField = state.changes.findIndex(existingChange => existingChange.field === change.field)
        if (indexOfExistingField !== -1) {
          state.changes[indexOfExistingField] = { ...change, timestamp: Date.now() }
        } else {
          state.changes.push({ ...change, timestamp: Date.now() });
        }
      }),
    clearChanges: () => set({ changes: [] }),
    getPendingChanges: () => get().changes,
  })),
);
