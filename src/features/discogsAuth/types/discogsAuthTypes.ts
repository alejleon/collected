export type DiscogsAuthState = {
  userIsAuthenticated: boolean;
  oauthToken: string;
  oauthTokenSecret: string;
  oauthVerifier: string;
  oauthAccessToken: string;
  oauthAccessTokenSecret: string;
  toggleUserIsAuthenticated: () => void;
  setOauthToken: (token: string) => void;
  setOauthTokenSecret: (secret: string) => void;
  setOauthVerifier: (verifier: string) => void;
  setOauthAccessToken: (token: string) => void;
  setOauthAccessTokenSecret: (secret: string) => void;
};

export type AccessHeadersData = {
  // rename to AccessTokenHeadersData???
  oauthToken: string;
  oauthTokenSecret: string;
  oauthVerifier?: string;
};

export type AccessTokenData = {
  oauthAccessToken: string;
  oauthAccessTokenSecret: string;
};
