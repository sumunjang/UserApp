import React from "react";
import PlaceFormPresenter from "./PlaceFormPresenter";
import { RouteComponentProps } from "react-router-dom";
import GetForm from "../../../Components/API/Forms/GetForm";
import { connect } from "react-redux";
import { ReduxActions } from "../../../Components/Redux/Store";

interface IProps extends RouteComponentProps {
  setSubmitFormData: Function;
}

interface IState {
  questions: Array<{ questionid: number; question: string }>;
  answers: Array<{ questionid: number; answer: string }>;
}

class PlaceFormContainer extends React.Component<IProps> {
  state = {
    questions: [
      {
        questionid: -1,
        question: "",
      },
    ],
    answers: [
      {
        questionid: -1,
        answer: "",
      },
    ],
  };

  handleSubmit = async (e: React.FormEvent) => {
    // const data = this.state.answers as [{ questionid: number; answer: string }];
    // await PostForm(
    //   { requestForm: data },
    //   (this.props.match.params as any).placeid
    // );
    // this.props.history.goBack();
    const data = this.state.answers as [{ questionid: number; answer: string }];
    this.props.setSubmitFormData({
      requestForm: data,
      placeid: (this.props.match.params as any).placeid,
    });
    this.props.history.push("/qrcode/submit");
  };

  handleChangeAnswer = (e: React.ChangeEvent, questionid: number) => {
    let isNomal = false;
    this.state.answers.map((answer: any) => {
      if (answer.questionid === questionid) {
        answer.answer = (e.target as HTMLInputElement).value;
        isNomal = true;
      }
      return answer.asnwer;
    });
    if (isNomal === false) {
      this.state.answers.push({
        questionid: questionid,
        answer: (e.target as HTMLInputElement).value,
      });
    }
    this.setState({
      ...this.state,
      questions: this.state.questions.filter((question) => {
        return question.questionid !== -1;
      }),
    });
  };

  componentDidMount = async () => {
    const response = await GetForm((this.props.match.params as any).placeid);
    const data = (response.data as { requestForm: [] }).requestForm;
    this.setState({ ...this.state, questions: data });
    this.setState({
      ...this.state,
      questions: this.state.questions.filter((question) => {
        return question.questionid !== -1;
      }),
    });
  };
  render = () => {
    return (
      <PlaceFormPresenter
        questions={this.state.questions}
        handleSubmit={this.handleSubmit}
        handleChangeAnswer={this.handleChangeAnswer}
        push={this.props.history.push}
      />
    );
  };
}

function mapStateToProps(state: any) {
  return { reduxState: state };
}

function mapDispatchToProps(dispatch: any, ownProps: any) {
  return {
    setSubmitFormData: (submitFormData: object) => {
      return dispatch(ReduxActions.setSubmitFormData(submitFormData));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceFormContainer);
