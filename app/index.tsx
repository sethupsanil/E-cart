import { usePushNotification } from "@/hooks/usePushNotification.hook";
import { Link } from "expo-router";
import React from "react";
import { Appearance, Switch } from "react-native";

import { Text, View } from "@/components/Themed";

const index = () => {
  const { expoPushToken, notification } = usePushNotification();
  const toggleColorScheme = () => {
    Appearance.getColorScheme() === "dark"
      ? Appearance.setColorScheme("light")
      : Appearance.setColorScheme("dark");
  };
  return (
    <View
      className="flex-1 items-center justify-center 
    "
    >
      <Switch
        value={Appearance.getColorScheme() === "light"}
        onValueChange={toggleColorScheme}
      />
      <Text className="text-2xl ">
        Open up App.js to start working on your app!
      </Text>
      <View className="h-20 w-20 border-2 "></View>
      <Link href={"/modal"}>Open modal</Link>
      <Link href={"/test"}>goto test</Link>
    </View>
  );
};

export default index;
