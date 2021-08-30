import { useContext, useEffect, useState } from "react";
import { API_URL } from "@/config/index";
import Layout from "@/components/Layout";
import AuthContext from "@/context/AuthContext";

export default function dashboard() {
  const { user, orders, getUserOrders } = useContext(AuthContext);

  useEffect(() => {
    getUserOrders(user);
  }, []);

  console.log(orders);

  return (
    <Layout>
      <main className='mt-3'>
        {user ? (
          <h1 className='text-center'>
            Hello, <span> {user.username}</span>
          </h1>
        ) : (
          <h1>Loading</h1>
        )}
        <div>
          <h2 className='text-center m-1'>Previous Orders</h2>
          {orders &&
            orders.orders.map((order) => (
              <div key={order.id} className='flex jc-sb orderItem'>
                <p className='p1'>Order #{order.id}</p>
                <p className='p1'>Total ${order.price}</p>
                <p className='p1'>
                  Purchased on - {order.published_at.slice(0, 10)}
                </p>
              </div>
            ))}
        </div>
      </main>
    </Layout>
  );
}
