import React, { FC, ReactNode } from "react";
import { Header } from "components";
import styled from "styled-components";

const LayoutContainer = styled.div`
  max-width: calc(100vw - 10%);
  width: 100%;
  margin: auto;
  background: #fff;
  border-radius: 20px;
  padding: 0 20px;
  min-height: 100vh;
`;

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <main>{children}</main>
    </LayoutContainer>
  );
};

export default Layout;
