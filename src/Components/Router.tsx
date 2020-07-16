import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../Routes/Home";
import Pass from "../Routes/Pass";
import Search from "../Routes/Search";
import Form from "../Routes/Form";

const Router: React.FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/pass/:userid" component={Pass} />
      <Route path="/search" component={Search} />
      <Route path="/form" component={Form} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Router;
