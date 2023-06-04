import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
import { HEADER_HEIGHT } from "../molecules/Header/Header";
import { FOOTER_HEIGHT } from "../molecules/Footer/Footer";
import Button from "../atoms/Button";

const MainContent = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  min-height: calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT});
  overflow: auto;
`;

const ButtonWrapper = styled.div`
  margin-top: 1rem;
  position: fixed;
  right: 10px;
`;

const DefaultTemplate = ({ children }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      {showScrollButton && (
        <ButtonWrapper>
          <Button label="Scroll to top" onClick={scrollToTop} color="cadetBlue" />
        </ButtonWrapper>
      )}
      <MainContent>{children}</MainContent>
      <Footer />
    </>
  );
};

export default DefaultTemplate;
