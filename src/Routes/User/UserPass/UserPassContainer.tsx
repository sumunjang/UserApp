import React from "react";
import UserPassPresenter from "./UserPassPresenter";
import { RouteComponentProps } from "react-router-dom";

interface IProps extends RouteComponentProps<any> {}

export default class UserPassContainer extends React.Component<IProps> {
  handleClickBack = (e: React.MouseEvent) => {
    this.props.history.goBack();
  };
  render = () => {
    return <UserPassPresenter handleClickBack={this.handleClickBack} />;
  };
}
