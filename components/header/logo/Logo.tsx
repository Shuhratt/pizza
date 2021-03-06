import React, { FC, memo } from "react";
import Link from "next/link";
import LogoSvg from "@public/icons/logo.svg";
import styled from "styled-components";

const Logo: FC<{}> = memo(() => {
  console.log("Render Logo");
  return (
    <LogoContainer>
      <Link href={"/"}>
        <a>
          <LogoSvg />
          <LogoText>
            <span>REACT PIZZA</span>
            <span>самая вкусная пицца во вселенной</span>
          </LogoText>
        </a>
      </Link>
    </LogoContainer>
  );
});

export default Logo;

const LogoContainer = styled.div`
  display: flex;

  > a {
    display: flex;
    align-items: center;
  }
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  span {
    &:first-child {
      font-weight: bold;
    }
  }
`;
