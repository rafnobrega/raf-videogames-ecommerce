import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
const axios = require("axios").default;

const KEY = process.env.STRIPE_KEY;

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5003/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        history.push("/success");
      } catch {
        console.log(err);
      }
    };
    stripeToken && makeRequest;
  }, [stripeToken, history]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {stripeToken ? (
        <span>Processing. Please wait and don't refresh this page.</span>
      ) : (
        <StripeCheckout
          name="Raf Games"
          image="https://raw.githubusercontent.com/rafnobrega/tweeter/master/public/images/profile-hex.png"
          billingAddress
          shippingAddress
          description="Your total is: "
          amount={2000}
          token={onToken}
          stripeKey={KEY}
        >
          <button
            style={{
              border: "none",
              width: 120,
              borderRadius: 5,
              padding: "20px",
              backgroundColor: "black",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Pay Now
          </button>
        </StripeCheckout>
      )}
    </div>
  );
};

export default Pay;
