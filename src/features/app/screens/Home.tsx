import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import { useBoundStore } from '../../../store';
import useTheme from '../../../hooks/useTheme';

const Home = () => {
  const { isDarkTheme } = useBoundStore((state) => state);

  console.log('isDarkTheme', isDarkTheme);
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <AppHeader />
      <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
        This is the Home tab
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={[styles.colorBox, { backgroundColor: '#121212' }]}>
          <Text style={styles.boxText}>#121212</Text>
        </View>
        <View style={[styles.colorBox, { backgroundColor: '#181818' }]}>
          <Text style={styles.boxText}>#181818</Text>
        </View>
        <View style={[styles.colorBox, { backgroundColor: '#282828' }]}>
          <Text style={styles.boxText}>#282828</Text>
        </View>
      </View>
      {/* <Button onPress={() => toggleAppTheme()} title={'isDarkMode Toggle'} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 2,
  },
  colorBox: {
    height: 60,
    width: 60,
    backgroundColor: '#121212',
    marginLeft: 8,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    color: '#f5f5f5',
  },
});

export default Home;
