import React from "react";
import styled from "styled-components";

export const FOOTER_HEIGHT = "20px";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: cadetblue;
  padding: 1rem;
  height: ${FOOTER_HEIGHT};
  right: 0;
  left: 0;
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
