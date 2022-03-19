import React from "react";
import styled from "styled-components";

//StyledComponents
import { Container } from "@src/store/styleComponents";

const Text = styled.h2`
  font-size: 2rem;
`;

const Header = () => {
  return (
    <>
      <header>
        <Container>
          <Text></Text>
        </Container>
      </header>
    </>
  );
};

export default Header;
