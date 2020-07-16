import React from "react";
import { Route } from "react-router-dom";
import Routes from "../../Components/Routes";
import UserPass from "./UserPass";
import UserVisitedList from "./UserVisitedList";
import UserVisitedPlaceFormList from "./UserVisitedPlaceFormList";

const Router: React.FunctionComponent = () => (
  <>
    <Route path={Routes.UserPass} exact component={UserPass} />
    <Route path={Routes.UserVisitedList} exact component={UserVisitedList} />
    <Route
      path={Routes.UserVisitedPlaceFormList}
      exact
      component={UserVisitedPlaceFormList}
    />
  </>
);

export default Router;
