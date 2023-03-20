export type DiscogsAuthState = {
  userIsAuthenticated: boolean;
  oauthRequestToken: string;
  oauthRequestTokenSecret: string;
  oauthVerifier: string;
  oauthAccessToken: string;
  oauthAccessTokenSecret: string;
  toggleUserIsAuthenticated: () => void;
  setOauthRequestToken: (token: string) => void;
  setOauthRequestTokenSecret: (secret: string) => void;
  setOauthVerifier: (verifier: string) => void;
  setOauthAccessToken: (token: string) => void;
  setOauthAccessTokenSecret: (secret: string) => void;
};

export type OauthTokenData = {
  oauthToken: string;
  oauthTokenSecret: string;
  oauthVerifier: string;
};
