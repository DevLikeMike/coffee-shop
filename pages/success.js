import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { API_URL } from "@/config/index";

import Layout from "@/components/Layout";

const useOrder = (session_id) => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrder = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_URL}/orders/confirm`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ checkout_session: `${session_id}` }),
        });

        const data = await res.json();
        setOrder(data);
        console.log(data);
      } catch (error) {
        setOrder(null);
      }
      setLoading(false);
    };
    fetchOrder();
  }, [session_id]);

  return { order, loading };
};

export default function SuccessPage() {
  // Init router
  const router = useRouter();
  // Get session id from query
  const { session_id } = router.query;

  // Destruct info from the strapi request via custom hook
  const { order, loading } = useOrder(session_id);

  return (
    <Layout>
      <main className='mt-3'>
        <h1>Payment Successful</h1>
        {loading && <h2>Loading</h2>}
        {order && <h2>Your order number is Order: {order.id}</h2>}
      </main>
    </Layout>
  );
}
