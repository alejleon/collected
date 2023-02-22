import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import { useBoundStore } from '../../../store';
import useTheme from '../../../hooks/useTheme';
import { globalStyles } from '../../../styles';
import Pressable from '../components/Pressable';

const { spacing, typography } = globalStyles;

const Home = () => {
  const { isDarkTheme } = useBoundStore((state) => state);

  console.log('isDarkTheme', isDarkTheme);
  const { colors } = useTheme();

  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <AppHeader />
      <View style={styles.content}>
        <View style={styles.connectContainer}>
          <View
            style={{
              backgroundColor: colors.card,
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
              borderColor: colors.secondary,
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
          <Text
            style={{
              marginTop: 40,
              marginHorizontal: 40,
              color: colors.primaryText,
              fontFamily: typography.ROBOTO_400,
            }}
          >
            To get started, connect with your Discogs account!
          </Text>
          <Text
            style={{
              marginBottom: 40,
              marginHorizontal: 40,
              color: colors.primaryText,
              fontFamily: typography.ROBOTO_400,
            }}
          >
            Continue without connecting
          </Text>
        </View>
      </View>
      <Pressable style={{ height: 100, width: 100, backgroundColor: 'red' }}>
        <Text>hi there. tee hee hee</Text>
      </Pressable>
      {/* <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
        This is the Home tab
      </Text> */}
      {/* ////////////// */}
      {/*
        <View style={[styles.colorBox, { backgroundColor: palette.GREY_100 }]}>
          <Text style={styles.boxText}>1</Text>
        </View>
        <View style={[styles.colorBox, { backgroundColor: palette.GREY_300 }]}>
          <Text style={styles.boxText}>2</Text>
        </View>
        <View style={[styles.colorBox, { backgroundColor: palette.GREY_500 }]}>
          <Text style={styles.boxText}>3</Text>
        </View>
        <View style={[styles.colorBox, { backgroundColor: palette.GREY_700 }]}>
          <Text style={styles.boxText}>4</Text>
        </View>
        <View style={[styles.colorBox, { backgroundColor: palette.GREY_800 }]}>
          <Text style={styles.boxText}>5</Text>
        </View>
        <View style={[styles.colorBox, { backgroundColor: palette.GREY_900 }]}>
          <Text style={styles.boxText}>6</Text>
        </View>
       */}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  connectContainer: {
    height: 400,
    width: 350,
    marginBottom: 72,
  },
  colorBox: {
    height: 60,
    width: 65,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    color: '#f5f5f5',
  },
});

export default Home;
