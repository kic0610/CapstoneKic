import { Menu } from "antd";
import { Input } from "antd";
import { Link, NavLink } from "react-router-dom";

import React from "react";

import styled from "styled-components";

import { EditTwoTone, UserOutlined } from "@ant-design/icons";

const HomeMenuBar = styled(Menu)`
  position: sticky;
  top: 0px;
  width: 100vw;
  height: auto;

  z-index: 255;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  background: rgba(255, 255, 255, 0.1);
  -webkit-backdrop-filter: saturate(180%) blur(15px);
  -moz-backdrop-filter: saturate(180%) blur(15px);
  -o-backdrop-filter: saturate(180%) blur(15px);
  backdrop-filter: saturate(180%) blur(15px);

  /* background-color: #003300; */

  .MenuBTN {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: black;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 600;
  }

  .MenuBTN:hover {
    transition: 0.7s;
    box-shadow: 0px 0px 10px #1890ff;
  }
`;

const HomeMenu = () => {
  return (
    <HomeMenuBar>
      <Link to="/">
        <div style={{ fontSize: "2rem", fontWeight: "800", marginRight: "3%", color: "#2F3F56" }}>Home</div>
      </Link>
      <Input.Search style={{ width: "40%" }} placeholder="찾아볼 설문을 입력하세요" enterButton />
      <NavLink to="/Writer_id/post">
        <Menu.Item className="MenuBTN" icon={<UserOutlined style={{ fontSize: "1.3rem" }} />}>
          내 정보
        </Menu.Item>
      </NavLink>
      <NavLink to="/surveying">
        <Menu.Item className="MenuBTN" icon={<EditTwoTone style={{ fontSize: "1.3rem" }} />}>
          설문하기
        </Menu.Item>
      </NavLink>
      <NavLink to="/signup">
        <Menu.Item className="MenuBTN">회원가입</Menu.Item>
      </NavLink>
      <NavLink to="/login">
        <Menu.Item className="MenuBTN">로그인</Menu.Item>
      </NavLink>
    </HomeMenuBar>
  );
};

export default HomeMenu;
