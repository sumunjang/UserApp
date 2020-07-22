import React from "react";
import { Route } from "react-router-dom";
import SearchResult from "./SearchResult";
import Routes from "../../Components/Routes";

const Router: React.FunctionComponent = () => (
  <>
    <Route path={Routes.SearchResult} component={SearchResult} />
  </>
);

export default Router;
