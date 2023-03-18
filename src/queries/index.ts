import { AccessTokenData } from '../features/discogsAuth/types/discogsAuthTypes';
import qs from 'query-string';
import { getAccessTokenHeaders } from '../features/discogsAuth/utils';
import oauthConfig from '../features/discogsAuth/oauthConfig';

export const getIdentity = async ({
  oauthAccessToken,
  oauthAccessTokenSecret,
  oauthVerifier,
}: AccessTokenData) => {
  try {
    const requestHeaders = getAccessTokenHeaders({
      oauthToken: oauthAccessToken,
      oauthTokenSecret: oauthAccessTokenSecret,
      oauthVerifier: oauthVerifier,
    });

    console.log('oauthRToken:', oauthAccessToken);

    console.log('HEADERS', requestHeaders, '\n \n');

    const response = await fetch('https://api.discogs.com/oauth/identity', {
      method: 'GET',
      // headers: headers,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        Authorization: requestHeaders,
        'User-Agent': 'CollectedApp/1.0',
      },
    });

    const text = await response.text();
    console.log('RAW RESPONSE', JSON.parse(text));

    const params = qs.parse(text);
    console.log('IDENTITY RESPONSE', params);

    return {
      username: params.username as string,
    };
  } catch (e) {
    console.log('There was an error fetching identity', e);
  }
};
