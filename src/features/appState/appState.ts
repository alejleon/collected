import create, { State } from "zustand";

const useAppState = create((set) => ({
  bears: 0,
  increaseBearPopulation: () => set((state ) => ({bears: state.bears + 1})),
  killAllBears: () => set({bears: 0})
}));
