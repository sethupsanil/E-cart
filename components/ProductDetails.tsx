import { ProductItemProps } from "@INTERFACES/ProductItem.interface";
import React from "react";
import { Text, View } from "react-native";
import ImageSlider from "./molecule/ImageSlider";

const ProductDetails = ({ data }: ProductItemProps) => {
  return (
    <View>
      <ImageSlider images={data.image} />
      <Text>ProductDetails</Text>
    </View>
  );
};

export default ProductDetails;
