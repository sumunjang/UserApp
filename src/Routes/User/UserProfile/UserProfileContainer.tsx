import React from "react";
import UserProfilePresenter from "./UserProfilePresenter";
import API from "../../../Components/API";
import { RouteComponentProps } from "react-router-dom";

interface UserData {
  userid: string;
  username: string;
}

interface IState {
  userData: UserData;
}

interface IProps extends RouteComponentProps {}

export default class UserProfileContainer extends React.Component<
  IProps,
  IState
> {
  state = {
    userData: {
      userid: "",
      username: "",
    },
  };
  componentDidMount = async () => {
    const userData = (await API.User.UserProfile()).data as UserData;
    this.setState({ ...this.state, userData });
  };
  render = () => {
    return (
      <UserProfilePresenter
        userData={this.state.userData}
        push={this.props.history.push}
      />
    );
  };
}
