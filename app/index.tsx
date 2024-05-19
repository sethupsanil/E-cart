import React from "react";
import { Text, View } from "react-native";

import { usePushNotification } from "@/hooks/usePushNotification.hook";

const index = () => {
  const { expoPushToken, notification } = usePushNotification();

  return (
    <View>
      <Text>index</Text>
    </View>
  );
};

export default index;
