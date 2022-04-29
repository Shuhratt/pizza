import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { FooterOrder, HeaderOrder, Product } from "components";
import type { NextPage } from "next";

const Index: NextPage = () => {
  const products = useSelector((state: RootState) => state.productsInfo.products);

  return (
    <div>
      <HeaderOrder />
      <Product />
      <FooterOrder />
    </div>
  );
};

export default Index;
