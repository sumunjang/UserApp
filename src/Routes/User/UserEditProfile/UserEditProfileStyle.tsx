import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";

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
const TitleContainer = styled.div`
  border: 1px solid #364c86;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 15px 0px;
  width: 60%;
  margin-bottom: 40px;
`;
const Title = styled.div`
  font-size: 20px;
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
const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  row-gap: 20px;
  width: 80%;
`;
const Password1 = styled(TextField)``;
const Password2 = styled(TextField)``;
const Submit = styled(Button)``;
export const Articles = {
  Article,
  Information,
  TitleContainer,
  Title,
  UserName,
  Btns,
  EditProfileBtn,
  DeleteUserBtn,
  Form,
  Password1,
  Password2,
  Submit,
};

const Nav = styled.nav``;
export const Navs = {
  Nav,
};
