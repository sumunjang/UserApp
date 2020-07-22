import React from "react";
import { Articles } from "../PlaceFormStyle";
import styled from "styled-components";

interface IProps {
  questions: Array<{ questionid: number; question: string }>;
  onChangeAnswer(e: React.ChangeEvent, questionid: number): void;
}

export default class PlaceCard extends React.Component<IProps> {
  render = () => {
    const { UserInformationContainer, UserName, VisitTime } = Articles;
    const IdContainer = styled.div`
      display: none;
    `;
    return (
      <>
        {this.props.questions.map((question) => {
          return (
            <UserInformationContainer>
              <IdContainer>{question.questionid}</IdContainer>
              <UserName>{question.question}</UserName>
              <VisitTime>
                <input
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
