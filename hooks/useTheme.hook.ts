import Dark from "@CONFIG/DarkTheme.config";
import Light from "@CONFIG/LightTheme.config";
import { useColorScheme } from "@HOOKS/useColorScheme.hook";
export const useTheme = () => {
  const colorScheme = useColorScheme();

  if (colorScheme === "dark") {
    return Dark;
  } else {
    return Light;
  }
};
