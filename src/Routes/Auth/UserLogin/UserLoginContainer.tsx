import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import API from "../../../Components/API";
import Routes from "../../../Components/Routes";
import LoginCookies from "../../../Components/Cookies/LoginCookies";
import { ReduxActions } from "../../../Components/Redux/Store";
import { CreateUserMessages } from "../../../Components/Messages";
import CheckLogin from "../../../Components/CheckLogin";
import UserLoginPresenter from "./UserLoginPresenter";

interface IProps extends RouteComponentProps<any> {
  state: any;
  reduxState: {
    message: string;
  };
  setMessage: Function;
}

interface IState {
  errorState: string;
  errorMessage: string;
  inputId: string;
  inputPassword: string;
}

class UserLoginContainer extends React.Component<IProps, IState> {
  state = {
    errorState: "nomal",
    errorMessage: "",
    inputId: "",
    inputPassword: "",
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

  onLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { inputId, inputPassword } = this.state;
    try {
      await API.Auth.UserLoginApi({
        userid: inputId,
        password: inputPassword,
      });
      this.props.history.push("/home");
    } catch (e) {
      this.setState({
        errorState: "error",
        errorMessage: "로그인 실패",
      });
      LoginCookies.setLoginCookies(undefined);
    }
  };

  componentDidMount() {
    console.log(CheckLogin());
    if (CheckLogin()) {
      this.props.history.push(Routes.UserLogin);
    }
    if (this.props.reduxState.message) {
      if (
        this.props.reduxState.message === CreateUserMessages.CreateUserSuccess
      )
        this.setState({
          errorState: "success",
          errorMessage: "회원가입에 성공했습니다.",
        });
    }
    this.props.setMessage("");
  }

  render = () => {
    return (
      <UserLoginPresenter
        onLogin={this.onLogin}
        state={this.state}
        changeInputId={this.changeInputId}
        changeInputPassword={this.changeInputPassword}
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

export default connect(mapStateToProps, mapDispatchToProps)(UserLoginContainer);
