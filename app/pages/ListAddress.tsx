import { Text, View } from "@/components/Themed";
import Border from "@/components/atom/Border";
import CustomButton from "@/components/atom/CustomButton";
import FloatingTextInput from "@/components/atom/FloatingTextInput";
import RadioButton from "@/components/atom/RadioButton";
import Colors from "@/constants/Colors";
import React, { useMemo, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  useColorScheme,
} from "react-native";
import AddressList from "./components/addressList";

const ListAddress = () => {
  const theme = useColorScheme();
  const radioButtons = useMemo(
    () => [
      {
        id: "1",
        label: "Myself",
        value: "myself",
        borderColor: Colors.green,
        color: Colors.green,
        labelStyle: { color: theme === "dark" ? "#fff" : "#000" },
      },
      {
        id: "2",
        label: "Other",
        value: "other",
        borderColor: Colors.green,
        color: Colors.green,
        labelStyle: { color: theme === "dark" ? "#fff" : "#000" },
      },
    ],
    []
  );

  const addressList = useMemo(
    () => [
      { title: "Home", icon: "home" },
      { title: "Work", icon: "building" },
      { title: "Hotel", icon: "hotel" },
      { title: "Other", icon: "location-arrow" },
    ],
    []
  );
  const [selectedId, setSelectedId] = useState("2");
  const [activeIndex, setActiveIndex] = useState(0);
  const addressSelectionHandler = (index: number) => {
    console.log(index);
    setActiveIndex(index);
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={120}
    >
      <View className="w-full h-full pl-2">
        <View className="justify-center">
          <Text className="text-lg font-bold  pt-2">
            Enter complete address
          </Text>
        </View>
        <Border />
        <ScrollView showsVerticalScrollIndicator={false}>
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
              {addressList.map((item: any, index) => (
                <AddressList
                  icon={item.icon}
                  title={item.title}
                  key={index}
                  index={index}
                  activeIndex={activeIndex}
                  onPressHandler={addressSelectionHandler}
                />
              ))}
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
            <FloatingTextInput
              label={"Your phone number (optional)"}
              keyboardType="phone-pad"
            />
          </View>
        </ScrollView>
        {/* View 10 */}
        <CustomButton
          title="Save Address"
          containerStyles={"mt-4 bg-green h-10"}
          textStyles={"text-white text-lg font-pregular"}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default ListAddress;
