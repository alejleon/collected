import oauthConfig from '../oauthConfig';
import * as Linking from 'expo-linking';
import qs from 'query-string';

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

export const getAuthorizationHeaders = () => {
  const date = new Date();

  return [
    `OAuth oauth_consumer_key="${oauthConfig.consumerKey}"`,
    `oauth_nonce="${getNonce(date)}"`,
    `oauth_signature="${percentEncode(oauthConfig.consumerSecret)}&"`,
    'oauth_signature_method="PLAINTEXT"',
    `oauth_timestamp="${date.getTime()}"`,
    `oauth_callback="${oauthConfig.redirectUrl}"`,
  ].join(', ');
};

export const getRequestToken = async () => {
  try {
    const requestHeaders = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/vnd.discogs.v2.plaintext+json',
      Authorization: getAuthorizationHeaders(),
      'User-Agent': 'CollectedApp/1.0',
    };

    const response = await fetch(
      'https://api.discogs.com/oauth/request_token',
      {
        method: 'GET',
        headers: requestHeaders,
      }
    );

    const text = await response.text();
    const params = qs.parse(text);

    return {
      oauthToken: params.oauth_token as string,
      oauthTokenSecret: params.oauth_token_secret as string,
    };
  } catch (e) {
    console.log('There was an error fetching request token', e);
  }
};

export const getSecureHeaders = (oAuthObject: {
  oauth_token: string;
  oauth_token_secret: string;
}): string => {
  const date = new Date();

  return [
    `OAuth oauth_consumer_key="${oauthConfig.consumerKey}"`,
    `oauth_nonce="${getNonce(date)}"`,
    `oauth_signature="${percentEncode(
      `${oauthConfig.consumerSecret}&${oAuthObject.oauth_token_secret}`
    )}"`,
    'oauth_signature_method="PLAINTEXT"',
    `oauth_timestamp="${date.getTime()}"`,
    `oauth_token="${oAuthObject.oauth_token}"`,
  ].join(', ');
};
