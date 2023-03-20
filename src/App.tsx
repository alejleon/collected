import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import LoadingScreen from './features/app/components/LoadingScreen';
import { useBoundStore } from './store';
import { globalStyles } from './styles';
import LinkProcessing from './features/app/components/LinkProcessing';

const { palette } = globalStyles;

export default function App() {
  const { isDarkTheme } = useBoundStore((state) => state);

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar
          style={isDarkTheme ? 'light' : 'dark'}
          animated={true}
          translucent={true}
          backgroundColor={isDarkTheme ? palette.GREY_900 : palette.OFF_WHITE}
        />
        <LoadingScreen />
        <StackNavigator />
        <LinkProcessing />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
