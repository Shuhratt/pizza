import styled from "styled-components";

export const SortingBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  position: relative;

  span {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.015em;

    &:first-of-type {
      font-weight: bold;
      margin-right: 5px;
      margin-left: 5px;
    }

    &:last-of-type {
      color: #fe5f1e;
      text-decoration: underline;
    }
  }
`;
export const SortingBoxRel = styled.div`
  position: relative;
`;
export const Arrow = styled.div<{ isRotate: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease;
  transform: ${(props) => (props.isRotate ? "rotate(0)" : "rotate(180deg)")};
`;
