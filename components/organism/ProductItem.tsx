import React, { useEffect, useState } from "react";
import { Image } from "react-native";

import ProductDetails from "@COMPONENTS/ProductDetails";
import { Text, View } from "@COMPONENTS/Themed";
import CustomButton from "@COMPONENTS/atom/CustomButton";
import AnimatedView from "@COMPONENTS/molecule/AnimatedView";
import CartActionLabel from "@COMPONENTS/molecule/CartActionLabel";
import PriceStamp from "@COMPONENTS/molecule/PriceStamp";
import TimeStamp from "@COMPONENTS/molecule/TimeStamp";
import BottomSheet from "@COMPONENTS/organism/BottomSheet";
import Colors from "@CONSTANTS/Colors";
import { ProductItemProps } from "@INTERFACES/ProductItem.interface";

const ProductItem = ({ data }: ProductItemProps) => {
  const [showActionBUtton, setShowActionBUtton] = useState(false);
  const [unit, setUnit] = useState("");

  const onProductPressHandler = () => {
    // console.log("Product Pressed", data);
    // toggleModal();
  };
  useEffect(() => {
    const selectedType = data.selectionType;
    if (selectedType === "size" && data.sizeList) {
      setUnit(data.sizeList[0].size);
    }
    if (selectedType === "unit" && data.unitList) {
      setUnit(data.unitList[0].size);
    }
  }, []);

  return (
    <AnimatedView onPress={onProductPressHandler}>
      <View className="w-[110px] h-[340px] ">
        {/* Image box container */}
        <View
          className="h-[110px] rounded-2xl flex flex-wrap justify-between items-center p-[10px] border"
          lightBorder={Colors.whiteSecondary}
          darkColor={Colors.tintColorLight}
        >
          <Image
            className={`w-full h-full rounded-lg `}
            source={{
              uri: data.image[0],
            }}
            resizeMode="cover"
          />
        </View>
        {/* Image box container ends*/}
        {/* Text wrapper */}
        <View className="justify-start text-ellipsis w-[70%] mt-1 min-h-[70px]">
          <TimeStamp time={data.deliveryETA} />
          <Text className="text-xs font-pregular capitalize mt-1 min-h-[30px]">
            {data.name}
          </Text>
          <Text className="text-[10px] font-pregular mt-1">{unit}</Text>
        </View>

        {/*  */}
        <View className="flex-row justify-between items-center mt-1 w-full">
          <PriceStamp price={data.price} actualPrice={data.actualPrice} />
          {!showActionBUtton && (
            <CustomButton
              title="Add"
              containerStyles={"h-[33px] w-[56px] "}
              lightBackgroundColor={Colors.greenShade}
              darkBackgroundColor={Colors.greenShade}
              handlePress={() => setShowActionBUtton(true)}
            />
          )}
          {showActionBUtton && (
            <CartActionLabel
              decrementQuantity={() => {}}
              incrementQuantity={() => {}}
              quantity={1}
            />
          )}
        </View>
      </View>
      {/*  */}
      <BottomSheet
        isVisible={true}
        renderItem={<ProductDetails data={data} />}
      />
      {/*  */}
    </AnimatedView>
  );
};

export default ProductItem;