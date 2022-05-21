import React from "react";
import styled from "styled-components";

import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

const MyPostSection = styled.section`
  position: relative;
  width: 70vw;
  height: auto;
  min-height: 73vh;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
`;

const MyPostItem = styled.div`
  margin-top: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #181a1b;
  padding: 10px;
`;

const MyPostItemTitle = styled.span`
  margin-left: 5%;
  font-weight: 600;
  color: #226dff;
`;

const MyPostItemDate = styled.span`
  margin-right: 25%;
  border-radius: 7%;
  font-weight: 600;
  color: #bdc3ac;
`;

const PageBTN = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 70px;

  left: 50%;
  transform: translateX(-50%);

  font-size: 1.5rem;

  margin-top: 2%;
  text-align: center;
`;

const MySurvey = () => {
  let [mySurvey, setMySurvey] = useState([
    { 설문제목: "설문제목1", 게시글작성날짜및시간: "Sat May 21 2022 01:44:33", key: "OWEFQRF" },
    { 설문제목: "설문제목2", 게시글작성날짜및시간: "Sat May 21 2022 12:55:46", key: "PBMFOGU" },
  ]);

  //게시물 클릭시 게시물고유 id를통해 페이지 전환하기
  let postClick = (e) => {
    window.location.href = `/post/${e.currentTarget.getAttribute("data-post-key")}`;
    console.log(e.currentTarget.getAttribute("data-post-key"));
  };

  return (
    <div>
      <h1 style={{ marginLeft: "5%", fontWeight: 600 }}>
        MY 설문목록 (로그인 여부 , 자신 id로 작성된 post접근데이터 , (설문제목, 작성시간, 작성자 , 마감시간) )
      </h1>
      <MyPostSection>
        {mySurvey.map((mySurvey) => (
          <MyPostItem>
            <MyPostItemTitle key={mySurvey.key} onClick={postClick} data-post-key={mySurvey.key}>
              {mySurvey.설문제목}
            </MyPostItemTitle>
            <MyPostItemDate>{mySurvey.게시글작성날짜및시간}</MyPostItemDate>
          </MyPostItem>
        ))}
      </MyPostSection>
      <PageBTN>
        <LeftCircleOutlined />
        <RightCircleOutlined />
      </PageBTN>
    </div>
  );
};

export default MySurvey;
