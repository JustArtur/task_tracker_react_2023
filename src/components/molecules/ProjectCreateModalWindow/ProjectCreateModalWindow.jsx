import React from "react";
import styled from "styled-components";
// eslint-disable-next-line import/no-extraneous-dependencies
import * as Yup from "yup";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useFormik } from "formik";
import Button from "../../atoms/Button";
import ModalWindow from "../../atoms/ModalWindow ";
import useCreateProject from "../../../lib/hooks/useCreateProject";

const ButtonsWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  column-gap: 8px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  height: 20px;
  margin-top: 10px;
`;

const CreateProjectWindow = ({ isOpen, setIsOpen }) => {
  const onSubmit = () => {
    setIsOpen(!isOpen);
  };
  const [createProject] = useCreateProject({ onSubmit });

  const schema = Yup.object().shape({
    name: Yup.string().min(2, "Too short!").max(50, "Too long!").required("Required!"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: schema,
    onSubmit: createProject,
  });

  return (
    <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen}>
      <div>Create project</div>
      <form onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <Input id="name" name="name" onChange={formik.handleChange} value={formik.values.email} />
          <Input id="description" name="description" onChange={formik.handleChange} value={formik.values.email} />
        </InputWrapper>
        <ButtonsWrapper>
          <Button label="Create" color="green" onClick={() => setIsOpen(!isOpen)} type="submit" />
        </ButtonsWrapper>
      </form>
    </ModalWindow>
  );
};

export default CreateProjectWindow;
