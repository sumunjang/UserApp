import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vw;
`;

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

const Article = styled.article``;
const Title = styled.div`
  text-align: center;
  color: white;
`;
export const Articles = {
  Article,
  Title,
};

const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Video = styled.video`
  width: 100%;
  height: 100%;
`;

export const QRStyle = {
  VideoContainer,
  Video,
};
