import Colors from "@CONSTANTS/Colors";
import { useColorScheme } from "@HOOKS/useColorScheme.hook";
import { Props } from "@INTERFACES/UseThemeColor.interface";

export function useThemeColor(
  props: Props,
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];
  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}
