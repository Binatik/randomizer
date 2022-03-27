import React from "react";
import styled from "styled-components";

const _Button = styled.button`
  cursor: pointer;
  color: #fff;
  font-size: 1.3rem;
  outline: none;
  border: none;
  margin: 15px 0;
  width: 100%;
  padding: ${props => props.padding};
  background-color: ${props => props.theme.colors.auxiliary};
  transition: background-color 0.1s;

  &:hover {
    background-color: ${props => props.theme.colors.main};
  }

  &:active {
    opacity: 0.9;
  }
`;

const Button = ({ updateNumber, ...props }) => {
  return (
    <>
      <_Button onClick={() => updateNumber()} {...props} type="button">
        Сгенерировать
      </_Button>
    </>
  );
};

export default Button;
