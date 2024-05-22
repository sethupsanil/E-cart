import { Text, View } from "@COMPONENTS/Themed";
import Colors from "@CONSTANTS/Colors";
import { CustomButtonProps } from "@INTERFACES/Atom.interface";
import { ActivityIndicator, TouchableOpacity } from "react-native";
const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
    >
      <View
        className={`rounded-lg  h-[25px]  flex flex-row justify-center items-center border ${containerStyles} ${
          isLoading ? "opacity-50" : ""
        }`}
        lightBorder={Colors.whiteSecondary}
      >
        <Text
          className={`text-green-primary font-regular text-xs ${textStyles}`}
        >
          {title}
        </Text>

        {isLoading && (
          <ActivityIndicator
            animating={isLoading}
            color="#fff"
            size="small"
            className="ml-2"
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
