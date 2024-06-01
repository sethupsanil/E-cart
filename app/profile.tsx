import { Icon, Text, View } from "@COMPONENTS/Themed";
import { Link } from "expo-router";
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
    <View className=" h-full">
      {/* Theme */}
      <View className="justify-between flex-row w-full p-2">
        <Text className="text-md font-semibold">Dark Theme</Text>
        <Switch
          value={Appearance.getColorScheme() === "dark"}
          onValueChange={toggleColorScheme}
        ></Switch>
      </View>
      {/* Address */}
      <Link href="/pages/ListAddress">
        <View className="justify-between flex-row w-full p-2">
          <Text className="text-md font-semibold">Address book</Text>
          <Icon name="address-book" size={20} />
        </View>
      </Link>
    </View>
  );
};

export default profile;
