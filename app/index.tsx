import { usePushNotification } from "@HOOKS/usePushNotification.hook";
import React from "react";
import { Appearance, Switch } from "react-native";

import { MonoText } from "@COMPONENTS/StyledText";
import { Link, Text, View } from "@COMPONENTS/Themed";

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
      <MonoText>Hai mono</MonoText>
    </View>
  );
};

export default index;
