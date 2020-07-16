import React from "react";
import { Route } from "react-router-dom";
import SearchMain from "./SearchMain";
import SearchResult from "./SearchResult";

const Router: React.FunctionComponent = () => (
  <>
    <Route path="/search" exact component={SearchMain} />
    <Route path="/search/result" component={SearchResult} />
  </>
);

export default Router;
