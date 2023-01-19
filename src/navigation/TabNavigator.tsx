import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../features/appState/screens/Home';
import Settings from '../features/appState/screens/Settings';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{ borderColor: 'blue', borderWidth: 2 }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home YAHH', tabBarLabel: 'Home oooof' }}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
