import React from 'react';
import { Pressable as RNPressable, PressableProps } from 'react-native';

const Pressable = (props: PressableProps) => {
  console.log('Pressable props: ', props);

  return <RNPressable {...props} />;
};

export default Pressable;
