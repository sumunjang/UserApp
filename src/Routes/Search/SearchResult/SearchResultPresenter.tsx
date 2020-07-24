import React from "react";
import SearchPlaces from "../../../Components/API/Places/SearchPlaces";
import { Headers, Articles, Container } from "./SearchResultStyle";
import MenuDrawer from "../../Home/Components/MenuDrawer";
import Routes from "../../../Components/Routes";
import ResultCard from "../Components/ResultCard";

interface IProps {
  keyword: string;
  push: Function;
}

interface IState {
  results: any;
}

export default class SearchResultPresenter extends React.Component<
  IProps,
  IState
> {
  state = {
    results: null,
  };

  componentDidMount = async () => {
    const results = await SearchPlaces(this.props.keyword);
    this.setState({
      results: results.data,
    });
  };

  render = () => {
    const { Header, MenuBar, Logo, Cancel } = Headers;
    const { Article, SearchKeywordContainer, Keyword } = Articles;

    return (
      <Container>
        <Header>
          <MenuBar>
            <MenuDrawer />
          </MenuBar>
          <Logo>검색결과</Logo>
          <Cancel to={Routes.Home}>홈으로</Cancel>
        </Header>
        <Article>
          <SearchKeywordContainer>
            <Keyword>{this.props.keyword}</Keyword>
          </SearchKeywordContainer>
          <ResultCard results={this.state.results} push={this.props.push} />
        </Article>
      </Container>
    );
  };
}
