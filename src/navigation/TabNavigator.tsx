import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../features/appState/screens/Home';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    // <View>
    //   <Text>Hello there</Text>
    // </View>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
