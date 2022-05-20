import { Input, Form } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { DatePicker, Space } from "antd";
import { useCallback } from "react";

const SurveyBox = styled.div`
  margin-top: 100px;

  min-width: 100%;
  max-width: 100%;

  .answerObjectivitybox {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .answerObjectivityItem {
    /* min-width: 85px; */
    width: 280px;
    height: 70px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 9px;
  }

  /* ant-input는 Input.TextArea를 뜻함 */
  .MultipleChoiceTitle {
    font-size: 1rem;
    width: 99%;
    height: 37px;
    background-color: #181a1b;
    color: #a5a5a6;
    border: none;
  }

  .AnswerTypeSelect {
    display: flex;
    justify-content: space-around;
    font-size: 0.9rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .subjectiveQuestion {
    background-color: #3c5473;
    width: 60px;
    text-align: center;
    padding: 3px;
    color: #9c9489;
    font-weight: 600;
    cursor: pointer;
  }

  .objectivityQuestion {
    background-color: #a8a2a2;
    width: 60px;
    text-align: center;
    padding: 3px;
    color: #353535;
    font-weight: 600;
    cursor: pointer;
  }
`;

const MultipleChoice = (data) => {
  return (
    <SurveyBox key={data}>
      <Input.TextArea className="MultipleChoiceTitle" placeholder="이곳에 질의할 설문을 입력하세요"></Input.TextArea>
      <div className="bottomLine" style={{ bottom: "inherit", backgroundColor: "pink", height: "1px", width: "99%", display: "block" }}></div>

      <div className="AnswerTypeSelect">
        <span style={{ marginRight: "90px" }}> 응답받을 답변 형식을 선택하세요.</span>
        <span className="subjectiveQuestion">주관식</span> <span className="objectivityQuestion">객관식</span>
      </div>

      <div className="answerSubject">사용자의 답변이 입력되는 란입니다.</div>
      <div
        className="bottomLine"
        style={{ bottom: "inherit", backgroundColor: "green", height: "1px", width: "99%", display: "block", marginTop: "10px" }}
      ></div>
    </SurveyBox>
  );
};

export default MultipleChoice;
