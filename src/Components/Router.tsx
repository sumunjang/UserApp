import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const Router: React.FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Router;
