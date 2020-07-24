import QRCodePresenter from "./QRCodePresenter";
import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface IState {
  qrdata: string;
  isSubmit: boolean;
}

interface IProps extends RouteComponentProps {}

export default class QRCodeContainer extends React.Component<IProps, IState> {
  state = {
    qrdata: "",
    isSubmit: false,
  };
  componentDidMount = () => {
    if (this.props.location.pathname === "/qrcode/submit") {
      this.setState({ ...this.state, isSubmit: true });
    }
  };
  render = () => {
    return (
      <QRCodePresenter
        push={this.props.history.push}
        isSubmit={this.state.isSubmit}
      />
    );
  };
}
