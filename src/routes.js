import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Dashboard from "./components/Dashboard/Dashboard";

export default (
  <Switch>
    <Route exact path="/" render={props => <LoginPage {...props} />} />
    <Route path="/dashboard" render={props => <Dashboard {...props} />} />
  </Switch>
);
