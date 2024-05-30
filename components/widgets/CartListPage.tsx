import { useGlobalContext } from "@/context/GlobalContext.context";
import { useHaptic } from "@/hooks/useHaptic.hook";
import { AntDesign } from "@expo/vector-icons";
import { isDevice } from "expo-device";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from "../Themed";
import CustomButton from "../atom/CustomButton";

type CartListPageProps = {
  showBottomSheet?: React.Dispatch<React.SetStateAction<boolean>>;
};

const CartListPage = ({ showBottomSheet }: CartListPageProps) => {
  const { cart, isLogged, userMobile, setIsLogged, setUser } =
    useGlobalContext();

  const hapticSelection = useHaptic();
  const [cartLength, setCartLength] = useState(0);

  const handleOnPress = () => {
    // hapticSelection();
  };
  const handleShowCartList = () => {
    if (showBottomSheet) showBottomSheet((prev) => !prev);
  };
  useEffect(() => {
    setCartLength(cart.length);
    if (cart.length === 0 && showBottomSheet) showBottomSheet(false);
  }, [cart]);

  const onNextHandler = () => {
    if (!isLogged) router.push("/register");
    else {
      router.push("/pages/ListAddress");
    }
  };
  useEffect(() => {
    if (!isDevice) {
      setIsLogged(true);
      setUser({ mobile: "1234567890", name: "User", otp: "0000" });
    }
  }, []);
  if (cart.length === 0) return null;
  return (
    <>
      <View
        className="h-20 bg-white  pt-0 pb-2 pr-4 pl-2 shadow-lg
       shadow-black rounded-tr-md rounded-tl-md flex-row justify-between items-center"
      >
        {/* Cart wrapper */}
        <TouchableOpacity onPress={handleOnPress}>
          <View className="pl-2 flex flex-row gap-2">
            <View
              style={{
                borderWidth: 0.3,
                borderLeftColor: "white",
                borderColor: "#ccc",
                height: 40,
                width: 50,
                flexDirection: "row",
                flexWrap: "wrap",
                borderTopStartRadius: 5,
              }}
            >
              {Array.from({ length: cartLength > 4 ? 4 : cartLength }).map(
                (_, index, arr) =>
                  index === arr.length - 1 ? (
                    <Icon name="clock-o" size={40} key={index} />
                  ) : (
                    <View
                      key={index}
                      style={{
                        borderColor: "#ccc",
                        borderWidth: 0.5,
                        flex: 1,
                        height: "100%",
                        borderTopStartRadius: 5,
                        borderBottomStartRadius: 5,
                        borderRightColor: "white",
                      }}
                    />
                  )
              )}
            </View>
            <TouchableOpacity onPress={handleShowCartList}>
              <Text className="text-lg font-pregular">
                {cartLength} items{" "}
                <AntDesign name={`caretup`} size={12} color="green" />
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <CustomButton
          title={"Next"}
          containerStyles={"bg-green-100 w-[100]"}
          textStyles={"text-white-100 font-pbold"}
          handlePress={onNextHandler}
        />
      </View>
    </>
  );
};

export default CartListPage;
