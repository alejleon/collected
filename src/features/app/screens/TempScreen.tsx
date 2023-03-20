import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useTheme from '../../../hooks/useTheme';
import AppHeader from '../components/AppHeader';

const TempScreen = () => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: 'red',
          borderWidth: 1,
          backgroundColor: colors.background,
        },
      ]}
    >
      <AppHeader />
      <Text>TEMP SCREEN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TempScreen;
