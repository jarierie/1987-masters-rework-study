import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  margin: auto;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 13px;
  position: fixed;
  font-weight: 400;
  background-color: #21252c;
  z-index: 99;
  div {
    font-size: 20px;
    font-weight: bold;
  }
`;

const HeaderMenu = styled.div`
  width: 800px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    list-style: none;
  }

  a {
    height: 100%;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 550;
  }
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <div>1987</div>
        <HeaderMenu>
          <li>
            <a href=''>services</a>
          </li>
          <li>
            <a href=''>career</a>
          </li>
          <li>
            <a href=''>order placement</a>
          </li>
          <li>
            <a href=''>portfolio</a>
          </li>
          <li>
            <a href=''>academy</a>
          </li>
          <li>
            <a href=''>contacts</a>
          </li>
        </HeaderMenu>
      </HeaderContainer>{" "}
    </>
  );
};

export default Header;
