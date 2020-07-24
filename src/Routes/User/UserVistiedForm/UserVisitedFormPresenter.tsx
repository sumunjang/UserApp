import React from "react";
import Routes from "../../../Components/Routes";
import { Container, Headers, Articles } from "./UsreVistiedFormStyle";
import MenuDrawer from "../../Home/Components/MenuDrawer";

interface IProps {
  push: Function;
  visitInformation: any;
}

export default class UserVisitedFormPresenter extends React.Component<IProps> {
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

    const { requestForm } = this.props.visitInformation;

    return (
      <Container>
        <Header>
          <MenuBar>
            <MenuDrawer push={this.props.push} />
          </MenuBar>
          <Logo>작성했던 문진표</Logo>
          <Cancel to={Routes.Home}>홈으로</Cancel>
        </Header>
        <Article>
          <InformationContainer>
            <Title>시설 요구 정보</Title>
            {requestForm &&
              requestForm.map((questionInformation: any) => (
                <UserInformationContainer>
                  <UserName>{questionInformation.question}</UserName>
                  <VisitTime>{questionInformation.answer}</VisitTime>
                </UserInformationContainer>
              ))}
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
