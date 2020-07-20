import React from "react";
import HomePresenter from "./HomePresenter";
import CheckLogin from "../../Components/CheckLogin";
import { RouteComponentProps } from "react-router-dom";

interface IProps extends RouteComponentProps<any> {
  /* other props for ChildComponent */
}

const HomeContainer: React.FunctionComponent<IProps> = ({ history }) => {
  // if (CheckLogin() === false) {
  //   history.push("/");
  // }
  return <HomePresenter />;
};

export default HomeContainer;
