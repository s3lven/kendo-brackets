import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { BracketStore, useBracketStore } from "./bracket-store";
import { SlotStore, useSlotStore } from "./slots-store";
import { useShallow } from "zustand/react/shallow";

type CombinedStore = BracketStore &
  SlotStore & {
    syncSlotsWithBracket: () => void;
  };

export const useCombinedStore = create<CombinedStore>()(
  immer((set, get) => ({
    ...useBracketStore.getState(),
    ...useSlotStore.getState(),

    syncSlotsWithBracket: () => {
      const slots = get().slots;
      set((state) => {
        state.bracket.slots = slots;
      });
    },

    addSlot: () => {
      useSlotStore.getState().addSlot();
      console.log("Adding slot in CombinedStore")
      get().syncSlotsWithBracket();
    },

    removeSlot: (id: number | string) => {
      useSlotStore.getState().removeSlot(id);
      console.log("Removing slot in CombinedStore")
      get().syncSlotsWithBracket();
    },

    moveSlot: (activeIndex: number, overIndex: number) => {
      useSlotStore.getState().moveSlot(activeIndex, overIndex);
      console.log("Moving slot in CombinedStore")
      get().syncSlotsWithBracket();
    },

    shuffleSlots: () => {
      useSlotStore.getState().shuffleSlots();
      console.log("Shuffling slot in CombinedStore")
      get().syncSlotsWithBracket();
    },

    setSlots: (slots) => {
      useSlotStore.getState().setSlots(slots);
      console.log("Setting slots in CombinedStore")
      get().syncSlotsWithBracket();
    },

    runBracket: () => {
      useBracketStore.getState().runBracket()
      console.log("Running bracket in CombinedStore")
      get().syncSlotsWithBracket()
      console.log(get().bracket.slots)
    },
  }))
);

// Synchronize the stores
useBracketStore.subscribe((state) => {
  useCombinedStore.setState({ bracket: state.bracket });
});

useSlotStore.subscribe((state) => {
  useCombinedStore.setState({ slots: state.slots });
  useCombinedStore.getState().syncSlotsWithBracket();
});

// Custom hooks with useShallow
export const useBracketName = () =>
  useCombinedStore(useShallow((state) => state.bracket.bracketName));
export const useBracketType = () =>
  useCombinedStore(useShallow((state) => state.bracket.bracketType));
export const useBracketStatus = () =>
  useCombinedStore(useShallow((state) => state.bracket.status));
export const useBracketProgress = () =>
  useCombinedStore(useShallow((state) => state.bracket.progress));
export const useSlots = () =>
  useCombinedStore(useShallow((state) => state.slots));
export const useBracketActions = () =>
  useCombinedStore(
    useShallow((state) => ({
      runBracket: state.runBracket,
      resetBracket: state.resetBracket,
      completeBracket: state.completeBracket,
      openBracket: state.openBracket,
      testBracket: state.testBracket,
    }))
  );
