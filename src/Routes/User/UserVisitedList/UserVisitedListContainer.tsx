import React from "react";
import UserVisitedPresenter from "./UserVisitedListPresenter";
import { RouteComponentProps } from "react-router-dom";
import API from "../../../Components/API";

interface IProps extends RouteComponentProps {}

interface IState {
  data: any;
}

export default class UserVistiedListContainer extends React.Component<
  IProps,
  IState
> {
  state = {
    data: "",
  };
  componentDidMount = async () => {
    const { data } = await API.User.UserVisitedList();
    this.setState({ ...this.state, data });
  };

  render = () => {
    return (
      <UserVisitedPresenter
        push={this.props.history.push}
        data={this.state.data}
      />
    );
  };
}
