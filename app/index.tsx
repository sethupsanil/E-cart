import { usePushNotification } from "@/hooks/usePushNotification.hook";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const index = () => {
  const { expoPushToken, notification } = usePushNotification();
  console.log(expoPushToken);
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl text-white-100">
        Open up App.js to start working on your app!
      </Text>
      <Link href={"/modal"}>Open modal</Link>
      <Link href={"/test"}>goto test</Link>
    </View>
  );
};

export default index;
