import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import logoSrc from "./assets/images/Spark.png";
import { StyledButton, StyledContainer } from "./styled/Reusable";
import { slideUp } from "./styled/Animations";

const theme = {
  lightBlue: "#6cace4",
  blue: "#0071ce",
  darkBlue: "#041e42",
  yellow: "#ffc220",
  white: "#ffffff"
};

const LoginContainer = styled(StyledContainer)`
  justify-content: space-between;
  background: ${props => props.theme.darkBlue};
  width: 100vw;
  height: 100vh;
  padding: 0 2em;

  & h2 {
    font-size: 2em;
    align-self: flex-start;
    margin: 0 1em;
    font-weight: 800;
  }

  & img {
    width: 120px;
    height: 128px;
    margin: auto;
    transition: 0.3s margin ease-in-out;
  }
  & input {
    width: 94vw;
    height: 2.4em;
    margin: 10px 0;
    border: unset;
    border-bottom: 1px solid grey;
    padding: 5px 0.35em;
    font-size: 1.6em;
    /* font-family: "Bogle Black"; */
  }

  & a {
    margin: 20px 1.5em;
    font-size: 1.4em;
    font-family: "Bogle";
    align-self: flex-start;
    /* padding: 1em 1.5em 0 1.5em; */
  }
  & button {
    margin-top: 0;
  }
`;

const InputContainer = styled(StyledContainer)`
  padding: 4vh 0;
  background: ${props => props.theme.white};
  width: 100vw;
  height: 70vh;
  justify-content: flex-start;
  animation: ${slideUp} 0.3s ease-in-out;
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
        <LoginContainer>
          <img src={logoSrc} />
          {!loading && (
            <InputContainer>
              <h2>Login</h2>
              <input placeholder="User ID" />
              <input placeholder="Password" type="password" />
              <a href="#">Forgot your password?</a>
              <StyledButton>Login</StyledButton>
            </InputContainer>
          )}
        </LoginContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;
