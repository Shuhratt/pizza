import React, { FC } from "react";
import BasketSvg from "@public/icons/basket.svg";
import styled from "styled-components";

const BasketBox = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background: #fe5f1e;
  border-radius: 50px;
  cursor: pointer;
`;

const BasketText = styled.span`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #fff;

  &:first-child {
    border-right: 1px solid rgba(255, 255, 255, 0.25);
    padding-right: 5px;
    margin-right: 5px;
  }

  span {
    margin-left: 5px;
  }
`;

const Basket: FC<{}> = () => {
  return (
    <BasketBox onClick={() => console.log("1")}>
      <BasketText>0 ₽</BasketText>
      <BasketText>
        <BasketSvg />
        <span>0</span>
      </BasketText>
    </BasketBox>
  );
};
export default Basket;
