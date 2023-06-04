import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import Button from "../components/atoms/Button";

// const ButtonWrapper = styled.div`
//   margin-top: 1rem;
//   position: fixed;
//   left: 10px;
// `;

const Wrapper = styled.div`
  padding: 10px;
`;

const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <DefaultTemplate>
      <Wrapper>
        <Button label="Go back" color="orange" onClick={() => navigate(-1)} />
      </Wrapper>
      <Wrapper>Задачи проекта {id}</Wrapper>
    </DefaultTemplate>
  );
};

export default Project;
