import styled from "styled-components";
import { Link } from "react-router-dom";

export const Conatiner = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  padding: 23px 10px;
  background-color: #364c86;
  color: white;
`;
const Logo = styled.div`
  margin-left: 130px;
  margin-right: 100px;
`;
const Cancel = styled.div``;
export const Headers = {
  Header,
  Logo,
  Cancel,
};

const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Photo = styled.div``;
const InformationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  border: 1px solid #364c86;
  width: 50%;
  padding: 20px 0px;
`;
const PlaceName = styled.div`
  margin-bottom: 20px;
`;
const UserName = styled.div`
  margin-bottom: 20px;
`;
const VisitTime = styled.div`
  margin-bottom: 20px;
`;
const CurrentTime = styled.div``;
export const Articles = {
  Article,
  Photo,
  InformationContainer,
  PlaceName,
  UserName,
  VisitTime,
  CurrentTime,
};

const Nav = styled.nav`
  position: fixed;
  bottom: 30px;
  left: 60px;
`;
const Watermark = styled.nav`
  padding: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Navs = {
  Nav,
  Watermark,
};
