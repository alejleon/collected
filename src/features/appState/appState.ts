import create from 'zustand';
import { AppState } from './types/appStateTypes';
import { Theme } from './types/appStateTypes';

// const createAppSlice = create<AppState>((set) => ({
//   appTheme: Theme.LIGHT,
//   setAppTheme: (theme: Theme) => set({ appTheme: theme }),
// }));

export const createAppSlice = (set) => ({
  appTheme: Theme.LIGHT,
  setAppTheme: (theme: Theme) => set({ appTheme: theme }),
});

export default createAppSlice;
