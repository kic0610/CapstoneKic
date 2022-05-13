import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useCallback, useEffect } from "react";

import HomeCard from "../components/HomeCard";

const MainText = styled.div`
  display: block;
  text-align: center;
  font-size: 2.5rem;
  font-family: "Cinzel Decorative", cursive;
  background-color: rgba(255, 234, 204, 0.6);
`;

const HomeSection = styled.section`
  width: 100%;
  margin-top: 20px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  row-gap: 5em;

  justify-items: center;
  align-items: flex-start;
`;

let homeCardData = [
  { writer: "zuckerberg1", surveyTitle: "설문1" },
  { writer: "zuckerberg2", surveyTitle: "설문2" },
  { writer: "zuckerberg3", surveyTitle: "설문3" },
  { writer: "zuckerberg4", surveyTitle: "설문4" },
  { writer: "zuckerberg5", surveyTitle: "설문5" },
  { writer: "zuckerberg6", surveyTitle: "설문6" },
  { writer: "zuckerberg7", surveyTitle: "설문7" },
  { writer: "zuckerberg8", surveyTitle: "설문8" },
];

const Home = () => {
  // console.log(dummy_writer[0].writer);
  useEffect(() => {
    console.log("Home 리렌더링");
  });

  let [Rtime, setTime] = useState(null);

  const clock = useCallback(() => {
    let time = new Date();

    let month = time.getMonth();
    let date = time.getDate();
    let day = time.getDay();
    let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let TimeText =
      // eslint-disable-next-line no-useless-concat
      `Today is ${week[day]} , ${month + 1}/${date}, ` +
      `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}` +
      " Have a nice day";

    return TimeText;
  }, []); // prev를 사용하면 state값을 불러온다 !로 반전값을 준다

  useEffect(() => {
    setInterval(() => {
      setTime(clock());
    }, 1000);
  }, []);

  return (
    // prop를 받아와 하나씩 넣어서
    <div>
      <h1 style={{ marginLeft: "5%", fontWeight: 600 }}>홈WM OS (설문post접근데이터 , 작성자명 , 설문제목을 썸네일로 구현 )</h1>
      <MainText style={{ fontFamily: "Reenie Beanie" }}>{Rtime}</MainText>
      <HomeSection>
        {homeCardData.map((data) => (
          <HomeCard data={data} />
        ))}
      </HomeSection>
    </div>
  );
};

export default Home;
