import React, { useRef } from "react";
import { Animated, Easing, StyleSheet, TextInput } from "react-native";

const FloatingTextInput = ({
  label = "New Title",
  titleActiveSize = 12,
  titleInActiveSize = 14,
  titleActiveColor = "#444444",
  titleInactiveColor = "#c2c2c2",
}) => {
  const [text, onChangeText] = React.useState("");
  const animatedValue = useRef(new Animated.Value(0));

  const returnAnimatedTitleStyles: any = {
    transform: [
      {
        translateY: animatedValue.current.interpolate({
          inputRange: [0, 1],
          outputRange: [22, -4],
          extrapolate: "clamp",
        }),
      },
    ],
    fontSize: animatedValue.current.interpolate({
      inputRange: [0, 1],
      outputRange: [titleInActiveSize, titleActiveSize],
      extrapolate: "clamp",
    }),
    color: animatedValue.current.interpolate({
      inputRange: [0, 1],
      outputRange: [titleInactiveColor, titleActiveColor],
    }),
    backgroundColor: "#fff", // To cover the border behind the label
    paddingHorizontal: 4,
    position: "absolute",
    left: 10,
  };

  const viewStyles = {
    borderColor: animatedValue.current.interpolate({
      inputRange: [0, 1],
      outputRange: [titleInactiveColor, titleActiveColor],
    }),
    borderWidth: 0,
    borderBottomWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 10,
  };

  const onFocus = () => {
    Animated.timing(animatedValue.current, {
      toValue: 1,
      duration: 300,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      useNativeDriver: false,
    }).start();
  };

  const onBlur = () => {
    if (!text) {
      Animated.timing(animatedValue.current, {
        toValue: 0,
        duration: 300,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <Animated.View style={[styles.subContainer, viewStyles]}>
      <Animated.Text style={[returnAnimatedTitleStyles]}>{label}</Animated.Text>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        style={styles.textStyle}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    marginHorizontal: 24,
    position: "relative",
  },
  textStyle: {
    fontSize: 16,
  },
});

export default FloatingTextInput;
