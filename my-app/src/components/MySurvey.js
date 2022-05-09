import React from "react";
import styled from "styled-components";

import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

const MyPostSection = styled.section`
  background-color: aliceblue;
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
  return (
    <div>
      <h1 style={{ marginLeft: "5%", fontWeight: 600 }}>
        MY 설문목록 (로그인 여부 , 자신의 id로 작성된 설문post접근데이터 , (설문제목, 작성시간, 작성자 , 마감시간) )
      </h1>
      <MyPostSection>
        <MyPostItem>
          <MyPostItemTitle> 카테고리 \ 설문 제목1 </MyPostItemTitle>
          <MyPostItemDate>게시글 작성 날짜 \ 시간</MyPostItemDate>
        </MyPostItem>
        <MyPostItem>
          <MyPostItemTitle> 카테고리 \ 설문 제목2 </MyPostItemTitle>
          <MyPostItemDate>게시글 작성 날짜 \ 시간</MyPostItemDate>
        </MyPostItem>
        <MyPostItem>
          <MyPostItemTitle> 카테고리 \ 설문 제목3 </MyPostItemTitle>
          <MyPostItemDate>게시글 작성 날짜 \ 시간</MyPostItemDate>
        </MyPostItem>
        <MyPostItem>
          <MyPostItemTitle> 카테고리 \ 설문 제목4 </MyPostItemTitle>
          <MyPostItemDate>게시글 작성 날짜 \ 시간</MyPostItemDate>
        </MyPostItem>
        <MyPostItem>
          <MyPostItemTitle> 카테고리 \ 설문 제목5 </MyPostItemTitle>
          <MyPostItemDate>게시글 작성 날짜 \ 시간</MyPostItemDate>
        </MyPostItem>
        <MyPostItem>
          <MyPostItemTitle> 카테고리 \ 설문 제목6 </MyPostItemTitle>
          <MyPostItemDate>게시글 작성 날짜 \ 시간</MyPostItemDate>
        </MyPostItem>
        <MyPostItem>
          <MyPostItemTitle> 카테고리 \ 설문 제목7 </MyPostItemTitle>
          <MyPostItemDate>게시글 작성 날짜 \ 시간</MyPostItemDate>
        </MyPostItem>
        <MyPostItem>
          <MyPostItemTitle> 카테고리 \ 설문 제목8 </MyPostItemTitle>
          <MyPostItemDate>게시글 작성 날짜 \ 시간</MyPostItemDate>
        </MyPostItem>
        <MyPostItem>
          <MyPostItemTitle> 카테고리 \ 설문 제목9 </MyPostItemTitle>
          <MyPostItemDate>게시글 작성 날짜 \ 시간</MyPostItemDate>
        </MyPostItem>
        <MyPostItem>
          <MyPostItemTitle> 카테고리 \ 설문 제목10 </MyPostItemTitle>
          <MyPostItemDate>게시글 작성 날짜 \ 시간</MyPostItemDate>
        </MyPostItem>
        <MyPostItem>
          <MyPostItemTitle> 카테고리 \ 설문 제목11 </MyPostItemTitle>
          <MyPostItemDate>게시글 작성 날짜 \ 시간</MyPostItemDate>
        </MyPostItem>
        <MyPostItem>
          <MyPostItemTitle> 카테고리 \ 설문 제목12 </MyPostItemTitle>
          <MyPostItemDate>게시글 작성 날짜 \ 시간</MyPostItemDate>
        </MyPostItem>
        <MyPostItem>
          <MyPostItemTitle> 카테고리 \ 설문 제목13 </MyPostItemTitle>
          <MyPostItemDate>게시글 작성 날짜 \ 시간</MyPostItemDate>
        </MyPostItem>
      </MyPostSection>
      <PageBTN>
        <LeftCircleOutlined />
        <RightCircleOutlined />
      </PageBTN>
    </div>
  );
};

export default MySurvey;
