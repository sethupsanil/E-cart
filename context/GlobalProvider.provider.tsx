import React, { ReactNode, useState } from "react";

import { Product } from "@INTERFACES/Product.interface";
import GlobalContext from "./GlobalContext.context";

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null); // Update 'any' with the actual user type
  const [loading, setLoading] = useState<boolean>(false);
  const [showBottomSheet, setShowBottomSheet] = useState<boolean>(false);
  const [selectedProductData, setSelectedProductData] = useState<any>(null); // Update 'any' with the actual type
  const [cart, setCart] = useState<Product[]>([]);
  const [selectedUnit, setUnit] = useState<any[]>([]); // Update 'any' with the actual type
  const [userMobile, setUserMobile] = useState<string | null>(null);
  const [location, setLocation] = useState<any>(null); // Update 'any' with the actual type

  const addToCart = (
    productId: string,
    quantity: number,
    price: number,
    name: string
  ) => {
    setCart((prevCart) => [...prevCart, { productId, quantity, price, name }]);
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCart((prevCart) => {
      if (quantity === 0) {
        return prevCart.filter((item) => item.productId !== productId);
      } else {
        return prevCart.map((item) =>
          item.productId === productId ? { ...item, quantity } : item
        );
      }
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        setUser,
        loading,
        setLoading,
        showBottomSheet,
        setShowBottomSheet,
        selectedProductData,
        setSelectedProductData,
        addToCart,
        updateQuantity,
        cart,
        setCart,
        selectedUnit,
        setUnit,
        userMobile,
        setUserMobile,
        location,
        setLocation,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
