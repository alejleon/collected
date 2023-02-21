import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Collection from '../features/app/screens/Collection';
import Tools from '../features/app/screens/Tools';
import useTheme from '../hooks/useTheme';
import { useBoundStore } from '../store';
import { Shadow } from 'react-native-shadow-2';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { colors } = useTheme();
  const { isDarkTheme } = useBoundStore((state) => state);

  return (
    <Tab.Navigator
      initialRouteName="Collection"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          ...styles.tabBarStyle,
          backgroundColor: colors.background,
        },
        tabBarLabelPosition: 'below-icon',
        tabBarBackground: () => {
          return (
            <Shadow
              sides={{ top: true, bottom: false, start: false, end: false }}
              startColor={isDarkTheme ? '#05050520' : '#E4E7EB'}
              endColor={isDarkTheme ? '#17191c' : '#F5F5F5'}
              distance={isDarkTheme ? 15 : 5}
            />
          );
        },
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
      <Tab.Screen name="Tools" component={Tools} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 70,
    paddingBottom: 16,
    borderTopColor: 'transparent',
  },
});

export default TabNavigator;
