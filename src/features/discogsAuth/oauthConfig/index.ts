import { DISCOGS_CONSUMER_KEY, DISCOGS_CONSUMER_SECRET } from '@env';
import * as Linking from 'expo-linking';

const discogsConfig = {
  consumerKey: DISCOGS_CONSUMER_KEY,
  consumerSecret: DISCOGS_CONSUMER_SECRET,
  requestTokenUrl: 'https://api.discogs.com/oauth/request_token',
  authorizeUrl: 'https://discogs.com/oauth/authorize',
  accessTokenUrl: 'https://discogs.com/oauth/access_token',
  appUserAgent: 'CollectedApp/1.0',
  redirectUrl: Linking.createURL('discogs_auth'),
};

export default discogsConfig;
