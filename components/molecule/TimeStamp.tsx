import { Icon, Text, View } from "@COMPONENTS/Themed";
import Colors from "@CONSTANTS/Colors";
import React from "react";

const TimeStamp = ({ time }: { time: number | string }) => {
  return (
    <View
      className="flex-row justify-start items-center  w-[60px] h-[20px] p-1 rounded "
      lightColor={Colors.whiteSecondary}
      darkColor={Colors.whiteSecondary}
    >
      <Icon name="clock-o" size={12} darkColor={Colors.greenPrimary} />
      <Text
        className="justify-center text-[9px] font-psemibold capitalize pl-1"
        darkColor={Colors.greenPrimary}
      >
        {time}
      </Text>
    </View>
  );
};

export default TimeStamp;
