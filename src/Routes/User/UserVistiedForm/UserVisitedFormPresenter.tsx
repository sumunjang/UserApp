import React from "react";
import Routes from "../../../Components/Routes";
import { Container, Headers, Articles } from "./UsreVistiedFormStyle";
import MenuDrawer from "../../Home/Components/MenuDrawer";

export default class UserVisitedFormPresenter extends React.Component {
  render = () => {
    const { Header, MenuBar, Logo, Cancel } = Headers;
    const {
      Article,
      InformationContainer,
      Title,
      UserInformationContainer,
      UserName,
      VisitTime,
      PlaceInformationContainer,
      PlaceName,
      PlaceAddress,
    } = Articles;

    return (
      <Container>
        <Header>
          <MenuBar>
            <MenuDrawer />
          </MenuBar>
          <Logo>작성했던 문진표</Logo>
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
      </Container>
    );
  };
}
