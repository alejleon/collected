import { StateCreator } from 'zustand';
import { DiscogsAuthState } from '../types/discogsAuthTypes';

const createDiscogsAuthSlice: StateCreator<
  DiscogsAuthState,
  [],
  [],
  DiscogsAuthState
> = (set, get) => ({
  userIsAuthenticated: false,
  oauthToken: '',
  oauthTokenSecret: '',
  oauthVerifier: '',
  oauthAccessToken: '',
  oauthAccessTokenSecret: '',
  toggleUserIsAuthenticated: () =>
    set({ userIsAuthenticated: !get().userIsAuthenticated }),
  setOauthToken: (token: string) => set({ oauthToken: token }),
  setOauthTokenSecret: (secret: string) => set({ oauthTokenSecret: secret }),
  setOauthVerifier: (verifier: string) => set({ oauthVerifier: verifier }),
  setOauthAccessToken: (token: string) => set({ oauthAccessToken: token }),
  setOauthAccessTokenSecret: (secret: string) =>
    set({ oauthAccessTokenSecret: secret }),
});

export default createDiscogsAuthSlice;
