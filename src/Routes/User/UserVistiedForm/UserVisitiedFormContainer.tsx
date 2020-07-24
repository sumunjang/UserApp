import React from "react";
import UserVisitedFormPresenter from "./UserVisitedFormPresenter";
import { RouteComponentProps } from "react-router-dom";

interface IProps extends RouteComponentProps {}

export default class UserVistiedFormContainer extends React.Component<IProps> {
  render = () => {
    return <UserVisitedFormPresenter push={this.props.history.push} />;
  };
}
