import React, { FC, useState } from "react";
import styled from "styled-components";

export const CardRadios: FC<{ types: Array<{ id: number; text: string }> }> = ({ types }) => {
  const [numberActive, setNumberActive] = useState(1);

  return (
    <ListLabels>
      {types.map(({ id, text }, i) => {
        return (
          <Label
            key={i}
            onClick={() => {
              console.log(id, text);
              setNumberActive(id);
            }}
            isActive={numberActive === id}
          >
            {text}
          </Label>
        );
      })}
    </ListLabels>
  );
};

const ListLabels = styled.div`
  display: flex;
  gap: 5px;
  background: #f3f3f3;
  border-radius: 10px;
  margin-bottom: 5px;
  padding: 3px;
`;
const Label = styled.div<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 auto;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.015em;
  padding: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "#fff" : "transparent")};
  user-select: none;
  box-shadow: ${(props) => props.isActive && "0px 2px 4px rgba(0, 0, 0, 0.04)"};
  border-radius: 5px;
`;
