import React, { useContext } from "react";
import { BasketContext } from "@context/basketContext";

const Index = () => {
  const { listBasket } = useContext(BasketContext);
  return (
    <div>
      Корзина : <code>{JSON.stringify(listBasket)}</code>
    </div>
  );
};

export default Index;
