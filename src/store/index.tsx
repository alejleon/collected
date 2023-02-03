import create from 'zustand';
import createAppSlice from '../features/appState/appState';
import { AppState } from '../features/appState/types/appStateTypes';

export const useBoundedStore = create<AppState>()((...a) => ({
  ...createAppSlice(...a),
}));
