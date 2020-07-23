import React from "react";
import UserPassPresenter from "./UserPassPresenter";
import { RouteComponentProps } from "react-router-dom";
import API from "../../../Components/API";

interface IProps extends RouteComponentProps<any> {}
interface IState {
  placedata: any;
  userdata: any;
}

export default class UserPassContainer extends React.Component<IProps, IState> {
  state = {
    placedata: undefined,
    userdata: undefined,
  };
  handleClickBack = (e: React.MouseEvent) => {
    this.props.history.goBack();
  };

  componentDidMount = async () => {
    this.setState({
      placedata: (await API.User.UserNowVisit()).data,
      userdata: (await API.User.UserProfile()).data,
    });
  };

  render = () => {
    return (
      <UserPassPresenter
        handleClickBack={this.handleClickBack}
        data={this.state}
      />
    );
  };
}
