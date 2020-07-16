import React from "react";
import styled from "styled-components";
import Routes from "../../../Components/Routes";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.div`
  margin-left: 50px;
  margin-right: 50px;
`;

const Article = styled.div``;
const InputId = styled.input``;
const InputPassword = styled.input``;
const SubmitLogin = styled(Link)``;

const UserLoginPresenter: React.FunctionComponent = () => {
  return (
    <Container>
      <Header>
        <Logo>로고</Logo>
      </Header>
      <Article>
        <InputId placeholder="아이디" />
        <InputPassword placeholder="패스워드" />
        <SubmitLogin to={Routes.Home}>로그인</SubmitLogin>
      </Article>
    </Container>
  );
};

export default UserLoginPresenter;
