import React from "react";
import { Headers, Conatiner, Articles } from "./UserCreateStyle";
import Message from "../../../Components/Message";

interface IProps {
  onSubmit(e: React.FormEvent): void;
  changeInputName(e: React.ChangeEvent): void;
  changeInputId(e: React.ChangeEvent): void;
  changeInputPassword(e: React.ChangeEvent): void;
  changeInputPassword2(e: React.ChangeEvent): void;
  state: any;
}

const UserCreatePresenter: React.FunctionComponent<IProps> = ({
  onSubmit,
  changeInputName,
  changeInputId,
  changeInputPassword,
  changeInputPassword2,
  state,
}) => {
  return (
    <Conatiner>
      <Headers.Header>
        <Headers.Logo>회원가입</Headers.Logo>
      </Headers.Header>
      <Articles.Article>
        <Articles.Form onSubmit={onSubmit}>
          <Articles.Photo type="file" accept="image/*" />
          <Articles.Name
            label="이름"
            variant="outlined"
            onChange={changeInputName}
          />
          <Articles.Id
            label="아이디"
            variant="outlined"
            onChange={changeInputId}
          />
          <Articles.Password1
            label="패스워드"
            variant="outlined"
            type="password"
            onChange={changeInputPassword}
          />
          <Articles.Password2
            label="패스워드 확인"
            variant="outlined"
            type="password"
            onChange={changeInputPassword2}
          />
          <Articles.Submit variant="contained" color="primary" type="submit">
            회원가입하기
          </Articles.Submit>
          <Message
            errorState={state.errorState}
            errorMessage={state.errorMessage}
          />
        </Articles.Form>
      </Articles.Article>
    </Conatiner>
  );
};

export default UserCreatePresenter;
