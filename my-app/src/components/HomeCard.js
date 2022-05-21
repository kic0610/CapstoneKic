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
  let cardData = data.data;
  return (
    <Link to="/post/1_post_id">
      <Card hoverable style={{ width: 240, height: "400px", border: "2px solid black" }} cover={<CardTextContent>{cardData.surveyTitle}</CardTextContent>}>
        <Card.Meta title={cardData.date} />
      </Card>
    </Link>
  );
};

export default React.memo(HomeCard);
