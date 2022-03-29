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
  align-items: flex-start;
`;

const Number = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 40px;
`;

const Form = styled.div`
  width: 100%;
  padding: 10px;
`;

const Card = styled.span`
  padding: 10px;
  margin: 10px 20px; 
  border-radius: 3px;
  color: #fff;
  font-size: 3.1rem;
  box-shadow: ${props => props.theme.colors.auxiliary} 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  background-color: ${props => props.theme.colors.main};

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

  const { numbers, min, max, isNumber } = useSelector(getRandomState);

  function updateNumber() {
    return dispatch(getRandom());
  }

  return (
    <>
      <Main>
        <Section>
          <FlexContainer>
            <Title>Случайные числа</Title>
            <Number>
              {isNumber ? numbers.map((element, index) => <Card key={index}>{element}</Card>) : <Card>Нет чисел</Card>}
            </Number>
            <Form>
              <InputText labelId={"minValue"} text={"от " + min} actions={setValueMin} />
              <InputText labelId={"maxValue"} text={"до " + max} actions={setValueMax} />
              <InputText labelId={"quantity"} text="количество" actions={setDuantity} />
              <Button padding={"10px 0"} handleClick={updateNumber} />
            </Form>
          </FlexContainer>
        </Section>
      </Main>
    </>
  );
};

export default Content;
