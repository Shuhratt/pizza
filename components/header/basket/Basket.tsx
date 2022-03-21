import React, { FC, useContext } from "react";
import BasketSvg from "@public/icons/basket.svg";
import styled from "styled-components";
import { BasketContext } from "@context/basketContext";

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
  const { listBasket } = useContext(BasketContext);
  const priceAll = listBasket.reduce((acc, el) => (acc += el.price), 0);

  return (
    <BasketBox onClick={() => console.log("1")}>
      <BasketText>{priceAll} ₽</BasketText>
      <BasketText>
        <BasketSvg />
        <span>{listBasket.length}</span>
      </BasketText>
    </BasketBox>
  );
};
export default Basket;
