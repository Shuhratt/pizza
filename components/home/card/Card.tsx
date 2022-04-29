import React, { FC, useMemo, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { CardRadios } from "./CardRadio";
import { AddBasket } from "@components/home/card/AddProductInBasket";
import type { CardPropsItem } from "@components/home/card/Card.props";

const Card: FC<CardPropsItem> = (props) => {
  console.log("Render Card");
  const { id, image, title, types, sizes, price } = props;
  const [typeId, setTypeId] = useState(1);
  const [sizeId, setSizeId] = useState(1);
  const selectProduct = useMemo(
    () => ({
      id,
      image,
      title,
      price,
      type: types.find((typeProduct) => typeProduct.id === typeId),
      size: sizes.find((sizeProduct) => sizeProduct.id === sizeId),
    }),
    [typeId, sizeId]
  );

  return (
    <CardBox>
      <CardImage>
        <Image src={`${image}${id}.png`} width={200} height={200} alt={title} />
      </CardImage>
      <CardTitle>{title}</CardTitle>
      <CardRadios types={types} setId={setTypeId} />
      <CardRadios types={sizes} setId={setSizeId} />
      <CardBottom>
        <span>
          от <b>{price} ₽</b>
        </span>
        <AddBasket product={selectProduct} />
      </CardBottom>
    </CardBox>
  );
};
export default Card;

//Styled
const CardBox = styled.div`
  display: grid;
`;
const CardTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
`;

const CardImage = styled.div`
  display: flex;
  justify-content: center;
`;

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  align-items: center;
`;
