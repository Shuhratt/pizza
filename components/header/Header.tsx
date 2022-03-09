import React, { FC } from "react";
import { Basket, Logo } from "components";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 35px 0;
`;

const Header: FC<{}> = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Basket />
    </HeaderContainer>
  );
};
export default Header;
