import React from "react";
import styled from "styled-components";
import Routes from "../../../Components/Routes";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
  margin-bottom: 50px;
`;
const Logo = styled.div`
  margin-left: 50px;
  margin-right: 50px;
`;

const Article = styled.div`
  display: flex;
  flex-direction: column;
`;
const SubmitLoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const InputId = styled.input``;
const InputPassword = styled.input``;
const SubmitLogin = styled.button`
  text-align: center;
`;
const CreateUserLink = styled(Link)`
  text-align: center;
`;

const Nav = styled.div``;
const Message = styled.div``;

interface IProps {
  onLogin(e: React.FormEvent): void;
  state: {
    error: boolean;
  };
}

const UserLoginPresenter: React.FunctionComponent<IProps> = ({
  onLogin,
  state,
}) => {
  return (
    <Container>
      <Header>
        <Logo>로고</Logo>
      </Header>
      <Article>
        <SubmitLoginForm onSubmit={onLogin}>
          <InputId placeholder="아이디" />
          <InputPassword placeholder="패스워드" type="password" />
          <SubmitLogin>로그인</SubmitLogin>
        </SubmitLoginForm>
        <CreateUserLink to={Routes.UserCreate}>회원가입하기</CreateUserLink>
      </Article>
      <Nav>{state.error ? <Message>로그인 실패</Message> : ""}</Nav>
    </Container>
  );
};

export default UserLoginPresenter;
