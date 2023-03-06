import { DISCOGS_CONSUMER_KEY, DISCOGS_CONSUMER_SECRET } from '@env';

const discogsConfig = {
  key: DISCOGS_CONSUMER_KEY,
  secret: DISCOGS_CONSUMER_SECRET,
  requestTokenUrl: 'https://api.discogs.com/oauth/request_token',
  authorizeUrl: 'https://discogs.com/oauth/authorize',
  accessTokenUrl: 'https://discogs.com/oauth/access_token',
  appUserAgent: 'CollectedApp/1.0',
};

export default discogsConfig;
