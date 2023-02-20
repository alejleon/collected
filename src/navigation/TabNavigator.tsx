import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Collection from '../features/app/screens/Collection';
import Settings from '../features/app/screens/Settings';
import useTheme from '../hooks/useTheme';
import palette from '../styles/palette';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Collection"
      screenOptions={{
        headerShown: false,
        // tabBarActiveBackgroundColor: colors.background,
        // tabBarInactiveBackgroundColor: colors.background,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          backgroundColor: colors.background,
          height: 80,
          paddingBottom: 30,
          // borderColor: 'red',
          // borderWidth: 1,
          // borderTopColor: ,
        },
        tabBarLabelPosition: 'below-icon',
      }}
      sceneContainerStyle={{
        flex: 1,
        // borderColor: 'red',
        // borderWidth: 1,
        // backgroundColor: colors.background,
      }}
    >
      <Tab.Screen
        name="Collection"
        component={Collection}
        options={{
          title: 'Collection',
          tabBarLabel: 'My Collection',
        }}
      />
      <Tab.Screen name="Tools" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
