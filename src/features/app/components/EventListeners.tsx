import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';
import { useBoundStore } from '../../../store';

const EventListeners: React.FC = () => {
  const { setOauthVerifier } = useBoundStore((state) => state);

  Linking.addEventListener('url', (event: Linking.EventType) => {
    const { hostname, path, queryParams } = Linking.parse(event.url);

    switch (hostname) {
      case 'discogs_auth':
        if (queryParams && queryParams.oauth_verifier) {
          setOauthVerifier(queryParams.oauth_verifier as string);
        }
        break;
      default:
        console.log("Collected can't handle this link...");
        break;
    }
  });

  return <View />;
};

export default EventListeners;
