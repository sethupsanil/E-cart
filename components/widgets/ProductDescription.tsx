import { ProductDescriptionProps } from "@INTERFACES/ProductDescriptionProps.interface";
import { highlights } from "@INTERFACES/ProductItem.interface";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Details = ({ data }: { data: highlights }) => {
  {
    /* product description */
  }
  return (
    <View className="text-sm mt-2 w-full">
      <Text className="text-[9px] font-pregular">{data.title}</Text>

      <Text className="text-[8px] font-pregular border-2 border-black">
        {data.description}
      </Text>
    </View>
  );
};

const ProductDescription = ({
  scrollHandler,
  title = "Product Details",
  productDescription: item,
}: ProductDescriptionProps) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
    if (expanded) scrollHandler(); // TODO : scroll update
  };

  return (
    <SafeAreaView>
      <View className="mt-2">
        <Text className="text-sm font-psemibold">{title}</Text>

        {/* product description */}
        <Details data={item[0]} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 5 }}
        >
          {expanded &&
            item
              .slice(1)
              .map((value, index) => <Details data={value} key={index} />)}
          <TouchableOpacity
            onPress={toggleExpand}
            className="flex-row justify-between items-center"
          >
            <Text className="text-[8px] text-green mx-2 my-2">
              View {expanded ? "less " : "more "}details
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProductDescription;
