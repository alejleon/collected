import { OauthTokenData } from '../features/discogsAuth/types/discogsAuthTypes';
import qs from 'query-string';
import { getAppHeaders } from '../features/discogsAuth/utils';

export const getIdentity = async ({
  oauthToken: oauthAccessToken,
  oauthTokenSecret: oauthAccessTokenSecret,
  oauthVerifier,
}: OauthTokenData) => {
  try {
    const headers = getAppHeaders({
      oauthToken: oauthAccessToken,
      oauthTokenSecret: oauthAccessTokenSecret,
      oauthVerifier: oauthVerifier,
    });

    const response = await fetch('https://api.discogs.com/oauth/identity', {
      method: 'GET',
      headers: headers,
    });

    const text = await response.text();
    const params = qs.parse(text);
    // console.log('IDENTITY RESPONSE', params);

    return {
      username: params.username as string,
    };
  } catch (e) {
    console.log('There was an error fetching identity', e);
  }
};
