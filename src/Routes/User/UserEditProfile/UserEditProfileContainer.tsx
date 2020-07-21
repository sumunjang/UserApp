import React from "react";
import UserEditProfilePresetner from "./UserEditProfilePresenter";

interface IState {
  Password: string;
  Password2: string;
  errorState: string;
  errorMessage: string;
}

class UserEditProfileContainer extends React.Component<{}, IState> {
  state = {
    Password: "",
    Password2: "",
    errorState: "",
    errorMessage: "",
  };
  onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // try {
    //   if (this.state.inputPassword === this.state.inputPassword2) {
    //     await Api.Auth.UserCreateApi({
    //       name: this.state.inputName,
    //       userid: this.state.inputId,
    //       password: this.state.inputPassword,
    //     });
    //     this.props.setMessage(CreateUserMessages.CreateUserSuccess);
    //     this.props.history.push("/");
    //   } else {
    //     this.setState({
    //       errorState: "error",
    //       errorMessage: "패스워드가 다릅니다.",
    //     });
    //   }
    // } catch {
    //   this.setState({
    //     errorState: "error",
    //     errorMessage: "회원가입에 문제가 있습니다",
    //   });
    // }
  };
  changeInputPassword = (e: React.ChangeEvent) => {
    this.setState({
      Password: (e.target as HTMLInputElement).value,
    });
  };
  changeInputPassword2 = (e: React.ChangeEvent) => {
    this.setState({
      Password2: (e.target as HTMLInputElement).value,
    });
  };
  render = () => {
    return (
      <UserEditProfilePresetner
        onSubmit={this.onSubmit}
        changeInputPassword={this.changeInputPassword}
        changeInputPassword2={this.changeInputPassword2}
        state={this.state}
      />
    );
  };
}

export default UserEditProfileContainer;
