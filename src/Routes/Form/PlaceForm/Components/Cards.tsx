import React from "react";
import { Articles } from "../PlaceFormStyle";
import styled from "styled-components";

interface IProps {
  questions: Array<{ questionid: number; question: string }>;
  onChangeAnswer(e: React.ChangeEvent, questionid: number): void;
  state: any;
}

interface IState {
  open: boolean;
}

export default class PlaceCard extends React.Component<IProps> {
  state = {
    open: false,
  };

  render = () => {
    const { UserInformationContainer, UserName, VisitTime } = Articles;
    const IdContainer = styled.div`
      display: none;
    `;
    console.log(this.props.state);
    return (
      <>
        {this.props.questions.map((question) => {
          return (
            <UserInformationContainer>
              <IdContainer>{question.questionid}</IdContainer>
              <UserName>{question.question}</UserName>
              <VisitTime>
                <input
                  value={
                    this.props.state.answers[question.questionid - 1] &&
                    this.props.state.answers[question.questionid - 1].answer
                  }
                  onChange={(e: React.ChangeEvent) => {
                    this.props.onChangeAnswer(e, question.questionid);
                  }}
                />
              </VisitTime>
            </UserInformationContainer>
          );
        })}
      </>
    );
  };
}
