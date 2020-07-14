import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../Routes/Home";

const Router: React.FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Router;
