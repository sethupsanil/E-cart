import { createContext, useContext } from "react";

import { GlobalContextProps } from "@/interfaces/GlobalContextProps.interface";

// Create the context with an undefined initial value
const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

export default GlobalContext;
