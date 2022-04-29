import React, { FC } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { clearAll } from "@slices/productsSlice";
import ClearSvg from "@public/icons/clear.svg";
import BasketSvg from "@public/icons/basket2.svg";

const HeaderOrder: FC<{}> = () => {
  const dispatch = useDispatch();
  return (
    <HeaderBasket>
      <H1>
        <BasketSvg />
        Корзина
      </H1>
      <Button type="button" onClick={() => dispatch(clearAll())}>
        <ClearSvg />
        Очистить корзину
      </Button>
    </HeaderBasket>
  );
};

const HeaderBasket = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  margin: 0;
  display: flex;
  align-items: center;
`;

export default HeaderOrder;
