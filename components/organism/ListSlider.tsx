import { Text, View } from "@COMPONENTS/Themed";
import Colors from "@CONSTANTS/Colors";
import { ListSliderProps } from "@INTERFACES/ListSlider.interface";
import React from "react";
import { FlatList } from "react-native";

const ListSlider = (props: ListSliderProps) => {
  return (
    <>
      <View className="flex-row justify-between items-center mt-2 mr-1">
        <Text className="text-lg font-bold" lightColor={Colors.light.text}>
          {props.title}
        </Text>
        <Text className="text-xs text-green">{props.subTitle}</Text>
      </View>
      <FlatList
        horizontal
        data={props.data}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="w-2" />}
        renderItem={props.renderItem}
        // keyExtractor={item => item.id.toString()} // Add this line
      />
    </>
  );
};

export default ListSlider;
