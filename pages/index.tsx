import type { NextPage } from "next";
import React from "react";
import { Categories, Sorting } from "components";
import { menu } from "@lib/constants/menu";
import { products } from "@lib/constants/products";
import styled from "styled-components";
import Card from "@components/home/card/Card";

const Home: NextPage = () => {
  return (
    <>
      <HomeHead>
        <Categories list={menu} />
        <Sorting />
      </HomeHead>
      <HomeCards>
        {products.map((props, index) => (
          <Card key={index} {...props} />
        ))}
      </HomeCards>
    </>
  );
};

const HomeHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomeCards = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 20px 0;
`;

export default Home;
