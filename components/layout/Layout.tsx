import React, { FC, ReactNode } from "react";
import { Header } from "components";
import styled from "styled-components";

const LayoutContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
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
