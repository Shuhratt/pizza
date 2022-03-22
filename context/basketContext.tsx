import React, { createContext, Dispatch, FC, ReactNode, useState, SetStateAction } from "react";
import type { CardProps } from "@components/home/card/Card.props";

type BasketModel = {
  listBasket: CardProps[];
  setListBasket?: Dispatch<SetStateAction<Array<CardProps>>>;
};

export const BasketContext = createContext<BasketModel>({
  listBasket: [],
  setListBasket: () => {},
});

export const BasketContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [listBasket, setListBasket] = useState<Array<CardProps>>([]);
  return <BasketContext.Provider value={{ setListBasket, listBasket }}>{children}</BasketContext.Provider>;
};
