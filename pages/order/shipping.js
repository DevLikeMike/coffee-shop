import { useContext, useState, useEffect } from "react";
import Layout from "@/components/Layout";
import AuthContext from "@/context/AuthContext";
import { useRouter } from "next/router";

export default function ShippingPage({ history }) {
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");

  // Router declaration
  const router = useRouter();

  // Context Init and destruct
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      setAddress(user.shippingAddress.address);
      setCity(user.shippingAddress.city);
      setCountry(user.shippingAddress.country);
      setPostalCode(user.shippingAddress.postalCode);
    } else {
      //   router.push("/account/login");
    }
  }, [user]);

  return (
    <Layout>
      <main className='mt-3 shipping'>
        <h1 className='text-center'>Shipping Info</h1>
        <form>
          <label htmlFor='address'>Address Line 1:</label>
          <input
            type='text'
            name='address'
            placeholder='Please enter your address'
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
          <label htmlFor='city'>City</label>
          <input
            type='text'
            name='city'
            placeholder='Please enter your city'
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
          <label htmlFor='postalCode'>Postal Code</label>
          <input
            type='text'
            name='postalCode'
            placeholder='Please enter your postal code.'
            onChange={(e) => setPostalCode(e.target.value)}
            value={postalCode}
          />
          <label htmlFor='country'>Country</label>
          <input
            type='text'
            name='country'
            placeholder='Please enter your country'
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          />
          <input type='submit' value='Continue' />
        </form>
      </main>
    </Layout>
  );
}
