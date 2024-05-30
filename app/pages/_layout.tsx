import { Icon } from "@/components/Themed";
import { Stack, router } from "expo-router";
import React from "react";
import { Pressable } from "react-native";

const PageLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="ListAddress"
        options={{
          headerShown: true,
          title: "List Address",
          headerLeft: () => (
            <Pressable
              onPress={() => {
                console.log("in");
                router.back();
              }}
            >
              <Icon name="chevron-left" size={24} />
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
};

export default PageLayout;
