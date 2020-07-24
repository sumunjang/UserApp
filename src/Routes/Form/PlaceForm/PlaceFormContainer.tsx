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
  fixedOne: string;
  fixedtwo: string;
  fixedthree: string;
  fixedfour: string;
  fixedfive: string;
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
    fixedone: "",
    fixedtwo: "",
    fixedthree: "",
    fixedfour: "",
    fixedfive: "",
  };

  handleSubmit = async (e: React.FormEvent) => {
    const data = this.state.answers as [{ questionid: number; answer: string }];
    this.props.setSubmitFormData({
      requestForm: data,
      fixedForm: {
        oversea: this.state.fixedone === "yes" ? true : false,
        cough: this.state.fixedtwo === "yes" ? true : false,
        sore: this.state.fixedthree === "yes" ? true : false,
        dyspnoea: this.state.fixedfour === "yes" ? true : false,
        touch: this.state.fixedfive === "yes" ? true : false,
      },
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

  hanldefixedChangeanswer = (
    e: React.ChangeEvent,
    questionid: number,
    isYes: boolean
  ) => {
    if (questionid === 1) {
      if (isYes) {
        this.setState({ ...this.state, fixedone: "yes" });
      } else {
        this.setState({ ...this.state, fixedone: "no" });
      }
    } else if (questionid === 2) {
      if (isYes) {
        this.setState({ ...this.state, fixedtwo: "yes" });
      } else {
        this.setState({ ...this.state, fixedtwo: "no" });
      }
    } else if (questionid === 3) {
      if (isYes) {
        this.setState({ ...this.state, fixedthree: "yes" });
      } else {
        this.setState({ ...this.state, fixedthree: "no" });
      }
    } else if (questionid === 4) {
      if (isYes) {
        this.setState({ ...this.state, fixedfour: "yes" });
      } else {
        this.setState({ ...this.state, fixedfour: "no" });
      }
    } else if (questionid === 5) {
      if (isYes) {
        this.setState({ ...this.state, fixedfive: "yes" });
      } else {
        this.setState({ ...this.state, fixedfive: "no" });
      }
    }
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
      answers: this.state.answers.filter((answer) => {
        return answer.questionid !== -1;
      }),
    });
  };
  render = () => {
    console.log(this.state);
    return (
      <PlaceFormPresenter
        questions={this.state.questions}
        handleSubmit={this.handleSubmit}
        handleChangeAnswer={this.handleChangeAnswer}
        push={this.props.history.push}
        hanldefixedChangeanswer={this.hanldefixedChangeanswer}
        state={this.state}
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
