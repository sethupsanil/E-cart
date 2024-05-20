import React, { useState } from "react";
import { Appearance, Switch } from "react-native";

import { Text, View } from "@COMPONENTS/Themed";

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
    <View
      className="flex-1 items-center justify-center 
    "
    >
      <Switch value={theme === "light"} onValueChange={toggleColorScheme} />
      <Text lightColor="#000" darkColor="#fff" className="text-primary">
        White-primary
      </Text>
      <View className="h-20 w-20 border-2 "></View>
    </View>
  );
};

export default index;
