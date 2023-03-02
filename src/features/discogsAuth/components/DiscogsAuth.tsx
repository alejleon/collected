import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import useTheme from '../../../hooks/useTheme';
import { globalStyles } from '../../../styles';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import * as Linking from 'expo-linking';
import axios from 'axios';

WebBrowser.maybeCompleteAuthSession();
const { spacing, palette } = globalStyles;

const config = {
  oauth: {
    key: 'you',
    secret: 'wish lol',
    requestTokenUrl: 'https://api.discogs.com/oauth/request_token',
    authorizeUrl: 'https://discogs.com/oauth/authorize',
    accessTokenUrl: 'https://discogs.com/oauth/access_token',
  },
  appUserAgent: 'CollectedApp/1.0',
  storageAppId: '@CollectedApp',
  apiBaseUrl: 'https://api.discogs.com',
};

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

const initialHeaders = getInitialHeaders();

const AppHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded',
  Accept: 'application/vnd.discogs.v2.plaintext+json',
  Authorization: initialHeaders,
  'User-Agent': config.appUserAgent,
};

// console.log('INITIAL HEADERSSSs', getInitialHeaders());

const DiscogsAuth = () => {
  const { colors, textVariants } = useTheme();

  // const doTheThing = () => {
  console.log('startinggg');
  fetch('https://api.discogs.com/oauth/request_token', {
    method: 'POST',
  })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

  // console.log('RESULTS', results);
  // .then((response) => {
  //   console.log('IN THE RESPONSE', response);
  //   return response;
  // })
  // .then((data) => {
  //   console.log('IN THE DATA', data);
  // })
  // .catch((error) => {
  //   console.log('IN THE ERROR', error);
  // });

  // console.log('RESULTSSSSSSSSSS', results);

  // .then((response) => response.json())
  // .then((data) => {
  //   console.log('DATA RESULLTTSS', data);
  // })
  // .catch((error) => {
  //   console.log('ERROR', error);
  // });
  // };

  // const discogsLogin = async () => {
  //   const result = await AuthSession.startAsync({
  //     authUrl: `${requestTokenEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=identity`,
  //   });
  //   console.log('RESULT', result);
  // };

  // const tokenRequest = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   body: `client_id=${clientId}$client_secret=${clientSecret}&grant_type=authorization_code&redirect_uri=${encodeURIComponent(
  //     redirectUri
  //   )}&code=${result.params.code}`,
  // };

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

  console.log('KEYYY', process.env.CONSUMER_SECRET, 'Dev?', __DEV__);

  return (
    <>
      <View style={{ ...styles.container, backgroundColor: colors.card }}>
        <Text style={{ ...textVariants.body, color: colors.primaryText }}>
          Hi there
        </Text>
        <Button title={'Do the thing'} onPress={() => doTheThing()} />
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
  },
  text: {},
});

export default DiscogsAuth;
