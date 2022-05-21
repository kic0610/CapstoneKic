import React from "react";
import styled from "styled-components";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

const SearchSection = styled.section`
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
  cursor: pointer;
`;

const SearchItemDate = styled.span`
  margin-right: 25%;
  border-radius: 7%;
  font-weight: 600;
  color: #bdc3ac;
`;

const SearchResult = () => {
  let [searchData, setSearchData] = useState([
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
      <h1 style={{ marginLeft: "5%", fontWeight: 600 }}>검색결과 (검색어를 서버로 전송해 검색값과 일치하는 설문post접근데이터)</h1>

      <SearchSection>
        {searchData.map((searchdata) => (
          <SearchItem>
            <SearchItemTitle key={searchdata.key} onClick={postClick} data-post-key={searchdata.key}>
              {searchdata.설문제목}
            </SearchItemTitle>
            <SearchItemDate>{searchdata.게시글작성날짜및시간}</SearchItemDate>
          </SearchItem>
        ))}
      </SearchSection>

      <PageBTN>
        <LeftCircleOutlined />
        <RightCircleOutlined />
      </PageBTN>
    </div>
  );
};

export default SearchResult;
