import React from 'react';
import { View, ViewStyle } from 'react-native';

const Divider = ({ color, style }: DividerProps) => {
  return (
    <View
      style={{ borderBottomColor: color, borderBottomWidth: 1, ...style }}
    />
  );
};

type DividerProps = {
  color?: string;
  style?: ViewStyle | ViewStyle[];
};

export default Divider;
