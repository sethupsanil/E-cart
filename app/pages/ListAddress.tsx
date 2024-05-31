import { Icon, Text, View } from "@/components/Themed";
import Border from "@/components/atom/Border";
import CustomButton from "@/components/atom/CustomButton";
import FloatingTextInput from "@/components/atom/FloatingTextInput";
import RadioButton from "@/components/atom/RadioButton";
import Colors from "@/constants/Colors";
import { IconNames } from "@/types/FontAwesomeIcon.type";
import React, { useMemo, useState } from "react";
import { ScrollView } from "react-native";

const IconList = ({ title, icon }: { icon: IconNames; title: string }) => {
  return (
    <View
      className="h-[35px] w-20 border flex-row items-center justify-evenly "
      lightBorder={Colors.whiteSecondary}
    >
      <Icon name={icon} size={20} />
      <Text className="text-sm font-bold">{title}</Text>
    </View>
  );
};

const ListAddress = () => {
  const radioButtons = useMemo(
    () => [
      {
        id: "1",
        label: "Myself",
        value: "myself",
        borderColor: Colors.green,
        color: Colors.green,
      },
      {
        id: "2",
        label: "Other",
        value: "other",
        borderColor: Colors.green,
        color: Colors.green,
      },
    ],
    []
  );

  const [selectedId, setSelectedId] = useState("2");

  return (
    <View className="w-full h-full pl-2">
      <View className="justify-center">
        <Text className="text-lg font-bold  pt-2">Enter complete address</Text>
      </View>
      <Border />
      <ScrollView showsHorizontalScrollIndicator={false}>
        {/* View 1 */}
        <View className="justify-start items-start">
          <Text>Who you are ordering for?</Text>
          <RadioButton
            layout="row"
            radioButtons={radioButtons}
            containerStyle={{ margin: 0, padding: 0 }}
            onPress={(id: any) => {
              console.log("selected", id);
              setSelectedId(id);
            }}
            selectedId={selectedId}
          />
        </View>
        {/* View 2 */}
        <View className="mt-2">
          <Text>Save address as </Text>
          <View className="flex-row justify-evenly mt-1">
            <IconList icon={"home"} title={"Home"} />
            <IconList icon={"building"} title="Work" />
            <IconList icon={"hotel"} title="Hotel" />
            <IconList icon="location-arrow" title="Other" />
          </View>
        </View>
        {/* View 3 */}
        <View className="mt-4">
          <FloatingTextInput label={"Flat / House no / Building name *"} />
        </View>
        {/* view 4 */}
        <View className="mt-4 ">
          <FloatingTextInput label={"Floor (optional)"} />
        </View>
        {/* view 5 */}
        <View className="mt-4 ">
          <FloatingTextInput label={"Area / Sector / Locality *"} />
        </View>
        {/* view 6 */}
        <View className="mt-4 ">
          <FloatingTextInput label={"Landmark (optional)"} />
        </View>
        {/* view 7 */}
        <View className="mt-4 ">
          <Text className="text-white-placeholder">
            Enter your details for seamless delivery experience
          </Text>
        </View>
        {/* view 8 */}
        <View className="mt-2 ">
          <FloatingTextInput label={"Your name *"} />
        </View>
        {/* view 9 */}
        <View className="mt-4 ">
          <FloatingTextInput label={"Your phone number (optional)"} />
        </View>
      </ScrollView>
      {/* View 10 */}
      <CustomButton
        title="Save Address"
        containerStyles={"mt-4 bg-green h-10"}
        textStyles={"text-white text-lg font-pregular"}
      />
    </View>
  );
};

export default ListAddress;
