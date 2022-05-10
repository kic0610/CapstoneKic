import { Input, Form } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import { DatePicker, Space } from "antd";

const TemplateSelect = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70vw;
  height: 20vh;
  left: 50%;
  transform: translateX(-50%);

  background-color: #024059;

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: antiquewhite;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 5px;
    width: 25%;
    height: 30%;
    border-radius: 5px;
    transition: 0.6s;
    cursor: pointer;
  }

  span:nth-child(1):hover {
    box-shadow: 0px 0px 15px #ee5d5a;
  }
  span:nth-child(2):hover {
    box-shadow: 0px 0px 15px #e6aa52;
  }
  span:nth-child(3):hover {
    box-shadow: 0px 0px 15px #aec9c3;
  }
`;

const TemplateForm = styled(Form)`
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

const TitleSurveyBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 25px;
`;

const SurveyBox = styled.div`
  margin-top: 100px;

  min-width: 100%;
  max-width: 100%;

  .answerObjectivity {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
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
    background-color: #181a1b;
    color: #a5a5a6;
    border: none;
  }
`;

const AnswerTypeSelect = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 0.9rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

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

const AddBtn = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  top: 53%;
  right: 0.7%;

  width: 13%;
  height: 20%;

  color: #bfbfbf;

  font-weight: 600;

  div {
    border-radius: 4px;
    background-color: #181a1b;
    padding: 3px;

    width: 100%;
    text-align: center;
    transition: 0.6s;

    cursor: pointer;
  }

  div:hover {
    box-shadow: 0px 0px 15px #181a1b;
  }
`;

const surveying = () => {
  return (
    <div>
      <h1 style={{ marginLeft: "5%", fontWeight: 600 }}>
        설문하기 (불러올껀 없고 다 작성후 서버에 데이터 전송해주기( 작성시간 , 마감시간 , 고유번호 , 설문제목 ,
        번호별(설문+설문타입,객관식선택지,주관식은타입만체크)))
      </h1>
      <TemplateSelect>
        <span style={{ backgroundColor: "#EE5D5A" }}>설문 작성 완료</span>
        <span style={{ backgroundColor: "#E6AA52" }}>자기소개 템플릿</span>
        <span style={{ backgroundColor: "#AEC9C3" }}>여행지 선택 템플릿</span>
      </TemplateSelect>
      <br />
      <br />
      <br />

      <TemplateForm>
        <div className="TopForm">
          <TitleSurveyBox>
            <Input.TextArea
              placeholder="설문 제목을 입력하세요"
              style={{ fontSize: "1rem", width: "40vw", height: "37px", backgroundColor: "#181A1B", color: "white", border: "none" }}
              maxLength={30}
            ></Input.TextArea>
            <div className="bottomLine" style={{ bottom: "inherit", backgroundColor: "gray", height: "1px", width: "40vw", display: "block" }}></div>
            <br />
            <Space direction="vertical" size={12}>
              <DatePicker showTime placeholder="설문의 마감 날짜/시간" />
            </Space>
          </TitleSurveyBox>
        </div>
        <br />
        <br />

        <SurveyBox>
          <Input.TextArea placeholder="설문을 입력하세요"></Input.TextArea>
          <div className="bottomLine" style={{ bottom: "inherit", backgroundColor: "pink", height: "1px", width: "99%", display: "block" }}></div>

          <AnswerTypeSelect>
            <span style={{ marginRight: "90px" }}> 응답받을 답변 형식을 선택하세요.</span>
            <span className="subjectiveQuestion">주관식</span> <span className="objectivityQuestion">객관식</span>
          </AnswerTypeSelect>

          <div className="answerSubject">사용자의 답변이 입력되는 란입니다.</div>
          <div className="bottomLine" style={{ bottom: "inherit", backgroundColor: "green", height: "1px", width: "99%", display: "block" }}></div>
        </SurveyBox>

        <SurveyBox>
          <Input.TextArea placeholder="설문을 입력하세요"></Input.TextArea>
          <div className="bottomLine" style={{ bottom: "inherit", backgroundColor: "pink", height: "1px", width: "99%", display: "block" }}></div>

          <AnswerTypeSelect>
            <span style={{ marginRight: "90px" }}> 응답받을 답변 형식을 선택하세요.</span>
            <span className="subjectiveQuestion">주관식</span> <span className="objectivityQuestion">객관식</span>
          </AnswerTypeSelect>

          <div className="answerObjectivity">
            <span className="answerObjectivityItem">
              <MinusCircleOutlined />
              <input type="checkbox" name="피자" id="피자" />
              <label for="피자">피자1</label>
            </span>
            <span className="answerObjectivityItem">
              <MinusCircleOutlined />
              <input type="checkbox" name="피자" id="피자" />
              <label for="피자">피자2</label>
            </span>
            <span className="answerObjectivityItem">
              <MinusCircleOutlined />
              <input type="checkbox" name="피자" id="피자" />
              <label for="피자">피자3</label>
            </span>
            <span className="answerObjectivityItem">
              <MinusCircleOutlined />
              <input type="checkbox" name="피자" id="피자" />
              <label for="피자">장문 텍스트 입니다. 장문 텍스트 입니다 장문 텍스트 입니다 장문 텍스트 입니다.</label>
            </span>
            <span className="answerObjectivityItem">
              <MinusCircleOutlined />
              <input type="checkbox" name="피자" id="피자" />
              <label for="피자">햄버거1</label>
            </span>
            <span className="answerObjectivityItem">
              <MinusCircleOutlined />
              <input type="checkbox" name="피자" id="피자" />
              <label for="피자">햄버거2</label>
            </span>
            <span className="answerObjectivityItem">
              <MinusCircleOutlined />
              <input type="checkbox" name="피자" id="피자" />
              <label for="피자">햄버거3</label>
            </span>
            <span className="answerObjectivityItem">
              <MinusCircleOutlined />
              <input type="checkbox" name="피자" id="피자" />
              <label for="피자">햄버거4</label>
            </span>
          </div>
          <div className="bottomLine" style={{ bottom: "inherit", backgroundColor: "green", height: "1px", width: "99%", display: "block" }}></div>
        </SurveyBox>
      </TemplateForm>
      <AddBtn>
        <div>
          <PlusCircleOutlined style={{ marginRight: "10px", fontSize: "1rem" }} />
          객관식 설문 추가
        </div>
        <div>
          <PlusCircleOutlined style={{ marginRight: "10px", fontSize: "1rem" }} />
          주관식 설문 추가
        </div>
      </AddBtn>
    </div>
  );
};

export default surveying;
