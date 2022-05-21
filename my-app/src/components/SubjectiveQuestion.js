import { Input } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { useCallback } from "react";
import shortid from "shortid";

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
    width: 249px;
    height: 70px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 9px;
  }

  .SubjectiveQuestionTitle {
    font-size: 1rem;
    width: 99%;
    height: 37px;
    background-color: #181a1b;
    color: #a5a5a6;
    border: none;
  }

  .OptionForm {
    font-size: 1rem;
    color: #a5a5a6;
    height: 55px;
    background-color: #181a1b;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .OptionForm::-webkit-scrollbar {
    display: none;
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

const SubjectiveQuestion = (data) => {
  let [option, setOption] = useState([]);

  let onOptionAdd = useCallback(() => {
    let shortkey = shortid.generate();
    setOption(option.concat(shortkey));
  }, [option]);

  let onOptionRemove = useCallback(
    (e) => {
      const target = e.currentTarget.getAttribute("data-option-key");
      setOption(option.filter((data) => data !== target));
    },
    [option]
  );

  // 입력을 받아서 상태로 저장하는 모듈
  let [state, setState] = useState();
  let onInput = useCallback((e) => {
    setState(e.target.value);
    console.log(e.target.value);
  }, []);

  return (
    <SurveyBox key={data} style={{ msUserSelect: "none", MozUserSelect: "-moz-none", WebkitUserSelect: "none", userSelect: "none" }}>
      <Input.TextArea className="SubjectiveQuestionTitle" placeholder="설문을 입력하세요" value={state} onChange={onInput}></Input.TextArea>
      <div className="bottomLine" style={{ bottom: "inherit", backgroundColor: "pink", height: "1px", width: "99%", display: "block" }}></div>

      <span onClick={onOptionAdd} style={{ cursor: "pointer" }}>
        <PlusCircleOutlined style={{ marginRight: "10px", marginTop: "20px", fontSize: "1rem" }} />
        선택지 추가
      </span>

      <br />

      <div className="answerObjectivitybox">
        {option.map((data2) => (
          <span className="answerObjectivityItem" key={data2}>
            <span onClick={onOptionRemove} data-option-key={data2}>
              <MinusCircleOutlined style={{ marginRight: "5px", cursor: "pointer" }} />
            </span>
            <Input.TextArea className="OptionForm" placeholder="선택지를 입력"></Input.TextArea>
          </span>
        ))}
      </div>
      <div
        className="bottomLine"
        style={{ bottom: "inherit", backgroundColor: "green", height: "1px", width: "99%", display: "block", marginTop: "20px" }}
      ></div>
    </SurveyBox>
  );
};

export default SubjectiveQuestion;
