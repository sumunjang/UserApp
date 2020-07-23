import React from "react";
import UserDeletePresenter from "./UserDeletePresenter";
import { RouteComponentProps } from "react-router-dom";
import Routes from "../../../Components/Routes";

interface IProps extends RouteComponentProps<any> {}

export default class UserDeleteContainer extends React.Component<IProps> {
  handleCancelBtn = (e: React.MouseEvent) => {
    this.props.history.goBack();
  };
  handleDeleteBtn = async (e: React.MouseEvent) => {
    this.props.history.push(Routes.UserLogin);
  };
  render = () => {
    return (
      <UserDeletePresenter
        handleCancelBtn={this.handleCancelBtn}
        handleDeleteBtn={this.handleDeleteBtn}
      />
    );
  };
}
