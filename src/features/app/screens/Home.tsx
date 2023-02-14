import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import { useBoundStore } from '../../../store';
import useTheme from '../../../hooks/useTheme';
import { globalStyles } from '../../../styles';

const { spacing, typography, palette } = globalStyles;

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
        <View style={[styles.colorBox, { backgroundColor: palette.GREY_100 }]}>
          <Text style={styles.boxText}>100</Text>
        </View>
        <View style={[styles.colorBox, { backgroundColor: palette.GREY_300 }]}>
          <Text style={styles.boxText}>300</Text>
        </View>
        <View style={[styles.colorBox, { backgroundColor: palette.GREY_500 }]}>
          <Text style={styles.boxText}>500</Text>
        </View>
        <View style={[styles.colorBox, { backgroundColor: palette.GREY_700 }]}>
          <Text style={styles.boxText}>700</Text>
        </View>
        <View style={[styles.colorBox, { backgroundColor: palette.GREY_800 }]}>
          <Text style={styles.boxText}>800</Text>
        </View>
        <View style={[styles.colorBox, { backgroundColor: palette.GREY_900 }]}>
          <Text style={styles.boxText}>900</Text>
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
    // borderWidth: 2,
  },
  colorBox: {
    height: 60,
    width: 65,
    backgroundColor: '#121212',
    // marginLeft: 8,
    // marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    color: '#f5f5f5',
  },
});

export default Home;
