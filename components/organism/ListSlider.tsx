import { Text, View } from "@COMPONENTS/Themed";
import ItemSeparator from "@COMPONENTS/atom/ItemSeparator";
import Colors from "@CONSTANTS/Colors";
import { ListSliderProps } from "@INTERFACES/ListSlider.interface";
import React from "react";
import { FlatList } from "react-native";

const ListSlider = (props: ListSliderProps) => {
  return (
    <>
      <View className="flex-row justify-between items-center mt-2 mr-1">
        {!props.hideTitle && (
          <Text className="text-lg font-bold" lightColor={Colors.light.text}>
            {props.title}
          </Text>
        )}
        {!props.hideSubTitle && (
          <Text className="text-xs text-green">{props.subTitle}</Text>
        )}
      </View>
      <FlatList
        horizontal
        data={props.data}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ItemSeparator />}
        renderItem={props.renderItem}
        // keyExtractor={item => item.id.toString()} // Add this line
      />
    </>
  );
};

export default ListSlider;
