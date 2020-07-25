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
          let idindex = 0;
          let targetindex = 0;
          (this.props.state.answers as Array<string>).forEach((answer: any) => {
            console.log(question.questionid, answer.questionid);
            if (question.questionid === parseInt(answer.questionid)) {
              targetindex = idindex;
            } else {
              idindex += 1;
            }
          });

          console.log(idindex);
          console.log(targetindex);
          console.log(this.props.state.answers[idindex]);
          return (
            <UserInformationContainer>
              <IdContainer>{question.questionid}</IdContainer>
              <UserName>{question.question}</UserName>
              <VisitTime>
                <input
                  value={
                    this.props.state.answers[idindex] &&
                    this.props.state.answers[idindex].answer
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
