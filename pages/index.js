import CoffeeItem from "@/components/CoffeeItem";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function Home({ coffees }) {
  return (
    <Layout>
      <main className='mt-3'>
        <div className='hero'></div>
        <h1>Coffee Cabinet</h1>
        {coffees.length === 0 && <h2>No coffees here 😭</h2>}

        {coffees.map((cof) => (
          <CoffeeItem key={cof.id} coffee={cof} />
        ))}
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/coffees`);
  const coffees = await res.json();

  return {
    props: { coffees },
    revalidate: 1,
  };
}
