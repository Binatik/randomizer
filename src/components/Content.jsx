import React from "react";
import styled from "styled-components";
import InputText from "./InputText";
import Button from "./Button";

import { useDispatch, useSelector } from "react-redux";
import { getRandomState } from "@src/toolkit";
import { setValueMin, setValueMax, setDuantity, getRandom } from "@src/toolkit/slice/random";

//StyledComponents
import { Container } from "@src/store/styleComponents";

const Section = styled.section`
  padding: 100px 0 80px 0;
`;

const Main = styled.main`
  flex: 1 1;
`;

const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NumberContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 40px;
`;

const Number = styled.span`
  margin: 0 20px;
  font-size: 3.5rem;

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 2rem;
  }
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.main};
  margin-bottom: 25px;
  font-size: 1.9rem;
`;

const Content = () => {
  const dispatch = useDispatch();

  const { numbers, min, max } = useSelector(getRandomState);

  function updateNumber() {
    return dispatch(getRandom());
  }

  return (
    <>
      <Main>
        <Section>
          <FlexContainer>
            <Title>Случайные числа</Title>
            <NumberContainer>
              {numbers.length > 0 ? numbers.map((element, index) => <Number key={index}>{element}</Number>) : "Нет чисел."}
            </NumberContainer>
            <Container>
              <InputText labelId={"minValue"} text={"от " + min} actions={setValueMin} />
              <InputText labelId={"maxValue"} text={"до " + max} actions={setValueMax} />
              <InputText labelId={"quantity"} text="количество" actions={setDuantity} />
              <Button padding={"10px 0"} handleClick={updateNumber} />
            </Container>
          </FlexContainer>
        </Section>
      </Main>
    </>
  );
};

export default Content;
