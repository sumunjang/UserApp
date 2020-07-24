import React from "react";
import Routes from "../../Components/Routes";
import { connect } from "react-redux";
import { Container, Headers, Articles, Navs } from "./HomeStyle";
import MenuDrawer from "./Components/MenuDrawer";
import PlaceCard from "./Components/PlaceCard";
import SearchIcon from "@material-ui/icons/Search";
import HistoryCard from "./Components/HIstoryCard";

interface IProps {
  handleClickSearch(e: React.MouseEvent): void;
  handleChangeValue(e: React.ChangeEvent): void;
  handleSubmitSearch(e: React.FormEvent): void;
  recentlyVisits: Array<any>;
  push: Function;
  searchHistory: any;
}

class HomePresenter extends React.Component<IProps> {
  render = () => {
    const { Header, MenuBar, Logo, Pass } = Headers;
    const {
      Article,
      PlaceContainer,
      Title,
      SearchContainer,
      SearchBar,
      SearchInput,
      SearchIconContainer,
      SearchList,
      SearchForm,
      SearchHistory,
    } = Articles;
    const { Nav, GotoQRcode } = Navs;
    return (
      <Container>
        <Header>
          <MenuBar>
            <MenuDrawer push={this.props.push} />
          </MenuBar>
          <Logo>수문장</Logo>
          <Pass to={Routes.UserPass.replace(":userid", "123")}>출입증</Pass>
        </Header>
        <Article>
          <SearchContainer>
            <SearchForm onSubmit={this.props.handleSubmitSearch}>
              <SearchBar>
                <SearchInput
                  onChange={this.props.handleChangeValue}
                  placeholder="시설 검색하기"
                />
                <SearchIconContainer>
                  <SearchIcon onClick={this.props.handleClickSearch} />
                </SearchIconContainer>
                <SearchList>
                  <SearchHistory>
                    <HistoryCard keywords={this.props.searchHistory} />
                  </SearchHistory>
                </SearchList>
              </SearchBar>
            </SearchForm>
          </SearchContainer>
          <PlaceContainer>
            <Title>최근 작성했던 문진표</Title>
            <PlaceCard recentlyVisits={this.props.recentlyVisits} />
          </PlaceContainer>
        </Article>
        <Nav to="/qrcode">
          <GotoQRcode>QR코드로 문진표 작성하기</GotoQRcode>
        </Nav>
      </Container>
    );
  };
}

function mapStateToProps(state: any) {
  return { state };
}

// function mapDispatchToProps(dispatch: any, ownProps: any) {}

export default connect(mapStateToProps)(HomePresenter);
