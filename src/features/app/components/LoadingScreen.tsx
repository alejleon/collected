import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Inter_900Black,
  PressStart2P_400Regular,
  RubikMonoOne_400Regular,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/dev';

const LoadingScreen = () => {
  const [fontsLoaded] = useFonts({
    RubikMonoOne_400Regular,
    Inter_900Black,
    PressStart2P_400Regular,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  SplashScreen.preventAutoHideAsync();

  useEffect(() => {
    if (fontsLoaded) {
      console.log('fonts loaded');
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading screen is active</Text>
      </View>
    );
  }

  return null;
};
export default LoadingScreen;
