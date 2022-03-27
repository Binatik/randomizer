import React from "react";
import styled from "styled-components";
import InputText from "./InputText";
import Button from "./Button";

import { useDispatch, useSelector } from "react-redux";
import { getRandomState } from "@src/toolkit";
import { setValueMin, setValueMax, getRandom } from "@src/toolkit/slice/random";

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
  padding-bottom: 40px;
`;

const Number = styled.span`
  font-size: 3.5rem;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.main};
  margin-bottom: 25px;
  font-size: 1.9rem;
`;

const Content = () => {
  const dispatch = useDispatch();

  const { number } = useSelector(getRandomState);

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
              <Number>{number}</Number>
            </NumberContainer>
            <Container>
              <InputText labelId={"minValue"} text="от" actions={setValueMin} />
              <InputText labelId={"maxValue"} text="до" actions={setValueMax} />
              <Button padding={"10px 0"} updateNumber={updateNumber} />
            </Container>
          </FlexContainer>
        </Section>
      </Main>
    </>
  );
};

export default Content;
