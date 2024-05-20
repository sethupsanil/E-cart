import { Appearance, Text as DefaultText } from "react-native";

import { useThemeColor } from "@HOOKS/useThemeColor.hook";
import { TextProps } from "@TYPES/atom.type";

export const Text = (props: TextProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const theme = Appearance.getColorScheme();

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
};
