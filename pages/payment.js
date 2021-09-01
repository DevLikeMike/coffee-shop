// React and Next imports
import { useContext } from "react";

import Layout from "@/components/Layout";
import TrackerContainer from "@/components/TrackerContainer";
import CheckoutTracker from "@/components/CheckoutTracker";
import AuthContext from "@/context/AuthContext";
import CartContext from "@/context/CartContext";
import PayBTN from "@/components/PayBTN";

export default function Payment() {
  const { user } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);

  const { address, postalCode, city, country } = user.shippingAddress;

  console.log(user);

  return (
    <Layout>
      <main className='mt-3'>
        <h1>Payment Screen</h1>
        <TrackerContainer>
          <CheckoutTracker href='/shipping'>Shipping</CheckoutTracker>
          <CheckoutTracker href='/payment'>Payment</CheckoutTracker>
          <CheckoutTracker href='/confirm'>Confirm Order</CheckoutTracker>
        </TrackerContainer>
        <div className='info-container flex jc-sb'>
          <div className='address'>
            <p>{address}</p>
            <p>{city}</p>
            <p>{postalCode}</p>
            <p>{country}</p>
          </div>
          <div className='cartSide'>
            {cartItems.map((item) => (
              <div key={item.id}>
                <p>{item.name}</p>
                <PayBTN item={item.id} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
