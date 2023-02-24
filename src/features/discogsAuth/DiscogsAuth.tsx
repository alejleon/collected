import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { globalStyles } from '../../styles';

const { spacing, palette } = globalStyles;

const DiscogsAuth = () => {
  const { colors, textVariants } = useTheme();

  return (
    <>
      <View style={{ ...styles.container }}>
        <Text>Hi there</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: spacing.STANDARD_EDGE_PCNT,
    height: '50%',
    borderColor: palette.YELLOW,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.XXXL,
  },
});

export default DiscogsAuth;
