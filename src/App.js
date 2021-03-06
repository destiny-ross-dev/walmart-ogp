import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { StyledContainer } from "./styled/Reusable";
// import routes from "./routes";
import { withRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import RegisterPage from "./pages/RegisterPage";

import axios from "axios";
const theme = {
  lightBlue: "#6cace4",
  blue: "#0071ce",
  darkBlue: "#041e42",
  yellow: "#ffc220",
  white: "#ffffff",
  gray: "#f9f9f9"
};

const AppContainer = styled(StyledContainer)`
  background: white;
`;

function App(props) {
  const [user, setUser] = useState({ token: "", user: {} });
  const [token, setToken] = useState("");

  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    let user = await axios.post("/auth/me");
    setUser(user.data);
    props.history.push("/dashboard");
  };
  const hideNavArray = ["/", "/signup"];
  let { pathname } = props.location;

  const hideNav = hideNavArray.includes(pathname);
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        {!hideNav && <Header />}
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <LoginPage {...props} user={user} setUser={setUser} />
            )}
          />
          <Route
            path="/dashboard"
            render={props => (
              <DashboardPage {...props} {...user} setUser={setUser} />
            )}
          />
          <Route
            path="/signup"
            render={props => (
              <RegisterPage {...props} {...user} setUser={setUser} />
            )}
          />
        </Switch>
      </AppContainer>
    </ThemeProvider>
  );
}

export default withRouter(App);
