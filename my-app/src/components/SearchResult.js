import React from "react";
import styled from "styled-components";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

const SearchSection = styled.section`
  background-color: aliceblue;
  position: relative;
  width: 70vw;
  height: auto;
  min-height: 73vh;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
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

const SearchItem = styled.div`
  margin-top: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #181a1b;
  padding: 10px;
`;

const SearchItemTitle = styled.span`
  margin-left: 5%;
  font-weight: 600;
  color: #226dff;
`;

const SearchItemDate = styled.span`
  margin-right: 25%;
  border-radius: 7%;
  font-weight: 600;
  color: #bdc3ac;
`;

const SearchResult = () => {
  return (
    <div>
      <h1 style={{ marginLeft: "5%", fontWeight: 600 }}>검색결과 (검색어를 서버로 전송해 검색값과 일치하는 설문post접근데이터)</h1>
      <SearchSection>
        <SearchItem>
          <SearchItemTitle> 카테고리 \ 설문 제목1 </SearchItemTitle>
          <SearchItemDate>게시글 작성 날짜 \ 시간</SearchItemDate>
        </SearchItem>
        <SearchItem>
          <SearchItemTitle> 카테고리 \ 설문 제목2 </SearchItemTitle>
          <SearchItemDate>게시글 작성 날짜 \ 시간</SearchItemDate>
        </SearchItem>
        <SearchItem>
          <SearchItemTitle> 카테고리 \ 설문 제목3 </SearchItemTitle>
          <SearchItemDate>게시글 작성 날짜 \ 시간</SearchItemDate>
        </SearchItem>
        <SearchItem>
          <SearchItemTitle> 카테고리 \ 설문 제목4 </SearchItemTitle>
          <SearchItemDate>게시글 작성 날짜 \ 시간</SearchItemDate>
        </SearchItem>
        <SearchItem>
          <SearchItemTitle> 카테고리 \ 설문 제목5 </SearchItemTitle>
          <SearchItemDate>게시글 작성 날짜 \ 시간</SearchItemDate>
        </SearchItem>
        <SearchItem>
          <SearchItemTitle> 카테고리 \ 설문 제목6 </SearchItemTitle>
          <SearchItemDate>게시글 작성 날짜 \ 시간</SearchItemDate>
        </SearchItem>
        <SearchItem>
          <SearchItemTitle> 카테고리 \ 설문 제목7 </SearchItemTitle>
          <SearchItemDate>게시글 작성 날짜 \ 시간</SearchItemDate>
        </SearchItem>
        <SearchItem>
          <SearchItemTitle> 카테고리 \ 설문 제목8 </SearchItemTitle>
          <SearchItemDate>게시글 작성 날짜 \ 시간</SearchItemDate>
        </SearchItem>
        <SearchItem>
          <SearchItemTitle> 카테고리 \ 설문 제목9 </SearchItemTitle>
          <SearchItemDate>게시글 작성 날짜 \ 시간</SearchItemDate>
        </SearchItem>
        <SearchItem>
          <SearchItemTitle> 카테고리 \ 설문 제목10 </SearchItemTitle>
          <SearchItemDate>게시글 작성 날짜 \ 시간</SearchItemDate>
        </SearchItem>
        <SearchItem>
          <SearchItemTitle> 카테고리 \ 설문 제목11 </SearchItemTitle>
          <SearchItemDate>게시글 작성 날짜 \ 시간</SearchItemDate>
        </SearchItem>
      </SearchSection>
      <PageBTN>
        <LeftCircleOutlined />
        <RightCircleOutlined />
      </PageBTN>
    </div>
  );
};

export default SearchResult;
