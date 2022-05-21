import { Route, Routes } from "react-router-dom";

import React from "react";
import Home from "./pages/Home";
import styled from "styled-components";

import SignupForm from "./pages/SignupForm";
import LoginForm from "./pages/LoginForm";
import Surveying from "./pages/Surveying";
import SearchResult from "./components/SearchResult";
import MySurvey from "./components/MySurvey";
import SurveyPost from "./components/SurveyPost";
import HomeMenu from "./components/HomeMenu";

const MyFooter = styled.footer`
  position: absolute;
  padding: 5px;
  border: 2px solid black;
  background-color: #1d2021;
  color: #9c9489;
  width: 100%;
  height: 15vh;
  font-weight: 500;
`;

const App = () => {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "Background" }}>
      <HomeMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/surveying" element={<Surveying />} />
      </Routes>

      <Routes>
        <Route path="/search/query" element={<SearchResult />} />
        <Route path="/Writer_id/post" element={<MySurvey />} />
        <Route path="/post/1_post_id" element={<SurveyPost />} />
      </Routes>
      <br />
      <br />
      <br />
      <MyFooter>
        문의사항&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;고객요청사항에 남기시거나, study6819789@gmail.com에 문의를 남겨주세요.
        <hr />
        <div style={{ position: "absolute", bottom: "0px" }}>
          Copyright © 2022 KIC Inc. 모든 권리 보유
          <br />
          Establishment&nbsp;&nbsp;강익치
        </div>
      </MyFooter>
    </div>
  );
};

export default App;
