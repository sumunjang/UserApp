import React from "react";
import { Route } from "react-router-dom";
import UserPass from "./UserPass";
import UserVisitedList from "./UserVisitedList";
import Routes from "../../Components/Routes";

const Router: React.FunctionComponent = () => (
  <>
    <Route path={Routes.UserPass} exact component={UserPass} />
    <Route path={Routes.UserVisitedList} exact component={UserVisitedList} />
  </>
);

export default Router;
