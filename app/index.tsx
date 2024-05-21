import React from "react";
import { ScrollView } from "react-native";

import Header from "@COMPONENTS/Header";
import SearchAnimationBox from "@COMPONENTS/SearchAnimationBox";
import { View } from "@COMPONENTS/Themed";

const index = () => {
  return (
    <ScrollView>
      <View className="flex-1">
        {/* Header */}
        <Header />
        {/* Search  */}
        <SearchAnimationBox />
      </View>
    </ScrollView>
  );
};

export default index;
