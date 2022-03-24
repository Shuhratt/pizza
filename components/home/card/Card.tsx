import React, { FC } from "react";
import Image from "next/image";
import styled from "styled-components";
import { CardRadios } from "./CardRadio";
import type { CardPropsItem } from "@components/home/card/Card.props";
import { Basket } from "@components/home/card/CardBasket";

const Card: FC<CardPropsItem> = (props) => {
  const { id, image, title, types, sizes, price, propss } = props;

  return (
    <CardBox>
      <CardImage>
        <Image src={`${image}${id}.png`} width={200} height={200} />
      </CardImage>
      <CardTitle>{title}</CardTitle>
      <CardRadios types={types} />
      <CardRadios types={sizes} />
      <CardBottom>
        <span>
          от <b>{price} ₽</b>
        </span>
        <Basket item={props} />
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
