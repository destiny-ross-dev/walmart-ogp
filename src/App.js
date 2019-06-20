import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { StyledContainer } from "./styled/Reusable";
// import routes from "./routes";
import { withRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./components/Dashboard/Dashboard";
import axios from 'axios'
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
  const [user, setUser] = useState({ token: "", user: {} });
  const [token, setToken] = useState("");

  useEffect( () => {
    getUser()    
  }, [])
const getUser = async () => {
  let user = await axios.post('/auth/me')
    setUser(user.data)
    props.history.push('/dashboard')
}

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        {props.location.pathname !== "/" && <Header />}
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
            render={props => <Dashboard {...props} {...user} setUser={setUser}/>}
          />
        </Switch>
      </AppContainer>
    </ThemeProvider>
  );
}

export default withRouter(App);
