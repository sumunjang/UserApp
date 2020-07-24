import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../Routes/Home";
import Search from "../Routes/Search";
import Form from "../Routes/Form";
import User from "../Routes/User";
import Auth from "../Routes/Auth";
import QRCode from "../Routes/QRCode";
import UserLogin from "../Routes/Auth/UserLogin";

const Router: React.FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={UserLogin} />
      <Route path="/home" exact component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/form" component={Form} />
      <Route path="/user" component={User} />
      <Route path="/auth" component={Auth} />
      <Route path="/qrcode" component={QRCode} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Router;
