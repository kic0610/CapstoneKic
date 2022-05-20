import { Input, Form } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { DatePicker, Space } from "antd";
import { useCallback } from "react";
import MultipleChoice from "../components/MultipleChoice";
import SubjectiveQuestion from "../components/SubjectiveQuestion";

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

  display: flex;
  justify-content: center;
  align-items: center;

  /* ant-input는 Input.TextArea를 뜻함 */
  .surveyTitle {
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

const SurveyContainer = styled.div`
  width: 100%;
`;

const Surveying = () => {
  let [multipleChoiceKey, setMultipleChoiceKey] = useState([0]);

  let onMultipleChoiceAdd = useCallback(() => {
    const N_multipleChoiceKey = multipleChoiceKey.concat(2);
    setMultipleChoiceKey(N_multipleChoiceKey);
  }, [multipleChoiceKey]);

  let [SubjectiveQuestionKey, setSubjectiveQuestionKey] = useState([0]);

  let onSubjectiveQuestionAdd = useCallback(() => {
    const N_SubjectiveQuestionKey = SubjectiveQuestionKey.concat(2);
    setSubjectiveQuestionKey(N_SubjectiveQuestionKey);
  }, [SubjectiveQuestionKey]);

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

      <TemplateForm className="TemplateForm">
        <div className="TopForm">
          <TitleSurveyBox>
            <Input.TextArea
              className="surveyTitle"
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

        <SurveyContainer>
          {multipleChoiceKey.map((data) => (
            <MultipleChoice data={data} />
          ))}

          {SubjectiveQuestionKey.map((data) => (
            <SubjectiveQuestion data={data} />
          ))}
        </SurveyContainer>
      </TemplateForm>

      <AddBtn>
        <div onClick={onMultipleChoiceAdd}>
          <PlusCircleOutlined style={{ marginRight: "10px", fontSize: "1rem" }} />
          주관식 설문 추가
        </div>

        <div onClick={onSubjectiveQuestionAdd}>
          <PlusCircleOutlined style={{ marginRight: "10px", fontSize: "1rem" }} />
          객관식 설문 추가
        </div>
      </AddBtn>
    </div>
  );
};

export default Surveying;
