import React from "react";
import styled from "styled-components";

const Conatiner = styled.div``;

const Header = styled.div`
  display: flex;
`;
const Logo = styled.div``;
const Cancel = styled.div``;

const Article = styled.article``;
const Photo = styled.div``;
const Information = styled.div``;

const Nav = styled.nav``;
const Watermark = styled.nav``;

const PassPresenter: React.FunctionComponent = () => {
  return (
    <Conatiner>
      <Header>
        <Logo>로고</Logo>
        <Cancel>취소</Cancel>
      </Header>
      <Article>
        <Photo>프로필 사진</Photo>
        <Information>시설명 이름 정보 출입시간 현재시간</Information>
      </Article>
      <Nav>
        <Watermark>워터마크 애니메이션</Watermark>
      </Nav>
    </Conatiner>
  );
};

export default PassPresenter;
