import React from "react";
import MenuDrawer from "../../Home/Components/MenuDrawer";
import { Container, Headers, Articles, Navs } from "./UserEditProfileStyle";
import Routes from "../../../Components/Routes";
import Message from "../../../Components/Message";

interface IProps {
  onSubmit(e: React.FormEvent): void;
  changeInputPassword(e: React.ChangeEvent): void;
  changeInputPassword2(e: React.ChangeEvent): void;
  state: any;
}

export default class UserEditProfilePresenter extends React.Component<IProps> {
  render = () => {
    const { Header, Logo, Cancel, MenuBar } = Headers;
    const { Article, Title, TitleContainer } = Articles;

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
          <TitleContainer>
            <Title>프로필 수정</Title>
          </TitleContainer>
          <Articles.Form onSubmit={this.props.onSubmit}>
            <Articles.Password1
              label="패스워드"
              variant="outlined"
              type="password"
              onChange={this.props.changeInputPassword}
            />
            <Articles.Password2
              label="패스워드 확인"
              variant="outlined"
              type="password"
              onChange={this.props.changeInputPassword2}
            />
            <Articles.Submit variant="contained" color="primary" type="submit">
              프로필 수정하기
            </Articles.Submit>
            <Message
              errorState={this.props.state.errorState}
              errorMessage={this.props.state.errorMessage}
            />
          </Articles.Form>
        </Article>
      </Container>
    );
  };
}
