import React, { FC, useContext, memo, useMemo } from "react";
import BasketSvg from "@public/icons/basket.svg";
import styled from "styled-components";
import { BasketContext } from "@context/basketContext";
import { useRouter } from "next/router";

const Basket: FC<{}> = memo(() => {
  // memo не сработает с useContext (точнее useContext принудительно обновляет компонент)
  // Вариант 1 (предпочтительный): разделить контексты, которые не меняются вместе.
  // Вариант 2. Разделите компонент на две части и поместите memo между ними
  // https://github.com/facebook/react/issues/15156#issuecomment-474590693

  console.log("Render Basket");
  const { listBasket } = useContext(BasketContext); //force Update
  const priceAll = listBasket.reduce((acc, el) => (acc += el.price), 0);
  const router = useRouter();
  return (
    <BasketBox onClick={() => router.push("/order")}>
      <BasketText>{priceAll} ₽</BasketText>
      <BasketText>
        <BasketSvg />
        <span>{listBasket.length}</span>
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
