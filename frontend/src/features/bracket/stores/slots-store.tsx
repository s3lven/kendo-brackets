import { Slot } from "@/types/bracket_t";
import { arrayMove } from "@dnd-kit/sortable";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import _ from "lodash";
import { useChangeTrackerStore } from "./change-tracker-store";

export type SlotState = {
  slots: Slot[];
};

export type SlotActions = {
  addSlot: () => void;
  removeSlot: (id: number | string) => void;
  moveSlot: (activeIndex: number, overIndex: number) => void;
  shuffleSlots: () => void;
  setSlots: (slots: Slot[]) => void;
  updatePlayerName: (id: number | string, name: string) => void;
};

export type SlotStore = SlotState & SlotActions;

export const defaultInitState: SlotState = {
  slots: [
    {
      name: "Team Haha",
      sequence: 1,
      id: 1,
    },
    {
      name: "Team Hehe",
      sequence: 2,
      id: 2,
    },

    {
      name: "Team HooHoo",
      sequence: 3,
      id: 3,
    },

    {
      name: "Team HiiHii",
      sequence: 4,
      id: 4,
    },
  ],
};

export const useSlotStore = create<SlotStore>()(
  immer((set) => ({
    ...defaultInitState,
    addSlot: () => {
      set((state) => {
        state.slots.length < 32 &&
          (state.slots = [
            ...state.slots,
            {
              name: `Team ${state.slots.length + 1}`,
              sequence: state.slots.length + 1,
              id: state.slots.length + 1,
            },
          ]);
        useChangeTrackerStore.getState().addChange({
          store: "slots",
          field: "slots",
          value: state.slots,
        });
      });
    },
    removeSlot: (id: number | string) => {
      set((state) => {
        state.slots = state.slots
          .filter((slot) => slot.id !== id)
          .map((slot, index) => ({ ...slot, sequence: index + 1 }));
        // console.log("removed slot:", id);
        useChangeTrackerStore.getState().addChange({
          store: "slots",
          field: "slots",
          value: state.slots,
        });
      });
    },
    moveSlot: (activeIndex: number, overIndex: number) => {
      set((state) => {
        const updated = arrayMove(state.slots, activeIndex, overIndex).map(
          (slot, index) => ({ ...slot, sequence: index + 1 }),
        );
        state.slots = updated;
        useChangeTrackerStore.getState().addChange({
          store: "slots",
          field: "slots",
          value: updated,
        });
      });
    },
    shuffleSlots: () => {
      set((state) => {
        const dirtySlots = [...state.slots];
        let players: string[] = [];
        dirtySlots.map((slot) => {
          players.push(slot.name);
        });
        players = _.shuffle(players);
        dirtySlots.map((slot, index) => {
          slot.name = players[index];
        });
        state.slots = dirtySlots;
        useChangeTrackerStore.getState().addChange({
          store: "slots",
          field: "slots",
          value: dirtySlots,
        });
      });
    },
    setSlots: (slots: Slot[]) => {
      set((state) => {
        state.slots = slots;
      });
    },
    updatePlayerName: (id, name) =>
      set((state) => {
        state.slots = state.slots.map((slot) =>
          slot.id === id ? { ...slot, name: name } : slot,
        );
        useChangeTrackerStore.getState().addChange({
          store: "slots",
          field: "slots",
          value: state.slots
        });
      }),
  })),
);
