import React from 'react';
import { Pressable as RNPressable, PressableProps } from 'react-native';

const Pressable = ({
  children,
  style,
  // activeOpacity,
  ...otherProps
}: PressableProps) => {
  // const _style: StyleProp<ViewStyle> = useCallback(
  //   ({ pressed }: { pressed: boolean }) => [
  //     { opacity: pressed ? activeOpacity : 1 },
  //     style && style,
  //   ],
  //   [style]
  // );

  return (
    <RNPressable style={style} {...otherProps}>
      {children}
    </RNPressable>
  );
};

export default Pressable;
