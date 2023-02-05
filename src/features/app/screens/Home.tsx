import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import { useBoundStore } from '../../../store';

const Home = () => {
  const { isDarkTheme, toggleAppTheme } = useBoundStore((state) => state);

  console.log('isDarkTheme', isDarkTheme);

  return (
    <View style={styles.container}>
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
