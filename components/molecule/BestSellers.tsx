import { Text, View } from "@COMPONENTS/Themed";
import CustomButton from "@COMPONENTS/atom/CustomButton";
import Colors from "@CONSTANTS/Colors";
import { BestSellersInterface } from "@INTERFACES/BestSellers.interface";
import React from "react";
import { Image } from "react-native";

interface BestSellersProps {
  data: BestSellersInterface;
}
const BestSellers = ({ data }: BestSellersProps) => {
  return (
    <View className="w-[110px] h-[200px] ">
      {/* Image box container */}
      <View
        className="h-[110px] rounded-2xl flex flex-wrap justify-between items-center p-[10px] "
        lightColor={Colors.tintColorLight}
        darkColor={Colors.tintColorLight}
      >
        {data?.products.slice(0, 3).map((product, index) => (
          <View
            key={index}
            className="w-10 h-10 rounded-lg mr-[10px] items-center justify-center"
            lightColor={Colors.white}
          >
            <Image
              className={`w-[35px] h-[35px] rounded-lg `}
              source={{
                uri: product.image,
              }}
              resizeMode="contain"
            />
          </View>
        ))}
        {/* Product remaining count */}
        <View
          className="w-10 h-10 rounded-lg items-center justify-center"
          lightColor={Colors.white}
        >
          <Text
            className="text-lg font-semibold"
            darkColor={Colors.placeHolder}
          >
            +{data.totalCount - 3}
          </Text>
        </View>
      </View>
      {/* Image box container ends*/}
      {/* Text wrapper */}
      <View className="justify-start text-ellipsis w-[70%]  mt-1 min-h-[50px]">
        <Text className="text-[12px] font-pregular capitalize">
          {data.title}
        </Text>
        <Text className="text-[10px] " lightColor={Colors.light.text}>
          {data.totalCount} products
        </Text>
      </View>
      <CustomButton title="See all" containerStyles={"mt-2"} />
    </View>
  );
};

export default BestSellers;
