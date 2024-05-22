import { Icon, Text, View } from "@COMPONENTS/Themed";
import CustomButton from "@COMPONENTS/atom/CustomButton";
import Colors from "@CONSTANTS/Colors";
import React from "react";

const BestSellers = ({ item }: { item: number }) => {
  const iconSize = 30;
  return (
    <View className="w-[110px] h-60 ">
      {/* Image box container */}
      <View
        className="h-[110px] rounded-2xl flex flex-wrap justify-between items-center p-[10px] "
        lightColor={Colors.tintColorLight}
        darkColor={Colors.tintColorLight}
      >
        <View
          className="w-10 h-10 rounded-lg mr-[10px] items-center justify-center"
          lightColor={Colors.white}
        >
          <Icon name="anchor" size={iconSize} color={Colors.green} />
        </View>
        <View
          className="w-10 h-10 rounded-lg mr-[10px] items-center justify-center"
          lightColor={Colors.white}
        >
          <Icon name="amazon" size={iconSize} color={Colors.green} />
        </View>
        <View
          className="w-10 h-10 rounded-lg items-center justify-center"
          lightColor={Colors.white}
        >
          <Icon name="align-center" size={iconSize} color={Colors.green} />
        </View>
        <View
          className="w-10 h-10 rounded-lg items-center justify-center"
          lightColor={Colors.white}
        >
          <Text
            className="text-lg font-semibold"
            darkColor={Colors.placeHolder}
          >
            +6
          </Text>
        </View>
      </View>
      {/* Image box container ends*/}
      {/* Text wrapper */}
      <View className="justify-start text-ellipsis w-[70%] gap-1 mt-1">
        <Text className="text-[12px] font-pregular">Milk, Curd & Paneer</Text>
        <Text className="text-[10px] " lightColor={Colors.light.text}>
          9 products
        </Text>
      </View>
      <CustomButton title="See all" containerStyles={"mt-2"} />
    </View>
  );
};

export default BestSellers;
