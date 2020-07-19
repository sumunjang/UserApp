import { Link } from "react-router-dom";
import LogoImage from "../../../Components/Image/Logo.png";
import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 50px;
`;
const Logo = styled.div`
  height: 150px;
  width: 150px;
  background-image: url(${LogoImage});
  background-position: center;
  background-size: cover;
`;

export const Headers = {
  Header,
  Logo,
};

const Article = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const SubmitLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
`;
const InputIdContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin-bottom: 15px;
`;
const InputId = styled(TextField)``;
const InputPasswordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin-bottom: 15px;
`;
const InputPassword = styled(TextField)``;
const SubmitLoginContainer = styled.div`
  margin-right: 20px;
`;
const SubmitLogin = styled(Button)`
  text-align: center;
`;
const CreateUserLink = styled(Link)`
  text-align: center;
`;
const CreateUserBtn = styled(Button)`
  text-align: center;
`;
const NavBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Articles = {
  Article,
  SubmitLoginForm,
  InputIdContainer,
  InputId,
  InputPassword,
  InputPasswordContainer,
  SubmitLogin,
  CreateUserLink,
  SubmitLoginContainer,
  CreateUserBtn,
  NavBtnContainer,
};

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Message = styled.div``;

export const Navs = {
  Nav,
  Message,
};
