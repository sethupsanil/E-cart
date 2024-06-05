import { useThemeColor } from "@HOOKS/useThemeColor.hook";
import { IconProps } from "@TYPES/atom.type";
import { FontAwesome as DefaultIcon } from "@expo/vector-icons";
import React from "react";

export const Icon = (props: IconProps) => {
  const { style, lightColor, darkColor, className, ...otherProps } = props;
  const color = props.color
    ? props.color
    : useThemeColor({ light: lightColor, dark: darkColor }, "text");
  return (
    <DefaultIcon
      name={otherProps.name as any}
      size={otherProps.size}
      color={color}
      style={[{ color }, style]}
    />
  );
};
