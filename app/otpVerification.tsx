import { useGlobalContext } from "@/context/GlobalContext.context";
import { usePushNotification } from "@/hooks/usePushNotification.hook";
import { sendOtpPushNotification } from "@/utils/pushNotificationApi.util";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from "react-native";

const otpVerification = () => {
  const [color, setColor] = useState("#0d831f");
  const [timer, setTimer] = useState(30);
  const [otp, setOtp] = useState("");
  const [userInput, setUserInput] = useState("");
  const [showResend, setShowResend] = useState(false);
  const { userMobile, setIsLogged, setUser } = useGlobalContext();
  const { expoPushToken, notification } = usePushNotification();

  const codeHandler = (code: string | number) => {
    if (code.toString() != otp.toString()) {
      Vibration.vibrate(10);
      setColor("#f00");
      //   setUserInput("");
    } else {
      setTimeout(() => {
        setIsLogged(true);
        setUser({ mobile: userMobile, name: "User", otp: code });
        setColor("#0d831f");
        router.replace("/");
      }, 2000);
    }
  };
  const handleCodeChange = (input: number | string) => {
    setColor("#0d831f");
    //FIXME: : just a work around to fix otp filled event not triggering
    setUserInput((prev) => prev + input.toString());
  };
  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
    if (timer == 0) {
      setShowResend(true);
    }
  }, [timer]);

  useEffect(() => {
    if (notification) {
      setOtp(notification.request.content.data.otp);
      setUserInput(notification.request.content.data.otp);
      codeHandler(otp);
    }
  }, [notification]);

  useEffect(() => {
    if (userInput.length === 4) {
      codeHandler(userInput);
    }
  }, [userInput]);
  return (
    <View className="flex-1 items-center p-4">
      <Text className="text-sm font-pregular">
        We have sent a verification code to
      </Text>
      <Text className="text-sm font-psemibold">+91 {userMobile}</Text>
      <OTPInputView
        style={{ width: "80%", height: 200 }}
        pinCount={4}
        autoFocusOnLoad
        codeInputFieldStyle={[styles.underlineStyleBase, { color }]}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeChanged={(input) => handleCodeChange(input)}
        placeholderCharacter={"*"}
        placeholderTextColor={"#000"}
        code={otp.toString()}
        onCodeFilled={codeHandler}
      />
      {!showResend && <Text>Resend OTP in: {timer}</Text>}
      {showResend && (
        <TouchableOpacity
          onPress={() => {
            setTimer(30);
            setShowResend(false);
            sendOtpPushNotification(expoPushToken, false);
          }}
        >
          <Text>Resend OTP</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default otpVerification;
const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: "#0d831f",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    // color: "#0d831f",
  },

  underlineStyleHighLighted: {
    borderColor: "#0d831f",
  },
});
