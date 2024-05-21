import React, { useState } from "react";
import { Appearance, ScrollView, Switch } from "react-native";

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
    <ScrollView>
      <View className="flex-1 items-center justify-center ">
        <Switch value={theme === "light"} onValueChange={toggleColorScheme} />
        <Text>White / Dark</Text>
        <View className="h-20 w-20 border-1 border-white-secondary bg-white"></View>
        <Text className="text-white-primary">White-primary</Text>
        <View className="h-20 w-20 border-1 border-white-secondary bg-white-primary"></View>
        <Text className="text-white-secondary">White-secondary</Text>
        <View className="h-20 w-20 border-1 border-white-secondary bg-white-secondary"></View>

        <Text className="text-green">Green</Text>
        <View className="h-20 w-20 border-1 border-white-secondary bg-green"></View>
        <Text className="text-green-primary">Green Primary</Text>
        <View className="h-20 w-20 border-1 border-white-secondary bg-green-primary"></View>
        <Text className="text-green-500">Green second</Text>
        <View className="h-20 w-20 border-2 bg-green-100"></View>
      </View>
    </ScrollView>
  );
};

export default index;
