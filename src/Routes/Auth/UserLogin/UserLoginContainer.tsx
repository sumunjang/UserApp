import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import API from "../../../Components/API";
import UserLoginPresenter from "./UserLoginPresenter";
import LoginCookies from "../../../Components/Cookies/LoginCookies";

interface IProps extends RouteComponentProps<any> {
  /* other props for ChildComponent */
}

const UserLoginContainer: React.FunctionComponent<IProps> = ({ history }) => {
  const [state, setState] = useState({
    error: false,
  });

  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const childrenNodes = (e.target as HTMLButtonElement).children;
    const id = (childrenNodes[0] as HTMLInputElement).value;
    const password = (childrenNodes[1] as HTMLInputElement).value;
    try {
      await API.Auth.UserLoginApi({
        nickname: id,
        password: password,
      });
      history.push("/home");
    } catch (e) {
      setState({
        error: true,
      });
      LoginCookies.setLoginCookies(undefined);
    }
  };

  return <UserLoginPresenter onLogin={onLogin} state={state} />;
};

export default UserLoginContainer;
