import React from "react";
import Routes from "../../../Components/Routes";
import MenuDrawer from "../../Home/Components/MenuDrawer";
import { Container, Headers, Articles, Navs } from "./PlaceFormStyle";

export default class PlaceFormPresenter extends React.Component {
  render = () => {
    const { Header, MenuBar, Logo, Cancel } = Headers;
    const {
      Article,
      InformationContainer,
      Title,
      UserInformationContainer,
      UserName,
      VisitTime,
      CurrentTime,
      PlaceInformationContainer,
      PlaceName,
      PlaceAddress,
    } = Articles;
    const { Nav, SubmitForm } = Navs;

    return (
      <Container>
        <Header>
          <MenuBar>
            <MenuDrawer />
          </MenuBar>
          <Logo>검색결과</Logo>
          <Cancel to={Routes.Home}>홈으로</Cancel>
        </Header>
        <Article>
          <InformationContainer>
            <Title>시설 요구 정보</Title>
            <UserInformationContainer>
              <UserName>질문</UserName>
              <VisitTime>답변</VisitTime>
            </UserInformationContainer>
            <UserInformationContainer>
              <UserName>질문</UserName>
              <VisitTime>답변</VisitTime>
            </UserInformationContainer>
            <UserInformationContainer>
              <UserName>질문</UserName>
              <VisitTime>답변</VisitTime>
            </UserInformationContainer>
            <Title>고정 문진표</Title>
            <PlaceInformationContainer>
              <PlaceName>질문</PlaceName>
              <PlaceAddress>답변</PlaceAddress>
            </PlaceInformationContainer>
            <PlaceInformationContainer>
              <PlaceName>질문</PlaceName>
              <PlaceAddress>답변</PlaceAddress>
            </PlaceInformationContainer>
            <PlaceInformationContainer>
              <PlaceName>질문</PlaceName>
              <PlaceAddress>답변</PlaceAddress>
            </PlaceInformationContainer>
          </InformationContainer>
        </Article>
        <Nav>
          <SubmitForm>문진표 제출하기</SubmitForm>
        </Nav>
      </Container>
    );
  };
}
