import React, { FC, ReactNode, useState } from "react";
import { Header } from "components";
import styled from "styled-components";
import { BasketContextProvider } from "@context/basketContext";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  console.log("Render Layout");
  const [state, setState] = useState(false); // для проверки оптимизации

  return (
    <BasketContextProvider>
      <LayoutContainer>
        <Header />
        <main onClick={() => setState((v) => !v)}>{children}</main>
      </LayoutContainer>
    </BasketContextProvider>
  );
};

export default Layout;

const LayoutContainer = styled.div`
  max-width: calc(100vw - 10%);
  width: 100%;
  margin: auto;
  background: #fff;
  border-radius: 20px;
  padding: 0 20px;
  min-height: 100vh;
`;
