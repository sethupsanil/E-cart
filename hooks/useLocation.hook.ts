import { useEffect, useState } from "react";
import { Linking, Platform } from "react-native";

import * as Location from "expo-location";

import { useGlobalContext } from "@/context/GlobalContext.context";
import { ErrorMessageType, LocationType } from "@/types/useLocation.type";

export const useLocation = () => {
  const { location, setLocation } = useGlobalContext() as {
    location: LocationType;
    setLocation: (location: LocationType) => void;
  };

  const [errorMsg, setErrorMsg] = useState<ErrorMessageType>(null);

  const requestLocation = async (): Promise<void> => {
    if (Platform.OS === "ios" && errorMsg) {
      Linking.openURL("app-settings:");
      return;
    }

    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  useEffect(() => {
    requestLocation();
  }, []);

  return { location, errorMsg, requestLocation };
};
