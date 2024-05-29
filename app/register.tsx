import { Text, View } from "@/components/Themed";
import CustomButton from "@/components/atom/CustomButton";
import Colors from "@/constants/Colors";
import { useGlobalContext } from "@/context/GlobalContext.context";
import { usePushNotification } from "@/hooks/usePushNotification.hook";
import { sendOtpPushNotification } from "@/utils/pushNotificationApi.util";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  useColorScheme,
} from "react-native";

const register = () => {
  const { userMobile, setUserMobile } = useGlobalContext();
  const { expoPushToken, notification } = usePushNotification();
  const [isValid, setValid] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const theme = useColorScheme();
  useEffect(() => {
    if (userMobile && userMobile.length === 10) {
      setValid(true);
      Keyboard.dismiss();
    } else {
      setValid(false);
    }
  }, [userMobile]);

  const clickHandler = () => {
    setLoading(true);
    setTimeout(() => {
      sendOtpPushNotification(expoPushToken);
      setLoading(false);
    }, 1555);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1">
        <ImageBackground
          source={require("../assets/images/profile.png")}
          className="w-full h-80 rounded-[33px] my-5 overflow-hidden shadow-lg shadow-black/40"
        />
        <View className="justify-end p-5">
          <Text
            className="text-2xl font-bold text-center "
            lightColor={Colors.light.text}
          >
            India's No.1 Online Store
          </Text>
          <Text className="text-center text-green text-sm">
            Log in or sign up
          </Text>
          <TextInput
            keyboardType="phone-pad"
            maxLength={10}
            onChangeText={(text) => setUserMobile(text)}
            className={`border-[1px] h-10 rounded-md p-2 my-2 ${
              theme === "dark"
                ? "border-white text-white"
                : "border-black text-black"
            }`}
            placeholder="Enter mobile"
          />
          <CustomButton
            title="Continue"
            handlePress={clickHandler}
            isLoading={isLoading}
            isDisabled={!isValid}
            containerStyles={`bg-white w-full`}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default register;
