import React, { createContext, Dispatch, FC, ReactNode, useState } from "react";
type BasketModel = {
  countItems: number;
  priceAll: number;
  setAddCountItems?: Dispatch<React.SetStateAction<number>>;
};

export const BasketContext = createContext<BasketModel>({
  countItems: 0,
  priceAll: 0,
  setAddCountItems: () => {},
});

export const BasketContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [countItems, setAddCountItems] = useState(0);
  const [priceAll, setPriceAll] = useState(0);
  return <BasketContext.Provider value={{ countItems, priceAll, setAddCountItems }}>{children}</BasketContext.Provider>;
};
