import React, { FC } from "react";
import styled from "styled-components";
import type { CardPropsItem } from "./Card.props";
import { useDispatch } from "react-redux";
import { addProduct } from "@slices/productsSlice";

export const CardBasket: FC<{ className?: string; item: CardPropsItem }> = ({ className, item }) => {
  const dispatch = useDispatch();

  return (
    <button className={className} onClick={() => dispatch(addProduct(item))}>
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
