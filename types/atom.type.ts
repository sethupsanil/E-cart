import { ThemeProps } from "@TYPES/theme.type";
import { ExpoRouter } from "expo-router/types/expo-router";
import { Text as DefaultText, View as DefaultView } from "react-native";

type ViewProps = ThemeProps & DefaultView["props"];
type TextProps = ThemeProps & DefaultText["props"];
type LinkProps = ThemeProps & ExpoRouter.LinkProps;

export { LinkProps, TextProps, ViewProps };
