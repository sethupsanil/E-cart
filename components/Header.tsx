import React from "react";

import { Icon, Link, Text, View } from "@COMPONENTS/Themed";
import { useLocation } from "@HOOKS/useLocation.hook";
import { Pressable } from "react-native";

const Header = () => {
  const { errorMsg, location } = useLocation();
  return (
    <View className="flex-row justify-between items-center">
      {/* Text wrapper */}
      <View className="justify-start ">
        <Text className="font-psemibold text-xs">Delivery in</Text>
        <Text className="font-psemibold text-2xl">10 minutes</Text>
        {location && (
          <View className="flex-row justify-center items-center gap-1">
            <Icon name="location-arrow" size={10} />
            <Text className="font-pregular text-xs">
              {location.coords.longitude},{location.coords.latitude}
            </Text>
          </View>
        )}
        {!location && errorMsg && (
          <Text className="font-pregular text-xs">{errorMsg}</Text>
        )}
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
