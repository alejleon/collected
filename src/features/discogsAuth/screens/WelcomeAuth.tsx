import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import useTheme from '../../../hooks/useTheme';
import { globalStyles } from '../../../styles';

const { spacing } = globalStyles;

const WelcomeAuth = () => {
  const { colors, textVariants } = useTheme();

  return (
    <>
      <View
        style={{
          ...styles.container,
          backgroundColor: colors.card,
        }}
      >
        <View
          style={{ backgroundColor: colors.banner, height: 100, width: 200 }}
        >
          <Text>some sort of animation</Text>
        </View>
        <Text
          style={{
            ...textVariants.body,
            color: colors.primaryText,
            textAlign: 'center',
          }}
        >
          To get started, connect with your Discogs account!
        </Text>
        <Pressable
          style={{
            borderColor: 'blue',
            borderWidth: 2,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 50,
            marginTop: spacing.XXXL,
            paddingHorizontal: spacing.STANDARD_EDGE,
            backgroundColor: colors.secondary,
          }}
        >
          <Text style={{ ...textVariants.button }}>Connect with Discogs</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
    height: '50%',
    width: spacing.STANDARD_EDGE_PCNT,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});

export default WelcomeAuth;
