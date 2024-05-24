import { Icon, Text, View } from "@COMPONENTS/Themed";
import Colors from "@CONSTANTS/Colors";
import { PriceStampProps } from "@INTERFACES/PriceStamp.interface";
import React from "react";

const PriceStamp = ({
  price,
  actualPrice,
  flexDirection = "column",
}: PriceStampProps) => {
  return (
    <View
      className={`justify-start items-center ${
        flexDirection == "row" && "flex-row gap-1 "
      }`}
    >
      <View className="flex-row justify-start items-center">
        <Icon name="rupee" size={10} darkColor={Colors.green} />
        <Text className="font-psemibold" darkColor={Colors.green}>
          {price}
        </Text>
      </View>
      {actualPrice && (
        <View className="flex-row justify-start items-center ">
          <Icon name="rupee" size={10} darkColor={Colors.placeHolder} />
          <Text
            className="font-pregular text-xs   line-through"
            lightColor={Colors.placeHolder}
            darkColor={Colors.placeHolder}
          >
            {actualPrice}
          </Text>
        </View>
      )}
    </View>
  );
};

export default PriceStamp;
