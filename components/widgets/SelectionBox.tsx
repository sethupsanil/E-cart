import { Text, View } from "@COMPONENTS/Themed";
import ItemSeparator from "@COMPONENTS/atom/ItemSeparator";
import AnimatedView from "@COMPONENTS/molecule/AnimatedView";
import PriceStamp from "@COMPONENTS/molecule/PriceStamp";
import Colors from "@CONSTANTS/Colors";
import { useGlobalContext } from "@CONTEXT/GlobalContext.context";
import { SelectionBoxProps } from "@INTERFACES/SelectionBox.interface";

import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

const SelectionBox = ({
  props,
  onSelectedItemChanges,
  title,
}: SelectionBoxProps) => {
  const { setCart, cart, selectedProductData } = useGlobalContext();
  const [selectedItem, setSelectedItem] = useState(0);
  const handleSelectedItem = (index: number) => {
    setSelectedItem(index);
    onSelectedItemChanges(index);
    // setCart((prev) => {
    //   return prev.map((value) => {
    //     if (value.productId === selectedProductData.$id) {
    //       // Replace the item with a new object
    //       return {
    //         ...value,
    //         price: item.price /* your updated properties here */,
    //       };
    //     } else {
    //       // Return the original item if the productId doesn't match
    //       return value;
    //     }
    //   });
    // });
  };

  return (
    <>
      <Text className="text-base font-psemibold mb-3">Select {title}</Text>
      <FlatList
        data={props}
        horizontal
        ItemSeparatorComponent={() => <ItemSeparator />}
        scrollEnabled={props.length > 3}
        renderItem={({ item, index }) => (
          <AnimatedView onPress={() => handleSelectedItem(index)} key={index}>
            <View className="flex-row justify-start  h-[60px] ">
              <View
                className="flex items-center justify-center w-[120px] border-[0.5px] rounded-[8px]"
                style={[index === selectedItem && styles.active]}
                darkBorder={Colors.white}
              >
                <Text
                  className="text-xs font-pregular"
                  darkColor={Colors.green}
                >
                  {item.size}
                </Text>
                <PriceStamp
                  price={item.price}
                  actualPrice={item.offerPrice}
                  flexDirection="row"
                />
              </View>
            </View>
          </AnimatedView>
        )}
      />

      {/* ))} */}
    </>
  );
};

const styles = StyleSheet.create({
  active: {
    backgroundColor: Colors.greenShade,
    borderColor: Colors.greenPrimary,
  },
});

export default SelectionBox;
