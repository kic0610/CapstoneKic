import React from "react";

import { Input } from "antd";
import { Button } from "antd";
import { Checkbox } from "antd";
import { Form } from "antd";

import styled from "styled-components";

const SignupBox = styled(Form)`
  border: 4px solid black;
  overflow: auto;

  .ant-checkbox-wrapper {
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
    color: wheat;
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
  width: 40vw;
  max-width: 40vw;
  min-width: 40vw;
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

const SignupForm = () => {
  return (
    <div>
      <h1 style={{ marginLeft: "5%", fontWeight: 600 }}>회원가입</h1>
      <br />

      <SignupBox>
        <label htmlFor="user-nickname">닉네임</label>
        <Input style={{ width: "15vw", display: "block" }} type={"text"} placeholder="닉네임" />
        <br />
        <br />
        <label htmlFor="user-email">아이디</label>
        <Input style={{ width: "20vw", display: "block" }} type={"email"} placeholder="이메일" />
        <br />
        <br />
        <label htmlFor="user-password">비밀번호</label>
        <Input style={{ width: "15vw", display: "block" }} type={"password"} placeholder="비밀번호" />
        <br />
        <br />
        <label htmlFor="user-password-check">비밀번호 확인</label>
        <Input style={{ width: "15vw", display: "block" }} type={"password"} placeholder="비밀번호 확인" />
        <br />
        <br />
        <Checkbox>약관에 동의해야 회원가입을 진행할수있습니다 일부로 가로 콘텐츠를 오버플로우 시켰습니다</Checkbox>
        <br />
        <br />
        <Button htmlType="submit" type="primary">
          회원가입
        </Button>
      </SignupBox>
      <LoginImage>꾸며주는 이미지</LoginImage>
    </div>
  );
};

export default SignupForm;
