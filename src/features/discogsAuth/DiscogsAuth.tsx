import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Linking } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { globalStyles } from '../../styles';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import { getRequestToken, getAccessToken } from './utils';
import oauthConfig from './oauthConfig';
import { useBoundStore } from '../../store';

WebBrowser.maybeCompleteAuthSession();
const { spacing, palette } = globalStyles;

const DiscogsAuth = () => {
  const { colors, textVariants } = useTheme();
  const {
    oauthToken,
    oauthTokenSecret,
    oauthVerifier,
    setOauthToken,
    setOauthTokenSecret,
  } = useBoundStore((state) => state);
  const discovery = {
    authorizationEndpoint: oauthConfig.authorizeUrl,
    tokenEndpoint: oauthConfig.accessTokenUrl,
  };

  useEffect(() => {
    const extractTokenData = async () => {
      try {
        const requestData = await getRequestToken();
        if (requestData) {
          setOauthToken(requestData.oauthToken);
          setOauthTokenSecret(requestData.oauthTokenSecret);
        }
      } catch (e) {
        console.log('There was an error fetching request token', e);
      }
    };
    void extractTokenData();
  }, []);

  const [, , promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: oauthConfig.consumerKey,
      scopes: ['identity'],
      redirectUri: oauthConfig.redirectUrl,
      extraParams: {
        oauth_token: oauthToken,
      },
    },
    discovery
  );

  useEffect(() => {
    if (oauthVerifier) {
      getAccessToken();
    }
  }, [oauthVerifier]);

  // console.log('REQUEST', request, '\n', 'RESPONSE', response);

  console.log('VERIFIER', oauthVerifier);

  return (
    <>
      <View style={{ ...styles.container, backgroundColor: colors.card }}>
        <Text style={{ ...textVariants.body, color: colors.primaryText }}>
          Hi there
        </Text>
        <Button title={'Do the thing'} onPress={() => promptAsync()} />
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
