import { useContext, useState, useEffect } from "react";
import CartContext from "@/context/CartContext";
import CartItem from "@/components/CartItem";
import Layout from "@/components/Layout";

export default function CartPage() {
  const [loading, setLoading] = useState(true);
  const { deleteCartItem, cartItems } = useContext(CartContext);

  useEffect(() => {
    if (cartItems === undefined) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [cartItems]);

  return (
    <Layout>
      <main className='mt-3'>
        {!loading ? (
          cartItems.map((item) => (
            <CartItem
              item={item}
              key={`${item.id} ${item.size}`}
              deleteCartItem={deleteCartItem}
            ></CartItem>
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </main>
    </Layout>
  );
}
