import { Text, View } from "@COMPONENTS/Themed";
import React, { useState } from "react";
import { Appearance, Switch } from "react-native";

const profile = () => {
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
    <View className="justify-between flex-row w-full h-full p-2">
      <Text className="text-md font-semibold">profile</Text>
      <Switch
        value={Appearance.getColorScheme() === "dark"}
        onValueChange={toggleColorScheme}
      ></Switch>
    </View>
  );
};

export default profile;
