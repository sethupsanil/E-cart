import React from "react";

import { Icon, Link, Text, View } from "@COMPONENTS/Themed";
import { Pressable } from "react-native";

const Header = () => {
  return (
    <View className="flex-row justify-between items-center">
      {/* Text wrapper */}
      <View className="justify-start ">
        <Text className="font-psemibold text-xs">Delivery in</Text>
        <Text className="font-psemibold text-2xl">10 minutes</Text>
        <Text className="font-pregular text-xs">location</Text>
      </View>

      <Pressable>
        {({ pressed }) => (
          <Link href={"/profile"}>
            <Icon
              name="user-circle"
              size={54}
              style={{ opacity: pressed ? 0.5 : 1 }}
            />
          </Link>
        )}
      </Pressable>
    </View>
  );
};

export default Header;
