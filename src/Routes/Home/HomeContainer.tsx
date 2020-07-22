import React from "react";
import HomePresenter from "./HomePresenter";
import CheckLogin from "../../Components/CheckLogin";
import { RouteComponentProps } from "react-router-dom";

interface IProps extends RouteComponentProps<any> {}

interface IState {
  keyword: string;
}

export default class HomeContainer extends React.Component<IProps, IState> {
  state = {
    keyword: "",
  };

  handleClickSearch = (e: React.MouseEvent) => {
    this.props.history.push(`/search/${this.state.keyword}`);
  };

  handleChangeValue = (e: React.ChangeEvent) => {
    const value = (e.target as HTMLInputElement).value;
    this.setState({
      ...this.state,
      keyword: value,
    });
  };

  render = () => {
    if (CheckLogin() === false) {
      this.props.history.push("/");
    }
    return (
      <HomePresenter
        handleClickSearch={this.handleClickSearch}
        handleChangeValue={this.handleChangeValue}
      />
    );
  };
}
