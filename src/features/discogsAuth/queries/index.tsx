import { getAppHeaders } from '../utils';
import qs from 'query-string';
import { AccessHeadersData } from '../types/discogsAuthTypes';

export const getRequestToken = async () => {
  try {
    const requestHeaders = getAppHeaders();

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

export const getAccessToken = async (accessHeadersData: AccessHeadersData) => {
  try {
    const requestHeaders = getAppHeaders(accessHeadersData); // need to pass in oauthObject in here

    // console.log('REQUEST HEADERS', requestHeaders);
    const response = await fetch('https://api.discogs.com/oauth/access_token', {
      method: 'POST',
      headers: requestHeaders,
    });

    const text = await response.text();
    const params = qs.parse(text);

    return {
      oauthAccessToken: params.oauth_token as string,
      oauthAccessTokenSecret: params.oauth_token_secret as string,
    };
  } catch (e) {
    console.log('There was an error fetching access token', e);
  }
};

export const getIdentity = async (accessHeadersData: AccessHeadersData) => {
  try {
    const requestHeaders = getAppHeaders(accessHeadersData);

    const response = await fetch('https://api.discogs.com/oauth/identity', {
      method: 'GET',
      headers: requestHeaders,
    });

    const text = await response.text();
    const params = qs.parse(text);

    return {
      username: params.username as string,
    };
  } catch (e) {
    console.log('There was an error fetching identity', e);
  }
};
