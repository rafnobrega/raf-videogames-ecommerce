import React from "react";
import { Announcement } from "../components/Announcement";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../requestMethods";
import { useHistory } from "react-router-dom";

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
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

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const [stripeToken, setStripeToken] = useState(null);

  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        history.push("/success", { data: res.data });
      } catch {}
    };
    stripeToken && cart.total >= 1 && makeRequest();
  }, [stripeToken, cart.total, history]);

  return (
    <Container>
      <Navbar />
      <Announcement />
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
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product: </b>

                      {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID: </b>
                      {product._id}
                    </ProductId>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}

            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal:</SummaryItemText>
              <SummaryItemText>$ {cart.total}</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping:</SummaryItemText>
              <SummaryItemText>$ 20.00</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount:</SummaryItemText>
              <SummaryItemText>$ -20.00</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText type="total">Total:</SummaryItemText>
              <SummaryItemText>$ 00.00</SummaryItemText>
            </SummaryItem>
            <StripeCheckout
              name="Raf Games"
              image="https://raw.githubusercontent.com/rafnobrega/tweeter/master/public/images/profile-hex.png"
              billingAddress
              shippingAddress
              description={`Your total is: ${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            ></StripeCheckout>
            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
