import React from "react";
import Routes from "../../../Components/Routes";
import MenuDrawer from "../../Home/Components/MenuDrawer";
import { Container, Headers, Articles, Navs } from "./PlaceFormStyle";
import Cards from "./Components/Cards";
import FixedCards from "./Components/FixedCards";

interface IState {
  answers: Array<string>;
}

interface IProps {
  questions: Array<{ questionid: number; question: string }>;
  handleSubmit(e: React.FormEvent): void;
  handleChangeAnswer(e: React.ChangeEvent, questionid: number): void;
  push: Function;
  hanldefixedChangeanswer: Function;
  state: any;
}

export default class PlaceFormPresenter extends React.Component<
  IProps,
  IState
> {
  render = () => {
    const { Header, MenuBar, Logo, Cancel } = Headers;
    const { Article, InformationContainer, Title } = Articles;
    const { Nav, SubmitForm } = Navs;

    return (
      <Container>
        <Header>
          <MenuBar>
            <MenuDrawer push={this.props.push} />
          </MenuBar>
          <Logo>검색결과</Logo>
          <Cancel to={Routes.Home}>홈으로</Cancel>
        </Header>
        <Article>
          <InformationContainer>
            <Title>시설 요구 정보</Title>
            <Cards
              questions={this.props.questions}
              onChangeAnswer={this.props.handleChangeAnswer}
            />
          </InformationContainer>
          <InformationContainer>
            <Title>문진표</Title>
            <FixedCards
              onChangeAnswer={this.props.hanldefixedChangeanswer}
              state={this.props.state}
            />
          </InformationContainer>
        </Article>
        <Nav>
          <SubmitForm onClick={this.props.handleSubmit}>
            문진표 제출하기
          </SubmitForm>
        </Nav>
      </Container>
    );
  };
}
