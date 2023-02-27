import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { globalStyles } from '../../styles';

const { spacing, palette } = globalStyles;

const DiscogsAuth = () => {
  const { colors, textVariants } = useTheme();

  return (
    <>
      <View style={{ ...styles.container, backgroundColor: colors.card }}>
        <Text style={{ ...textVariants.body, color: colors.primaryText }}>
          Hi there
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: spacing.STANDARD_EDGE_PCNT,
    height: '50%',
    borderColor: palette.YELLOW,
    // borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.XXXL,
  },
  text: {},
});

export default DiscogsAuth;
