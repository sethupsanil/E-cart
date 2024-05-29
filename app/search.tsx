import { Icon, Text, View } from "@COMPONENTS/Themed";
import Colors from "@CONSTANTS/Colors";
import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, StyleSheet, TextInput } from "react-native";

const search = () => {
  const onPressHandler = () => {
    router.back();
  };
  return (
    <>
      <View
        style={styles.container}
        className="justify-between items-center flex-row  p-2 rounded"
      >
        {/* Search icon wrapper */}
        <View className="justify-start items-center flex-row h-full w-80 ">
          <Pressable onPress={() => router.back()} className="w-5">
            <Icon
              name="arrow-left"
              size={16}
              color={Colors.placeHolder}
              darkColor={Colors.black}
            />
          </Pressable>

          <TextInput
            placeholder=" Search for atta,dal,coke and more"
            autoFocus={true}
            className="ml-2 text-black"
            autoCorrect={false}
            placeholderTextColor={Colors.placeHolder}
          />
        </View>
        {/* Microphone wrapper */}
        <View className=" items-center flex-row h-full">
          <Text
            darkColor={Colors.placeHolder}
            lightColor={Colors.placeHolder}
            className="mr-1 font-pextralight"
          >
            |
          </Text>
          <Icon
            name="microphone"
            size={16}
            color={Colors.placeHolder}
            darkColor={Colors.black}
          />
        </View>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      ></ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 35,
    overflow: "hidden",
    borderColor: Colors.whiteSecondary,
    borderWidth: 1,
    backgroundColor: Colors.whitePrimary,
  },
  text: {
    position: "absolute",
    // width: "100%",
    // textAlign: "left",
    color: Colors.placeHolder,
  },
});
export default search;
