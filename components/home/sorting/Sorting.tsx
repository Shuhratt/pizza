import React, { Dispatch, FC, SetStateAction, useState } from "react";
import ArrowSvg from "@public/icons/arrow.svg";
import styled from "styled-components";
import { Arrow, SortingBox, SortingBoxRel } from "@components/home/sorting/SortingStyled";

const ListBox: FC<{ list: Array<string>; setIsOpen: Dispatch<SetStateAction<boolean>>; className?: string }> = ({
  list,
  className,
  setIsOpen,
}) => {
  return (
    <div
      className={className}
      onClick={(e) => {
        const target = e.target as HTMLElement;
        console.log(target.getAttribute("data-id"));
        setIsOpen(false);
      }}
    >
      {list.map((text, i) => {
        return (
          <div key={i} data-id={++i}>
            {text}
          </div>
        );
      })}
    </div>
  );
};

const ListBoxStyled = styled(ListBox)`
  position: absolute;
  top: calc(100% + 10px);
  left: 42%;
  right: 0;
  background: #ffffff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.09);
  border-radius: 10px;

  > div {
    padding: 10px 14px;
    font-size: 14px;
    line-height: 17px;
    cursor: pointer;

    &.active,
    &:hover {
      background: rgba(254, 95, 30, 0.05);
      font-weight: bold;
      color: #fe5f1e;
    }
  }
`;

const Sorting: FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpenSortClicked = () => setIsOpen((v) => !v);

  return (
    <SortingBoxRel>
      <SortingBox onClick={onOpenSortClicked}>
        <Arrow isRotate={isOpen}>
          <ArrowSvg />
        </Arrow>
        <span>Сортировка по:</span>
        <span>популярности</span>
      </SortingBox>
      {isOpen && <ListBoxStyled list={["популярности", "по цене", "по алфавиту"]} setIsOpen={setIsOpen} />}
    </SortingBoxRel>
  );
};

export default Sorting;
