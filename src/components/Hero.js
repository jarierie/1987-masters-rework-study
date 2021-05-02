import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import hero from "../assets/hero.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  margin-top: 100px;
`;

const HeroTextContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 150px;
  font-size: 120px;
  text-transform: uppercase;
  color: transparent;
  font-weight: bold;
  z-index: 3;
  font-weight: 400;
  font-family: Georgia, "Times New Roman", Times, serif;
  overflow: hidden;
  -webkit-text-stroke-color: white;
  text-align: ${(props) => props.align};

  p {
    margin: 0;
    height: 100%;
    color: white;
    /* -webkit-text-stroke: 2px white; */
  }
`;

const HeroImageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;

  img {
    margin-top: -100px;
  }
`;

const Hero = () => {
  const textContainerRef = useRef(null);

  //   const textRevealAnimation = (target) => {
  //     const tl = gsap.timeline();
  //     tl.from(target, {
  //       y: "120%",
  //       duration: 1,
  //       delay: 1.2,
  //     });
  //   };

  //   const masterTextRevealTimeline = () => {
  //     textRevealAnimation(textContainerRef.current.childNodes[0].firstChild);
  //     textRevealAnimation(textContainerRef.current.childNodes[1].firstChild);
  //     textRevealAnimation(textContainerRef.current.childNodes[2].firstChild);
  //   };

  //   useEffect(() => {
  //     masterTextRevealTimeline();
  //   });

  //animation scroll:

  const animationScrollRight = (target) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textContainerRef.current,
        scrub: 1.5,
        start: "top 10%",
      },
    });

    tl.fromTo(
      target,
      {
        x: 0,
      },
      {
        x: 500,
        duration: 3,
      }
    );
  };

  const animationScrollLeft = (target) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textContainerRef.current,
        scrub: 1.5,
        start: "top 10%",
      },
    });

    tl.fromTo(
      target,
      {
        x: 0,
      },
      {
        x: -500,
        duration: 3,
      }
    );
  };

  const masterAnimationScroll = () => {
    animationScrollRight(textContainerRef.current.childNodes[0]);
    animationScrollLeft(textContainerRef.current.childNodes[1]);
    animationScrollRight(textContainerRef.current.childNodes[2]);
  };

  useEffect(() => {
    const textArray = [
      textContainerRef.current.childNodes[0].firstChild,
      textContainerRef.current.childNodes[1].firstChild,
      textContainerRef.current.childNodes[2].firstChild,
    ];
    const textAnimationReveal = () => {
      const tl = gsap.timeline();
      tl.from(textArray, { y: "100%", stagger: 0.3, delay: 2, duration: 1 });
    };

    textAnimationReveal();
    masterAnimationScroll();
  }, []);

  return (
    <>
      <HeroContainer>
        <HeroTextContainer ref={textContainerRef}>
          <TextContainer align='start'>
            <p>This is a</p>
          </TextContainer>
          <TextContainer align='center'>
            <p>1987 academy</p>
          </TextContainer>
          <TextContainer align='start'>
            <p>rework practice</p>
          </TextContainer>
        </HeroTextContainer>
        <HeroImageContainer>
          <img src={hero} alt=''></img>
        </HeroImageContainer>
      </HeroContainer>{" "}
    </>
  );
};

export default Hero;
