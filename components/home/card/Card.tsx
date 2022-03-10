import React, { FC } from "react";
import Image from "next/image";

type CardProps = {
  id: number;
  image: string;
  title: string;
  type: Array<{ id: number; text: string }>;
  sizes: Array<{ id: number; text: string }>;
};

const Card: FC<CardProps> = ({ id, image, title }) => {
  return (
    <div>
      <Image src={`${image}${id}.png`} width={200} height={200} />
      {title}
    </div>
  );
};

export default Card;
