import React, { FC } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const FooterOrder: FC<{}> = () => {
  const router = useRouter();
  return (
    <FooterOrderBox>
      <div>Всего пицц: 3 шт.</div>
      <div>Сумма заказа: 900 ₽</div>
      <Button type="button" onClick={() => router.push("/")} isGray>
        Вернуться назад
      </Button>
      <Button type="button" onClick={() => {}}>
        Оплатить сейчас
      </Button>
    </FooterOrderBox>
  );
};

const FooterOrderBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;

  > * {
    &:nth-child(1n) {
      justify-self: start;
    }

    &:nth-child(2n) {
      justify-self: end;
    }
  }
`;

const Button = styled.button<{ isGray?: boolean }>`
  padding: 1rem 2rem;
  border-width: 2px;
  border-style: solid;
  border-radius: 50px;
  font-size: 1rem;
  border-color: ${(props) => (props.isGray ? "#eee" : "#FE5F1E")};
  background-color: ${(props) => (props.isGray ? "transparent" : "#FE5F1E")};
  color: ${(props) => (props.isGray ? "#333" : "#fff")};
`;

export default FooterOrder;
