import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createAppSlice from '../features/app/state/appSlice';
import { AppState } from '../features/app/types/appTypes';

export const useBoundStore = create<AppState>()(
  persist(
    (...a) => ({
      ...createAppSlice(...a),
    }),
    {
      name: 'appState',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        isDarkTheme: state.isDarkTheme,
      }),
      onRehydrateStorage: () => {
        return (state, error) => {
          if (error) {
            console.log('Rehydration error', error);
          } else {
            console.log('Hydration complete');
          }
        };
      },
    }
  )
);
