import { Text, View } from "@COMPONENTS/Themed";
import React from "react";
import { TextInput } from "react-native";

const SearchBar = () => {
  return (
    <View>
      <Text>SearchBar</Text>
      <TextInput placeholder="Search" className="border-[1px] border-black" />
    </View>
  );
};

export default SearchBar;
