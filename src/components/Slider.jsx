import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import { useState } from "react";
import styled from "styled-components";
// import { sliderItems } from "../data";
// import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: yellow;
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



const Slider = () => {

  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftRoundedIcon />
      </Arrow>

      <Arrow direction="right">
        <ArrowRightRoundedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
