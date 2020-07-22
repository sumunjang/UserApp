import React from "react";
import SearchResultPresenter from "./SearchResultPresenter";
import { RouteComponentProps } from "react-router-dom";

interface IProps extends RouteComponentProps {}

interface IKeyword {
  keyword: string;
}

export default class SearchResultContainer extends React.Component<IProps> {
  render = () => {
    const { keyword } = this.props.match.params as IKeyword;
    return <SearchResultPresenter keyword={keyword} />;
  };
}
