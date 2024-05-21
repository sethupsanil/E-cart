import { Text as DefaultText } from "react-native";

import { useThemeColor } from "@HOOKS/useThemeColor.hook";
import { TextProps } from "@TYPES/atom.type";

export const Text = (props: TextProps) => {
  const { style, lightColor, darkColor, className, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  return (
    <DefaultText
      className={className}
      style={[{ color }, style]}
      {...otherProps}
    />
  );
};
