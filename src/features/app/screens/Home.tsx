import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import { useBoundStore } from '../../../store';
import useTheme from '../../../hooks/useTheme';
import SideMenuModal from '../modals/SideMenuModal';

const Home = () => {
  const { isDarkTheme, toggleAppTheme } = useBoundStore((state) => state);

  console.log('isDarkTheme', isDarkTheme);
  const theme = useTheme();

  // console.log('GLOBALS', GLOBALS.SPACING.STANDARD_EDGE);
  // console.log('theme color', theme.colors.primary, '\n');

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <AppHeader />
      <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
        This is the Home tab
      </Text>
      <Button onPress={() => toggleAppTheme()} title={'isDarkMode Toggle'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 2,
  },
});

export default Home;
