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
      <View style={styles.content}>
        <View style={styles.connectContainer}>
          <View
            style={{
              backgroundColor: palette.GREY_200,
              height: '93%',
              width: '93%',
              alignSelf: 'flex-end',
              justifyContent: 'center',
              marginTop: '8%',
              // paddingRight: '8%',
              // paddingLeft: spacing.STANDARD_EDGE,
              // paddingBottom: '8%',
              borderRadius: 8,
              position: 'absolute',
            }}
          />
          <View
            style={{
              borderColor: palette.RED_ORANGE,
              borderWidth: 1,
              // flex: 1,
              width: '93%',
              height: '93%',
              // marginBottom: 16,
              // marginRight: 16,
              position: 'absolute',
              borderRadius: 8,
            }}
          />
          <Text style={{ marginTop: 40, marginHorizontal: 40 }}>
            To get started, connect with your Discogs account!
          </Text>
          <Text style={{ marginBottom: 40, marginHorizontal: 40 }}>
            Continue without connecting
          </Text>
        </View>
      </View>
      {/* <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
        This is the Home tab
      </Text> */}
      {/* ////////////// */}
      {/* <View style={{ flexDirection: 'row' }}>
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
      </View> */}
      {/* ///////////////////////////////////// */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.STANDARD_EDGE,
    // marginTop: spacing.XL,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'red',
    // borderWidth: 2,
  },
  connectContainer: {
    height: 400,
    width: 350,
    // paddingTop: 16,
    // paddingHorizontal: '10%',
    borderColor: 'blue',
    borderWidth: 2,
    // alignItems: 'flex-end',
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
