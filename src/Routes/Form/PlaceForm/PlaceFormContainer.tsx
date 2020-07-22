import React from "react";
import PlaceFormPresenter from "./PlaceFormPresenter";
import { RouteComponentProps } from "react-router-dom";
import GetForm from "../../../Components/API/Forms/GetForm";
import PostForm from "../../../Components/API/Forms/PostForm";

interface IProps extends RouteComponentProps {}

interface IState {
  questions: Array<{ questionid: number; question: string }>;
  answers: Array<{ questionid: number; answer: string }>;
}

export default class PlaceFormContainer extends React.Component<IProps> {
  state = { questions: [], answers: new Array() };

  handleSubmit = async (e: React.FormEvent) => {
    const data = this.state.answers as [{ questionid: number; answer: string }];
    await PostForm({ requestForm: data });
    this.props.history.goBack();
  };

  handleChangeAnswer = (e: React.ChangeEvent, questionid: number) => {
    let isNomal = false;
    this.state.answers.map((answer: any) => {
      if (answer.questionid == questionid) {
        answer.answer = (e.target as HTMLInputElement).value;
        isNomal = true;
      }
    });
    if (isNomal == false) {
      this.state.answers.push({
        questionid: questionid,
        answer: (e.target as HTMLInputElement).value,
      });
    }
  };

  componentDidMount = async () => {
    const response = await GetForm(2);
    const data = (response.data as { requestForm: [] }).requestForm;
    this.setState({ ...this.state, questions: data });
  };
  render = () => {
    return (
      <PlaceFormPresenter
        questions={this.state.questions}
        handleSubmit={this.handleSubmit}
        handleChangeAnswer={this.handleChangeAnswer}
      />
    );
  };
}
