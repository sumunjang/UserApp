import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../Routes/Home";
import Search from "../Routes/Search";
import Form from "../Routes/Form";
import User from "../Routes/User";
import Auth from "../Routes/Auth";

const Router: React.FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/form" component={Form} />
      <Route path="/user" component={User} />
      <Route path="/auth" component={Auth} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Router;
