import React from "react";
import { Route } from "react-router-dom";
import Form from "./Form";
import Routes from "../../Components/Routes";

const Router: React.FunctionComponent = () => (
  <>
    <Route path={Routes.Form} exact component={Form} />
  </>
);

export default Router;
