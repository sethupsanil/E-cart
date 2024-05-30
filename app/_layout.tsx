import { useEffect } from "react";

import { useColorScheme } from "@HOOKS/useColorScheme.hook";

import Dark from "@CONFIG/DarkTheme.config";
import Light from "@CONFIG/LightTheme.config";
import GlobalProvider from "@CONTEXT/GlobalProvider.provider";
import { useTheme } from "@HOOKS/useTheme.hook";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const theme = useTheme();

  const colorScheme = useColorScheme();
  const { colors } = useTheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? Dark : Light}>
      <GlobalProvider>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: colors.background,
            padding: 15,
            paddingBottom: 0,
          }}
        >
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="search" options={{ headerShown: false }} />
            <Stack.Screen name="register" options={{ headerShown: false }} />
            <Stack.Screen name="pages" options={{ headerShown: false }} />

            <Stack.Screen
              name="otpVerification"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="profile"
              options={{
                headerShown: true,
                headerBackTitleVisible: false,
                title: "Profile",
              }}
            />
            <Stack.Screen
              name="modal"
              options={{
                presentation: "modal",
                autoHideHomeIndicator: true,
                headerShown: false,

                freezeOnBlur: true,
              }}
            />
          </Stack>
        </SafeAreaView>
      </GlobalProvider>
    </ThemeProvider>
  );
}
