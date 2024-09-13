import { Slot } from "@/types/bracket_t";
import { arrayMove } from "@dnd-kit/sortable";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type SlotState = {
  slots: Slot[];
};

export type SlotActions = {
  addSlot: () => void;
  removeSlot: (id: number) => void;
  moveSlot: (activeIndex: number, overIndex: number) => void;
};

export type SlotStore = SlotState & SlotActions;

export const defaultInitState: SlotState = {
  slots: [
    {
      player: {
        name: "Team Haha",
      },
      sequence: 1,
      id: 1,
    },
    {
      player: {
        name: "Team Hehe",
      },
      sequence: 2,
      id: 2,
    },

    {
      player: {
        name: "Team HooHoo",
      },
      sequence: 3,
      id: 3,
    },

    {
      player: {
        name: "Team HiiHii",
      },
      sequence: 4,
      id: 4,
    },
  ],
};

export const useSlotStore = create<SlotStore>()(
  immer((set) => ({
    ...defaultInitState,
    addSlot: () => {
      console.log("added a slot");
    },
    removeSlot: (id: number) => {
      set((state) => {
        state.slots = state.slots
          .filter((slot) => slot.id !== id)
          .map((slot, index) => ({ ...slot, sequence: index + 1 }));
        console.log("removed slot:", id);
      });
    },
    moveSlot: (activeIndex: number, overIndex: number) => {
      set((state) => {
        const updated = arrayMove(state.slots, activeIndex, overIndex).map(
          (slot, index) => ({ ...slot, sequence: index + 1 })
        );
        state.slots = updated;
      });
    },
  }))
);
