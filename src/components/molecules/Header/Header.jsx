import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../atoms/Button";

const HeaderWrapper = styled.header`
  background-color: #f2f2f2;
  padding: 20px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

// const Title = styled.h1`
//   color: #333;
//   font-size: 24px;
//   margin-bottom: 10px;
// `;

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Button label="Task tracker" />
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
