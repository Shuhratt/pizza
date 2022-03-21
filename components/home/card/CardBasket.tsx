import React, { FC, useContext } from "react";
import { BasketContext } from "@context/basketContext";
import styled from "styled-components";
import type { CardProps } from "@components/home/card/Card.props";

export const CardBasket: FC<{ className?: string; item: CardProps }> = ({ className, item }) => {
  const { setListBasket } = useContext(BasketContext);

  // @ts-ignore
  return (
    <button className={className} onClick={() => setListBasket && setListBasket((prev) => [...prev, item])}>
      Добавить
    </button>
  );
};

export const Basket = styled(CardBasket)`
  background: #ffffff;
  border: 1px solid #eb5a1e;
  border-radius: 30px;
  padding: 5px 15px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #eb5a1e;
`;
