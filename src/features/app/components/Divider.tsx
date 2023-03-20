import React from 'react';
import { View, ViewStyle } from 'react-native';
import palette from '../../../styles/palette';

const Divider = ({
  color = palette.GREY_500,
  widthPercentage = '90%',
  style,
}: DividerProps) => {
  return (
    <View
      style={{
        width: widthPercentage,
        borderBottomColor: color,
        borderBottomWidth: 1,
        alignSelf: 'center',
        ...style,
      }}
    />
  );
};

type DividerProps = {
  color?: string;
  widthPercentage?: string;
  style?: ViewStyle | ViewStyle[];
};

export default Divider;
