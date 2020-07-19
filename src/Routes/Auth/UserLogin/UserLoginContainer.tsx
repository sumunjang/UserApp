import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import API from "../../../Components/API";
import UserLoginPresenter from "./UserLoginPresenter";
import LoginCookies from "../../../Components/Cookies/LoginCookies";

interface IProps extends RouteComponentProps<any> {}

const UserLoginContainer: React.FunctionComponent<IProps> = ({ history }) => {
  const [state, setState] = useState({
    error: false,
    inputId: "",
    inputPassword: "",
  });

  const changeInputId = (e: React.ChangeEvent) => {
    setState({
      ...state,
      inputId: (e.target as HTMLInputElement).value,
    });
  };

  const changeInputPassword = (e: React.ChangeEvent) => {
    setState({
      ...state,
      inputPassword: (e.target as HTMLInputElement).value,
    });
  };

  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { inputId, inputPassword } = state;
    try {
      await API.Auth.UserLoginApi({
        nickname: inputId,
        password: inputPassword,
      });
      history.push("/home");
    } catch (e) {
      setState({
        ...state,
        error: true,
      });
      LoginCookies.setLoginCookies(undefined);
    }
  };

  return (
    <UserLoginPresenter
      onLogin={onLogin}
      state={state}
      changeInputId={changeInputId}
      changeInputPassword={changeInputPassword}
    />
  );
};

export default UserLoginContainer;
