import { FloatingTextInputProps } from "@/interfaces/Atom.interface";
import React, { useRef, useState } from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  TextInput,
  useColorScheme,
} from "react-native";
import { Text } from "./Text";

const FloatingTextInput = ({
  label = "New Title",
  titleActiveSize = 12,
  titleInActiveSize = 14,
  titleActiveColor = "#444444",
  titleInactiveColor = "#c2c2c2",
  showBorder = true,
  containerClass = "",
  ...props
}: FloatingTextInputProps) => {
  const [text, onChangeText] = useState("");
  const animatedValue = useRef(new Animated.Value(0));
  const theme = useColorScheme();
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

  const getBorderColor = (): any => {
    return props.formikKey &&
      props.errors &&
      props.errors[props.formikKey] &&
      props.touched &&
      props.touched[props.formikKey]
      ? "red"
      : animatedValue.current.interpolate({
          inputRange: [0, 1],
          outputRange: [titleInactiveColor, titleActiveColor],
        });
  };
  const getTextColor = (): any => {
    return props.formikKey &&
      props.errors &&
      props.errors[props.formikKey] &&
      props.touched &&
      props.touched[props.formikKey]
      ? "red"
      : theme === "dark"
      ? "#fff"
      : "#000";
  };

  const viewStyles = {
    borderColor: getBorderColor(),
    borderWidth: showBorder ? 0.5 : 0,
    borderBottomWidth: 0.5,
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

  const onBlurHandler = (event: any) => {
    if (!text) {
      Animated.timing(animatedValue.current, {
        toValue: 0,
        duration: 300,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    }
    if (props.onBlur) props.onBlur(event);
  };
  const onTextChangeHandler = (text: any) => {
    onChangeText(text);
    if (props.onChangeText) props.onChangeText(text);
  };
  return (
    <>
      <Animated.View
        style={[styles.subContainer, viewStyles]}
        className={containerClass}
      >
        <Animated.Text
          style={[
            returnAnimatedTitleStyles,
            { backgroundColor: theme === "dark" ? "#000" : "#fff" },
            { color: getTextColor() },
          ]}
        >
          {label}
        </Animated.Text>
        <TextInput
          onChangeText={onTextChangeHandler}
          value={text}
          style={[
            styles.textStyle,
            { color: theme === "dark" ? "#fff" : "#000" },
          ]}
          onBlur={onBlurHandler}
          onFocus={onFocus}
          autoCorrect={false}
          maxLength={props.maxLength}
          keyboardType={props.keyboardType}
        />
      </Animated.View>
      {props.formikKey &&
      props.errors &&
      props.errors[props.formikKey] &&
      props.touched &&
      props.touched[props.formikKey] ? (
        <Text className="text-red-600 text-xs mt-1" darkColor="#f00">
          {props.errors[props.formikKey] as string}
        </Text>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    position: "relative",
  },
  textStyle: {
    fontSize: 16,
  },
});

export default FloatingTextInput;
