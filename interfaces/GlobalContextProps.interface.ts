import { Dispatch, SetStateAction } from "react";

import { Product } from "./Product.interface";

export interface GlobalContextProps {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  user: any; // Define the actual type if you have a user object structure
  setUser: Dispatch<SetStateAction<any>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  showBottomSheet: boolean;
  setShowBottomSheet: Dispatch<SetStateAction<boolean>>;
  selectedProductData: any; // Define the actual type if you have a structure
  setSelectedProductData: Dispatch<SetStateAction<any>>;
  addToCart: (
    productId: string,
    quantity: number,
    price: number,
    name: string
  ) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
  selectedUnit: any[]; // Define the actual type if you have a structure
  setUnit: Dispatch<SetStateAction<any[]>>;
  userMobile: string | null;
  setUserMobile: Dispatch<SetStateAction<string | null>>;
  location: any; // Define the actual type if you have a structure
  setLocation: Dispatch<SetStateAction<any>>;
}
