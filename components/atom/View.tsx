import React from "react";
import { View as DefaultView } from "react-native";

import { useThemeColor } from "@HOOKS/useThemeColor.hook";
import { ViewProps } from "@TYPES/atom.type";

export const View = (props: ViewProps) => {
  const { style, lightColor, darkColor, className, ...otherProps } = props;
  let backgroundColor;

  if (lightColor || darkColor)
    backgroundColor = useThemeColor(
      { light: lightColor, dark: darkColor },
      "background"
    );
  const borderColor = useThemeColor(
    {
      light: otherProps.lightBorder ? otherProps.lightBorder : lightColor,
      dark: otherProps.darkBorder ? otherProps.darkBorder : darkColor,
    },
    "border"
  );
  let shadowColor;
  if (otherProps.darkShadow || otherProps.lightShadow) {
    shadowColor = useThemeColor(
      {
        light: otherProps.lightShadow,
        dark: otherProps.darkShadow,
      },
      "shadow"
    );
  }

  return (
    <DefaultView
      style={[{ backgroundColor }, { borderColor }, { shadowColor }, style]}
      className={className}
      {...otherProps}
    />
  );
};
