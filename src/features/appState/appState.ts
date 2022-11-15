import create from 'zustand';
import { State } from './types/appStateTypes';

const useAppState = create((set) => ({
  bears: 0,
  increaseBearPopulation: () =>
    set((state: State) => ({ bears: state.bears + 1 })),
  killAllBears: () => set({ bears: 0 }),
}));
