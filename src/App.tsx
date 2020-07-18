import React from "react";
import Router from "../src/Components/Router";
import { Provider } from "react-redux";
import store from "../src/Components/Redux/store";
import CheckLogin from "./Components/CheckLogin";

const App: React.FunctionComponent = () => (
  <>
    <Provider store={store}>
      <Router />
    </Provider>
  </>
);

export default App;
