import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getRandomState } from "@src/toolkit";
import { useSelector } from "react-redux";

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

const Button = ({ getRandom, actions, ...props }) => {
  const { min, max } = useSelector(getRandomState);
  const dispatch = useDispatch();
  
  return (
    <>
      <_Button
        onClick={() => {
          dispatch(actions(getRandom(min, max)));
        }}
        {...props}
        type="button"
      >
        Сгенерировать
      </_Button>
    </>
  );
};

export default Button;
