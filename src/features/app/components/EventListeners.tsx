import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';

const EventListeners: React.FC = () => {
  const url = Linking.useURL();
  console.log('URL AND STUFFFF', url);

  // console.log('BEFORE THE THING');
  Linking.addEventListener('url', (event: Linking.EventType) => {
    console.log('INSIDE THE EVENT LISTENER');
    console.log('url event JUST TRIGGERED', event, '\n');
  });

  return <View />;
};

export default EventListeners;
