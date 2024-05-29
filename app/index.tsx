import React, { useState } from "react";
import { ScrollView } from "react-native";

import BottomSheet from "@/components/organism/BottomSheet";
import CartList from "@/components/widgets/CartList";
import CartListPage from "@/components/widgets/CartListPage";
import Header from "@COMPONENTS/Header";
import SearchAnimationBox from "@COMPONENTS/SearchAnimationBox";
import { View } from "@COMPONENTS/Themed";
import AnimatedView from "@COMPONENTS/molecule/AnimatedView";
import BestSellers from "@COMPONENTS/molecule/BestSellers";
import CategoryList from "@COMPONENTS/molecule/CategoryList";
import ListSlider from "@COMPONENTS/organism/ListSlider";
import ProductItem from "@COMPONENTS/organism/ProductItem";
import {
  BeautyAndPersonalCareModal,
  BestSellersModal,
  GroceryAndKitchenModal,
  HotDealsData,
  SnacksAndDrinksModal,
} from "@MODALS/index";

const index = () => {
  const [showBottomSheet, setShowBottomSheet] = useState<boolean>(false);
  return (
    <>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        className="mb-2"
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
              <AnimatedView key={index}>
                <BestSellers data={item} />
              </AnimatedView>
            )}
          />
          {/* Grocery & Kitchen */}
          <CategoryList
            data={GroceryAndKitchenModal}
            title="Grocery & Kitchen "
            containerClass="mt-3"
          />
          {/* Snacks & Drinks */}
          <CategoryList data={SnacksAndDrinksModal} title="Snacks & Drinks " />
          {/* Beauty & Personal Care */}
          <CategoryList
            data={BeautyAndPersonalCareModal}
            title="Beauty & Personal Care "
          />
          {/* Hot deals */}
          <ListSlider
            title="Hot Deals"
            subTitle="see all"
            data={HotDealsData}
            hideSubTitle={true}
            renderItem={({ item, index }: any) => (
              <ProductItem data={item} key={index} />
            )}
          />
        </View>
      </ScrollView>
      <BottomSheet
        onCloseClickHandler={() => setShowBottomSheet(false)}
        isVisible={showBottomSheet}
        height={60}
        renderItem={<CartList />}
      />
      <CartListPage showBottomSheet={setShowBottomSheet} />
    </>
  );
};

export default index;
