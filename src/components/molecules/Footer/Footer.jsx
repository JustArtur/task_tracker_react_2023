import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #f2f2f2;
  padding: 20px;
  bottom: 0;
  left: 0;
  width: 100%;
  justify-content: end;
  position: absolute;
`;

const Text = styled.p`
  color: #333;
  font-size: 16px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Text>© 2023 Website created by Artur. All rights reserved.</Text>
    </FooterWrapper>
  );
};

export default Footer;
