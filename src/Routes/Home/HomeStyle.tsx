import { Link } from "react-router-dom";
import styled from "styled-components";

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
const Pass = styled(Link)``;
export const Headers = {
  Header,
  MenuBar,
  Logo,
  Pass,
};

const Article = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PlaceContainer = styled.div`
  margin-top: 20px;
  width: 80%;
`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SearchIconContainer = styled.div`
  z-index: 3;
  transition: all 0.5s ease-in-out;
`;
const SearchList = styled.div`
  position: fixed;
  top: 100vh;
  height: 100vh;
  width: 100vw;
  background-color: white;
  transition: all 0.5s ease-in-out;
  z-index: 2;
`;
const SearchItem = styled.div``;
const SearchInput = styled.input`
  border: none;
  padding: 10px;
  margin-right: 4px;
  z-index: 3;
  transition: all 0.5s ease-in-out;
  &:focus ~ ${SearchIconContainer} {
    transform: translateY(-85px) translateY(-5px);
  }
  &:focus {
    transform: translateY(-85px);
    width: 80%;
  }
  &:focus ~ ${SearchList} {
    display: block;
    transform: translateY(-640px);
  }
`;
const SearchHistory = styled.div`
  margin-top: 60px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PlaceCard = styled.div``;
export const Articles = {
  Article,
  Pass,
  SearchContainer,
  PlaceContainer,
  PlaceCard,
  Title,
  SearchBar,
  SearchInput,
  SearchIconContainer,
  SearchList,
  SearchItem,
  SearchHistory,
};

const Nav = styled(Link)`
  position: fixed;
  bottom: 0px;
  padding: 30px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #364c86;
`;
const GotoQRcode = styled.div`
  font-size: 20px;
  color: white;
`;
export const Navs = {
  Nav,
  GotoQRcode,
};
