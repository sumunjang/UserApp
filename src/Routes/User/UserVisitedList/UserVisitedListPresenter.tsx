import React from "react";
import styled from "styled-components";
import Routes from "../../../Components/Routes";
import { Link } from "react-router-dom";

const Conatiner = styled.div``;

const Header = styled.div`
  display: flex;
`;
const Menu = styled.div``;
const Logo = styled.div``;
const Cancel = styled(Link)``;

const Article = styled.article``;
const Title = styled.div``;
const Information = styled.div``;

const UserVistiedListPresenter: React.FunctionComponent = () => {
  return (
    <Conatiner>
      <Header>
        <Menu>메뉴</Menu>
        <Logo>로고</Logo>
        <Cancel to={Routes.Home}>뒤로가기</Cancel>
      </Header>
      <Article>
        <Title>방문 장소 리스트</Title>
        <Information>방문한 장소 리스트 </Information>
      </Article>
    </Conatiner>
  );
};

export default UserVistiedListPresenter;
