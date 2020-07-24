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
  onCheckId: any;
}

export default class UserCreatePresenter extends React.Component<IProps> {
  render = () => {
    return (
      <Conatiner>
        <Headers.Header>
          <Headers.Logo>회원가입</Headers.Logo>
        </Headers.Header>
        <Articles.Article>
          <Articles.Form onSubmit={this.props.onSubmit}>
            <Articles.Name
              label="이름"
              variant="outlined"
              onChange={this.props.changeInputName}
            />
            <Articles.IdContainer>
              <Articles.Id
                label="아이디"
                variant="outlined"
                onChange={this.props.changeInputId}
              />
              <Articles.IdCheck
                variant="contained"
                color="primary"
                onClick={this.props.onCheckId}
              >
                중복체크
              </Articles.IdCheck>
            </Articles.IdContainer>
            <Articles.Password1
              label="패스워드"
              variant="outlined"
              type="password"
              onChange={this.props.changeInputPassword}
            />
            <Articles.Password2
              label="패스워드 확인"
              variant="outlined"
              type="password"
              onChange={this.props.changeInputPassword2}
            />
            <Articles.Submit variant="contained" color="primary" type="submit">
              회원가입하기
            </Articles.Submit>
            <Message
              errorState={this.props.state.errorState}
              errorMessage={this.props.state.errorMessage}
            />
          </Articles.Form>
        </Articles.Article>
      </Conatiner>
    );
  };
}
