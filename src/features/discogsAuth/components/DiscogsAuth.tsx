import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import useTheme from '../../../hooks/useTheme';
import { globalStyles } from '../../../styles';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import * as Linking from 'expo-linking';
import { DISCOGS_CONSUMER_KEY, DISCOGS_CONSUMER_SECRET } from '@env';

WebBrowser.maybeCompleteAuthSession();
const { spacing, palette } = globalStyles;

const getNonce = (date: Date): string => {
  return Math.round(date.getTime() * Math.random()).toString(16);
};

/////////////////// utils /////////////////
const percentEncode = (str: string): string => {
  return encodeURIComponent(str)
    .replace(/!/g, '%21')
    .replace(/\*/g, '%2A')
    .replace(/'/g, '%27')
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29');
};

const getInitialHeaders = (): string => {
  const date = new Date();

  return [
    `OAuth oauth_consumer_key="${config.oauth.key}"`,
    `oauth_nonce="${getNonce(date)}"`,
    `oauth_signature="${percentEncode(config.oauth.secret)}&"`,
    'oauth_signature_method="PLAINTEXT"',
    `oauth_timestamp="${date.getTime()}"`,
    `oauth_callback="${Linking.createURL('')}"`,
  ].join(', ');
};

/////////////////// configs /////////////////
const config = {
  oauth: {
    key: DISCOGS_CONSUMER_KEY,
    secret: DISCOGS_CONSUMER_SECRET,
    requestTokenUrl: 'https://api.discogs.com/oauth/request_token',
    authorizeUrl: 'https://discogs.com/oauth/authorize',
    accessTokenUrl: 'https://discogs.com/oauth/access_token',
  },
  appUserAgent: 'CollectedApp/1.0',
  storageAppId: '@CollectedApp',
  apiBaseUrl: 'https://api.discogs.com',
};

const appHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded',
  Accept: 'application/vnd.discogs.v2.plaintext+json',
  Authorization: getInitialHeaders(),
  'User-Agent': 'Collected_App/1.0',
};

/////////////////// component /////////////////
const DiscogsAuth = () => {
  const { colors, textVariants } = useTheme();
  console.log('KEYYYYY', DISCOGS_CONSUMER_KEY, DISCOGS_CONSUMER_SECRET);

  const getRequestToken = async () => {
    try {
      const rawResult = await fetch(
        'https://api.discogs.com/oauth/request_token',
        {
          method: 'GET',
          headers: appHeaders,
        }
      );

      const result = JSON.stringify(rawResult);

      console.log('RESULTTT RESULT!', JSON.parse(result));
    } catch (e) {
      console.log('ERROR ERROR', e);
    }
  };

  // console.log('KEYYY', process.env.CONSUMER_SECRET, 'Dev?', __DEV__);

  return (
    <>
      <View style={{ ...styles.container, backgroundColor: colors.card }}>
        <Text style={{ ...textVariants.body, color: colors.primaryText }}>
          Hi there
        </Text>
        <Button title={'Do the thing'} onPress={() => getRequestToken()} />
        {/* <Button title={'Sign in probs ionno'} onPress={() => discogsLogin()} /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: spacing.STANDARD_EDGE_PCNT,
    height: '50%',
    borderColor: palette.YELLOW,
    // borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.XXXL,
    elevation: 5,
  },
  text: {},
});

export default DiscogsAuth;

// const discovery = {
//   authorizationEndpoint: 'https://discogs.com/oauth/authorize',
//   tokenEndpoint: 'https://discogs.com/oauth/access_token',
// };

// const [request, response, promptAsync] = useAuthRequest(
//   {
//     clientId: 'tVHiUdPmpkstWSISYlFO',
//     clientSecret: '',
//     scopes: ['identity'],
//     redirectUri: makeRedirectUri({
//       scheme: 'collected',
//     }),
//     // oauthCallback: 'collected://',
//   },
//   discovery
// );
