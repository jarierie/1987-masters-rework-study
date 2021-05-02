import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const CursorDiv = styled.span`
  background-color: white;
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  border-radius: 50%;
  mix-blend-mode: ${(props) => (props.primary ? "difference" : "normal")};
  position: absolute;
  z-index: 10000;
  font-weight: ${(props) => (props.primary ? 900 : 100)};
`;

const cursors = [
  { size: 50, primary: true },
  { size: 40 },
  { size: 30 },
  { size: 20 },
  { size: 10 },
  { size: 5 },
  { size: 3 },
  { size: 2 },
];

const Cursor = () => {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const cursorRef = useRef(null);

  useEffect(() => {
    const set = (e) => {
      setPosition({
        x: e.pageX,
        y: e.pageY,
      });
    };
    window.addEventListener("mousemove", set);
    return () => {
      window.removeEventListener("mousemove", set);
    };
  }, []);

  const animation = (target, delay = 0) => {
    const tl = gsap.timeline();
    tl.to(cursorRef.current.childNodes[target], {
      x:
        position.x -
        cursorRef.current.childNodes[target].getBoundingClientRect().width / 2,
      y:
        position.y -
        cursorRef.current.childNodes[target].getBoundingClientRect().height / 2,
      delay,
    });
  };

  useEffect(() => {
    console.log(cursorRef.current.parentNode.childNodes);
  }, []);

  useEffect(() => {
    animation(0);
    animation(1, 0.001);
    animation(2, 0.002);
    animation(3, 0.003);
    animation(4, 0.004);
    animation(5, 0.005);
    animation(6, 0.006);
    animation(7, 0.007);
  }, [position]);

  return (
    <>
      <div ref={cursorRef}>
        {cursors.map((item) => {
          return (
            <>
              <CursorDiv
                size={item.size}
                primary={item.primary ? true : false}
              ></CursorDiv>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cursor;
