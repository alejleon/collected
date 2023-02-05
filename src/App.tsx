import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import LoadingScreen from './features/app/components/LoadingScreen';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={[styles.container]}>
        <StatusBar
          style="dark"
          animated={true}
          translucent={true}
          // backgroundColor="#29292988"
        />
        <LoadingScreen />
        <StackNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
