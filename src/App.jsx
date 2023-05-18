import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const MainContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const List = styled.ul`
  text-align: center;
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
`;

const MainContent = () => {
  return (
    <div>
      <Header />
      <MainContentWrapper>
        <List>
          <ListItem>Учусь в КФУ</ListItem>
          <ListItem>Изучаю Ruby</ListItem>
          <ListItem>Живу в общежитии</ListItem>
        </List>
      </MainContentWrapper>
      <Footer />
    </div>
  );
};
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
