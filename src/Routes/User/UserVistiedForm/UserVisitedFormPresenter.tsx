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

const UserVisitedFormPresenter: React.FunctionComponent = () => {
  return (
    <Conatiner>
      <Header>
        <Menu>이전</Menu>
        <Logo>시설이름</Logo>
        <Cancel to={Routes.Home}>홈</Cancel>
      </Header>
      <Article>
        <Title>시설 요구정보</Title>
        <Information>질문, 답변</Information>
        <Title>증상 문진표</Title>
        <Information>질문, 답변</Information>
      </Article>
    </Conatiner>
  );
};

export default UserVisitedFormPresenter;
