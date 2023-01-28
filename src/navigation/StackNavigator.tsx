import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SideMenu from '../features/appState/screens/SideMenu';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="MainHome" screenOptions={{}}>
      <Stack.Screen
        name="MainHome"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Settings" component={SideMenu} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
