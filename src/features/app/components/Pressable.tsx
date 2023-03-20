import React from 'react';
import { Pressable as RNPressable, PressableProps } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const Pressable: React.FC<Props> = ({
  opacityActive = 0.5,
  opacityInactive = 1,
  children,
  ...otherProps
}) => {
  const opacity = useSharedValue(opacityInactive);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const handlePressIn = () => {
    opacity.value = withTiming(opacityActive, { duration: 0 });
  };

  const handlePressOut = () => {
    opacity.value = withTiming(opacityInactive, { duration: 35 });
  };

  return (
    <Animated.View style={animatedStyle}>
      <RNPressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        {...otherProps}
      >
        {children}
      </RNPressable>
    </Animated.View>
  );
};

interface Props extends PressableProps {
  opacityActive?: number;
  opacityInactive?: number;
}

export default Pressable;
