import React from "react";
import styled from "styled-components";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCallback, useEffect } from "react";

import HomeMenu3 from "../components/HomeMenu3";

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

const Home = () => {
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

  // const RtimeRef = useRef(clock());

  useEffect(() => {
    setInterval(() => {
      setTime(clock());
    }, 1000);
  }, []);

  return (
    <div>
      <h1 style={{ marginLeft: "5%", fontWeight: 600 }}>홈 (설문post접근데이터 , 작성자명 , 설문제목을 썸네일로 구현 )</h1>
      <MainText style={{ fontFamily: "Reenie Beanie" }}>{Rtime}</MainText>
      <HomeSection>
        {/* PostCard로 추후에 대체 */}
        <Link to="/post/1_post_id">
          <Card
            hoverable
            style={{ width: 240, height: "400px", border: "2px solid black" }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Card.Meta title="1Europe Street beat" description="www.instagram.com" />
          </Card>
        </Link>
        <Card
          hoverable
          style={{ width: 240, height: "400px", border: "2px solid black" }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Card.Meta title="2Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ width: 240, height: "400px", border: "2px solid black" }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Card.Meta title="3Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ width: 240, height: "400px", border: "2px solid black" }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Card.Meta title="4Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ width: 240, height: "400px", border: "2px solid black" }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Card.Meta title="5Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ width: 240, height: "400px", border: "2px solid black" }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Card.Meta title="6Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ width: 240, height: "400px", border: "2px solid black" }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Card.Meta title="7Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ width: 240, height: "400px", border: "2px solid black" }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Card.Meta title="8Europe Street beat" description="www.instagram.com" />
        </Card>
      </HomeSection>
      {/* 하위 컴포넌트 리렌더링 확인목적의 HomeMenu3 컴포넌트 */}
      {/* <HomeMenu3 /> */}
    </div>
  );
};

export default Home;
