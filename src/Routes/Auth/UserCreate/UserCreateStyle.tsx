import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";

export const Conatiner = styled.div`
  margin: 40px 10px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  padding-bottom: 30px;
  border-bottom: 1px solid #303f9f;
`;
const Logo = styled.div`
  font-size: 20px;
`;
export const Headers = {
  Header,
  Logo,
};

const Article = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  row-gap: 20px;
  width: 80%;
`;
const Photo = styled.input``;
const Name = styled(TextField)``;
const Id = styled(TextField)``;
const IdContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IdCheck = styled(Button)`
  width: 20px;
  height: 55px;
`;
const Password1 = styled(TextField)``;
const Password2 = styled(TextField)``;
const Submit = styled(Button)``;
export const Articles = {
  Article,
  Form,
  Photo,
  Name,
  Id,
  Password1,
  Password2,
  Submit,
  IdContainer,
  IdCheck,
};
