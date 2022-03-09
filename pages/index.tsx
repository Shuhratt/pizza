import type { NextPage } from "next";
import React from "react";
import { Categories } from "components";
import { menu } from "@lib/constants/menu";

const Home: NextPage = () => {
  return <Categories list={menu} />;
};

export default Home;
