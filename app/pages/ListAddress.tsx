import { Icon, Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import React from "react";
import SavedAddresses from "./components/savedAddresses";

const ListAddress = () => {
  return (
    <View className="bg-white-secondary h-full p-3">
      {/* Add Address */}
      <View className=" flex-row justify-start  items-center bg-white h-7 rounded pl-1">
        <Icon name="plus" size={15} color={Colors.green} />
        <Link href="/pages/createAddress">
          <Text className="text-green pl-1">Add new address</Text>
        </Link>
      </View>
      <View>
        <Text className="text-xs text-white-placeholder mt-2">
          Your saved addresses
        </Text>
      </View>
      {/* Saved Address */}
      <SavedAddresses />
      <SavedAddresses />
    </View>
  );
};

export default ListAddress;
