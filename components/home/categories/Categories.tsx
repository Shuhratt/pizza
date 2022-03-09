import React from "react";
import styled from "styled-components";

const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;
const Categories = () => {
  return (
    <Navigation>
      <ul>
        <li>Все</li>
      </ul>
    </Navigation>
  );
};

export default Categories;
