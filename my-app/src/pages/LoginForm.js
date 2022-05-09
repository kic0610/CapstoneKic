import { Form } from "antd";
import { Button } from "antd";
import { Input } from "antd";
import React from "react";
import styled from "styled-components";

const LoginBoxText = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: #012e40;
  border: black 2px solid;
  border-left: none;
  border-right: none;
  font-size: 1rem;
  font-weight: 600;
`;

const LoginBox = styled(Form)`
  border: 3px solid black;
  overflow: auto;

  .ant-checkbox-wrapper {
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
  }

  .ant-input {
    border: 1.5px solid black;
  }

  label {
    position: relative;
    font-weight: 600;
    font-size: 1rem;
    top: -7px;
  }

  background-color: #024059;
  color: white;
  border-radius: 7%;

  padding: 4%;

  position: relative;
  width: 33vw;
  left: 5%;
`;

const LoginImage = styled.div`
  border: 3px solid blue;
  > * {
    border: 1px solid red;
  }

  position: absolute;
  left: 50%;
  top: 30%;
`;

const LoginForm = () => {
  return (
    <div>
      <h1 style={{ marginLeft: "5%", fontWeight: 600 }}>로그인</h1>
      <LoginBox>
        <label htmlFor="user-email">아이디</label>
        <Input style={{ width: "20vw", display: "block" }} type={"email"} placeholder="이메일" />
        <br />
        <br />
        <label htmlFor="user-password">비밀번호</label>
        <Input style={{ width: "15vw", display: "block" }} type={"password"} placeholder="비밀번호" />
        <br />
        <br />
        <Button htmlType="submit" type="primary">
          로그인
        </Button>
        <br />
        <br />
        <br />
        <LoginBoxText>설문을 직접 조사 하시려면 로그인이 필수입니다!</LoginBoxText>
      </LoginBox>
      <LoginImage>꾸며주는 이미지</LoginImage>
    </div>
  );
};

export default LoginForm;
