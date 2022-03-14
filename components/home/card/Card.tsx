import React, { FC } from "react";
import Image from "next/image";
import styled from "styled-components";
import { CardRadios } from "./CardRadio";

type CardProps = {
  id: number;
  image: string;
  title: string;
  types: Array<{ id: number; text: string }>;
  sizes: Array<{ id: number; text: string }>;
  price: number;
};
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
`;

const CardBasket: FC<{}> = () => {
  return <button onClick={() => {}}>Добавить</button>;
};

const Basket = styled(CardBasket)`
  background: #ffffff;
  border: 1px solid #eb5a1e;
  box-sizing: border-box;
  border-radius: 30px;
`;

const Card: FC<CardProps> = ({ id, image, title, types, sizes, price }) => {
  return (
    <CardBox>
      <CardImage>
        <Image src={`${image}${id}.png`} width={200} height={200} />
      </CardImage>
      <CardTitle>{title}</CardTitle>
      <CardRadios types={types} />
      <CardRadios types={sizes} />
      <CardBottom>
        от {price} ₽
        <Basket />
      </CardBottom>
    </CardBox>
  );
};

export default Card;
