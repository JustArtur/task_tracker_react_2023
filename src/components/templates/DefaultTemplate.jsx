import React from "react";
import styled from "styled-components";
import Header from "../molecules/Header";
import Footer from "../molecules/Footer";

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
