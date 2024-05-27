import Colors from "@/constants/Colors";
import { useGlobalContext } from "@/context/GlobalContext.context";
import { AddToCartButtonProps } from "@/interfaces/AddToCartButton.interface";
import CustomButton from "@COMPONENTS/atom/CustomButton";
import CartActionLabel from "@COMPONENTS/molecule/CartActionLabel";
import React, { useEffect, useState } from "react";

const AddToCartButton = ({ data }: { data: AddToCartButtonProps }) => {
  const { addToCart, cart, updateQuantity } = useGlobalContext();
  const [showActionButton, setShowActionButton] = useState(false);
  const [cartData, setCartData] = useState(
    cart.find((item) => item.productId.toString() === data.productId.toString())
  );

  const handleIncrement = () => {
    let quantity = cartData?.quantity || 0;
    const maxQuantity = data.countInStock || 1;
    updateQuantity(
      data.productId.toString(),
      quantity + 1 > maxQuantity ? maxQuantity : quantity + 1
    );
  };

  const handleDecrement = () => {
    let quantity = cartData?.quantity || 1;
    updateQuantity(data.productId.toString(), quantity - 1);
  };

  const handleAddToCart = () => {
    addToCart(data.productId.toString(), 1, data.price, data.name);
    setShowActionButton(true);
  };
  useEffect(() => {
    const cartData = cart.find(
      (item) => item.productId === data.productId.toString()
    );
    if (cartData) {
      setCartData(cartData);
      setShowActionButton(true);
    } else {
      setShowActionButton(false);
    }
  }, [cart, cartData]);

  if (showActionButton)
    return (
      <CartActionLabel
        decrementQuantity={handleDecrement}
        incrementQuantity={handleIncrement}
        quantity={cartData?.quantity || 1}
      />
    );

  return (
    <CustomButton
      title="Add"
      containerStyles={"h-[33px] w-[56px] "}
      lightBackgroundColor={Colors.greenShade}
      darkBackgroundColor={Colors.greenShade}
      handlePress={handleAddToCart}
    />
  );
};

export default AddToCartButton;
