import React, { FC } from "react";
import styled from "styled-components";
import Image from "next/image";
import MinusSvg from "@public/icons/minus.svg";
import PlusSvg from "@public/icons/plus.svg";
import CloseSvg from "@public/icons/close.svg";

export type ProductProps = {
  id: number;
  image: string;
  title: string;
  price: number;
  type: { id: number; text: string } | undefined;
  size: { id: number; text: string } | undefined;
  count?: number;
};

const Product: FC<ProductProps> = (props) => {
  const { id, image, title, price, type, size } = props;

  return (
    <ProductCard>
      <ProductImage>
        <Image src={`${image}${id}.png`} width={100} height={100} alt={title} />
      </ProductImage>
      <ProductName>
        <h3>{title}</h3>
        <p>
          {type?.text} тесто, {size?.text}
        </p>
      </ProductName>
      <ProductCount>
        <button type="button" onClick={() => {}} aria-label={"Уменьшить на 1"} title={"Уменьшить на 1"}>
          <MinusSvg />
        </button>
        count
        <button type="button" onClick={() => {}} aria-label="Увеличить на 1" title={"Увеличить на 1"}>
          <PlusSvg />
        </button>
      </ProductCount>
      <ProductPrice>{price}</ProductPrice>
      <ProductRemoveButton type="button" onClick={() => {}} aria-label="Удалить товар" title={"Удалить товар"}>
        <CloseSvg />
      </ProductRemoveButton>
    </ProductCard>
  );
};

const ProductCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:nth-last-child) {
    margin-bottom: 1rem;
  }
`;

const ProductImage = styled.div`
  margin-right: 2%;
`;
const ProductName = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;

  > * {
    margin: 0;
  }
`;
const ProductCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 5%;
`;
const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: 0 5%;
`;
const ProductRemoveButton = styled.button``;

export default Product;
