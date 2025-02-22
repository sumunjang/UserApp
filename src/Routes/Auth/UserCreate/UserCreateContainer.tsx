import React from "react";
import UserCreatePresenter from "./UserCreatePresenter";
import Api from "../../../Components/API";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { ReduxActions } from "../../../Components/Redux/Store";
import { CreateUserMessages } from "../../../Components/Messages";

interface IState {
  inputName: string;
  inputId: string;
  inputPassword: string;
  inputPassword2: string;
  errorState: string;
  errorMessage: string;
}

interface IProps extends RouteComponentProps<any> {
  setMessage: Function;
  reduxState: {
    message: string;
  };
}

class UserPassContainer extends React.Component<IProps> {
  state = {
    inputName: "",
    inputId: "",
    inputPassword: "",
    inputPassword2: "",
    error: false,
  };

  changeInputName = (e: React.ChangeEvent) => {
    this.setState({
      inputName: (e.target as HTMLInputElement).value,
    });
  };
  changeInputId = (e: React.ChangeEvent) => {
    this.setState({
      inputId: (e.target as HTMLInputElement).value,
    });
  };
  changeInputPassword = (e: React.ChangeEvent) => {
    this.setState({
      inputPassword: (e.target as HTMLInputElement).value,
    });
  };
  changeInputPassword2 = (e: React.ChangeEvent) => {
    this.setState({
      inputPassword2: (e.target as HTMLInputElement).value,
    });
  };

  onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (this.state.inputPassword === this.state.inputPassword2) {
        await Api.Auth.UserCreateApi({
          name: this.state.inputName,
          userid: this.state.inputId,
          password: this.state.inputPassword,
        });
        this.props.setMessage(CreateUserMessages.CreateUserSuccess);
        this.props.history.push("/");
      } else {
        this.setState({
          errorState: "error",
          errorMessage: "패스워드가 다릅니다.",
        });
      }
    } catch {
      this.setState({
        errorState: "error",
        errorMessage: "회원가입에 문제가 있습니다",
      });
    }
  };

  render = () => {
    return (
      <UserCreatePresenter
        onSubmit={this.onSubmit}
        changeInputName={this.changeInputName}
        changeInputId={this.changeInputId}
        changeInputPassword={this.changeInputPassword}
        changeInputPassword2={this.changeInputPassword2}
        state={this.state}
      />
    );
  };
}

function mapStateToProps(state: any) {
  return { reduxState: state };
}

function mapDispatchToProps(dispatch: any, ownProps: any) {
  return {
    setMessage: (message: string) => dispatch(ReduxActions.setMessage(message)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPassContainer);
