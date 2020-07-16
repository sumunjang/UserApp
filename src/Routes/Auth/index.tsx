import React from "react";
import { Route } from "react-router-dom";
import Routes from "../../Components/Routes";
import UserLogin from "./UserLogin";

const Router: React.FunctionComponent = () => (
  <>
    <Route path={Routes.UserLogin} exact component={UserLogin} />
  </>
);

export default Router;
