import React from "react";
import UserVisitedPresenter from "./UserVisitedListPresenter";
import { RouteComponentProps } from "react-router-dom";

interface IProps extends RouteComponentProps {}

export default class UserVistiedListContainer extends React.Component<IProps> {
  render = () => {
    return <UserVisitedPresenter push={this.props.history.push} />;
  };
}
