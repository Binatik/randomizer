import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";

const Label = styled.label`
  position: absolute;
  cursor: text;
  left: 0;
  top: 50%;
  height: auto;
  transform: translate(11px, -50%) scale(0);
  font-size: 1rem;
  color: ${props => props.theme.colors.iconic};
  transition: transform 0.2s;
`;

const Input = styled.input`
  position: relative;
  display: block;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.iconic};
  border-radius: 3px;
  outline: none;
  padding: 11px;
  font-size: 16px;
  color: #2c2738;
  background: #fff;
  transition: border 0.2s;

  &:placeholder-shown + ${Label} {
    transform: translate(11px, -50%) scale(1);
  }

  &::placeholder {
    color: transparent;
  }

  &:focus {
    border: 1px solid ${props => props.theme.colors.auxiliary};
  }

  &:focus + ${Label} {
    transform: translate(11px, -50%) scale(0);
  }
`;

const InputGroup = styled.div`
  position: relative;
  width: 100%;
  margin: 5px 0;

  @media ${props => props.theme.breakpoints.tabletFirst} {
    min-width: 400px;
  }
`;
const InputText = React.memo(({ labelId, text, actions }) => {
  const dispatch = useDispatch();

  return (
    <>
      <InputGroup>
        <Input type="text" placeholder={text} id={labelId} onChange={event => dispatch(actions(event.target.value))} />
        <Label htmlFor={labelId}>{text}</Label>
      </InputGroup>
    </>
  );
});

export default InputText;
