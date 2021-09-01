import Stripe from "stripe";
import styled from "styled-components";
import { NEXT_URL } from "@/config/index";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PK, API_URL } from "@/config/index";
import cookie from "cookie";

const PayButton = styled.button`
  margin: 2rem auto 0.25rem;
  width: 100%;
  max-width: 30rem;
  padding: 1rem;
  color: #ffffff;
  background-color: black;
`;

const payHandler = async (item) => {
  const stripe = await loadStripe(STRIPE_PK);

  // Next request for get token
  const res = await fetch(`${NEXT_URL}/api/getToken`, {
    method: "GET",
  });

  const { token } = await res.json();

  // Strapi request for Order - create
  const strapiRes = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify({ product: { id: item } }),
  });

  const session = await strapiRes.json();

  const result = await stripe.redirectToCheckout({
    sessionId: session.id,
  });
};

export default function PayBTN({ item }) {
  return <PayButton onClick={() => payHandler(item)} value='Buy' />;
}
