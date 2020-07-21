import React from "react";
import MenuDrawer from "../../Home/Components/MenuDrawer";
import { Container, Headers, Articles, Navs } from "./UserProfileStyle";
import Routes from "../../../Components/Routes";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

class UserProfilePresenter extends React.Component {
  render = () => {
    const { Header, Logo, Cancel, MenuBar } = Headers;
    const {
      Article,
      Btns,
      Title,
      EditProfileBtn,
      DeleteUserBtn,
      UserName,
      ProfileContainer,
    } = Articles;
    const { Nav } = Navs;

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
          <ProfileContainer>
            <Title>프로필</Title>
            <UserName>이름</UserName>
          </ProfileContainer>
          <Btns>
            <EditProfileBtn>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                component={Link}
                to={Routes.UserEditProfile}
              >
                프로필 수정
              </Button>
            </EditProfileBtn>
            <DeleteUserBtn>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                component={Link}
                to={Routes.UserDelete}
              >
                회원탈퇴
              </Button>
            </DeleteUserBtn>
          </Btns>
        </Article>
        <Nav></Nav>
      </Container>
    );
  };
}

export default UserProfilePresenter;
