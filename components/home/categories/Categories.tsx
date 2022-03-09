import React, { FC, useState } from "react";
import styled from "styled-components";
import { CategoriesProps } from "./Categories.props";
import cn from "classnames";

const Navigation = styled.nav`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    gap: 10px;

    li {
      padding: 13px 15px;
      background: #f9f9f9;
      border-radius: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-weight: bold;
      transition: background 0.1s ease, color 0.1s ease;
      user-select: none;

      &.active {
        background: #333;
        color: #fff;
      }
    }
  }
`;

const Categories: FC<{ list: CategoriesProps[] }> = ({ list }) => {
  const [activeId, setActiveId] = useState(1);
  return (
    <Navigation>
      <ul>
        {list.map(({ id, text, href }) => {
          const classNameLi = cn({
            active: activeId == id,
          });

          return (
            <li key={id} onClick={() => setActiveId(id)} className={classNameLi}>
              {text}
            </li>
          );
        })}
      </ul>
    </Navigation>
  );
};

export default Categories;
