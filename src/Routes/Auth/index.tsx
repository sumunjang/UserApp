import React from "react";
import { Route } from "react-router-dom";
import Routes from "../../Components/Routes";
import UserLogin from "./UserLogin";
import UserCreate from "./UserCreate";

const Router: React.FunctionComponent = () => (
  <>
    <Route path={Routes.UserLogin} exact component={UserLogin} />
    <Route path={Routes.UserCreate} exact component={UserCreate} />
  </>
);

export default Router;
