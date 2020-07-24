import React from "react";
import UserVisitedFormPresenter from "./UserVisitedFormPresenter";
import { RouteComponentProps } from "react-router-dom";
import API from "../../../Components/API";

interface IProps extends RouteComponentProps {}

interface IState {
  visitInformation: any;
}

export default class UserVistiedFormContainer extends React.Component<IProps> {
  state = {
    visitInformation: "",
  };
  componentDidMount = async () => {
    const { placeid, formid } = this.props.match.params as {
      placeid: number;
      formid: number;
    };
    const { data } = await API.User.UserVisitiedForm(placeid, formid);
    this.setState({
      ...this.state,
      visitInformation: data,
    });
  };
  render = () => {
    return (
      <UserVisitedFormPresenter
        push={this.props.history.push}
        visitInformation={this.state.visitInformation}
      />
    );
  };
}
