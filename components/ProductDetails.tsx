import React, { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";

import ShareOption from "@ATOM/ShareOption";
import { Text, View } from "@COMPONENTS/Themed";
import Border from "@COMPONENTS/atom/Border";
import ImageSlider from "@COMPONENTS/molecule/ImageSlider";
import TimeStamp from "@COMPONENTS/molecule/TimeStamp";
import HighlightBox from "@COMPONENTS/widgets/HighlightBox";
import ProductDescription from "@COMPONENTS/widgets/ProductDescription";
import SelectionBox from "@COMPONENTS/widgets/SelectionBox";
import { ProductItemProps, sizeList } from "@INTERFACES/ProductItem.interface";
const ProductDetails = ({ data }: ProductItemProps) => {
  const [selectionData, setSelectionData] = useState<sizeList[]>([]);
  const scroll = useRef<ScrollView>(null);
  const handleViewMore = () => {
    // TODO : scroll update
    if (scroll.current) scroll.current.scrollToEnd({ animated: true });
    console.log("scroll");
  };
  useEffect(() => {
    if (data.selectionType === "size" && data.sizeList)
      setSelectionData(data.sizeList);
    else if (data.selectionType === "unit" && data.unitList)
      setSelectionData(data.unitList);
  }, [data.selectionType]);
  return (
    <ScrollView ref={scroll}>
      <ImageSlider images={data.image} />
      <View className=" rounded-[20px] m-0 p-2">
        {/* Name and share */}
        <View className="justify-between items-center flex-row my-2">
          <Text className="text-lg font-psemibold capitalize mt-1">
            {data.name}
          </Text>
          <ShareOption title={"Quick it"} message={"Check out this product"} />
        </View>
        {/* Time */}
        <TimeStamp time={data.deliveryETA} />
        {/* hr */}
        <Border />
        {/* Select unit/Size */}
        <View className="">
          <SelectionBox
            props={selectionData || []}
            title={data.selectionType}
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
