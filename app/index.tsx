import React from "react";
import { Text, View } from "react-native";

import { usePushNotification } from "@/hooks/usePushNotification.hook";

const index = () => {
  const { expoPushToken, notification } = usePushNotification();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl">
        Open up App.js to start working on your app!
      </Text>
    </View>
  );
};

export default index;
