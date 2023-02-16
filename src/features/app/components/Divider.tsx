import React from 'react';
import { View } from 'react-native';

const Divider = ({ color }: DividerProps) => {
  return <View style={{ borderBottomColor: color, borderBottomWidth: 1 }} />;
};

type DividerProps = {
  color?: string;
};

export default Divider;
