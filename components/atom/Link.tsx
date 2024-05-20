import { useThemeColor } from "@HOOKS/useThemeColor.hook";
import { LinkProps } from "@TYPES/atom.type";
import { Link as DefaultLink } from "expo-router";

export const Link = (props: LinkProps) => {
  const { style, lightColor, darkColor, href, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultLink style={[{ color }, style]} {...otherProps} href={href} />;
};
