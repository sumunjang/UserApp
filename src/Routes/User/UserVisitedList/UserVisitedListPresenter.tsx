import React from "react";
import Routes from "../../../Components/Routes";
import { Conatiner, Headers, Articles } from "./UserVistiedListStyle";
import MenuDrawer from "../../Home/Components/MenuDrawer";
import Card from "./Components/Card";
import API from "../../../Components/API";

interface IProps {
  push: Function;
  data: any;
}

interface IState {
  placeInform: any;
}

export default class UserVistiedListPresenter extends React.Component<IProps> {
  state = {
    placeInform: new Array<any>(),
  };

  render = () => {
    const { Header, Logo, MenuBar, Cancel } = Headers;
    const { Article, Title, TitleContainer } = Articles;
    return (
      <Conatiner>
        <Header>
          <MenuBar>
            <MenuDrawer push={this.props.push} />
          </MenuBar>
          <Logo>수문장</Logo>
          <Cancel to={Routes.Home}>홈으로</Cancel>
        </Header>
        <Article>
          <TitleContainer>
            <Title>최근방문장소</Title>
          </TitleContainer>
          <Card data={this.props.data} />
        </Article>
      </Conatiner>
    );
  };
}
