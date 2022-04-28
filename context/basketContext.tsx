export {};
// import React, {createContext, Dispatch, FC, ReactNode, useState, SetStateAction, useContext} from "react";
// import type { CardPropsItem } from "@components/home/card/Card.props";
//
// type BasketModel = {
//   listBasket: CardPropsItem[];
//   setListBasket?: Dispatch<SetStateAction<Array<CardPropsItem>>>;
// };
//
// const BasketContext = createContext<BasketModel>({
//   listBasket: [],
//   setListBasket: () => {},
// });
//
// export const useBasket = () => {
//   return useContext(BasketContext)
// }
// export const BasketContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
//   const [listBasket, setListBasket] = useState<Array<CardPropsItem>>([]);
//   return <BasketContext.Provider value={{ setListBasket, listBasket }}>{children}</BasketContext.Provider>;
// };
