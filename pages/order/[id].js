import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import OrderContext from "@/context/OrderContext";
import Layout from "@/components/Layout";

export default function SingleOrder() {
  const router = useRouter();
  const orderId = router.query.id;
  const { order, getOrder } = useContext(OrderContext);

  useEffect(() => {
    if (orderId !== undefined) {
      getOrder(parseInt(orderId));
    }
  }, [orderId]);

  return (
    <Layout>
      <main className='mt-3'>
        <h1>working</h1>
        {orderId === undefined && <p>Loading</p>}
        {order && <p>{order.order.id}</p>}
      </main>
    </Layout>
  );
}
