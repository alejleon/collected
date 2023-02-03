import React, { useEffect } from 'react';
import { View, Text, Button, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../components/AppHeader';
import { useBoundStore } from '../../../store';
import { Theme } from '../types/appStateTypes';

const Home = () => {
  const nav = useNavigation();
  const { isDarkTheme, toggleAppTheme } = useBoundStore((state) => state);

  console.log('isDarkTheme', isDarkTheme);

  return (
    <View style={styles.container}>
      <AppHeader />
      <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
        This is the Home tab
      </Text>
      <Button onPress={() => toggleAppTheme()} title={'Light'} />
      {/* <Button onPress={() => setAppTheme(Theme.DARK)} title={'Dark'} /> */}
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
