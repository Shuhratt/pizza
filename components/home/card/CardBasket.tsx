import React, { FC } from "react";
import styled from "styled-components";

export const CardBasket: FC<{ className?: string; count: number }> = ({ className, count }) => {
  return (
    <button className={className} onClick={() => {}}>
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
