import create from 'zustand';
import { persist } from 'zustand/middleware';
import createAppSlice from '../features/appState/appState';
import { AppState } from '../features/appState/types/appStateTypes';
// import AsyncStorage from '@react-native-community/async-storage';

export const useBoundStore = create<AppState>()(
  persist(
    (...a) => ({
      ...createAppSlice(...a),
    }),
    {
      name: 'appState',
      // storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        isDarkTheme: state.isDarkTheme,
      }),
    }
  )
);

// TODO: Add persistence, but only to the appState slice
