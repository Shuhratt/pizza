import React from "react";
import { FooterOrder, HeaderOrder, Products } from "components";
import type { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <div>
      <HeaderOrder />
      <Products />
      <FooterOrder />
    </div>
  );
};

export default Index;
