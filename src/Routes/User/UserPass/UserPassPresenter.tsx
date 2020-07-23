import React from "react";
import TextLoop from "react-text-loop";
import { Conatiner, Headers, Articles, Navs } from "./UserPassStyle";

interface IProps {
  handleClickBack(e: React.MouseEvent): void;
  data: any;
}

export default class UserPassPresenter extends React.Component<IProps> {
  render = () => {
    const { Header, Logo, Cancel } = Headers;
    const {
      Article,
      InformationContainer,
      PlaceName,
      UserName,
      VisitTime,
      CurrentTime,
      UserInformationContainer,
      PlaceInformationContainer,
      PlaceAddress,
      Title,
    } = Articles;
    const { Nav, Watermark } = Navs;
    const { placedata, userdata } = this.props.data;

    return (
      <Conatiner>
        <Header>
          <Logo>수문장</Logo>
          <Cancel onClick={this.props.handleClickBack}>뒤로가기</Cancel>
        </Header>
        <Article>
          <InformationContainer>
            <Title>유저 정보</Title>
            <UserInformationContainer>
              <UserName>{userdata && userdata.username}</UserName>
              <VisitTime>
                방문시간 : {placedata && placedata.visittime}
              </VisitTime>
              <CurrentTime>현재시간 : {Date().toLocaleString()}</CurrentTime>
            </UserInformationContainer>
            <Title>시설 정보</Title>
            <PlaceInformationContainer>
              <PlaceName>{placedata && placedata.placename}</PlaceName>
              <PlaceAddress>{placedata && placedata.address}</PlaceAddress>
            </PlaceInformationContainer>
          </InformationContainer>
        </Article>
        <Nav>
          <Watermark>
            <TextLoop interval={1000}>
              <span>이 문장이 움직이면 정상적인 출입증입니다.</span>
              <span>이 문장이 움직이면 정상적인 출입증입니다.</span>
            </TextLoop>
          </Watermark>
        </Nav>
      </Conatiner>
    );
  };
}
