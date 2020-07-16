import React from "react";
import styled from "styled-components";
import Routes from "../../../Components/Routes";
import { Link } from "react-router-dom";

const Conatiner = styled.div``;

const Header = styled.div`
  display: flex;
`;
const Logo = styled.div``;
const Cancel = styled(Link)``;

const Article = styled.article``;
const Label = styled.label``;
const Photo = styled.input``;
const Name = styled.input``;
const Id = styled.input``;
const Password1 = styled.input``;
const Password2 = styled.input``;

const Nav = styled.nav``;
const Submit = styled.nav``;

const UserCreatePresenter: React.FunctionComponent = () => {
  return (
    <Conatiner>
      <Header>
        <Logo>로고</Logo>
        <Cancel to={Routes.Home}>취소</Cancel>
      </Header>
      <Article>
        <Label htmlFor="photo" />
        <Photo type="image" id="photo" />
        <Name type="text" />
        <Id type="text" />
        <Password1 type="password" />
        <Password2 type="password" />
      </Article>
      <Nav>
        <Submit>회원가입하기</Submit>
      </Nav>
    </Conatiner>
  );
};

export default UserCreatePresenter;
