import React from "react";
import UserCreatePresenter from "./UserCreatePresenter";
import Api from "../../../Components/API";
import { RouteComponentProps } from "react-router-dom";

interface IState {
  loading: Boolean;
  error: Boolean;
}

interface IProps extends RouteComponentProps<any> {
  /* other props for ChildComponent */
}

const UserPassContainer: React.FunctionComponent<IProps> = ({ history }) => {
  const goBack = () => {
    history.goBack();
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const childrenNodes = (e.target as HTMLButtonElement).children;
    const name = (childrenNodes[2] as HTMLInputElement).value;
    const id = (childrenNodes[3] as HTMLInputElement).value;
    const password1 = (childrenNodes[4] as HTMLInputElement).value;
    const password2 = (childrenNodes[5] as HTMLInputElement).value;

    if (password1 === password2) {
      console.log("정상적인 입력");
      await Api.Auth.UserCreateApi({
        nickname: id,
        password: password1,
        name: name,
      });
    }
  };

  return <UserCreatePresenter onSubmit={onSubmit} goBack={goBack} />;
};

export default UserPassContainer;
