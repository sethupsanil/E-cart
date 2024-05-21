import React from "react";
import { View as DefaultView } from "react-native";

import { useThemeColor } from "@HOOKS/useThemeColor.hook";
import { ViewProps } from "@TYPES/atom.type";

export const View = (props: ViewProps) => {
  const { style, lightColor, darkColor, className, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  const borderColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "border"
  );

  return (
    <DefaultView
      style={[{ backgroundColor }, { borderColor }, style]}
      className={className}
      {...otherProps}
    />
  );
};
