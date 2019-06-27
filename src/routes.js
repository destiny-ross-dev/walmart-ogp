import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

export default (
  <Switch>
    <Route
      exact
      path="/"
      render={props => <LoginPage {...props} loginUser={props.loginUser} />}
    />
    <Route path="/dashboard" render={props => <DashboardPage {...props} />} />
  </Switch>
);
