import { StateCreator } from 'zustand';
import { DiscogsAuthState } from '../types/discogsAuthTypes';

const createDiscogsAuthSlice: StateCreator<
  DiscogsAuthState,
  [],
  [],
  DiscogsAuthState
> = (set, get) => ({
  userIsAuthenticated: false,
  oauthRequestToken: '',
  oauthRequestTokenSecret: '',
  oauthVerifier: '',
  oauthAccessToken: '',
  oauthAccessTokenSecret: '',
  toggleUserIsAuthenticated: () =>
    set({ userIsAuthenticated: !get().userIsAuthenticated }),
  setOauthRequestToken: (token: string) => set({ oauthRequestToken: token }),
  setOauthRequestTokenSecret: (secret: string) =>
    set({ oauthRequestTokenSecret: secret }),
  setOauthVerifier: (verifier: string) => set({ oauthVerifier: verifier }),
  setOauthAccessToken: (token: string) => set({ oauthAccessToken: token }),
  setOauthAccessTokenSecret: (secret: string) =>
    set({ oauthAccessTokenSecret: secret }),
});

export default createDiscogsAuthSlice;
