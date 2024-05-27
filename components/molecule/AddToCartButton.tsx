import Colors from "@/constants/Colors";
import { AddToCartButtonProps } from "@/interfaces/AddToCartButton.interface";
import CustomButton from "@COMPONENTS/atom/CustomButton";
import CartActionLabel from "@COMPONENTS/molecule/CartActionLabel";
import React, { useEffect, useState } from "react";

const AddToCartButton = ({ data }: { data: AddToCartButtonProps }) => {
  const [showActionBUtton, setShowActionBUtton] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setQuantity((prev) => prev - 1);
  };

  useEffect(() => {
    console.log(data);
    if (quantity === 0) {
      setShowActionBUtton(false);
      setQuantity(1);
    }
  }, [quantity]);

  if (showActionBUtton)
    return (
      <CartActionLabel
        decrementQuantity={handleDecrement}
        incrementQuantity={handleIncrement}
        quantity={quantity}
      />
    );

  return (
    <CustomButton
      title="Add"
      containerStyles={"h-[33px] w-[56px] "}
      lightBackgroundColor={Colors.greenShade}
      darkBackgroundColor={Colors.greenShade}
      handlePress={() => setShowActionBUtton(true)}
    />
  );
};

export default AddToCartButton;
