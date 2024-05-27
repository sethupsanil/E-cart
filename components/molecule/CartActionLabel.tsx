import { useHaptic } from "@HOOKS/useHaptic.hook";
import { CartActionLabelProps } from "@INTERFACES/CartActionLabel.interface";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const CartActionLabel = ({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: CartActionLabelProps) => {
  const hapticSelection = useHaptic();
  const action = (type: () => void) => {
    // hapticSelection();
    if (type) type();
  };

  return (
    <View
      className="rounded-lg   bg-green
      flex flex-row justify-evenly items-center h-[33px] w-[56px]"
    >
      <TouchableOpacity onPress={() => action(decrementQuantity)}>
        <Text className="font-psemibold text-white">-</Text>
      </TouchableOpacity>
      <Text className="font-psemibold text-white">{quantity}</Text>
      <TouchableOpacity onPress={() => action(incrementQuantity)}>
        <Text className="font-psemibold text-white">+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartActionLabel;
