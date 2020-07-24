import React from "react";
import Routes from "../../../Components/Routes";
import MenuDrawer from "../../Home/Components/MenuDrawer";
import { Container, Headers, Articles, Navs } from "./PlaceFormStyle";
import Cards from "./Components/Cards";

interface IState {
  answers: Array<string>;
}

interface IProps {
  questions: Array<{ questionid: number; question: string }>;
  handleSubmit(e: React.FormEvent): void;
  handleChangeAnswer(e: React.ChangeEvent, questionid: number): void;
  push: Function;
}

export default class PlaceFormPresenter extends React.Component<
  IProps,
  IState
> {
  staticQuestions = [
    "최근 2주 이내 해외 방문여부",
    "기침, 인후통, 호흡곤란 등 의심 증상",
    "최근 2주 이내 확진환자와 접촉한 경우",
  ];
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
