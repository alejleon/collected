import create from 'zustand';
import { AppState } from './types/appStateTypes';
import { Theme } from './types/appStateTypes';

const AppStore = create((set) => ({
  bears: 0,
  currentTheme: Theme.LIGHT,
  setAppTheme: (theme: Theme) => set({ currentTheme: theme }),
  increaseBearPopulation: () =>
    set((state: AppState) => ({ bears: state.bears + 1 })),
  killAllBears: () => set({ bears: 0 }),
}));

export default AppStore;
