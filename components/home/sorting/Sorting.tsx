import React, { FC, useState } from "react";
import { Arrow, SortingBox, SortingBoxRel } from "@components/home/sorting/SortingStyled";
import { sortList } from "@lib/constants/sort";
import { SortingProps } from "@components/home/sorting/Sorting.props";
import styled from "styled-components";
import ArrowSvg from "@public/icons/arrow.svg";

const ListBox: FC<SortingProps> = (props) => {
  const { list, className, setIsOpen, setIdSortLabel } = props;

  return (
    <div
      className={className}
      onClick={(e) => {
        const target = e.target as HTMLElement;
        setIdSortLabel(Number(target.getAttribute("data-id")));
        setIsOpen(false);
      }}
    >
      {list.map(({ id, text }) => {
        return (
          <div key={id} data-id={id}>
            {text}
          </div>
        );
      })}
    </div>
  );
};

const Sorting: FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpenSortClicked = () => setIsOpen((v) => !v);
  const [idSortLabel, setIdSortLabel] = useState(1);
  const text = sortList.find((el) => el.id === idSortLabel)?.text;

  return (
    <SortingBoxRel>
      <SortingBox onClick={onOpenSortClicked}>
        <Arrow isRotate={isOpen}>
          <ArrowSvg />
        </Arrow>
        <span>Сортировка по:</span>
        <span>{text}</span>
      </SortingBox>
      {isOpen && <ListBoxStyled list={sortList} setIsOpen={setIsOpen} setIdSortLabel={setIdSortLabel} />}
    </SortingBoxRel>
  );
};

export default Sorting;

const ListBoxStyled = styled(ListBox)`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  right: 0;
  background: #ffffff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  width: 100%;

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
