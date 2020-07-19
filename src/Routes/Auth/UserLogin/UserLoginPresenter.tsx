import React from "react";
import Routes from "../../../Components/Routes";
import { Container, Headers, Articles, Navs } from "./UserLoginStyle";
import Alert from "@material-ui/lab/Alert";

interface IProps {
  onLogin(e: React.FormEvent): void;
  changeInputId(e: React.ChangeEvent): void;
  changeInputPassword(e: React.ChangeEvent): void;
  state: {
    errorState: string;
    errorMessage: string;
  };
}

const UserLoginPresenter: React.FunctionComponent<IProps> = ({
  onLogin,
  state,
  changeInputId,
  changeInputPassword,
}) => {
  return (
    <Container>
      <Headers.Header>
        <Headers.Logo></Headers.Logo>
      </Headers.Header>
      <Articles.Article>
        <Articles.SubmitLoginForm onSubmit={onLogin}>
          <Articles.InputIdContainer>
            <Articles.InputId
              label="아이디"
              variant="outlined"
              onChange={changeInputId}
            />
          </Articles.InputIdContainer>
          <Articles.InputPasswordContainer>
            <Articles.InputPassword
              label="패스워드"
              type="password"
              variant="outlined"
              onChange={changeInputPassword}
            />
          </Articles.InputPasswordContainer>
          <Articles.NavBtnContainer>
            <Articles.SubmitLoginContainer>
              <Articles.SubmitLogin variant="contained" type="submit">
                로그인
              </Articles.SubmitLogin>
            </Articles.SubmitLoginContainer>
            <Articles.CreateUserLink to={Routes.UserCreate}>
              <Articles.CreateUserBtn variant="contained" color="primary">
                회원가입하기
              </Articles.CreateUserBtn>
            </Articles.CreateUserLink>
          </Articles.NavBtnContainer>
        </Articles.SubmitLoginForm>
      </Articles.Article>
      <Navs.Nav>
        {state.errorState === "error" ? (
          <Alert severity="error">{state.errorMessage}</Alert>
        ) : (
          ""
        )}
        {state.errorState === "success" ? (
          <Alert severity="success">{state.errorMessage}</Alert>
        ) : (
          ""
        )}
      </Navs.Nav>
    </Container>
  );
};

export default UserLoginPresenter;
