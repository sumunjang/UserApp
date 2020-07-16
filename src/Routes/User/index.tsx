import React from "react";
import { Route } from "react-router-dom";
import Routes from "../../Components/Routes";
import UserPass from "./UserPass";
import UserVisitedList from "./UserVisitedList";
import UserVisitedPlaceFormList from "./UserVisitedPlaceFormList";
import UserVistiedForm from "./UserVistiedForm";
import UserCreate from "./UserCreate";

const Router: React.FunctionComponent = () => (
  <>
    <Route path={Routes.UserPass} exact component={UserPass} />
    <Route path={Routes.UserVisitedList} exact component={UserVisitedList} />
    <Route
      path={Routes.UserVisitedPlaceFormList}
      exact
      component={UserVisitedPlaceFormList}
    />
    <Route path={Routes.UserVisitedForm} exact component={UserVistiedForm} />
    <Route path={Routes.UserCreate} exact component={UserCreate} />
  </>
);

export default Router;
