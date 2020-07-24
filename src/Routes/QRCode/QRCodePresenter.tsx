import React from "react";
import { Container, Headers, Articles } from "./QRCodeStyle";
import MenuDrawer from "../Home/Components/MenuDrawer";
import Routes from "../../Components/Routes";
import QRPresenter from "./Components/QRPresenter";

interface IProps {
  push: Function;
  isSubmit: boolean;
}

export default class QRCodePresenter extends React.Component<IProps> {
  render = () => {
    const { Header, MenuBar, Logo, Cancel } = Headers;
    const { Article, Title } = Articles;
    return (
      <Container>
        <Header>
          <MenuBar>
            <MenuDrawer push={this.props.push} />
          </MenuBar>
          <Logo>수문장</Logo>
          <Cancel to={Routes.Home}>홈으로</Cancel>
        </Header>
        <Article>
          <Title>QRCode 스캔하기</Title>
          <QRPresenter push={this.props.push} isSubmit={this.props.isSubmit} />
        </Article>
      </Container>
    );
  };
}
