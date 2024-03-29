import { StateCreator } from 'zustand';
import { AppState } from '../types/appTypes';

const createAppSlice: StateCreator<AppState, [], [], AppState> = (
  set,
  get
) => ({
  isDarkTheme: false,
  toggleAppTheme: () => set({ isDarkTheme: !get().isDarkTheme }),
});

export default createAppSlice;
