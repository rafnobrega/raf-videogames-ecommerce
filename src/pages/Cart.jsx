import React from "react";
import { Announcement } from "../components/Announcement";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  align-items: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Summary = styled.div`
  flex: 1;
`;

const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Your cart</Title>
        <Top>
          <TopButton>Continue shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Cart(2)</TopText>
            <TopText>Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              
            </Product>
          </Info>
          <Summary>Summary</Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
