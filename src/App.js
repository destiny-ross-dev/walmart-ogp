import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import logoSrc from "./Spark.png";
import { StyledButton, StyledContainer } from "./styled/Reusable";

const theme = {
  lightBlue: "#6cace4",
  blue: "#0071ce",
  darkBlue: "#041e42",
  yellow: "#ffc220",
  white: "#ffffff"
};

const LoadingContainer = styled(StyledContainer)`
  background: ${props => props.theme.darkBlue};
  width: 100vw;
  height: 100vh;

  & img {
    width: 120px;
    height: 128px;
    margin-bottom: 20vh;
  }
`;

const LoginContainer = styled(StyledContainer)`
  justify-content: space-between;
  background: ${props => props.theme.darkBlue};
  width: 100vw;
  height: 100vh;
  padding: 0 2em;

  & img {
    width: 120px;
    height: 128px;
    margin: auto auto;
  }
  & input {
    width: 90vw;
    height: 24px;
    margin: 2vh 0;
    border: unset;
    border-bottom: 1px solid grey;
    padding: 1em 0.5em;
    font-size: 1.6em;
  }
`;
const InputContainer = styled(StyledContainer)`
  padding: 5vh 0;
  background: ${props => props.theme.white};
  width: 100vw;
  height: 70vh;
  justify-content: flex-start;
`;

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  return (
    <ThemeProvider theme={theme}>
      <div>
        {loading && (
          <LoadingContainer>
            <img src={logoSrc} />
          </LoadingContainer>
        )}
        {!loading && (
          <LoginContainer>
            <img src={logoSrc} />
            <InputContainer>
              <input placeholder="User ID" />
              <input placeholder="Password" type="password" />
              <StyledButton>Login</StyledButton>
            </InputContainer>
          </LoginContainer>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
