import React, { useRef } from "react";
import { ScrollView } from "react-native";

import { Icon, Text, View } from "@COMPONENTS/Themed";
import Border from "@COMPONENTS/atom/Border";
import ImageSlider from "@COMPONENTS/molecule/ImageSlider";
import TimeStamp from "@COMPONENTS/molecule/TimeStamp";
import HighlightBox from "@COMPONENTS/widgets/HighlightBox";
import ProductDescription from "@COMPONENTS/widgets/ProductDescription";
import SelectionBox from "@COMPONENTS/widgets/SelectionBox";
import { ProductItemProps } from "@INTERFACES/ProductItem.interface";
const ProductDetails = ({ data }: ProductItemProps) => {
  const scroll = useRef<ScrollView>(null);
  const handleViewMore = () => {
    // TODO : scroll update
    if (scroll.current) scroll.current.scrollToEnd({ animated: true });
    console.log("scroll");
  };
  return (
    <ScrollView ref={scroll}>
      <ImageSlider images={data.image} />
      <View className=" rounded-[20px] m-0 p-2">
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
        {/* product description */}
        <ProductDescription
          productDescription={data.productDetails}
          title="Product Details"
          scrollHandler={handleViewMore}
        />
      </View>
    </ScrollView>
  );
};

export default ProductDetails;
