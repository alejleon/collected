import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, DevSettings } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoadingScreen from './features/loadingScreen/LoadingScreen';
import AppHeader from './components/AppHeader';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './navigation/AppNavigation';

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
        <AppHeader />
        <AppNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#edd3bb',
    // alignItems: "center",
    // justifyContent: 'center',
    // borderColor: 'red',
    // borderWidth: 2,
  },
});
