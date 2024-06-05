import { Icon, Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import React from "react";

const SavedAddresses = () => {
  return (
    <View className="bg-white h-20 rounded p-1 w-full mt-2">
      <View className="flex-row justify-center items-center ml-1 gap-2">
        <View className="bg-white-secondary h-10 w-10 rounded justify-center items-center">
          <Icon name="home" size={25} color={Colors.green} />
        </View>
        {/* Address */}
        <View className="flex-1 w-full">
          <Text className="text-base font-pregular ">Home</Text>
          <Text className="text-[9px] text-white-placeholder">
            Lorem ipsum,1st floor,Electronic city, Bengaluru, Karnataka, India
          </Text>
          {/* View icon wrapper */}
          <View className="flex-row justify-start items-center gap-2 p-1">
            <View className="h-5 w-5 rounded bg-white-secondary justify-center items-center">
              <Text className="text-green font-bold text">...</Text>
            </View>
            <View className="h-5 w-5 rounded bg-white-secondary justify-center items-center">
              <Icon name="share" size={15} color={Colors.green} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SavedAddresses;
