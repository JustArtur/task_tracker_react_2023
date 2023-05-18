import React from "react";
import styled from "styled-components";
import DefaultTemplate from "../components/templates/DefaultTemplate";

const List = styled.ul`
  text-align: center;
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
`;
const Info = () => {
  return (
    <DefaultTemplate>
      <List>
        <ListItem>Учусь в КФУ</ListItem>
        <ListItem>Изучаю Ruby</ListItem>
        <ListItem>Живу в общежитии</ListItem>
      </List>
    </DefaultTemplate>
  );
};

export default Info;
