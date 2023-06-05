import React from "react";
import styled from "styled-components";
import Button from "../../atoms/Button";
import ModalWindow from "../../atoms/ModalWindow ";
import useDestroyProject from "../../../lib/hooks/useDestroyProject";

const ButtonsWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  column-gap: 8px;
`;

const DestroyProjectWindow = ({ isOpen, setIsOpen, projectName, id }) => {
  const [destroyProject] = useDestroyProject({ onSubmit: () => setIsOpen(!isOpen) });

  return (
    <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen}>
      <div>Are you sure you want to delete the project {projectName}?</div>
      <ButtonsWrapper>
        <Button label="Destroy" color="red" onClick={() => destroyProject({ id })} />
        <Button label="Cancel" color="green" onClick={() => setIsOpen(!isOpen)} />
      </ButtonsWrapper>
    </ModalWindow>
  );
};

export default DestroyProjectWindow;
