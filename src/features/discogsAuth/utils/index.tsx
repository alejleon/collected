import oauthConfig from '../oauthConfig';
import { OauthTokenData } from '../types/discogsAuthTypes';

const getNonce = (date: Date): string => {
  return Math.round(date.getTime() * Math.random()).toString(16);
};

const percentEncode = (str: string): string => {
  return encodeURIComponent(str)
    .replace(/!/g, '%21')
    .replace(/\*/g, '%2A')
    .replace(/'/g, '%27')
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29');
};

export const getAuthorizationHeaders = (oauthTokenData?: OauthTokenData) => {
  const date = new Date();

  const mainHeaders = [
    `OAuth oauth_consumer_key="${oauthConfig.consumerKey}"`,
    `oauth_nonce="${getNonce(date)}"`,
    `oauth_signature="${percentEncode(oauthConfig.consumerSecret)}&${
      oauthTokenData ? percentEncode(oauthTokenData.oauthTokenSecret) : ''
    }"`,
    'oauth_signature_method="PLAINTEXT"',
    `oauth_timestamp="${date.getTime()}"`,
    `oauth_callback="${oauthConfig.redirectUrl}"`,
  ].join(', ');

  if (oauthTokenData) {
    const accessTokenParams = [
      `oauth_token="${oauthTokenData?.oauthToken}"`,
      `oauth_verifier="${oauthTokenData?.oauthVerifier}"`,
    ].join(', ');

    return mainHeaders + ', ' + accessTokenParams;
  }
  return mainHeaders;
};

export const getAppHeaders = (oauthTokenData?: OauthTokenData) => {
  const headers = oauthTokenData
    ? getAuthorizationHeaders(oauthTokenData)
    : getAuthorizationHeaders();

  return {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/vnd.discogs.v2.plaintext+json',
    Authorization: headers,
    'User-Agent': 'CollectedApp/1.0',
  };
};
