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
      BtnContainer,
      BtnFold,
      BtnSpared,
    } = Articles;

    const { requestForm } = this.props.visitInformation;
    const { fixedForm } = this.props.visitInformation;
    console.log(fixedForm);

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
              <PlaceName>최근 2주 이내 해외 방문 여부</PlaceName>
              <div>네</div>
              <input
                type="checkbox"
                checked={fixedForm && fixedForm.oversea && true}
                disabled
              />
              <div>아니요</div>
              <input
                type="checkbox"
                checked={fixedForm && !fixedForm.oversea && true}
                disabled
              />
            </PlaceInformationContainer>
            <PlaceInformationContainer>
              <PlaceName>기침 여부</PlaceName>
              <div>네</div>
              <input
                type="checkbox"
                checked={fixedForm && fixedForm.cough && true}
                disabled
              />
              <div>아니요</div>
              <input
                type="checkbox"
                checked={fixedForm && !fixedForm.cough && true}
                disabled
              />
            </PlaceInformationContainer>
            <PlaceInformationContainer>
              <PlaceName>인후통 여부</PlaceName>
              <div>네</div>
              <input
                type="checkbox"
                checked={fixedForm && fixedForm.sore && true}
                disabled
              />
              <div>아니요</div>
              <input
                type="checkbox"
                checked={fixedForm && !fixedForm.sore && true}
                disabled
              />
            </PlaceInformationContainer>
            <PlaceInformationContainer>
              <PlaceName>호흡곤란 여부</PlaceName>
              <div>네</div>
              <input
                type="checkbox"
                checked={fixedForm && fixedForm.dyspnoea && true}
                disabled
              />
              <div>아니요</div>
              <input
                type="checkbox"
                checked={fixedForm && !fixedForm.dyspnoea && true}
                disabled
              />
            </PlaceInformationContainer>
            <PlaceInformationContainer>
              <PlaceName>최근 2주 이내 확진 환자와 접촉하였습니까?</PlaceName>
              <div>네</div>
              <input
                type="checkbox"
                checked={fixedForm && fixedForm.touch && true}
                disabled
              />
              <div>아니요</div>
              <input
                type="checkbox"
                checked={fixedForm && !fixedForm.touch && true}
                disabled
              />
            </PlaceInformationContainer>
          </InformationContainer>
        </Article>
      </Container>
    );
  };
}
