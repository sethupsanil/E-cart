import { useGlobalContext } from "@/context/GlobalContext.context";
import { useHaptic } from "@/hooks/useHaptic.hook";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "../Themed";
import CustomButton from "../atom/CustomButton";
import CartActionLabel from "../molecule/CartActionLabel";

const CartListPage = () => {
  const { cart, updateQuantity, isLogged } = useGlobalContext();
  console.log(cart);
  const hapticSelection = useHaptic();
  const [cartLength, setCartLength] = useState(0);
  const [showCartDetails, setShowCartDetails] = useState(false);

  const handleOnPress = () => {
    // hapticSelection();
  };
  const handleShowCartList = () => {
    setShowCartDetails((prev) => !prev);
  };
  useEffect(() => {
    setCartLength(cart.length);
  }, [cart]);

  const onIncrement = (item: any) => {
    updateQuantity(item.productId, item.quantity + 1);
  };
  const onDecrement = (item: any) => {
    updateQuantity(item.productId, item.quantity - 1);
  };
  const onNextHandler = () => {
    if (!isLogged) router.push("/pages/Register");
    else {
      Alert.alert("You have already logged in");
    }
  };
  if (cart.length === 0) return null;
  return (
    <>
      {showCartDetails && (
        <>
          <View
            className={`max-h-[380px] bg-white-200 shadow-lg 
       shadow-black-100 flex-row  rounded-tr-md rounded-tl-md`}
          >
            <ScrollView showsVerticalScrollIndicator={false}>
              <View className="bg-white-100 flex-1 p-2 m-2 rounded-md">
                {/* Delivery time wrapper */}
                <View className=" justify-start flex-row items-center gap-2">
                  <Icon name="clock-o" size={40} />
                  <View className="justify-start">
                    <Text className="text-lg font-pbold ">
                      Delivery in 9 minutes
                    </Text>
                    <Text className="text-xs font-pregular ">
                      shipment of {cartLength} items
                    </Text>
                  </View>
                </View>
                {/* product wrapper */}
                {cart.map((item, index) => (
                  <View key={index}>
                    <View className="border-t-[1px] mt-2 border-white-200 w-full "></View>
                    <View
                      key={index}
                      className="w-full justify-between flex-row items-center h-[45px]"
                    >
                      <Icon name="user" size={40} />
                      <View className="justify-start w-40">
                        <Text className="text-md font-pregular text-ellipsis uppercase">
                          {item.name || "Product Name"}
                        </Text>
                      </View>
                      <CartActionLabel
                        quantity={item.quantity}
                        decrementQuantity={() => onDecrement(item)}
                        incrementQuantity={() => onIncrement(item)}
                      />
                    </View>
                  </View>
                ))}

                {/* product wrapper ends*/}
              </View>
            </ScrollView>
          </View>
        </>
      )}
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
                <AntDesign
                  name={`caret${!showCartDetails ? "up" : "down"}`}
                  size={12}
                  color="green"
                />
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
