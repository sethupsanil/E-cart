import { router } from "expo-router";

import { errorHandler, generateRandomNumber } from "./helper.util";

const sendOtpPushNotification = (
  expoPushToken: string,
  redirect: boolean = true
): void => {
  try {
    if (expoPushToken === undefined) return;
    const randomNumber = generateRandomNumber();
    setTimeout(() => {
      fetch("https://api.expo.dev/v2/push/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          {
            to: expoPushToken,
            title: "Welcome to QuickIt",
            subtitle: `Your OTP is ${randomNumber}`,
            //   body: "No Data",
            badge: 1,
            sound: "default",
            data: JSON.stringify({ otp: randomNumber }),
          },
        ]),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          if (redirect) router.push("/otpVerification");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }, 30);
  } catch (error) {
    errorHandler(error);
  }
};

export { sendOtpPushNotification };
