import { Input, Form } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { DatePicker, Space } from "antd";
import { useCallback } from "react";
import MultipleChoice from "../components/MultipleChoice";
import SubjectiveQuestion from "../components/SubjectiveQuestion";
import { Button } from "antd";

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

  .ant-btn {
    width: 160px;
    height: 55px;
    font-size: 1.2rem;
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

  let onFinish = () => {
    console.log("제출시도", new Date());
  };

  return (
    <Form onFinish={onFinish}>
      <h1 style={{ marginLeft: "5%", fontWeight: 600 }}>
        설문하기 (불러올껀 없고 다 작성후 서버에 데이터 전송해주기( 작성시간 , 마감시간 , 고유번호 , 설문제목 ,
        번호별(설문+설문타입,객관식선택지,주관식은타입만체크)))
      </h1>
      <TemplateSelect>
        {/* <span style={{ backgroundColor: "#EE5D5A" }}>설문 작성 완료</span> */}
        <Button type="primary" htmlType="submit">
          설문 작성 완료
        </Button>
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
    </Form>
  );
};

export default Surveying;
