import React, { FC, ReactNode } from "react";
import { Header } from "components";
import styled from "styled-components";

const LayoutContainer = styled.div`
  max-width: 1420px;
  width: 100%;
  margin: 20px auto;
  background: #fff;
  border-radius: 20px;
  padding: 0 20px 60px;
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
