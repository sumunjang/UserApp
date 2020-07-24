import React from "react";
import HomePresenter from "./HomePresenter";
import CheckLogin from "../../Components/CheckLogin";
import { RouteComponentProps } from "react-router-dom";
import API from "../../Components/API";

interface IProps extends RouteComponentProps<any> {}

interface IState {
  keyword: string;
  recentlyVisits: Array<any>;
}

export default class HomeContainer extends React.Component<IProps, IState> {
  state = {
    keyword: "",
    recentlyVisits: [
      {
        placeid: -1,
        placename: "",
        address: "",
        visittime: "",
      },
    ],
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

  componentDidMount = async () => {
    if (CheckLogin() === false) {
      this.props.history.push("/");
    }
    const data = await API.User.UserRecentlyVisit();
    const userdata = data.data as Array<any>;
    userdata.map((userData) => {
      this.setState({
        ...this.state,
        recentlyVisits: this.state.recentlyVisits.concat({
          placeid: userData.placeid,
          placename: userData.placename,
          address: userData.address,
          visittime: userData.visittime,
        }),
      });
      return this.state;
    });
    this.setState({
      ...this.state,
      recentlyVisits: this.state.recentlyVisits.filter((userData) => {
        return userData.placeid !== -1;
      }),
    });
  };

  render = () => {
    return (
      <HomePresenter
        handleClickSearch={this.handleClickSearch}
        handleChangeValue={this.handleChangeValue}
        recentlyVisits={this.state.recentlyVisits}
      />
    );
  };
}
