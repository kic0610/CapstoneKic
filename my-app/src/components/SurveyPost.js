import { Input, Form } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";

const ServeyForm = styled(Form)`
  position: relative;

  display: flex;
  flex-direction: column;

  left: 50%;
  transform: translateX(-50%);
  width: 70vw;
  height: auto;
  min-height: 80vh;
  background-color: #181a1b;
  color: white;
  font-size: 1.2rem;
  padding: 7%;

  /* 센터로 정렬하는 flex */
  display: flex;
  justify-content: center;
  align-items: center;

  .ant-input {
    border: 2px solid black;
    border-radius: 7px;
  }

  .TopForm {
    position: absolute;
    top: 0;
    width: 100%;
    height: auto;
    color: white;
    background-color: #024059;
    padding: 20px;
  }
`;

const SurveyBox = styled.div`
  margin-top: 100px;

  min-width: 100%;
  max-width: 100%;

  .answerObjectivity {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 25px;
  }

  .answerObjectivityItem {
    min-width: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 7.5px;
    margin-bottom: 7.5px;
  }

  .ant-input {
    font-size: 1rem;
    width: 99%;
    height: 37px;
    margin-top: 25px;
    background-color: #181a1b;
    color: #a5a5a6;
    border: none;
  }
`;

const SurveyPost = () => {
  return (
    <div>
      <h1 style={{ marginLeft: "5%", fontWeight: 600 }}>ㅁㅁid의 게시물 (게시물의 id를통해 (설문제목,설문번호별 설문+설문타입,객관식선택지,주관식은구현))</h1>

      <ServeyForm>
        <div className="TopForm">
          <span style={{ cursor: "pointer" }}>
            <PlusCircleOutlined className="AddBtn" style={{ marginRight: "10px" }} />
            설문 작성 완료
          </span>
        </div>

        <SurveyBox>
          <div className="surveyTitle">가장 좋아하는 음식은? (제목데이터 , 주관식)</div>
          <div className="bottomLine" style={{ bottom: "inherit", backgroundColor: "pink", height: "1px", width: "99%", display: "block" }}></div>

          <Input.TextArea placeholder="사용자의 답변이 입력되는 란입니다."></Input.TextArea>
          <div className="bottomLine" style={{ bottom: "inherit", backgroundColor: "green", height: "1px", width: "99%", display: "block" }}></div>
        </SurveyBox>

        <SurveyBox>
          <div className="surveyTitle">가장 좋아하는 음식은? (제목데이터 , 객관식)</div>
          <div className="bottomLine" style={{ bottom: "inherit", backgroundColor: "pink", height: "1px", width: "99%", display: "block" }}></div>

          <div className="answerObjectivity">
            <span className="answerObjectivityItem">
              <input type="checkbox" name="피자" id="피자" />
              <label for="피자">고기 피자</label>
            </span>
            <span className="answerObjectivityItem">
              <input type="checkbox" name="피자" id="피자" />
              <label for="피자">포테이토 피자</label>
            </span>
            <span className="answerObjectivityItem">
              <input type="checkbox" name="피자" id="피자" />
              <label for="피자">김치 피자</label>
            </span>
            <span className="answerObjectivityItem">
              <input type="checkbox" name="피자" id="피자" />
              <label for="피자">장문 텍스트 입니다. 장문 텍스트 입니다 장문 텍스트 입니다 장문 텍스트 입니다.</label>
            </span>
            <span className="answerObjectivityItem">
              <input type="checkbox" name="피자" id="피자" />
              <label for="피자">적당한 길이의 텍스트</label>
            </span>
            <span className="answerObjectivityItem">
              <input type="checkbox" name="피자" id="피자" />
              <label for="피자">로스트 치킨</label>
            </span>
          </div>
          <div className="bottomLine" style={{ bottom: "inherit", backgroundColor: "green", height: "1px", width: "99%", display: "block" }}></div>
        </SurveyBox>
      </ServeyForm>
    </div>
  );
};

export default SurveyPost;
