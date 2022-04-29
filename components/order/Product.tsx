import React, { FC } from "react";
import styled from "styled-components";
import Image from "next/image";
import MinusSvg from "@public/icons/minus.svg";
import PlusSvg from "@public/icons/plus.svg";
import CloseSvg from "@public/icons/close.svg";

type Product = {};

const Product: FC<{}> = () => {
  return (
    <ProductBox>
      <ProductImage>
        image
        {/*<Image src={`${image}${id}.png`} width={200} height={200} />*/}
      </ProductImage>
      <ProductName>
        <h3>name</h3>
        <p>тонкое тесто, 26 см.</p>
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
      <ProductRemoveButton type="button" onClick={() => {}} aria-label="Удалить товар" title={"Удалить товар"}>
        <CloseSvg />
      </ProductRemoveButton>
    </ProductBox>
  );
};

const ProductBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:nth-last-child) {
    margin-bottom: 1rem;
  }
`;

const ProductImage = styled.div``;
const ProductName = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    margin: 0;
  }
`;
const ProductCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ProductRemoveButton = styled.button``;

export default Product;
