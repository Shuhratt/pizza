import React, { FC } from "react";
import { Product } from "@components/index";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Products: FC<{}> = () => {
  const products = useSelector((state: RootState) => state.productsInfo.products);

  return (
    <>
      {products.map((product, i) => (
        <Product {...product} key={i} />
      ))}
    </>
  );
};

export default Products;
