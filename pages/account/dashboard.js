import { useContext } from "react";
import Layout from "@/components/Layout";
import AuthContext from "@/context/AuthContext";

export default function dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <Layout>
      <main className='mt-3'>
        <h1>
          My Profile
          {user !== null && <span> {user.username}</span>}
        </h1>
      </main>
    </Layout>
  );
}
