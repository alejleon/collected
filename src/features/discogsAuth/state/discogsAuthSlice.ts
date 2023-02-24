import { StateCreator } from 'zustand';
import { DiscogsAuthState } from '../types/discogsAuthTypes';

const createDiscogsAuthSlice: StateCreator<
  DiscogsAuthState,
  [],
  [],
  DiscogsAuthState
> = (set, get) => ({
  userIsAuthenticated: false,
  toggleUserIsAuthenticated: () =>
    set({ userIsAuthenticated: !get().userIsAuthenticated }),
});

export default createDiscogsAuthSlice;
