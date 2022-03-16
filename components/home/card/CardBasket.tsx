import React, { FC, useContext } from "react";
import styled from "styled-components";
import { BasketContext } from "@context/basketContext";

export const CardBasket: FC<{ className?: string; count: number }> = ({ className, count }) => {
  const { setAddCountItems } = useContext(BasketContext);

  return (
    <button className={className} onClick={() => setAddCountItems && setAddCountItems((prev) => prev + 1)}>
      Добавить {count > 0 && count}
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
