import React from "react";
import { Route } from "react-router-dom";
import PlaceForm from "./PlaceForm";
import Routes from "../../Components/Routes";

const Router: React.FunctionComponent = () => (
  <>
    <Route path={Routes.PlaceForm} exact component={PlaceForm} />
  </>
);

export default Router;
