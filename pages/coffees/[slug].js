import { useContext, useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import CartContext from "@/context/CartContext";

export default function CoffeePage({ coffee }) {
  const [cartItem, setcartItem] = useState({});
  const [quantity, setQuantity] = useState(1);

  const { addCartItem } = useContext(CartContext);

  const clickHandler = () => {
    addCartItem(cartItem);
  };

  const changeHandler = (e) => {
    setQuantity(e.target.value);
  };

  useEffect(() => {
    setcartItem({
      name: coffee.name,
      quantity: quantity,
      orderNumber: Math.ceil(Math.random() * 1000000 - 1),
      date: Date.now(),
      price: coffee.price,
    });
  }, [quantity]);

  return (
    <Layout>
      <main className='mt-3 coffee'>
        <img
          src={coffee.image.formats.large.url}
          alt={coffee.name}
          width='300'
          height='450'
        />
        <h1>{coffee.name}</h1>
        <p>{coffee.description}</p>
        <input
          type='number'
          value={quantity}
          min='1'
          max='10'
          onChange={changeHandler}
        />
        <button onClick={clickHandler}>Add To Cart</button>
      </main>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/coffees?slug=${slug}`);
  const coffees = await res.json();

  return {
    props: {
      coffee: coffees[0],
    },
  };
}
