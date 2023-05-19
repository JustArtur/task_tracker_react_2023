import React from "react";
import styled from "styled-components";
import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
import { HEADER_HEIGHT } from "../molecules/Header/Header";
import { FOOTER_HEIGHT } from "../molecules/Footer/Footer";

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT});
  overflow: auto;
`;
const DefaultTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </>
  );
};

export default DefaultTemplate;
