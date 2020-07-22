import React from "react";
import Routes from "../../../Components/Routes";
import { Conatiner, Headers, Articles } from "./UserVistiedListStyle";
import MenuDrawer from "../../Home/Components/MenuDrawer";
import Card from "./Components/Card";

export default class UserVistiedListPresenter extends React.Component {
  render = () => {
    const { Header, Logo, MenuBar, Cancel } = Headers;
    const { Article, Title, TitleContainer } = Articles;

    return (
      <Conatiner>
        <Header>
          <MenuBar>
            <MenuDrawer />
          </MenuBar>
          <Logo>수문장</Logo>
          <Cancel to={Routes.Home}>홈으로</Cancel>
        </Header>
        <Article>
          <TitleContainer>
            <Title>최근방문장소</Title>
          </TitleContainer>
          <Card />
        </Article>
      </Conatiner>
    );
  };
}
