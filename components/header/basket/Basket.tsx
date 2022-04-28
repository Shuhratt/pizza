import React, { FC, memo } from "react";
import BasketSvg from "@public/icons/basket.svg";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const Basket: FC<{}> = memo(() => {
  console.log("Render Basket");
  const products = useSelector((state: RootState) => state.productsInfo.products);
  const priceAll = products.reduce((acc, el) => (acc += el.price), 0);

  const router = useRouter();
  return (
    <BasketBox onClick={() => router.push("/order")}>
      <BasketText>{priceAll} ₽</BasketText>
      <BasketText>
        <BasketSvg />
        <span>{products.length}</span>
      </BasketText>
    </BasketBox>
  );
});
export default Basket;

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
