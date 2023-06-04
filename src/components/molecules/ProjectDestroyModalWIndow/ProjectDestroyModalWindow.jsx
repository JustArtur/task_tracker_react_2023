import React from "react";
import styled from "styled-components";
import Button from "../../atoms/Button";
import ModalWindow from "../../atoms/ModalWindow ";

const ButtonsWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  column-gap: 8px;
`;

const DestroyProjectWindow = ({ isOpen, setIsOpen, projectName }) => {
  return (
    <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen}>
      <div>Are you sure you want to delete the project {projectName}?</div>
      <ButtonsWrapper>
        <Button label="Destroy" color="red" onClick={() => setIsOpen(!isOpen)} />
        <Button label="Cancel" color="green" onClick={() => setIsOpen(!isOpen)} />
      </ButtonsWrapper>
    </ModalWindow>
  );
};

export default DestroyProjectWindow;
