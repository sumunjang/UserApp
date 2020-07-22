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

const Article = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const SearchKeywordContainer = styled.div`
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
const Keyword = styled.div`
  font-size: 20px;
`;

export const Articles = {
  Article,
  SearchKeywordContainer,
  Keyword,
};
