import React from "react";
import { ScrollView } from "react-native";

import Header from "@COMPONENTS/Header";
import SearchAnimationBox from "@COMPONENTS/SearchAnimationBox";
import { View } from "@COMPONENTS/Themed";
import BestSellers from "@COMPONENTS/molecule/BestSellers";
import ListSlider from "@COMPONENTS/organism/ListSlider";
import { BestSellersModal } from "@MODALS/BestSellers.modal";

const index = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <View className="flex-1">
        {/* Header */}
        <Header />
        {/* Search Animation */}
        <SearchAnimationBox />
        {/* Best Sellers */}
        <ListSlider
          title="Bestsellers"
          subTitle="see all"
          data={BestSellersModal}
          renderItem={({ item, index }: any) => (
            <BestSellers key={index} data={item} />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default index;
