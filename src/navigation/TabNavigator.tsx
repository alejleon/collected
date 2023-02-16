import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../features/app/screens/Home';
import Settings from '../features/app/screens/Settings';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home" sceneContainerStyle={{}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home YAHH',
          tabBarLabel: 'Home oooof',
          headerShown: false,
        }}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
