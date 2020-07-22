import React from "react";
import SearchResultPresenter from "./SearchResultPresenter";
import { RouteComponentProps } from "react-router-dom";

interface IProps extends RouteComponentProps {}

interface IKeyword {
  keyword: string;
}

export default class SearchResultContainer extends React.Component<IProps> {
  handleOnClickItem = (e: React.MouseEvent) => {};
  render = () => {
    const { keyword } = this.props.match.params as IKeyword;
    return (
      <SearchResultPresenter keyword={keyword} push={this.props.history.push} />
    );
  };
}
