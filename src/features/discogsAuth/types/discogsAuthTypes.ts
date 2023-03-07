export type DiscogsAuthState = {
  userIsAuthenticated: boolean;
  oauthToken: string;
  oauthTokenSecret: string;
  oauthVerifier: string;
  toggleUserIsAuthenticated: () => void;
  setOauthToken: (token: string) => void;
  setOauthTokenSecret: (secret: string) => void;
  setOauthVerifier: (verifier: string) => void;
};

export type AuthResponseParams = {
  oauth_token: string;
  oauth_token_secret: string;
};
