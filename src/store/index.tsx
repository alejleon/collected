import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createAppSlice from '../features/app/state/appSlice';
import { AppState } from '../features/app/types/appTypes';
import { DiscogsAuthState } from '../features/discogsAuth/types/discogsAuthTypes';
import createDiscogsAuthSlice from '../features/discogsAuth/state/discogsAuthSlice';

export const useBoundStore = create<AppState & DiscogsAuthState>()(
  persist(
    (...a) => ({
      ...createAppSlice(...a),
      ...createDiscogsAuthSlice(...a),
    }),
    {
      name: 'appState',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        isDarkTheme: state.isDarkTheme,
        userIsAuthenticated: state.userIsAuthenticated,
      }),
      onRehydrateStorage: () => {
        return (state, error) => {
          if (error) {
            console.log('Rehydration error', error);
          } else {
            console.log('');
            // console.log('Hydration complete');
          }
        };
      },
    }
  )
);
