import React, { useEffect, useReducer, useRef } from "react";
import styled from "styled-components";
import Header from "./Header";
import Hero from "./Hero";
import { gsap } from "gsap";
import Cursor from "./Cursor";
import HeaderSubtext from "./HeaderSubtext";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #21252c;

  hr {
    width: 90%;
    position: fixed;
    margin-top: 100px;
  }
`;

const SubContainer = styled.div`
  width: 90%;
  height: auto;
  background-color: #21252c;
`;

const Main = () => {
  const ref = useRef(null);
  //animation :

  const animation = () => {
    const tl = gsap.timeline();
    tl.from(ref.current, { opacity: 0, duration: 3, delay: 0.5 }).from(
      ref.current.nextSibling,
      { opacity: 0, duration: 3.5 },
      0.8
    );
  };

  useEffect(() => {
    animation();
  }, []);

  return (
    <>
      <Cursor></Cursor>
      <Container>
        <SubContainer ref={ref}>
          <Header />
        </SubContainer>
        <hr></hr>
        <SubContainer>
          <Hero />
        </SubContainer>
        <SubContainer>
          <HeaderSubtext></HeaderSubtext>
        </SubContainer>
      </Container>{" "}
    </>
  );
};

export default Main;
