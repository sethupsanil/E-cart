import { Text, View } from "@COMPONENTS/Themed";
import ItemSeparator from "@COMPONENTS/atom/ItemSeparator";
import Colors from "@CONSTANTS/Colors";
import { HighlightBoxProps } from "@INTERFACES/HightlightBox.interface";
import React from "react";
import { FlatList } from "react-native";

const HighlightBox = ({ highlights }: HighlightBoxProps) => {
  return (
    <>
      <View className="h-[80px] w-full mt-2">
        <View className="flex mb-2">
          <Text className="text-sm font-psemibold">Highlights</Text>
        </View>
        <FlatList
          data={highlights}
          horizontal
          keyExtractor={(item) => item.title}
          scrollEnabled={highlights.length > 3}
          ItemSeparatorComponent={() => <ItemSeparator />}
          renderItem={({ item, index }) => (
            <View
              key={index}
              lightColor={Colors.whiteSecondary}
              className=" justify-center items-center rounded-lg  p-2 w-[100px] "
            >
              <Text className="text-xs font-pregular">{item.title}</Text>
              <Text className="text-xs font-pmedium">{item.description}</Text>
            </View>
          )}
        />
      </View>
    </>
  );
};

export default HighlightBox;
