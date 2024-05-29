import Colors from "@/constants/Colors";
import { useGlobalContext } from "@/context/GlobalContext.context";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Icon, Text, View } from "../Themed";
import Border from "../atom/Border";
import CartActionLabel from "../molecule/CartActionLabel";
import CartListPage from "./CartListPage";

const CartList = () => {
  const { cart, updateQuantity, isLogged } = useGlobalContext();
  const [cartLength, setCartLength] = useState(cart.length);

  const onIncrement = (item: any) => {
    updateQuantity(item.productId, item.quantity + 1);
  };
  const onDecrement = (item: any) => {
    updateQuantity(item.productId, item.quantity - 1);
  };

  return (
    <>
      <View
        className={` h-[30%] m-4 rounded-2xl`}
        lightColor={Colors.whiteSecondary}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className=" p-2 ">
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
                <Border />
                <View
                  key={index}
                  className="w-full justify-between flex-row items-center h-[45px]"
                >
                  <Icon name="user" size={40} className="p-2" />
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
      <View className="absolute bottom-0 w-full">
        <CartListPage />
      </View>
    </>
  );
};

export default CartList;
