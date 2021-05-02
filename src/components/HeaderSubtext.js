import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const Container = styled.div`
  width: 90%;
  height: 1000px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 100%;
  height: auto;
  color: white;
  text-align: ${(props) => props.align};
  font-size: 35px;
  overflow: hidden;
  margin: 5px;
  p {
    margin: 0;
  }
`;

const textData = [
  {
    text: "1987 masters academy is the educational platform",
    align: "center",
  },
  {
    text: "of the leading live event production company 1987 masters.",
    align: "start",
  },
  {
    text: "with no previous knowledge or experience required, we will",
    align: "start",
  },
  {
    text: "equip you to become an expert in the field",
    align: "start",
  },
];

const HeaderSubtext = () => {
  const ref = useRef(null);

  //animation :

  useEffect(() => {
    const textArray = [
      ref.current.childNodes[0].firstChild,
      ref.current.childNodes[1].firstChild,
      ref.current.childNodes[2].firstChild,
      ref.current.childNodes[3].firstChild,
    ];

    const animation = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
        },
      });
      tl.from(textArray, {
        y: "300%",
        duration: 1,
        delay: 0.1,
        stagger: 0.25,
      });
    };

    animation();
  }, []);
  return (
    <>
      <Container ref={ref}>
        {textData.map((text) => {
          return (
            <>
              <TextContainer align={text.align}>
                <p>{text.text}</p>
              </TextContainer>
            </>
          );
        })}
      </Container>
    </>
  );
};

export default HeaderSubtext;
