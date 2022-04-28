import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Index = () => {
  const products = useSelector((state: RootState) => state.productsInfo.products);

  return (
    <div>
      Корзина : <code>{JSON.stringify(products)}</code>
    </div>
  );
};

export default Index;
