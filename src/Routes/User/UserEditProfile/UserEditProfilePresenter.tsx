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
const Information = styled.div``;

const Nav = styled.nav``;
const Watermark = styled.nav``;

const UserEditProfilePresenter: React.FunctionComponent = () => {
  return (
    <Conatiner>
      <Header>
        <Logo>로고</Logo>
        <Cancel to={Routes.Home}>취소</Cancel>
      </Header>
      <Article>
        <Information>프로필 수정</Information>
      </Article>
      <Nav>
        <Watermark>워터마크 애니메이션</Watermark>
      </Nav>
    </Conatiner>
  );
};

export default UserEditProfilePresenter;
