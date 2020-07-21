import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  padding: 10px 10px;
  background-color: #364c86;
  color: white;
`;
const MenuBar = styled.div``;
const Logo = styled.div`
  margin-left: 80px;
  margin-right: 100px;
`;
const Cancel = styled(Link)``;
export const Headers = {
  Header,
  Logo,
  MenuBar,
  Cancel,
};

const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Information = styled.div``;
const ProfileContainer = styled.div`
  border: 1px solid #364c86;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 0px;
  width: 60%;
  margin-bottom: 40px;
`;
const Title = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`;
const UserName = styled.div`
  font-size: 20px;
`;
const Btns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const EditProfileBtn = styled.div`
  margin-right: 20px;
`;
const DeleteUserBtn = styled.div``;
export const Articles = {
  Article,
  Information,
  ProfileContainer,
  Title,
  UserName,
  Btns,
  EditProfileBtn,
  DeleteUserBtn,
};

const Nav = styled.nav``;
export const Navs = {
  Nav,
};
