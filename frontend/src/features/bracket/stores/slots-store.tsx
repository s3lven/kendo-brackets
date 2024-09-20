import { Player, Slot } from "@/types/bracket_t";
import { arrayMove } from "@dnd-kit/sortable";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import _ from "lodash";

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
      player: {
        name: "Team Haha",
        id: 0,
      },
      sequence: 1,
      id: 1,
    },
    {
      player: {
        name: "Team Hehe",
        id: 0,
      },
      sequence: 2,
      id: 2,
    },

    {
      player: {
        name: "Team HooHoo",
        id: 0,
      },
      sequence: 3,
      id: 3,
    },

    {
      player: {
        name: "Team HiiHii",
        id: 0,
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
      set((state) => {
        state.slots.length < 32 &&
          (state.slots = [
            ...state.slots,
            {
              player: {
                name: `Team ${state.slots.length + 1}`,
                id: 0,
              },
              sequence: state.slots.length + 1,
              id: state.slots.length + 1,
            },
          ]);
      });
    },
    removeSlot: (id: number | string) => {
      set((state) => {
        state.slots = state.slots
          .filter((slot) => slot.id !== id)
          .map((slot, index) => ({ ...slot, sequence: index + 1 }));
        // console.log("removed slot:", id);
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
    shuffleSlots: () => {
      set((state) => {
        const dirtySlots = [...state.slots];
        let players: Player[] = [];
        dirtySlots.map((slot) => {
          players.push(slot.player);
        });
        players = _.shuffle(players);
        dirtySlots.map((slot, index) => {
          slot.player = players[index];
        });
        console.log(dirtySlots);
        state.slots = dirtySlots;
      });
    },
    setSlots: (slots: Slot[]) => {
      set((state) => {
        state.slots = slots;
      });
    },
    updatePlayerName: (id, name) =>
      set((state) => ({
        slots: state.slots.map((slot) =>
          slot.id === id ? { ...slot, player: { ...slot.player, name } } : slot
        ),
      })),
  }))
);
