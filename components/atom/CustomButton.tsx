import { Text, View } from "@COMPONENTS/Themed";
import Colors from "@CONSTANTS/Colors";
import { CustomButtonProps } from "@INTERFACES/Atom.interface";
import {
  ActivityIndicator,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  lightBackgroundColor,
  darkBackgroundColor,
  ...prop
}: CustomButtonProps) => {
  const theme = useColorScheme();
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={prop.isDisabled}
    >
      <View
        className={`rounded-lg  h-[25px]  flex flex-row justify-center items-center border ${containerStyles} ${
          isLoading ? "opacity-50" : ""
        }`}
        lightBorder={prop.lightBorder ? prop.lightBorder : Colors.greenPrimary}
        darkBorder={prop.darkBorder ? prop.darkBorder : Colors.greenPrimary}
        lightColor={lightBackgroundColor ? lightBackgroundColor : "transparent"}
        darkColor={darkBackgroundColor ? darkBackgroundColor : "transparent"}
      >
        <Text
          className={`text-green-primary font-regular text-xs ${textStyles}`}
        >
          {title}
        </Text>

        {isLoading && (
          <ActivityIndicator
            animating={isLoading}
            color={theme === "dark" ? Colors.white : Colors.black}
            size="small"
            className="ml-2"
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
