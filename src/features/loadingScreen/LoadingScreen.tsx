import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Inter_900Black,
  PressStart2P_400Regular,
  RubikMonoOne_400Regular,
} from '@expo-google-fonts/dev';

const LoadingScreen = () => {
  const [fontsLoaded] = useFonts({
    Inter_900Black,
    PressStart2P_400Regular,
    RubikMonoOne_400Regular,
  });

  useEffect(() => {
    loadAppDataAsync();
  }, [fontsLoaded])

  const loadAppDataAsync =; () => {
    console.log('async fonts func');
    if (fontsLoaded) {
      console.log('fonts loaded');
      SplashScreen.hideAsync();
    }
  };

  // if (!appIsReady) {
  //   return null;
  // }

  // return (
  //   <View onLayout={onLayoutRootView}>
  //     <Text>Loading Screen</Text>
  //   </View>
  // );
};
export default LoadingScreen;
