import { Icon, Text, View } from "@/components/Themed";
import Border from "@/components/atom/Border";
import FlaotingTextInput from "@/components/atom/FlaotingTextInput";
import RadioButton from "@/components/atom/RadioButton";
import Colors from "@/constants/Colors";
import { IconNames } from "@/types/FontAwesomeIcon.type";
import React, { useMemo, useState } from "react";

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
        onPress: () => {
          console.log("Option 2 selected");
        },
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
      {/* View 1 */}
      <View className="justify-start items-start">
        <Text>Who you are ordering for?</Text>
        <RadioButton
          layout="row"
          radioButtons={radioButtons}
          containerStyle={{ margin: 0, padding: 0 }}
          onPress={(id: any) => {
            console.log("selected");
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
      <View className="mt-2 mb-4">
        <FlaotingTextInput label="Full Name" />
      </View>
      <FlaotingTextInput label=" Name" />
    </View>
  );
};

export default ListAddress;
