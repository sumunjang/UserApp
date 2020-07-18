import React from "react";
import styled from "styled-components";

const Conatiner = styled.div`
  margin: 20px 10px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;
const Logo = styled.div`
  margin: 0px 100px;
`;
const Cancel = styled.div``;

const Article = styled.article``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label``;
const Photo = styled.input``;
const Name = styled.input``;
const Id = styled.input``;
const Password1 = styled.input``;
const Password2 = styled.input``;
const Submit = styled.button``;

interface IProps {
  onSubmit(e: React.FormEvent): void;
  goBack(): void;
}

const UserCreatePresenter: React.FunctionComponent<IProps> = ({
  onSubmit,
  goBack,
}) => {
  return (
    <Conatiner>
      <Header>
        <Logo>로고</Logo>
        <Cancel onClick={goBack}>뒤로</Cancel>
      </Header>
      <Article>
        <Form onSubmit={onSubmit}>
          <Label htmlFor="photo" />
          <Photo type="file" id="photo" accept="image/*" />
          <Name type="text" placeholder="이름" />
          <Id type="text" placeholder="아이디" />
          <Password1 type="password" placeholder="패스워드" />
          <Password2 type="password" placeholder="패스워드 확인" />
          <Submit>회원가입하기</Submit>
        </Form>
      </Article>
    </Conatiner>
  );
};

export default UserCreatePresenter;
