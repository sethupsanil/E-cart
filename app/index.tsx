import React, { useState } from "react";
import { Appearance, ScrollView } from "react-native";

import Header from "@COMPONENTS/Header";
import { View } from "@COMPONENTS/Themed";

const index = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  const toggleColorScheme = () => {
    Appearance.getColorScheme() === "dark"
      ? Appearance.setColorScheme("light")
      : Appearance.setColorScheme("dark");
  };
  Appearance.addChangeListener(({ colorScheme }) => {
    setTheme(colorScheme);
  });

  return (
    <ScrollView>
      <View className="flex-1">
        {/* Header */}
        <Header />
      </View>
    </ScrollView>
  );
};

export default index;
