import { CustomViewProps } from "@/interfaces/Atom.interface";
import { IconNames } from "@TYPES/FontAwesomeIcon.type";
import { ThemeProps } from "@TYPES/theme.type";
import { IconProps as IconProp } from "@expo/vector-icons/build/createIconSet";
import { ExpoRouter } from "expo-router/types/expo-router";
import { Text as DefaultText, View as DefaultView } from "react-native";

type ViewProps = ThemeProps & DefaultView["props"] & CustomViewProps;
type TextProps = ThemeProps & DefaultText["props"];
type LinkProps = ThemeProps & ExpoRouter.LinkProps;
type IconProps = ThemeProps &
  Omit<IconProp<string>, "name"> & { name: IconNames };
export { IconProps, LinkProps, TextProps, ViewProps };
