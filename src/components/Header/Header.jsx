import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: #f2f2f2;
  padding: 20px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const Title = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Task Tracker</Title>
    </HeaderWrapper>
  );
};

export default Header;
