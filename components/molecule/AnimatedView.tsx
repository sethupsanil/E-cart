import React, { useState } from "react";
import { Animated, TouchableWithoutFeedback } from "react-native";

const AnimatedView = ({ children, onPress, ...prop }: any) => {
  const [scaleAnim] = useState(new Animated.Value(1));

  const onPressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const onPressHandler = () => {
    if (onPress) onPress();
  };
  return (
    <TouchableWithoutFeedback
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPressHandler}
      {...prop}
    >
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default AnimatedView;
