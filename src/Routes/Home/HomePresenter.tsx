import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = styled.div``;

const Logo = styled.div`
  margin-left: 50px;
  margin-right: 50px;
`;

const Pass = styled(Link)``;

const Search = styled(Link)``;

const PlaceContainer = styled.div``;

const PlaceCard = styled.div``;

const GotoQRcode = styled.div``;

const HomePresenter: React.FunctionComponent = () => {
  return (
    <Container>
      <Header>
        <Home>홈</Home>
        <Logo>로고</Logo>
        <Pass to="/pass/123">출입증</Pass>
      </Header>
      <Search to="/search">장소 검색</Search>
      <PlaceContainer>
        <PlaceCard>시설이름 | 시설위치 | 방문날짜, 시간</PlaceCard>
      </PlaceContainer>
      <GotoQRcode>QR코드로 문진표 작성하기</GotoQRcode>
    </Container>
  );
};

export default HomePresenter;
