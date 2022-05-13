import React from "react";
import styled from "styled-components";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";

const CardTextContent = styled.div`
  width: 100%;
  height: 300px;
  background-color: gray;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  word-break: keep-all;

  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem;
`;

const HomeCard = (data) => {
  let data1 = data.data;
  console.log(data1);

  return (
    <Link to="/post/1_post_id">
      {/* <Card
        hoverable
        style={{ width: 240, height: "400px", border: "2px solid black" }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Card.Meta title={dummy_writer.dummy_writer} />
      </Card> */}
      <Card hoverable style={{ width: 240, height: "400px", border: "2px solid black" }} cover={<CardTextContent>{data1.surveyTitle}</CardTextContent>}>
        <Card.Meta title={data1.writer} />
      </Card>
    </Link>
  );
};

export default React.memo(HomeCard);
