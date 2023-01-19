import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, DevSettings } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoadingScreen from './features/loadingScreen/LoadingScreen';
import AppHeader from './components/AppHeader';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigation/TabNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings</Text>
    </View>
  );
}

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
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>

        {/* <LoadingScreen /> */}
        {/* <AppHeader /> */}
        {/* <TabNavigator /> */}
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edd3bb',
    // alignItems: "center",
    // justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 2,
  },
});
