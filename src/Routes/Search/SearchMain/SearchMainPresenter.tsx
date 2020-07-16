import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Header = styled.div`
  display: flex;
`;

const Back = styled(Link)``;

const SearchBar = styled.input``;

const Search = styled(Link)``;

const SearchHistory = styled.div``;

const SearchPresenter: React.FunctionComponent = () => {
  return (
    <Container>
      <Header>
        <Back to="/">뒤로</Back>
        <SearchBar type="text" />
        <Search to="/search/result">검색하기</Search>
      </Header>
      <SearchHistory>검색기록</SearchHistory>
    </Container>
  );
};

export default SearchPresenter;
