import React, { FC } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addProduct } from "@slices/productsSlice";
import type { ProductProps } from "@components/order/Product";

type AddProductInBasketProps = { product: ProductProps; className?: string };

export const AddProductInBasket: FC<AddProductInBasketProps> = ({ product, className }) => {
  const dispatch = useDispatch();

  return (
    <button className={className} onClick={() => dispatch(addProduct(product))}>
      Добавить
    </button>
  );
};

export const AddBasket = styled(AddProductInBasket)`
  background: #ffffff;
  border: 1px solid #eb5a1e;
  border-radius: 30px;
  padding: 5px 15px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #eb5a1e;
`;
