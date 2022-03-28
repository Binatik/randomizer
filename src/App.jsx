import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "@src/store/theme";
import Header from "@cmp/Header";
import Content from "@cmp/Content";
import Footer from "@cmp/Footer";
import "./style.css";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 100%;
`;

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header />
          <Content />
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default App;
