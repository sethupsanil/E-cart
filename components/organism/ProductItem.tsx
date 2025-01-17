import React, { useEffect, useState } from "react";
import { Image } from "react-native";

import { AddToCartButtonProps } from "@/interfaces/AddToCartButton.interface";
import ProductDetails from "@COMPONENTS/ProductDetails";
import { Text, View } from "@COMPONENTS/Themed";
import AnimatedView from "@COMPONENTS/molecule/AnimatedView";
import PriceStamp from "@COMPONENTS/molecule/PriceStamp";
import TimeStamp from "@COMPONENTS/molecule/TimeStamp";
import BottomSheet from "@COMPONENTS/organism/BottomSheet";
import Colors from "@CONSTANTS/Colors";
import { ProductItemProps, sizeList } from "@INTERFACES/ProductItem.interface";
import AddToCartButton from "../molecule/AddToCartButton";

const ProductItem = ({ data }: ProductItemProps) => {
  const [showModal, setShowModal] = useState(false);
  const [unit, setUnit] = useState("");
  const [addToCartData, setAddToCartData] = useState<AddToCartButtonProps>();
  const onProductPressHandler = () => {
    setShowModal(true);
  };
  useEffect(() => {
    const selectedType = data.selectionType;
    let selectedUnit: sizeList = {} as sizeList;
    if (selectedType === "size" && data.sizeList) {
      setUnit(data.sizeList[0].size);
      selectedUnit = data.sizeList[0];
    }
    if (selectedType === "unit" && data.unitList) {
      setUnit(data.unitList[0].size);
      selectedUnit = data.unitList[0];
    }
    setAddToCartData({
      productId: data.id,
      price: selectedUnit.price,
      countInStock: selectedUnit.countInStock,
    });
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
          {addToCartData && <AddToCartButton data={addToCartData} />}
        </View>
      </View>
      {/*  */}

      <BottomSheet
        isVisible={showModal}
        onCloseClickHandler={() => setShowModal(false)}
        renderItem={<ProductDetails data={data} />}
      />
      {/*  */}
    </AnimatedView>
  );
};

export default ProductItem;
