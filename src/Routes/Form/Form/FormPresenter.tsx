import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Routes from "../../../Components/Routes";

const Container = styled.div``;

const Header = styled.div`
  display: flex;
`;

const Back = styled(Link)``;

const PlaceName = styled.div``;

const Home = styled(Link)``;

const PlaceFormContainer = styled.div``;

const PlaceRequestFormContainer = styled.div``;

const PlaceFixedFormContainer = styled.div``;

const Nav = styled.nav``;

const SubmitForm = styled(Link)``;

const FormPresenter: React.FunctionComponent = () => {
  return (
    <Container>
      <Header>
        <Back to={Routes.Home}>뒤로</Back>
        <PlaceName>시설이름</PlaceName>
        <Home to={Routes.Home}>홈으로</Home>
      </Header>
      <PlaceFormContainer>
        <PlaceRequestFormContainer>시설 요구 정보</PlaceRequestFormContainer>
        <PlaceFixedFormContainer>
          고정으로 제공하는 문진표
        </PlaceFixedFormContainer>
      </PlaceFormContainer>
      <Nav>
        <SubmitForm to={Routes.Home} />
      </Nav>
    </Container>
  );
};

export default FormPresenter;
