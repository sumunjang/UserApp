import React from "react";
import { Articles } from "../PlaceFormStyle";
import styled from "styled-components";

interface IProps {
  onChangeAnswer: Function;
  state: any;
}

export default class PlaceCard extends React.Component<IProps> {
  render = () => {
    const { UserInformationContainer, UserName, VisitTime } = Articles;
    return (
      <>
        <UserInformationContainer>
          <UserName>최근 2주 이내 해외 방문여부</UserName>
          <VisitTime>
            <div>네</div>
            <input
              type="radio"
              id="oneYes"
              name="questionOne"
              onChange={(e: React.ChangeEvent) => {
                this.props.onChangeAnswer(e, 1, true);
              }}
            />
            <div>아니요</div>
            <input
              type="radio"
              id="oneNo"
              name="questionOne"
              onChange={(e: React.ChangeEvent) => {
                this.props.onChangeAnswer(e, 1, false);
              }}
            />
          </VisitTime>
        </UserInformationContainer>
        <UserInformationContainer>
          <UserName>기침</UserName>
          <VisitTime>
            <div>네</div>
            <input
              type="radio"
              id="twoYes"
              name="questionTwo"
              onChange={(e: React.ChangeEvent) => {
                this.props.onChangeAnswer(e, 2, true);
              }}
            />
            <div>아니요</div>
            <input
              type="radio"
              id="twoNo"
              name="questionTwo"
              onChange={(e: React.ChangeEvent) => {
                this.props.onChangeAnswer(e, 2, false);
              }}
            />
          </VisitTime>
        </UserInformationContainer>
        <UserInformationContainer>
          <UserName>인후통</UserName>
          <VisitTime>
            <div>네</div>
            <input
              type="radio"
              id="threeYes"
              name="questionThree"
              onChange={(e: React.ChangeEvent) => {
                this.props.onChangeAnswer(e, 3, true);
              }}
            />
            <div>아니요</div>
            <input
              type="radio"
              id="threeNo"
              name="questionThree"
              onChange={(e: React.ChangeEvent) => {
                this.props.onChangeAnswer(e, 3, false);
              }}
            />
          </VisitTime>
        </UserInformationContainer>
        <UserInformationContainer>
          <UserName>호흡곤란</UserName>
          <VisitTime>
            <div>네</div>
            <input
              type="radio"
              id="fourYes"
              name="questionFour"
              onChange={(e: React.ChangeEvent) => {
                this.props.onChangeAnswer(e, 4, true);
              }}
            />
            <div>아니요</div>
            <input
              type="radio"
              id="fourNo"
              name="questionFour"
              onChange={(e: React.ChangeEvent) => {
                this.props.onChangeAnswer(e, 4, false);
              }}
            />
          </VisitTime>
        </UserInformationContainer>
        <UserInformationContainer>
          <UserName>최근 2주 이내 확진환자와 접촉한 경우</UserName>
          <VisitTime>
            <div>네</div>
            <input
              type="radio"
              id="fiveYes"
              name="questionFive"
              onChange={(e: React.ChangeEvent) => {
                this.props.onChangeAnswer(e, 5, true);
              }}
            />
            <div>아니요</div>
            <input
              type="radio"
              id="fiveNo"
              name="questionFive"
              onChange={(e: React.ChangeEvent) => {
                this.props.onChangeAnswer(e, 5, false);
              }}
            />
          </VisitTime>
        </UserInformationContainer>
      </>
    );
  };
}
