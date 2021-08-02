import { useContext, useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import CartContext from "@/context/CartContext";

export default function CoffeePage({ coffee }) {
  const [cartItem, setcartItem] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("medium");

  const checkHandler = (e) => {
    setSize(e.target.value);
  };

  const { addCartItem } = useContext(CartContext);

  const submitHandler = (e) => {
    e.preventDefault();
    addCartItem(cartItem);
  };

  const changeHandler = (e) => {
    setQuantity(e.target.value);
  };

  useEffect(() => {
    setcartItem({
      name: coffee.name,
      quantity: quantity,
      id: coffee.id,
      price: coffee.price,
      size: size,
    });
  }, [quantity, size]);

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
        <form onSubmit={submitHandler}>
          <input
            type='number'
            value={quantity}
            min='1'
            max='10'
            onChange={changeHandler}
          />
          <div className='form-group radio-group' onChange={checkHandler}>
            <input type='radio' name='size' value='small' />
            <label htmlFor='size'>Small</label>
            <br />
            <input type='radio' name='size' value='medium' />
            <label htmlFor='size'>Medium</label>
            <br />
            <input type='radio' name='size' value='large' />
            <label htmlFor='size'>Large</label>
            <br />
          </div>
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
