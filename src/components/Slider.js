import React, { useState, useEffect } from "react";
import styled from "styled-components";
import smartWatch from "../asserts/smartWatch.png";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

// const SliderContainer = styled.div`
//   aspect-ratio: 16/8;
//   position: relative;
//   overflow: hidden;
//   // Background-color:#e2f3f5;
//   background-color: #e6f4f1;
//   @media screen and (max-width: 1200px) {
//     display: none;
//   }
// `;
// const Arrow = styled.div`
//   width: 40px;
//   height: 40px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 50%;
//   background-color: white;
//   opacity: 0.5;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: ${(props) => props.direction === "left" && "10px"};
//   right: ${(props) => props.direction === "right" && "10px"};
//   margin: auto;
//   cursor: pointer;
//   z-index: 2;
// `;

// const Wrapper = styled.div`
//   height: 100%;
//   display: flex;
//   transition: all 1.5s ease;
//   transform: translateX(${(props) => props.slideIndex * -100}vw);
// `;

// const Slide = styled.div`
//   border: 1px solid black;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   background-color: #${(props) => props.bg};
// `;

// const ImageContainer = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Image = styled.img`
//   width: 700px;
// `;

// const BannerInfoContainer = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;
// const BannerInfoWrapper = styled.div`
//   max-width: 500px;
// `;
// const Title = styled.div`
//   margin: 20px 0 20px 0;
//   font-size: 70px;
//   font-weight: 600;
// `;
// const Disc = styled.div`
//   margin: 40px 0 40px 0;
//   font-size: 20px;
//   letter-spacing: 3px;
// `;
// const Button = styled.button`
//   margin: 10px 0;
//   padding: 10px 20px;
//   font-size: 20px;
//   border: none;
//   background-color: #003044;
//   color: white;
//   cursor: pointer;
// `;

const Container = styled.div`
  width: 100%;
  display: flex;
  aspect-ratio: 16/8;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  background-color:${(props) => props.bgColor};
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InfoContainerWrapper = styled.div`
   max-width:600px
`;

const Title = styled.h1`
  margin: 20px 0 20px 0;
  font-size: 70px;
  font-weight: 600;
`;

const Disc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  background-color:#003044;
  cursor: pointer;
  color:white;
  border:none;

`;

function Slider({ bannerList }) {
  const [slideIndex, setCurrentSlideIndex] = useState(0);
  let slideInterval;

  const SlideClickHandler = (direction) => {
    if (direction === "left") {
      setCurrentSlideIndex(
        slideIndex > 0 ? slideIndex - 1 : bannerList.length - 1
      );
    } else {
      setCurrentSlideIndex(
        slideIndex < bannerList.length - 1 ? slideIndex + 1 : 0
      );
    }
  };

  const AutoSlide = () => {
    slideInterval = setInterval(() => {
      SlideClickHandler("right");
    }, 4000);
  };

  useEffect(() => {
    AutoSlide();
    return () => clearInterval(slideInterval);
  }, [slideIndex]);

  return (
    <Container>
      <Arrow direction="left" onClick={() => SlideClickHandler("left")}>
        <BiLeftArrow size={30} />{" "}
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {bannerList.map((item) => (
          <Slide bgColor={item.bgColor}>
            <ImgContainer>
              {/* <div style={{ border: "1px solid black" }}>its working</div> */}
              <Image src={item.img} alt="" />
            </ImgContainer>
            <InfoContainer>
              {/* <div style={{ border: "1px solid black" }}>its working</div> */}
              <InfoContainerWrapper>
                <Title>SUMMER SAL</Title>
                <Disc>
                  {" "}
                  DON'T COMPROMISE ON STYLE! GET 30% OFF FOR NEW ARRIVALS{" "}
                </Disc>
                <Link to="/products">
                  <Button>SHOW NOW</Button>
                </Link>
              </InfoContainerWrapper>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => SlideClickHandler("right")}>
        <BiRightArrow size={30} />
      </Arrow>
    </Container>
  );
}

export default Slider;
