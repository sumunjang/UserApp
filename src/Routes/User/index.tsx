import React from "react";
import { Route } from "react-router-dom";
import Routes from "../../Components/Routes";
import UserPass from "./UserPass";
import UserVisitedList from "./UserVisitedList";
import UserVisitedPlaceFormList from "./UserVisitedPlaceFormList";
import UserVistiedForm from "./UserVistiedForm";
import UserProfile from "./UserProfile";
import UserEditProfile from "./UserEditProfile";
import UserDelete from "./UserDelete";

const Router: React.FunctionComponent = () => (
  <>
    <Route path={Routes.UserPass} exact component={UserPass} />
    <Route path={Routes.UserProfile} exact component={UserProfile} />
    <Route path={Routes.UserEditProfile} exact component={UserEditProfile} />
    <Route path={Routes.UserDelete} exact component={UserDelete} />
    <Route path={Routes.UserVisitedList} exact component={UserVisitedList} />
    <Route
      path={Routes.UserVisitedPlaceFormList}
      exact
      component={UserVisitedPlaceFormList}
    />
    <Route path={Routes.UserVisitedForm} exact component={UserVistiedForm} />
  </>
);

export default Router;
