import React from "react";
import UserDeletePresenter from "./UserDeletePresenter";
import { RouteComponentProps } from "react-router-dom";

interface IProps extends RouteComponentProps<any> {}

export default class UserDeleteContainer extends React.Component<IProps> {
  handleCancelBtn = (e: React.MouseEvent) => {
    this.props.history.goBack();
  };
  render = () => {
    return <UserDeletePresenter handleCancelBtn={this.handleCancelBtn} />;
  };
}
