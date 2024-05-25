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
import AddToCartButton from "./molecule/AddToCartButton";
import PriceStamp from "./molecule/PriceStamp";
const ProductDetails = ({ data }: ProductItemProps) => {
  const [selectionData, setSelectionData] = useState<sizeList[]>([]);
  const [selectedUnitIndex, setSelectedUnitIndex] = useState(0);
  const scroll = useRef<ScrollView>(null);
  const handleViewMore = () => {
    // TODO : scroll update
    if (scroll.current) scroll.current.scrollToEnd({ animated: true });
  };
  useEffect(() => {
    if (data.selectionType === "size" && data.sizeList)
      setSelectionData(data.sizeList);
    else if (data.selectionType === "unit" && data.unitList)
      setSelectionData(data.unitList);
  }, [data.selectionType]);
  return (
    <>
      <ScrollView
        ref={scroll}
        showsVerticalScrollIndicator={false}
        className="mb-20"
      >
        <ImageSlider images={data.image} />
        <View className=" rounded-[20px] m-0 p-2">
          {/* Name and share */}
          <View className="justify-between items-center flex-row my-2">
            <Text className="text-lg font-psemibold capitalize mt-1">
              {data.name}
            </Text>
            <ShareOption
              title={"Quick it"}
              message={"Check out this product"}
            />
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
              onSelectedItemChanges={(index: number) =>
                setSelectedUnitIndex(index)
              }
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
      <View
        className="h-20 w-full bg-white absolute bottom-0 shadow-xl shadow-black 
       p-2 justify-start "
      >
        <View className="w-full justify-between items-center flex-row">
          {/* left side */}
          <View>
            {/* Selected size */}
            <Text className="text-xs">
              {selectionData[selectedUnitIndex] &&
                selectionData[selectedUnitIndex].size}
            </Text>
            {/* price */}
            <PriceStamp
              price={
                selectionData[selectedUnitIndex] &&
                selectionData[selectedUnitIndex].price
              }
              actualPrice={
                selectionData[selectedUnitIndex] &&
                selectionData[selectedUnitIndex].offerPrice
              }
              flexDirection="row"
            />

            <Text className="text-[10px]">(inclusive of all taxes)</Text>
          </View>
          {/* Right side */}
          <View>
            <AddToCartButton />
          </View>
        </View>
      </View>
    </>
  );
};

export default ProductDetails;
