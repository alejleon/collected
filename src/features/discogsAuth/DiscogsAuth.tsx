import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { globalStyles } from '../../styles';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import { getRequestToken } from './utils';

WebBrowser.maybeCompleteAuthSession();
const { spacing, palette } = globalStyles;

const DiscogsAuth = () => {
  const [oauthToken, setOauthToken] = useState('');
  const [oauthTokenSecret, setOauthTokenSecret] = useState('');
  const { colors, textVariants } = useTheme();

  useEffect(() => {
    const extractData = async () => {
      try {
        const requestData = await getRequestToken();
        console.log('oauthToken', oauthToken);
        if (requestData) {
          setOauthToken(requestData.oauthToken);
        }
      } catch (e) {
        console.log('There was an error fetching request token', e);
      }
    };
    void extractData();
  }, []);

  return (
    <>
      <View style={{ ...styles.container, backgroundColor: colors.card }}>
        <Text style={{ ...textVariants.body, color: colors.primaryText }}>
          Hi there
        </Text>
        <Button title={'Do the thing'} onPress={() => {}} />
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
