import React from "react";
import Router from "../src/Components/Router";
import { Provider } from "react-redux";
import Store from "./Components/Redux/Store";
import GlobalStyles from "./Components/GlobalStyles";

const App: React.FunctionComponent = () => (
  <>
    <Provider store={Store}>
      <GlobalStyles />
      <Router />
    </Provider>
  </>
);

export default App;
