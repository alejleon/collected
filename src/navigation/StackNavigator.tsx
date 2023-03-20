import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import TempScreen from '../features/app/screens/TempScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="MainHome" screenOptions={{}}>
      <Stack.Screen
        name="MainHome"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Settings" component={TempScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
