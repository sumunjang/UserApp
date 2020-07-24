import React from "react";
import MenuDrawer from "../../Home/Components/MenuDrawer";
import { Container, Headers, Articles, Navs } from "./UserDeleteStyle";
import Routes from "../../../Components/Routes";
import { Button } from "@material-ui/core";

interface IProps {
  handleCancelBtn(e: React.MouseEvent): void;
  handleDeleteBtn(e: React.MouseEvent): void;
  push: Function;
}

export default class UserDeletePresenter extends React.Component<IProps> {
  render = () => {
    const { Header, Logo, Cancel, MenuBar } = Headers;
    const {
      Article,
      Btns,
      Title,
      EditProfileBtn,
      DeleteUserBtn,
      ProfileContainer,
    } = Articles;
    const { Nav } = Navs;

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
          <ProfileContainer>
            <Title>탈퇴하시겠습니까?</Title>
          </ProfileContainer>
          <Btns>
            <EditProfileBtn>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={this.props.handleDeleteBtn}
              >
                탈퇴
              </Button>
            </EditProfileBtn>
            <DeleteUserBtn>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={this.props.handleCancelBtn}
              >
                이전
              </Button>
            </DeleteUserBtn>
          </Btns>
        </Article>
        <Nav></Nav>
      </Container>
    );
  };
}
