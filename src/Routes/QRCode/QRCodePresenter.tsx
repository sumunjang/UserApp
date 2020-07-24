import React from "react";
import { Container, Headers, Articles } from "./QRCodeStyle";
import MenuDrawer from "../Home/Components/MenuDrawer";
import Routes from "../../Components/Routes";
import QRPresenter from "./Components/QRPresenter";

export default class QRCodePresenter extends React.Component {
  render = () => {
    const { Header, MenuBar, Logo, Cancel } = Headers;
    const { Article, Title } = Articles;
    return (
      <Container>
        <Header>
          <MenuBar>
            <MenuDrawer />
          </MenuBar>
          <Logo>수문장</Logo>
          <Cancel to={Routes.Home}>홈으로</Cancel>
        </Header>
        <Article>
          <Title>QRCode 스캔하기</Title>
          <QRPresenter />
        </Article>
      </Container>
    );
  };
}
