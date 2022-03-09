import type { NextPage } from "next";
import React from "react";
import { Categories, Sorting } from "components";
import { menu } from "@lib/constants/menu";
import styled from "styled-components";

const HomeHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Home: NextPage = () => {
  return (
    <HomeHead>
      <Categories list={menu} />
      <Sorting />
    </HomeHead>
  );
};

export default Home;
