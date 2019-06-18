import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import logoSrc from "./assets/images/Spark.png";
import { StyledButton, StyledContainer } from "./styled/Reusable";
import { slideUp } from "./styled/Animations";
import routes from "./routes";
import { withRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header/Header";

const theme = {
  lightBlue: "#6cace4",
  blue: "#0071ce",
  darkBlue: "#041e42",
  yellow: "#ffc220",
  white: "#ffffff"
};

const AppContainer = styled(StyledContainer)`
  background: white;
`;

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        {props.location.pathname !== "/" && <Header />}
        {routes}
      </AppContainer>
    </ThemeProvider>
  );
}

export default withRouter(App);
