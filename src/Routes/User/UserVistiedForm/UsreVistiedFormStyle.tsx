import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export const Container = styled.div``;

const Header = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  padding: 10px 10px;
  background-color: #364c86;
  color: white;
`;
const MenuBar = styled.div``;
const Logo = styled.div`
  margin-left: 60px;
  margin-right: 80px;
`;
const Cancel = styled(Link)``;
export const Headers = {
  Header,
  Logo,
  MenuBar,
  Cancel,
};

const Article = styled.article`
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const BtnContainer = styled.div``;
const BtnFold = styled(Button)``;
const BtnSpared = styled(Button)``;
const Photo = styled.div``;
const InformationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
const PlaceName = styled.div`
  margin-bottom: 20px;
`;
const UserName = styled.div`
  margin-bottom: 20px;
`;
const VisitTime = styled.div``;
const CurrentTime = styled.div``;
const UserInformationContainer = styled.div`
  padding: 20px;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #364c86;
  margin-bottom: 30px;
`;
const PlaceInformationContainer = styled.div`
  padding: 20px;
  border: 1px solid #364c86;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const PlaceAddress = styled.div``;
const Title = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 7px;
  border-bottom: 1px solid #364c86;
  margin-bottom: 20px;
  margin-top: 20px;
`;
export const Articles = {
  Article,
  Photo,
  InformationContainer,
  PlaceName,
  UserName,
  VisitTime,
  CurrentTime,
  UserInformationContainer,
  PlaceInformationContainer,
  PlaceAddress,
  Title,
  BtnContainer,
  BtnFold,
  BtnSpared,
};

const Nav = styled.nav`
  position: fixed;
  bottom: 0px;
  padding: 30px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #364c86;
`;
const SubmitForm = styled.div`
  font-size: 20px;
  color: white;
`;
export const Navs = {
  Nav,
  SubmitForm,
};
