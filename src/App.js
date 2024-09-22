import React from "react";
import "./App.css";
import Main from "./Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import styled from 'styled-components';



const AppContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 1240px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

function App() {
  return (
    <AppContainer>
      <ContentWrapper>
        <ThemeProvider theme={chosenTheme}>
          <>
            <GlobalStyles />
            <div>
              <Main theme={chosenTheme} />
            </div>
          </>
        </ThemeProvider>
      </ContentWrapper>
    </AppContainer>
  );
}

export default App;
