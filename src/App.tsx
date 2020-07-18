import React from "react";
import Router from "../src/Components/Router";
import { Provider } from "react-redux";
import Store from "./Components/Redux/Store";

const App: React.FunctionComponent = () => (
  <>
    <Provider store={Store}>
      <Router />
    </Provider>
  </>
);

export default App;
