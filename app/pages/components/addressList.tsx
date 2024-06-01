import { Icon, Text, View } from "@/components/Themed";
import AnimatedView from "@/components/molecule/AnimatedView";
import Colors from "@/constants/Colors";
import { IconNames } from "@/types/FontAwesomeIcon.type";
import React from "react";

const AddressList = ({
  title,
  icon,
  index,
  activeIndex,
  onPressHandler,
}: {
  icon: IconNames;
  title: string;
  index: number;
  activeIndex: number;
  onPressHandler: (title: number) => void;
}) => {
  return (
    <AnimatedView onPress={() => onPressHandler(index)}>
      <View
        className="h-[35px] w-20 border flex-row items-center justify-evenly rounded-md"
        lightBorder={
          index === activeIndex ? Colors.green : Colors.whiteSecondary
        }
        darkBorder={
          index === activeIndex ? Colors.green : Colors.whiteSecondary
        }
      >
        <Icon name={icon} size={20} />
        <Text className="text-sm font-bold">{title}</Text>
      </View>
    </AnimatedView>
  );
};

export default AddressList;
