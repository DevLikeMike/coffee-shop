import { useContext, useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import CartContext from "@/context/CartContext";

export default function CoffeePage({ coffee }) {
  // Init states
  const [cartItem, setcartItem] = useState({});
  const [size, setSize] = useState("medium");

  // Init context
  const { addCartItem } = useContext(CartContext);

  // Update cartItem on size change
  useEffect(() => {
    setcartItem({
      name: coffee.name,
      quantity: 1,
      id: coffee.id,
      price: coffee.price,
      size: size,
      image: coffee.image,
    });
  }, [size]);

  // Handlers
  const sizeHandler = (e) => {
    setSize(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addCartItem(cartItem);
  };

  return (
    <Layout>
      <main className='mt-3 coffee'>
        <div className='image_container'>
          <img
            src={coffee.image.formats.large.url}
            alt={coffee.name}
            width='300'
            height='450'
          />
        </div>
        <div className='content'>
          <h1>{coffee.name}</h1>
          <p>{coffee.description}</p>
        </div>
        <form onSubmit={submitHandler}>
          <select name='size' id='size' onChange={sizeHandler}>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
          </select>
          <input type='submit' value='Add to cart' />
        </form>
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