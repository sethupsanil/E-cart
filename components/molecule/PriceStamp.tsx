import { Icon, Text, View } from "@COMPONENTS/Themed";
import Colors from "@CONSTANTS/Colors";
import { PriceStampProps } from "@INTERFACES/PriceStamp.interface";
import React from "react";

const PriceStamp = ({ price, actualPrice }: PriceStampProps) => {
  return (
    <View className=" justify-start items-center">
      <View className="flex-row justify-start items-center">
        <Icon name="rupee" size={10} />
        <Text className="font-psemibold">{price}</Text>
      </View>
      {actualPrice && (
        <View className="flex-row justify-start items-center">
          <Icon name="rupee" size={10} />
          <Text
            className="font-pregular text-xs pl-1  line-through"
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
