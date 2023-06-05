import React from "react";
import Styled, { css } from "styled-components";

const StyledButton = Styled.button(
  ({ color }) => css`
    background: ${color};
    text-align: center;
    width: 115px;
    color: white;
    border: none;
    height: 30px;
    border-radius: 10px;
  }
  `,
);

const Button = ({ label, onClick = () => {}, disabled = false, color = "", type }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick} color={color} type={type}>
      {label}
    </StyledButton>
  );
};

export default Button;
