import { StateCreator } from 'zustand';
import { AppState } from './types/appStateTypes';
import { Theme } from './types/appStateTypes';

const createAppSlice: StateCreator<AppState, [], [], AppState> = (set) => ({
  appTheme: Theme.LIGHT,
  setAppTheme: (theme: Theme) => set({ appTheme: theme }),
});

export default createAppSlice;
