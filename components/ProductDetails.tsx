import { Icon, Text, View } from "@COMPONENTS/Themed";
import { ProductItemProps } from "@INTERFACES/ProductItem.interface";
import React from "react";
import Border from "./atom/Border";
import ImageSlider from "./molecule/ImageSlider";
import TimeStamp from "./molecule/TimeStamp";
import HighlightBox from "./widgets/HighlightBox";
import SelectionBox from "./widgets/SelectionBox";

const ProductDetails = ({ data }: ProductItemProps) => {
  return (
    <View className=" rounded-[20px] m-0 p-2">
      <ImageSlider images={data.image} />
      {/* Name and share */}
      <View className="justify-between items-center flex-row my-2">
        <Text className="text-lg font-psemibold capitalize mt-1">
          {data.name}
        </Text>
        <Icon name="share" size={20} />
      </View>
      {/* Time */}
      <TimeStamp time={data.deliveryETA} />
      {/* hr */}
      <Border />
      {/* Select unit/Size */}
      <View className="">
        <SelectionBox
          props={data.unitList || []}
          onSelectedItemChanges={(index: number) => console.log(index)}
        />
      </View>
      {/* hr */}
      <Border />
      {/* Highlights */}
      <HighlightBox highlights={data.highlights} />
    </View>
  );
};

export default ProductDetails;
